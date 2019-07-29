(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kitchen/kitchen.component */ "./src/app/kitchen/kitchen.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _grill_grill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grill/grill.component */ "./src/app/grill/grill.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");







var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'kitchen',
        component: _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_3__["KitchenComponent"]
    },
    {
        path: 'grill',
        component: _grill_grill_component__WEBPACK_IMPORTED_MODULE_5__["GrillComponent"]
    },
    {
        path: 'shop',
        component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxWaWxsZVZlcmtrb25lblxcb21hdFxccHJvamVrdGl0XFxhbmd1bGFyXFxraW5nYnVyZ2VyXFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KingBurger';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kitchen/kitchen.component */ "./src/app/kitchen/kitchen.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _grill_grill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grill/grill.component */ "./src/app/grill/grill.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_8__["KitchenComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _grill_grill_component__WEBPACK_IMPORTED_MODULE_11__["GrillComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/burger-store.service.ts":
/*!*****************************************!*\
  !*** ./src/app/burger-store.service.ts ***!
  \*****************************************/
/*! exports provided: BurgerStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerStoreService", function() { return BurgerStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BurgerStoreService = /** @class */ (function () {
    function BurgerStoreService() {
        this._ingredients = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(BurgerStoreService.prototype, "ingredients", {
        get: function () {
            return this._ingredients.getValue();
        },
        set: function (val) {
            this._ingredients.next(val);
        },
        enumerable: true,
        configurable: true
    });
    BurgerStoreService.prototype.addBurgerPart = function (burgerPart) {
        this.ingredients = this.ingredients.concat([
            burgerPart
        ]);
    };
    BurgerStoreService.prototype.removeBurgerPart = function (id) {
        this.ingredients = this.ingredients.filter(function (bp) { return bp.runningId !== id; });
    };
    BurgerStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BurgerStoreService);
    return BurgerStoreService;
}());



/***/ }),

/***/ "./src/app/burger.service.ts":
/*!***********************************!*\
  !*** ./src/app/burger.service.ts ***!
  \***********************************/
