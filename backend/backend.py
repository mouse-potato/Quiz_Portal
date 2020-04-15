import sys
sys.path.append('/usr/local/lib/python2.7/dist-packages')
from flask import Flask, redirect, url_for,jsonify,request,flash,abort
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os
import random
from datetime import datetime
from nltk.corpus import wordnet as wn
from textblob import TextBlob

import re
import wikipedia

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'files'
ALLOWED_EXTENSIONS = set(['pdf'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config["MONGO_URI"] = "mongodb://localhost:27017/topics"
#app.config["MONGO_URI"] = "mongodb://localhost:5000/quizPortal"
mongo = PyMongo(app)

@app.route('/get_topics',methods=['GET'])
def get_topics():
    x=mongo.db.topics.find_one({'_id':1})
    #x=mongo.db.topics.find_one({})
    x['_id']=str(x['_id'])
    return jsonify({'topics':x})
@app.route('/get_questions', methods=['POST'])
def get_questions():
    data=request.get_json()
    print(data)
    content_list = data['topics']
    x=createJSON(content_list)
    if (x):
        return jsonify(x)
    else:
        return jsonify({'status':'error'})              

class Article:
    """Retrieves and analyzes wikipedia articles"""

    def __init__(self, title):
        self.page = wikipedia.page(title)
        self.summary = TextBlob(self.page.summary)

    def generate_trivia_sentences(self):
        sentences = self.summary.sentences

        # Remove the first sentence - it's never a good one
        del sentences[0]

        trivia_sentences = []
        for sentence in sentences:
            trivia = self.evaluate_sentence(sentence)
            if trivia:
                trivia_sentences.append(trivia)

        return trivia_sentences

    def get_similar_words(self, word):
        # In the absence of a better method, take the first synset
        synsets = wn.synsets(word, pos='n')

        # If there aren't any synsets, return an empty list
        if len(synsets) == 0:
            return []
        else:
            synset = synsets[0]

        # Get the hypernym for this synset (again, take the first)
        hypernym = synset.hypernyms()[0]

        # Get some hyponyms from this hypernym
        hyponyms = hypernym.hyponyms()

        # Take the name of the first lemma for the first 8 hyponyms
        similar_words = []
        for hyponym in hyponyms:
            similar_word = hyponym.lemmas()[0].name().replace('_', ' ')
            
            if similar_word != word:
                similar_words.append(similar_word)

            if len(similar_words) == 8:
                break

        return similar_words

    def evaluate_sentence(self, sentence):
        if sentence.tags[0][1] == 'RB' or len(sentence.words) < 6:
            # This sentence starts with an adverb or is less than five words long
            # and probably won't be a good fit
            return None

        tag_map = {word.lower(): tag for word, tag in sentence.tags}

        replace_nouns = []
        for word, tag in sentence.tags:
            # For now, only blank out non-proper nouns that don't appear in the article title
            if tag == 'NN' and word not in self.page.title:
                # Is it in a noun phrase? If so, blank out the last two words in that phrase
                for phrase in sentence.noun_phrases:
                    if phrase[0] == '\'':
                        # If it starts with an apostrophe, ignore it
                        # (this is a weird error that should probably
                        # be handled elsewhere)
                        break

                    if word in phrase:
                        # Blank out the last two words in this phrase
                        [replace_nouns.append(phrase_word) for phrase_word in phrase.split()[-2:]]
                        break

                # If we couldn't find the word in any phrases,
                # replace it on its own
                if len(replace_nouns) == 0:
                    replace_nouns.append(word)
                break
        
        if len(replace_nouns) == 0:
            # Return none if we found no words to replace
            return None

        trivia = {
            'title': self.page.title,
            'url': self.page.url,
            'answer': ' '.join(replace_nouns)
        }

        if len(replace_nouns) == 1:
            # If we're only replacing one word, use WordNet to find similar words
            trivia['similar_words'] = self.get_similar_words(replace_nouns[0])
        else:
            # If we're replacing a phrase, don't bother - it's too unlikely to make sense
            trivia['similar_words'] = []

        # Blank out our replace words (only the first occurrence of the word in the sentence)
        replace_phrase = ' '.join(replace_nouns)
        blanks_phrase = ('__________ ' * len(replace_nouns)).strip()

        expression = re.compile(re.escape(replace_phrase), re.IGNORECASE)
        sentence = expression.sub(blanks_phrase, str(sentence), count=1)

        trivia['question'] = sentence
        return trivia

print("HELLO")

def createJSON(dummy_list):

    group_of_items = dummy_list               # a sequence or set will work here.
    num_to_select = 4                           # set the number to select here.
    list_of_random_items = random.sample(group_of_items, num_to_select)

    question = []
    for i in list_of_random_items:
        article = Article(title=i)
        questions = article.generate_trivia_sentences()
        group_of_items = questions               # a sequence or set will work here.
        num_to_select = 2                           # set the number to select
        list_of_questions = random.sample(questions, num_to_select)
        for j in list_of_questions:
            if len(j['similar_words'][0:3]) >= 2:
                fib =  0
            else:
                fib = 1

            json = {'title':j['title'],'question': j['question'], 'answer': j['answer'], 'options': j['similar_words'][0:3], 'fib': fib}
            question.append(json)

    json = {'list':question}
    return json



if __name__ == '__main__':
    app.run(debug = True)
