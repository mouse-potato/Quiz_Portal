webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GraphsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraphsPage = /** @class */ (function () {
    function GraphsPage(storage, navCtrl, http, navParams, loadingCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.scores = navParams.get('scores');
    }
    GraphsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.topic = [];
        this.percent = [];
        this.actual = [];
        this.possible = [];
        this.name = '';
        for (var i = 0; i < this.scores.length; i++) {
            //this.scores[i].possible = 8
            this.topic.push(this.scores[i].name);
            this.percent.push((this.scores[i].score / this.scores[i].possible) * 100);
            this.actual.push(this.scores[i].score);
            this.possible.push(this.scores[i].possible);
        }
        this.storage.get('username').then(function (value) {
            _this.name = value;
            console.log(_this.topic);
            console.log(_this.percent);
            _this.barChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](_this.barCanvas.nativeElement, {
                type: 'bar',
                data: {
                    labels: _this.topic,
                    datasets: [{
                            label: '% score',
                            data: _this.percent,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(99, 66, 33, 0.2)',
                                'rgba(39, 69, 69, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(99, 66, 33, 1)',
                                'rgba(39, 69, 69, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    }
                }
            });
            console.log('ionViewDidLoad GraphsPage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], GraphsPage.prototype, "barCanvas", void 0);
    GraphsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graphs',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/graphs/graphs.html"*/'<!--\n  Generated template for the GraphsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Graphs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class = "hello">\n  <h1 > Hello {{ name }}!! Here are your statisics </h1>\n</div>\n\n  <ion-row  class = "empty">\n \n    <ion-col col-8 class = "empty">\n            <div class = "canvas">\n            <canvas  #barCanvas></canvas>\n          </div>\n    </ion-col>\n\n    <ion-col col-1 class = "empty">\n\n    </ion-col>\n\n    <ion-col col-3 class = "empty">\n\n        <ion-grid class = "border">\n            <ion-row class = "head-row">\n              <ion-col class = "head-col">\n                Topic\n              </ion-col>\n              <ion-col class = "head-col">\n                Your Score \n              </ion-col>\n              <ion-col class = "head-col">\n                Total Possible Score\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor = "let item of topic; let i = index" class = "row">\n              <ion-col class = "col">\n                {{ item }}\n              </ion-col>\n              <ion-col class = "col">\n                {{ actual[i] }}\n              </ion-col>\n              <ion-col class = "col">\n                {{ possible[i] }}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n    </ion-col>\n\n </ion-row>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/graphs/graphs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], GraphsPage);
    return GraphsPage;
}());

//# sourceMappingURL=graphs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    HomePage.prototype.navigate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */], { loggedin: 0 });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.storage.set('Cartoons', [0, 0]);
        this.storage.set('Chemistry', [0, 0]);
        //this.storage.set('Comic', [0,0]);
        this.storage.set('Human Body', [0, 0]);
        //this.storage.set('Indian Cities', [0,0]);
        this.storage.set('Monuments', [0, 0]);
        // this.storage.set('Physics', [0,0]);
        //this.storage.set('Solar System', [0,0]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background" scroll="false">\n  <div class="fixed-content">\n    <!--div class="logoHeader">\n          <img alt="logo" height="80" style="position:fixed; left:390px; top:255px;" src="../assets/imgs/logo1.jpg">\n\n      </div-->\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 570 570">\n        <g>\n          <g id="a" fill="none" stroke-linejoin="round" stroke="currentcolor" stroke-width="4" stroke-linecap="round">\n            <path stroke-width="10" style="stroke-dasharray:none;" d="m 474,194.1 c 1.2,-10.6 -0.5,-21.5 -4.9,-31.2 -6.4,-14.2 -18.5,-25.7 -33,-31.4 -1.9,-6.7 -5.7,-12.8 -10.9,-17.5 -7.3,-6.6 -17.2,-10.1 -27,-9.6 -3.5,-6.16 -8.6,-11.38 -14.7,-14.93 -7.9,-4.57 -17.3,-6.34 -26.3,-4.88 -9,1.45 -17.4,6.11 -23.4,12.96 -5.1,5.85 -8.3,13.05 -10,20.65 -1.7,7.5 -1.7,15.3 -1.7,23 l 1.3,224.6 c 0.1,17 2.3,33.9 3.7,50.8 1.3,15.9 0.7,32 -0.8,47.9 -0.8,8.7 -2,17.5 -2,26.3 0,8.7 1.1,17.7 4.7,25.7 5.2,11.9 15.5,21.1 27,27 22,11.3 49.4,11.3 71.5,0.2 19.8,-10 35.1,-28.5 41.1,-49.9 8.9,-3.1 16.9,-8.7 22.9,-15.9 5.9,-7.3 9.8,-16.3 11.1,-25.6 1,-7.5 0.3,-15.3 -2,-22.5 2.7,-3.9 5,-8.1 6.7,-12.5 5.3,-13.6 5,-29.3 -0.6,-42.8 9.4,-7.4 16.5,-17.7 19.9,-29.2 3.3,-11.5 3,-24 -0.9,-35.3 -4.4,-12.7 -13.4,-23.7 -25,-30.6 6.2,-17.3 5.6,-37 -1.6,-53.9 C 493.8,213 485,202 474,194.1 Z" />\n\n\n            <path opacity=".9" class="circuits" d="M429.6 253c.7-9 6.5-15.4 14.2-18 3.6-1 7.5-1.2 11.2-.8 7.6 1 15 4.5 20 10-2.8 2.5-5 5.6-6.3 9.2-3.3 11 2.4 22.2 12.7 25.7-8.7.4-14.7 8-13.4 15.7.7 4 3.2 7.2 4 11 1.4 13.6-12.6 20.4-23.5 16.7-9.4-3.6-16-13-17.5-21.7-8 12.6-25.4 21.7-36.8 17-8.8-4-9.8-13-12-20.8-3.7-14.3-19.4-9.7-25.4-3.5m5.6 84.3c-17-2.7-10.2-24 5-22m4-82.5c-4.2-11.2-21-9.2-23.2-.6-3 11.3 4.8 15 8.6 20.8 1.4 2 2.6 4.2 2.7 6.7-.6 9-11 11.5-15.6 17-6.5 8.7-.8 19.6 9.2 20.5m49.6-170.5c.5 7.6-5.3 14.5-12.5 15-7.8 0-13.6-6.4-13.4-13.7m8.3 89.5c2.2-10.5 11-18.5 21-19.6 10.4-.6 19.7 5.6 23.3 14.5m47.3 77.5c-10 1.8-14 11.7-11.6 20.3 3.4 10 13.3 17.3 22 20-3.5-1.6-7.7-1.5-11 .3-3.5 2-6 5.5-6.6 9-1.7 9.2 17 17 7.2 26.8-8.6 8.6-25-.5-28-11.4-.7-3-1-6.3-1-9.5.4-8.3 0-19.2-9.3-21-7.4-1-13.4 4.2-15.2 10.7-1.3 4.8-.3 10-2 14.6-3.2 9-13 13-21 9.6 3 5.3 3.5 12.2 1 18-2.5 6-8.3 10.6-14.8 11.8 13.2-1.5 22.3 13.5 19 23-4.2 11.7-18.6 19-16.4 32.4 4.2 15.4 22.4 15.5 25.3 3.5.8-6.4-3-12.3-3-18 1-10.4 12-15.3 20.6-11.3 7.7 4 11.2 13.7 9 21-1.4 5-5 9.4-10 11.5 20.3 30.7-25.6 43.3-35.5 23-16.4 17.6-44.7-3.3-33.5-24m125.2-148.4c12-7.2 14-23 4.6-32.3-5.7-5-13.4-6.6-20-4.5M362.7 183c-10.3-7.3-12-20.3-3-28-9.8-6-12.4-18.6-5.6-26.6 9-10 20.8-8.8 27 1.4 2 3.2 2.8 7 2.2 10.7M375 484.2c-3 3.5-7.7 5.5-12.3 5.3-10-1-16.6-10.3-14.6-19.3 3.5-11.7 14.4-11.5 23.5-13.8 5-1.5 10-5 9.3-10.6-1.4-6.6-8.5-8-14-9.2-5.4-1-13.4-4-12-10.6 2-9.8 21.6-4.5 22-15.8.2-13-15.3-6.7-22.5-10.6-13-7.8-5.6-24.4 8-21.8 9.8 2.4 17.4 6 26.6 7 6.8 0 13-3.7 15.6-9.5 4-10.7-3.4-17.2-10.2-21.2-7.8-4.5-16 1.6-27 1.7-6.6 0-16-9-14.2-18 2.7-14.4 16.8-17 24-6.6m4-201.2c10.3-3.7 23-3 30 4.3 4.4 4.6 5.3 13.8 1.8 18.6-5 6.8-12.8 7.3-10.2 14.6 2.3 3.8 7 3.5 10.4 1.4 10-6.8 15.6-14.2 26.4-6.8 11.5 8 9.2 25.3 0 33m-18 233c2.8-11 13.7-15.7 22.5-10.7 5.3 3.5 7.8 9.4 7 15 6-2.8 13.8-3.3 19 .5 9 6.4 15 19.7 6 27-6.3 5-13 2.3-17-3.7-4-6.4-10.6-10.5-17.6-7-4.5 2.7-6.6 7.5-6 12.2m4-266.3c5.2 1.5 9.8 4.5 13.2 8.6 3.4 4 5.6 9.2 6 14.5.7 5.7-.7 11.5-3.6 16.4m-109.6-1.7c-1.3-3-1.6-6.2-1-9.3 2-7.7 8.7-10.7 15-13 3.7-1.2 7.5-2.6 10-5.4 5.2-5.8 4.4-14.4-1-19-6.2-4.7-14.7-3.4-19 2.2m97 78.5c14 1.2 12.2 22.2-2 19-6-1.5-8.7-8.2-13.6-10.7-10.6-5.5-25 6.7-27.4 15 1.5-8.8-1-18.7-8.2-25-6-5.4-13.6-8.8-21.5-9.6m-14.2-45c11 7.5 14.2 21.5 6.7 31.2-6.4 8-17.2 11-25.6 6m68.7-47.4c-3.4-10.5 7.2-19.6 16.6-16.3M390 232c-3.2-3.5-4.8-8.3-4.5-13 1-10.6 10-17.2 19.3-17.7 11.8.2 22.7 8.2 27.6 17.6 3 5.7 4.3 12.5 3.6 19m-41.8 116c.3-4.7 3-11.3 7-14.2 9-6 18.3-2.5 25 3.8 11 10 27.3 14.8 39 7.2" />\n          </g>\n        </g>\n        <g>\n          <use transform="matrix(-1 0 0 1 640 0)" xlink:href="#a" />\n        </g>\n      </svg>\n      <div padding> </div>\n    <div class="so center">\n      <div class="inner">\n        <div class="name">\n          Quiz<span class="b">\n            <p class="p">An intelligent quiz platform</p>Me\n          </span>\n        </div>\n\n        <!--div class="stack-box">\n              <div class="stack">\n                <div class="item">\n                  <div class="inner-item"></div>\n                </div>\n                <div class="item">\n                  <div class="inner-item"></div>\n                </div>\n                <div class="item">\n                  <div class="inner-item"></div>\n                </div>\n                <div class="item">\n                  <div class="inner-item"></div>\n                </div>\n                <div class="item">\n                  <div class="inner-item"></div>\n                </div>\n              </div>\n\n              <div class="box">\n\n                <div class="bottom"></div>\n                <div class="left"></div>\n                <div class="right"></div>\n                <div class="top"></div>\n              </div>\n            </div-->\n\n      </div>\n    </div>\n    <div padding> </div>\n    <div padding> </div>\n    <div padding> </div>\n    <div padding> </div>\n    <div padding> </div>\n    <div padding>\n      <button ion-button round outline class="signup" style="width:25%;position:relative;left:40%" block (click)="navigate()">Start Quiz</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphs_graphs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, storage, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.items1 = [];
        this.items2 = [];
        this.subjects = navParams.get('item');
    }
    QuizPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.subjects);
        console.log('ionViewDidLoad QuizPage');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present(); //presents the loading instaance
        var postParams = { 'topics': this.subjects.topics };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = "http://localhost:5000";
        var path = url.concat("/get_questions");
        console.log(postParams);
        this.http.post(path, postParams, { headers: headers })
            .subscribe(function (res) {
            var data = res.json()['list'];
            for (var i in data) {
                var optionsArray = data[i].options;
                optionsArray.push(data[i].answer);
                console.log(optionsArray);
                console.log(data[i].answer);
                shuffleArray(optionsArray);
                _this.items1.push({
                    question: data[i].question,
                    answer: data[i].answer,
                    title: data[i].title,
                    fib: data[i].fib,
                    options: optionsArray,
                    response: "",
                    correct: "notanswered"
                });
            }
            console.log(_this.items1[0]);
            loading.dismiss();
            _this.title1 = data[0].title;
            _this.title2 = data[2].title;
            _this.title3 = data[4].title;
            _this.title4 = data[6].title;
            // let ques=data['questions'];
            //traverse the questions array
        });
    };
    QuizPage.prototype.checkAnswer = function (item, given_answer) {
        if (given_answer.toLowerCase() === item.answer.toLowerCase()) {
            item.correct = "1";
        }
        else {
            item.correct = "0";
        }
    };
    QuizPage.prototype.continue = function () {
        var _this = this;
        var x = 0;
        for (var i = 0; i < 8; i++) {
            if (this.items1[i].correct == "1") {
                console.log("CORRECT");
                x++;
            }
        }
        console.log(x);
        var current = [0, 0];
        console.log(this.subjects.name);
        this.storage.get(this.subjects.name).then(function (value) {
            /*console.log("OLD")
            console.log(value[0])
            console.log(value[1])*/
            current[0] = value[0] + x;
            current[1] = value[1] + 8;
            /*console.log("NEW")
            console.log(current[0])
            console.log(current[1])*/
            _this.storage.set(_this.subjects.name, [current[0], current[1]]);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__["a" /* HelloIonicPage */], { loggedin: 1 });
    };
    QuizPage.prototype.graph = function () {
        var _this = this;
        var x = 0;
        for (var i = 0; i < 8; i++) {
            if (this.items1[i].correct == "1") {
                console.log("CORRECT");
                x++;
            }
        }
        console.log(x);
        var current = [0, 0];
        console.log(this.subjects.name);
        this.storage.get(this.subjects.name).then(function (value) {
            current[0] = value[0] + x;
            current[1] = value[1] + 8;
            _this.storage.set(_this.subjects.name, [current[0], current[1]]);
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = "http://localhost:5000";
        var path = url.concat("/get_topics");
        //console.log(postParams);
        this.name = [];
        this.topics = [];
        this.score = [];
        this.possible = [];
        this.http.get(path, { headers: headers })
            .subscribe(function (res) {
            var data = res.json()['topics'];
            //console.log(data)
            for (var i in data) {
                console.log(i);
                if (i != '_id') {
                    _this.items2.push({
                        name: i,
                        topics: data[i],
                        score: 0,
                        possible: 0
                    });
                }
            }
            var _loop_1 = function (i) {
                _this.storage.get(_this.items2[i].name).then(function (value) {
                    console.log(_this.items2[i].name, value[0], value[1]);
                    _this.setValue(i, value[0], value[1]);
                });
            };
            for (var i = 0; i < _this.items2.length; i++) {
                _loop_1(i);
            }
        });
    };
    QuizPage.prototype.setValue = function (i, val1, val2) {
        console.log("HI BRO");
        this.items2[i].score = val1;
        this.items2[i].possible = val2;
        if (i == 3) {
            console.log(this.items2);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__graphs_graphs__["a" /* GraphsPage */], { scores: this.items2 });
        }
    };
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiz',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/quiz/quiz.html"*/'<!--\n  Generated template for the QuizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quiz Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 class = "grid">\n          <h1>{{ title1 }} </h1>\n        <ion-card *ngFor="let item of items1.slice(0,5); let i = index">\n\n            <ion-card-content class="card-content">\n                {{ item.question }}\n            </ion-card-content>\n\n            <div *ngIf="item.correct == \'notanswered\'">\n            <ion-card-content>\n                <div *ngIf="item.fib">\n                    <ion-input  type="text" placeholder="Enter your answer here" name="answer" [(ngModel)]="item.response" required></ion-input>\n                    <button no-margin ion-button full text-uppercase (click)=\'checkAnswer(item,item.response)\'>ANSWER</button>\n                </div>\n    \n                <div *ngIf="item.fib == 0">\n                    <ion-list radio-group required >\n                        <ion-item *ngFor = \'let option of item.options\'>\n                            <ion-label>{{ option }}</ion-label>\n                            <ion-radio value=" {{ option }} " (ionSelect) = "checkAnswer(item,option)"></ion-radio>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                \n              </ion-card-content>\n            </div>\n            <div *ngIf="item.correct === \'1\'" >\n                <ion-card-content class = "answerC">\n                    YESS, you\'re right !! The correct answer is {{ item.answer }}\n                </ion-card-content>\n            </div>\n\n            <div *ngIf="item.correct === \'0\'" >\n                <ion-card-content class = "answerW" >\n                    OOPS, you got it wrong, the correct answer is {{ item.answer }}\n                </ion-card-content>\n            </div>\n\n\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6 class = "grid">\n          <h1>{{ title2 }} </h1>\n          <ion-card *ngFor="let item of items1.slice(5,10); let i = index">\n  \n              <ion-card-content class="card-content">\n                  {{ item.question }}\n              </ion-card-content>\n  \n              <div *ngIf="item.correct == \'notanswered\'">\n              <ion-card-content>\n                  <div *ngIf="item.fib">\n                      <ion-input  type="text" placeholder="Enter your answer here" name="answer" [(ngModel)]="item.response" required></ion-input>\n                      <button no-margin ion-button full text-uppercase (click)=\'checkAnswer(item,item.response)\'>ANSWER</button>\n                  </div>\n      \n                  <div *ngIf="item.fib == 0">\n                      <ion-list radio-group required >\n                          <ion-item *ngFor = \'let option of item.options\'>\n                              <ion-label>{{ option }}</ion-label>\n                              <ion-radio value=" {{ option }} " (ionSelect) = "checkAnswer(item,option)"></ion-radio>\n                          </ion-item>\n                      </ion-list>\n                  </div>\n                  \n                </ion-card-content>\n              </div>\n  \n              <div *ngIf="item.correct === \'1\'">\n                  <ion-card-content class = "answerC">\n                      YESS, you\'re right !! The correct answer is {{ item.answer }}\n                  </ion-card-content>\n              </div>\n  \n              <div *ngIf="item.correct === \'0\'"  >\n                  <ion-card-content class = "answerW" >\n                      OOPS, you got it wrong, the correct answer is {{ item.answer }} \n                  </ion-card-content>\n              </div>\n  \n\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-6 class = "grid">\n            <h1>{{ title3 }} </h1>\n          <ion-card *ngFor="let item of items1.slice(10,15); let i = index">\n  \n              <ion-card-content class="card-content">\n                  {{ item.question }}\n              </ion-card-content>\n  \n              <div *ngIf="item.correct == \'notanswered\'">\n              <ion-card-content>\n                  <div *ngIf="item.fib">\n                      <ion-input  type="text" placeholder="Enter your answer here" name="answer" [(ngModel)]="item.response" required></ion-input>\n                      <button no-margin ion-button full text-uppercase (click)=\'checkAnswer(item,item.response)\'>ANSWER</button>\n                  </div>\n      \n                  <div *ngIf="item.fib == 0">\n                      <ion-list radio-group required >\n                          <ion-item *ngFor = \'let option of item.options\'>\n                              <ion-label>{{ option }}</ion-label>\n                              <ion-radio value=" {{ option }} " (ionSelect) = "checkAnswer(item,option)"></ion-radio>\n                          </ion-item>\n                      </ion-list>\n                  </div>\n                  \n                </ion-card-content>\n              </div>\n              <div *ngIf="item.correct === \'1\'" >\n                  <ion-card-content class = "answerC">\n                      YESS, you\'re right !! The correct answer is {{ item.answer }} \n                  </ion-card-content>\n              </div>\n  \n              <div *ngIf="item.correct === \'0\'" >\n                  <ion-card-content class = "answerW" >\n                      OOPS, you got it wrong, the correct answer is {{ item.answer }} \n                  </ion-card-content>\n              </div>\n  \n  \n\n          </ion-card>\n        </ion-col>\n  \n        <ion-col col-6 class = "grid">\n            <h1>{{ title4 }} </h1>\n            <ion-card *ngFor="let item of items1.slice(15,20); let i = index">\n    \n                <ion-card-content class="card-content">\n                {{ item.question }}\n            </ion-card-content>\n\n            <div *ngIf="item.correct == \'notanswered\'">\n            <ion-card-content>\n                <div *ngIf="item.fib">\n                    <ion-input  type="text" placeholder="Enter your answer here" name="answer" [(ngModel)]="item.response" required></ion-input>\n                    <button no-margin ion-button full text-uppercase (click)=\'checkAnswer(item,item.response)\'>ANSWER</button>\n                </div>\n    \n                <div *ngIf="item.fib == 0">\n                    <ion-list radio-group required >\n                        <ion-item *ngFor = \'let option of item.options\'>\n                            <ion-label>{{ option }}</ion-label>\n                            <ion-radio value=" {{ option }} " (ionSelect) = "checkAnswer(item,option)"></ion-radio>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                \n              </ion-card-content>\n            </div>\n\n            <div *ngIf="item.correct === \'1\'" >\n                <ion-card-content class = "answerC">\n                    YESS, you\'re right !! The correct answer is {{ item.answer }}\n                </ion-card-content>\n            </div>\n\n            <div *ngIf="item.correct === \'0\'" >\n                <ion-card-content class = "answerW" >\n                    OOPS, you got it wrong, the correct answer is {{ item.answer }}\n                </ion-card-content>\n            </div>\n\n\n\n            </ion-card>\n          </ion-col>\n      </ion-row>\n\n  </ion-grid>\n\n  <button ion-button full text-uppercase (click)=\'continue()\'>Try Again (pick another topic)</button>\n  <button ion-button full text-uppercase (click)=\'graph()\'>View Results</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/quiz/quiz.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], QuizPage);
    return QuizPage;
    var _a, _b, _c, _d, _e;
}());

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/graphs/graphs.module": [
		415,
		2
	],
	"../pages/home/home.module": [
		416,
		1
	],
	"../pages/quiz/quiz.module": [
		417,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_flash_card_flash_card__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_quiz_quiz__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_graphs_graphs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_graphs_graphs__["a" /* GraphsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/graphs/graphs.module#GraphsPageModule', name: 'GraphsPage', segment: 'graphs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_graphs_graphs__["a" /* GraphsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 161,
	"./af.js": 161,
	"./ar": 162,
	"./ar-dz": 163,
	"./ar-dz.js": 163,
	"./ar-kw": 164,
	"./ar-kw.js": 164,
	"./ar-ly": 165,
	"./ar-ly.js": 165,
	"./ar-ma": 166,
	"./ar-ma.js": 166,
	"./ar-sa": 167,
	"./ar-sa.js": 167,
	"./ar-tn": 168,
	"./ar-tn.js": 168,
	"./ar.js": 162,
	"./az": 169,
	"./az.js": 169,
	"./be": 170,
	"./be.js": 170,
	"./bg": 171,
	"./bg.js": 171,
	"./bm": 172,
	"./bm.js": 172,
	"./bn": 173,
	"./bn.js": 173,
	"./bo": 174,
	"./bo.js": 174,
	"./br": 175,
	"./br.js": 175,
	"./bs": 176,
	"./bs.js": 176,
	"./ca": 177,
	"./ca.js": 177,
	"./cs": 178,
	"./cs.js": 178,
	"./cv": 179,
	"./cv.js": 179,
	"./cy": 180,
	"./cy.js": 180,
	"./da": 181,
	"./da.js": 181,
	"./de": 182,
	"./de-at": 183,
	"./de-at.js": 183,
	"./de-ch": 184,
	"./de-ch.js": 184,
	"./de.js": 182,
	"./dv": 185,
	"./dv.js": 185,
	"./el": 186,
	"./el.js": 186,
	"./en-SG": 187,
	"./en-SG.js": 187,
	"./en-au": 188,
	"./en-au.js": 188,
	"./en-ca": 189,
	"./en-ca.js": 189,
	"./en-gb": 190,
	"./en-gb.js": 190,
	"./en-ie": 191,
	"./en-ie.js": 191,
	"./en-il": 192,
	"./en-il.js": 192,
	"./en-nz": 193,
	"./en-nz.js": 193,
	"./eo": 194,
	"./eo.js": 194,
	"./es": 195,
	"./es-do": 196,
	"./es-do.js": 196,
	"./es-us": 197,
	"./es-us.js": 197,
	"./es.js": 195,
	"./et": 198,
	"./et.js": 198,
	"./eu": 199,
	"./eu.js": 199,
	"./fa": 200,
	"./fa.js": 200,
	"./fi": 201,
	"./fi.js": 201,
	"./fo": 202,
	"./fo.js": 202,
	"./fr": 203,
	"./fr-ca": 204,
	"./fr-ca.js": 204,
	"./fr-ch": 205,
	"./fr-ch.js": 205,
	"./fr.js": 203,
	"./fy": 206,
	"./fy.js": 206,
	"./ga": 207,
	"./ga.js": 207,
	"./gd": 208,
	"./gd.js": 208,
	"./gl": 209,
	"./gl.js": 209,
	"./gom-latn": 210,
	"./gom-latn.js": 210,
	"./gu": 211,
	"./gu.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it-ch": 220,
	"./it-ch.js": 220,
	"./it.js": 219,
	"./ja": 221,
	"./ja.js": 221,
	"./jv": 222,
	"./jv.js": 222,
	"./ka": 223,
	"./ka.js": 223,
	"./kk": 224,
	"./kk.js": 224,
	"./km": 225,
	"./km.js": 225,
	"./kn": 226,
	"./kn.js": 226,
	"./ko": 227,
	"./ko.js": 227,
	"./ku": 228,
	"./ku.js": 228,
	"./ky": 229,
	"./ky.js": 229,
	"./lb": 230,
	"./lb.js": 230,
	"./lo": 231,
	"./lo.js": 231,
	"./lt": 232,
	"./lt.js": 232,
	"./lv": 233,
	"./lv.js": 233,
	"./me": 234,
	"./me.js": 234,
	"./mi": 235,
	"./mi.js": 235,
	"./mk": 236,
	"./mk.js": 236,
	"./ml": 237,
	"./ml.js": 237,
	"./mn": 238,
	"./mn.js": 238,
	"./mr": 239,
	"./mr.js": 239,
	"./ms": 240,
	"./ms-my": 241,
	"./ms-my.js": 241,
	"./ms.js": 240,
	"./mt": 242,
	"./mt.js": 242,
	"./my": 243,
	"./my.js": 243,
	"./nb": 244,
	"./nb.js": 244,
	"./ne": 245,
	"./ne.js": 245,
	"./nl": 246,
	"./nl-be": 247,
	"./nl-be.js": 247,
	"./nl.js": 246,
	"./nn": 248,
	"./nn.js": 248,
	"./pa-in": 249,
	"./pa-in.js": 249,
	"./pl": 250,
	"./pl.js": 250,
	"./pt": 251,
	"./pt-br": 252,
	"./pt-br.js": 252,
	"./pt.js": 251,
	"./ro": 253,
	"./ro.js": 253,
	"./ru": 254,
	"./ru.js": 254,
	"./sd": 255,
	"./sd.js": 255,
	"./se": 256,
	"./se.js": 256,
	"./si": 257,
	"./si.js": 257,
	"./sk": 258,
	"./sk.js": 258,
	"./sl": 259,
	"./sl.js": 259,
	"./sq": 260,
	"./sq.js": 260,
	"./sr": 261,
	"./sr-cyrl": 262,
	"./sr-cyrl.js": 262,
	"./sr.js": 261,
	"./ss": 263,
	"./ss.js": 263,
	"./sv": 264,
	"./sv.js": 264,
	"./sw": 265,
	"./sw.js": 265,
	"./ta": 266,
	"./ta.js": 266,
	"./te": 267,
	"./te.js": 267,
	"./tet": 268,
	"./tet.js": 268,
	"./tg": 269,
	"./tg.js": 269,
	"./th": 270,
	"./th.js": 270,
	"./tl-ph": 271,
	"./tl-ph.js": 271,
	"./tlh": 272,
	"./tlh.js": 272,
	"./tr": 273,
	"./tr.js": 273,
	"./tzl": 274,
	"./tzl.js": 274,
	"./tzm": 275,
	"./tzm-latn": 276,
	"./tzm-latn.js": 276,
	"./tzm.js": 275,
	"./ug-cn": 277,
	"./ug-cn.js": 277,
	"./uk": 278,
	"./uk.js": 278,
	"./ur": 279,
	"./ur.js": 279,
	"./uz": 280,
	"./uz-latn": 281,
	"./uz-latn.js": 281,
	"./uz.js": 280,
	"./vi": 282,
	"./vi.js": 282,
	"./x-pseudo": 283,
	"./x-pseudo.js": 283,
	"./yo": 284,
	"./yo.js": 284,
	"./zh-cn": 285,
	"./zh-cn.js": 285,
	"./zh-hk": 286,
	"./zh-hk.js": 286,
	"./zh-tw": 287,
	"./zh-tw.js": 287
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 382;

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FlashCardComponent = /** @class */ (function () {
    function FlashCardComponent() {
        this.flipped = false;
        console.log('Hello FlashCardComponent Component');
    }
    FlashCardComponent.prototype.flip = function () {
        this.flipped = !this.flipped;
    };
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'flash-card',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/components/flash-card/flash-card.html"*/'<!-- Generated template for the FlashCardComponent component -->\n<div class="flip-container" (click)="flip()" [class.flipped]="flipped">\n \n  <div class="flipper">\n\n      <div class="front">\n          <ng-content select=".flash-card-front"></ng-content>\n      </div>\n\n      <div class="back">\n          <ng-content select=".flash-card-back"></ng-content>\n      </div>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/components/flash-card/flash-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(http, navParams, storage, navCtrl, alertCtrl) {
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.items1 = [];
        this.loggedin = this.navParams.get('loggedin');
    }
    HelloIonicPage.prototype.checklogin = function (item) {
        //this.storage.get('username').then((value) => {
        var _this = this;
        if (this.loggedin == 0) {
            this.loggedin = 1;
            var alert_1 = this.alertCtrl.create({
                title: 'Login',
                message: 'Enter name',
                inputs: [
                    {
                        name: 'uname',
                        placeholder: 'Name'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Submit',
                        handler: function (data) {
                            console.log(data);
                            console.log(item);
                            _this.storage.set('username', data['uname']);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */], { item: item });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            console.log('yo');
            console.log(item);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */], { item: item });
        }
        //this.navCtrl.push(QuizPage,{})
    };
    HelloIonicPage.prototype.ionViewDidLoad = function () {
        //let postParams = {'topics': this.dummy_list}
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = "http://localhost:5000";
        var path = url.concat("/get_topics");
        //console.log(postParams);
        this.http.get(path, { headers: headers })
            .subscribe(function (res) {
            var data = res.json()['topics'];
            console.log(data);
            var c = 0;
            for (var i in data) {
                if (i != '_id') {
                    //console.log("../../assets/imgs/"+name)
                    //console.log(name)
                    _this.items1.push({
                        name: i,
                        topics: data[i],
                        no: "../../assets/imgs/" + i + ".jpg"
                    });
                    console.log(_this.items1[c].no);
                    c = c + 1;
                }
            }
        });
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Quiz Portal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-grid>\n  <ion-row>\n        <ion-col col-3 *ngFor="let item of items1">\n            <br>     \n        <flash-card>          \n          <div class="flash-card-front">\n              <div class="container">\n              <img src = "{{ item.no }}" style="opacity: 0.4" height="220" width="280" >    \n              <div class="centered">{{item.name}}</div> \n            </div>       \n          </div>\n          \n          <div class="flash-card-back">\n              <div *ngFor="let i of item.topics" style="font-family: cursive">{{i}}</div>\n              <button ion-button round outline (click)="checklogin(item)" class="quiz">Take Quiz</button>\n          </div>  \n\n      </flash-card>\n    <br>\n      </ion-col>\n      <br>\n      <br>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/satyam/Desktop/quizPortalWT2-master/frontend/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map