/*! exports provided: BurgerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerService", function() { return BurgerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BurgerService = /** @class */ (function () {
    function BurgerService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3001/api/burgers';
    }
    BurgerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    BurgerService.prototype.getBurgers = function () {
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (burgers) { return console.log('fetched burgers'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBurgers', [])));
    };
    BurgerService.prototype.addBurger = function (burger) {
        return this.http.post(this.baseUrl, burger, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (burger) { return console.log("added burger w/ id=" + burger._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    BurgerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BurgerService);
    return BurgerService;
}());



/***/ }),

/***/ "./src/app/grill/grill.component.html":
/*!********************************************!*\
  !*** ./src/app/grill/grill.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grill\">\n  <h1>Grill</h1>\n\n  <p>Money: {{ userStore.money }}</p>\n  \n  <div class=\"heat-bar\" id=\"heat-bar\">\n    <img src=\"assets/images/logo.png\" id=\"heat-bar-logo\" />\n    <div id=\"pointer\"></div>\n  </div>\n  <div class=\"heat-bar-buttons\">\n    <button *ngIf=\"!start\" (click)=\"startGrill()\">Start</button>\n    <button *ngIf=\"!stop\" (click)=\"stopGrill()\">Stop</button>\n  </div>\n\n  <div clas=\"winning-price\" *ngIf=\"winningPrice > 0\">\n    <p>Winning price: {{ winningPrice }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/grill/grill.component.scss":
/*!********************************************!*\
  !*** ./src/app/grill/grill.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grill .heat-bar {\n  width: 320px;\n  height: 32px;\n  background-color: #DB0007; }\n  .grill .heat-bar #heat-bar-logo {\n    width: 32px;\n    height: 32px;\n    display: inline-block;\n    z-index: 1;\n    position: absolute; }\n  .grill .heat-bar #pointer {\n    border: 1px solid black;\n    border-radius: 50%;\n    width: 31px;\n    height: 31px;\n    display: none;\n    position: absolute;\n    z-index: 2; }\n  .grill .heat-bar-buttons button {\n  margin-top: 10px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  background-color: #DB0007;\n  color: #FFBC0D;\n  font-size: 1.5em; }\n  .grill .heat-bar-buttons button:hover {\n  cursor: pointer;\n  background-color: #9f0207;\n  color: #ba8603; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpbGwvQzpcXFVzZXJzXFxWaWxsZVZlcmtrb25lblxcb21hdFxccHJvamVrdGl0XFxhbmd1bGFyXFxraW5nYnVyZ2VyXFxmcm9udGVuZC9zcmNcXGFwcFxcZ3JpbGxcXGdyaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUIsRUFBQTtFQUw3QjtJQVFNLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtFQVp4QjtJQWdCTSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUF0QmhCO0VBNkJNLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBbkN0QjtFQXVDTSxlQUFlO0VBQ2YseUJBQWdDO0VBQ2hDLGNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncmlsbC9ncmlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlsbCB7XHJcblxyXG4gIC5oZWF0LWJhciB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIwMDA3O1xyXG5cclxuICAgICNoZWF0LWJhci1sb2dvIHtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgI3BvaW50ZXIge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMzFweDtcclxuICAgICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhdC1iYXItYnV0dG9ucyB7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIwMDA3O1xyXG4gICAgICBjb2xvcjogI0ZGQkMwRDtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIsIDcpO1xyXG4gICAgICBjb2xvcjogcmdiKDE4NiwgMTM0LCAzKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/grill/grill.component.ts":
/*!******************************************!*\
  !*** ./src/app/grill/grill.component.ts ***!
  \******************************************/
/*! exports provided: GrillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrillComponent", function() { return GrillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-store.service */ "./src/app/user-store.service.ts");



var GrillComponent = /** @class */ (function () {
    function GrillComponent(userStore) {
        this.userStore = userStore;
        this.start = false;
        this.stop = true;
    }
    GrillComponent.prototype.ngOnInit = function () {
    };
    GrillComponent.prototype.moveRight = function (imgObj) {
        var _this = this;
        if (this.start && !this.stop) {
            if (this.imgPosition >= 300) {
                this.moveLeft(imgObj);
            }
            else {
                this.imgPosition = parseInt(imgObj.style.left) + 10;
                imgObj.style.left = this.imgPosition + 'px';
                setTimeout(function () {
                    _this.moveRight(imgObj);
                }, 15);
            }
        }
    };
    GrillComponent.prototype.moveLeft = function (imgObj) {
        var _this = this;
        if (this.start && !this.stop) {
            if (this.imgPosition <= 10) {
                this.moveRight(imgObj);
            }
            else {
                this.imgPosition = parseInt(imgObj.style.left) - 10;
                imgObj.style.left = this.imgPosition + 'px';
                setTimeout(function () {
                    _this.moveLeft(imgObj);
                }, 15);
            }
        }
    };
    GrillComponent.prototype.startGrill = function () {
        var imgObj = document.getElementById('heat-bar-logo');
        var pointerDiv = document.getElementById('pointer');
        this.pointerPosition = Math.floor(Math.random() * (+300 - +10)) + +10;
        this.winningPrice = 0;
        pointerDiv.style.display = 'block';
        pointerDiv.style.left = this.pointerPosition + "px";
        imgObj.style.left = '10px';
        this.start = true;
        this.stop = false;
        this.moveRight(imgObj);
    };
    GrillComponent.prototype.stopGrill = function () {
        this.start = false;
        this.stop = true;
        this.checkWinningPrices();
    };
    GrillComponent.prototype.checkWinningPrices = function () {
        if (this.pointerPosition > this.imgPosition) {
            if (this.pointerPosition - this.imgPosition <= 5) {
                this.winningPrice = 5;
            }
            else if (this.pointerPosition - this.imgPosition <= 10) {
                this.winningPrice = 3;
            }
            else if (this.pointerPosition - this.imgPosition <= 20) {
                this.winningPrice = 2;
            }
        }
        else {
            if (this.imgPosition - this.pointerPosition <= 5) {
                this.winningPrice = 5;
            }
            else if (this.imgPosition - this.pointerPosition <= 10) {
                this.winningPrice = 3;
            }
            else if (this.imgPosition - this.pointerPosition <= 20) {
                this.winningPrice = 2;
            }
        }
        if (this.winningPrice > 0) {
            this.payWinningPrice(this.winningPrice);
        }
    };
    GrillComponent.prototype.payWinningPrice = function (amount) {
        this.userStore.addMoney(amount);
    };
    GrillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grill',
            template: __webpack_require__(/*! ./grill.component.html */ "./src/app/grill/grill.component.html"),
            styles: [__webpack_require__(/*! ./grill.component.scss */ "./src/app/grill/grill.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"]])
    ], GrillComponent);
    return GrillComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <h1>KingBurger</h1>\r\n  <h3 class=\"info\">Grill the steaks,</h3>\r\n  <h3 class=\"info\">get your ingredients,</h3>\r\n  <h3 class=\"info\">build the King of Burgers!</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home .info {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFZpbGxlVmVya2tvbmVuXFxvbWF0XFxwcm9qZWt0aXRcXGFuZ3VsYXJcXGtpbmdidXJnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG5cclxuICAuaW5mbyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ingredient.service.ts":
/*!***************************************!*\
  !*** ./src/app/ingredient.service.ts ***!
  \***************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IngredientService = /** @class */ (function () {
    function IngredientService(http) {
        this.http = http;
    }
    IngredientService.prototype.getIngredients = function () {
        return this.http.get('/api/ingredients');
    };
    IngredientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IngredientService);
    return IngredientService;
}());



/***/ }),

/***/ "./src/app/kitchen/kitchen.component.html":
/*!************************************************!*\
  !*** ./src/app/kitchen/kitchen.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kitchen\">\n  <h1>Kitchen</h1>\n  \n  <p>Get money from the grill and buy ingredients from the shop</p>\n  <p>Click to remove chosen ingredient and hold mouse to move order</p>\n\n  <ul>\n    <p>Ingredients:</p>\n    <div *ngFor=\"let ingredient of userStore.ingredients\">\n      <li *ngIf=\"ingredient.quantity > 0\" (click)=\"addIngredient(ingredient)\" class=\"ingredient-list-object\">\n        {{ ingredient.title }} ({{ ingredient.quantity }})\n      </li>\n    </div>\n  </ul>\n\n  <div cdkDropList class=\"burger-part-list\" *ngIf=\"burgerStore.ingredients\" (cdkDropListDropped)=\"drop($event)\">\n    <img class=\"burger-part-item\" *ngFor=\"let burgerPart of burgerStore.ingredients\" [src]=\"burgerPart.imageUrl\" [alt]=\"burgerPart.imageUrl\" cdkDrag (click)=\"removeIngredient(burgerPart.runningId)\" />\n  </div>\n\n  <div>\n    <!-- <button (click)=\"saveBurger()\">Save</button> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/kitchen/kitchen.component.scss":
/*!************************************************!*\
  !*** ./src/app/kitchen/kitchen.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kitchen .ingredient-list-object {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px;\n  list-style: none;\n  color: #DB0007; }\n\n.kitchen .ingredient-list-object:hover {\n  cursor: pointer;\n  background-color: #DB0007;\n  color: #FFBC0D; }\n\n.kitchen .burger-part-list {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0; }\n\n.kitchen .burger-part-list .burger-part-item {\n    text-align: center;\n    margin: 1px 0 1px 0;\n    cursor: move;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box; }\n\n.kitchen .cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.kitchen .cdk-drag-placeholder {\n  opacity: 0; }\n\n.kitchen .cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.kitchen .burger-part-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.kitchen .no-ingredients {\n  color: #DB0007;\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2l0Y2hlbi9DOlxcVXNlcnNcXFZpbGxlVmVya2tvbmVuXFxvbWF0XFxwcm9qZWt0aXRcXGFuZ3VsYXJcXGtpbmdidXJnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxraXRjaGVuXFxraXRjaGVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBTmxCO0VBVUksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBWmxCO0VBZ0JJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFwQmI7SUF1Qk0sa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQixFQUFBOztBQTlCNUI7RUFtQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxSEFFOEMsRUFBQTs7QUF2Q2xEO0VBMkNJLFVBQVUsRUFBQTs7QUEzQ2Q7RUErQ0ksc0RBQXNELEVBQUE7O0FBL0MxRDtFQW1ESSxzREFBc0QsRUFBQTs7QUFuRDFEO0VBdURJLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9raXRjaGVuL2tpdGNoZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2l0Y2hlbiB7XHJcblxyXG4gIC5pbmdyZWRpZW50LWxpc3Qtb2JqZWN0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogI0RCMDAwNztcclxuICB9XHJcblxyXG4gIC5pbmdyZWRpZW50LWxpc3Qtb2JqZWN0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICBjb2xvcjogI0ZGQkMwRDtcclxuICB9XHJcblxyXG4gIC5idXJnZXItcGFydC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAuYnVyZ2VyLXBhcnQtaXRlbSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcHggMCAxcHggMDtcclxuICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ1cmdlci1wYXJ0LWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLm5vLWluZ3JlZGllbnRzIHtcclxuICAgIGNvbG9yOiAjREIwMDA3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/kitchen/kitchen.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kitchen/kitchen.component.ts ***!
  \**********************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _burger_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../burger-store.service */ "./src/app/burger-store.service.ts");
/* harmony import */ var _user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-store.service */ "./src/app/user-store.service.ts");
/* harmony import */ var _burger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../burger.service */ "./src/app/burger.service.ts");






var KitchenComponent = /** @class */ (function () {
    function KitchenComponent(burgerStore, userStore, burgerService) {
        this.burgerStore = burgerStore;
        this.userStore = userStore;
        this.burgerService = burgerService;
        this.runningId = 1;
    }
    KitchenComponent.prototype.ngOnInit = function () { };
    KitchenComponent.prototype.addIngredient = function (ing) {
        var ingredient = Object.assign({}, ing);
        ingredient.runningId = this.runningId;
        this.burgerStore.addBurgerPart(ingredient);
        this.runningId += 1;
        this.userStore.removeIngredient(ing.id);
    };
    KitchenComponent.prototype.removeIngredient = function (id) {
        this.burgerStore.removeBurgerPart(id);
        this.userStore.removeIngredient(id);
    };
    KitchenComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.burgerStore.ingredients, event.previousIndex, event.currentIndex);
    };
    KitchenComponent.prototype.saveBurger = function () {
        var burger = {
            name: 'Testi',
            ingredients: Object.assign({}, this.burgerStore.ingredients)
        };
        this.burgerService.addBurger(burger);
    };
    KitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/kitchen/kitchen.component.html"),
            styles: [__webpack_require__(/*! ./kitchen.component.scss */ "./src/app/kitchen/kitchen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_burger_store_service__WEBPACK_IMPORTED_MODULE_3__["BurgerStoreService"],
            _user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"],
            _burger_service__WEBPACK_IMPORTED_MODULE_5__["BurgerService"]])
    ], KitchenComponent);
    return KitchenComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div>\n    <nav>\n      <div class=\"router-div\">\n        <a routerLink=\"/\">\n          <img src=\"assets/images/logo.png\" alt=\"KingBurger logo\" class=\"logo\" />\n        </a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/kitchen\" class=\"router-link\">Kitchen</a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/shop\" class=\"router-link\">Shop</a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/grill\" class=\"router-link\">Grill</a>\n      </div>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #DB0007;\n  top: 0;\n  left: 0; }\n  .header .logo {\n    width: 3em; }\n  .header .router-div {\n    display: inline-block;\n    margin: 10px; }\n  .header .router-div .router-link {\n      color: #FFBC0D;\n      text-decoration: none;\n      font-size: 1.5em;\n      padding: 5px;\n      margin: auto; }\n  .header .router-div .router-link:hover {\n      cursor: pointer;\n      background-color: #FFBC0D;\n      color: #DB0007; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcVmlsbGVWZXJra29uZW5cXG9tYXRcXHByb2pla3RpdFxcYW5ndWxhclxca2luZ2J1cmdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPLEVBQUE7RUFIVDtJQU1JLFVBQVUsRUFBQTtFQU5kO0lBVUkscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQVhoQjtNQWNNLGNBQWM7TUFDZCxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixZQUFZLEVBQUE7RUFsQmxCO01Bc0JNLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgfVxyXG5cclxuICAucm91dGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgLnJvdXRlci1saW5rIHtcclxuICAgICAgY29sb3I6ICNGRkJDMEQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdXRlci1saW5rOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCQzBEO1xyXG4gICAgICBjb2xvcjogI0RCMDAwNztcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = "KingBurger";
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shop\">\n  <h1>Shop</h1>\n\n  <p>Money: {{ userStore.money }}</p>\n\n  <div class=\"grid-container\" *ngIf=\"ingredients\">\n    <div *ngFor=\"let ingredient of ingredients.ingredients\" class=\"ingredient-list-object\">\n      <div class=\"grid-item\">\n        <h3>{{ ingredient.title }}</h3>\n        <p>Price: {{ ingredient.price }}</p>\n        <img [src]=\"ingredient.imageUrl\" [alt]=\"ingredient.title\" />\n        <div class=\"button-div\">\n          <button class=\"btn-buy\" (click)=\"buyIngredient(ingredient)\" *ngIf=\"userStore.money >= ingredient.price\">Buy</button>\n          <button disabled class=\"btn-disabled\" *ngIf=\"ingredient.price > userStore.money\">No money</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shop/shop.component.scss":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop .grid-container {\n  background-color: #DB0007;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 5px; }\n\n.shop .grid-item {\n  background-color: #FFBC0D;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  font-size: 16px;\n  height: 170px;\n  width: 25vw;\n  min-width: 120px;\n  margin: 2px;\n  border-radius: 5px;\n  text-align: center;\n  position: relative; }\n\n.shop .grid-item h3 {\n    display: block;\n    margin: 5px 0 5px 0; }\n\n.shop .grid-item .button-div {\n    position: absolute;\n    margin-left: -50px;\n    left: 50%;\n    bottom: 10px; }\n\n.shop .grid-item button {\n    margin-top: 10px;\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    font-size: 1em;\n    width: 100px; }\n\n.shop .grid-item .btn-buy {\n    background-color: #DB0007;\n    color: #FFBC0D; }\n\n.shop .grid-item .btn-buy:hover {\n    cursor: pointer;\n    background-color: #9f0207;\n    color: #ba8603; }\n\n.shop .grid-item .btn-disabled {\n    background-color: grey;\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9DOlxcVXNlcnNcXFZpbGxlVmVya2tvbmVuXFxvbWF0XFxwcm9qZWt0aXRcXGFuZ3VsYXJcXGtpbmdidXJnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxzaG9wXFxzaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFSdEI7RUFZSSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBdEJ0QjtJQXlCTSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7O0FBMUJ6QjtJQThCTSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZLEVBQUE7O0FBakNsQjtJQXFDTSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVksRUFBQTs7QUExQ2xCO0lBOENNLHlCQUF5QjtJQUN6QixjQUFjLEVBQUE7O0FBL0NwQjtJQW1ETSxlQUFlO0lBQ2YseUJBQWdDO0lBQ2hDLGNBQXVCLEVBQUE7O0FBckQ3QjtJQXlETSxzQkFBc0I7SUFDdEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3Age1xyXG5cclxuICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDAwNztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkMwRDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYnV5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDAwNztcclxuICAgICAgY29sb3I6ICNGRkJDMEQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1idXk6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIsIDcpO1xyXG4gICAgICBjb2xvcjogcmdiKDE4NiwgMTM0LCAzKTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ingredient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ingredient.service */ "./src/app/ingredient.service.ts");
/* harmony import */ var _user_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-store.service */ "./src/app/user-store.service.ts");




var ShopComponent = /** @class */ (function () {
    function ShopComponent(ingredientService, userStore) {
        this.ingredientService = ingredientService;
        this.userStore = userStore;
        this.ingredients = [];
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredientService.getIngredients()
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShopComponent.prototype.buyIngredient = function (ingredient) {
        this.userStore.addIngredient(ingredient);
        this.userStore.removeMoney(ingredient.price);
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/shop/shop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ingredient_service__WEBPACK_IMPORTED_MODULE_2__["IngredientService"],
            _user_store_service__WEBPACK_IMPORTED_MODULE_3__["UserStoreService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/user-store.service.ts":
/*!***************************************!*\
  !*** ./src/app/user-store.service.ts ***!
  \***************************************/
/*! exports provided: UserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreService", function() { return UserStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserStoreService = /** @class */ (function () {
    function UserStoreService() {
        this._money = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](10);
        this._ingredients = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(UserStoreService.prototype, "money", {
        get: function () {
            return this._money.getValue();
        },
        set: function (amount) {
            this._money.next(amount);
        },
        enumerable: true,
        configurable: true
    });
    UserStoreService.prototype.addMoney = function (amount) {
        this.money = this.money + amount;
    };
    UserStoreService.prototype.removeMoney = function (amount) {
        if (this.money - amount < 0) {
            this.money = 0;
        }
        else {
            this.money = this.money - amount;
        }
    };
    Object.defineProperty(UserStoreService.prototype, "ingredients", {
        get: function () {
            return this._ingredients.getValue();
        },
        set: function (val) {
            this._ingredients.next(val);
        },
        enumerable: true,
        configurable: true
    });
    UserStoreService.prototype.addIngredient = function (ingredient) {
        var ingredientFound = false;
        this.ingredients.map(function (ing) {
            if (ing.title === ingredient.title) {
                ing.quantity += 1;
                ingredientFound = true;
            }
        });
        if (!ingredientFound) {
            var newIngredient = {
                title: ingredient.title,
                imageUrl: ingredient.imageUrl,
                price: ingredient.price,
                id: ingredient.id,
                quantity: 1
            };
            this.ingredients = this.ingredients.concat(newIngredient);
        }
    };
    UserStoreService.prototype.removeIngredient = function (id) {
        this.ingredients.map(function (ing) {
            if (ing.id === id) {
                ing.quantity -= 1;
                if (ing.quantity < 0) {
                    ing.quantity = 0;
                }
            }
        });
    };
    UserStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserStoreService);
    return UserStoreService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VilleVerkkonen\omat\projektit\angular\kingburger\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map