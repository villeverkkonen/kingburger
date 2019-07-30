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
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");








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
    },
    {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
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
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");














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
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"]
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

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery\">\n  <div *ngIf=\"isLoadingResults\">\n    <p class=\"loading-results\">Loading...</p>\n  </div>\n\n  <div class=\"grid-container\" *ngIf=\"burgers\">\n    <div class=\"grid-item\" *ngFor=\"let burger of burgers\">\n      <h3>{{ burger.name }}</h3>\n      <p>Votes: {{ burger.votes }}</p>\n      <div class=\"ingredient-list\">\n        <img *ngFor=\"let ingredient of burger.ingredients\" class=\"ingredient-img\" [src]=\"ingredient.imageUrl\" [alt]=\"ingredient.title\" />\n      </div>\n      <div class=\"button-div\">\n        <button class=\"btn-vote\" (click)=\"vote(burger)\">Vote</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery .grid-container {\n  background-color: #DB0007;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 5px; }\n  .gallery .grid-container .grid-item {\n    background-color: #FFBC0D;\n    border: 1px solid rgba(0, 0, 0, 0.8);\n    padding: 10px;\n    padding-bottom: 60px;\n    font-size: 16px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 25vw;\n    min-width: 120px;\n    margin: 2px;\n    border-radius: 5px;\n    text-align: center;\n    position: relative; }\n  .gallery .grid-container .grid-item .ingredient-list {\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content;\n      margin: auto; }\n  .gallery .grid-container .grid-item .ingredient-list .ingredient-img {\n        text-align: center;\n        margin: 1px 0 1px 0;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        box-sizing: border-box; }\n  .gallery .grid-container h3 {\n    display: block;\n    margin: 5px 0 5px 0; }\n  .gallery .grid-container .button-div {\n    position: absolute;\n    margin-left: -50px;\n    left: 50%;\n    bottom: 10px; }\n  .gallery .grid-container button {\n    margin-top: 10px;\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    font-size: 1em;\n    width: 100px; }\n  .gallery .grid-container .btn-vote {\n    background-color: #DB0007;\n    color: #FFBC0D; }\n  .gallery .grid-container .btn-vote:hover {\n    cursor: pointer;\n    background-color: #9f0207;\n    color: #ba8603; }\n  .gallery .loading-results {\n  color: #DB0007; }\n  @media only screen and (max-width: 535px) {\n  .gallery .grid-item {\n    flex-basis: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXFZpbGxlVmVya2tvbmVuXFxvbWF0XFxwcm9qZWt0aXRcXGFuZ3VsYXJcXGtpbmdidXJnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxnYWxsZXJ5XFxnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtFQVJ0QjtJQVdNLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQXRCeEI7TUF5QlEsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsMEJBQWtCO01BQWxCLHVCQUFrQjtNQUFsQixrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO0VBN0JwQjtRQWdDVSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixzQkFBc0IsRUFBQTtFQXRDaEM7SUE0Q00sY0FBYztJQUNkLG1CQUFtQixFQUFBO0VBN0N6QjtJQWlETSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFwRGxCO0lBd0RNLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWSxFQUFBO0VBN0RsQjtJQWlFTSx5QkFBeUI7SUFDekIsY0FBYyxFQUFBO0VBbEVwQjtJQXNFTSxlQUFlO0lBQ2YseUJBQWdDO0lBQ2hDLGNBQXVCLEVBQUE7RUF4RTdCO0VBNkVJLGNBQWMsRUFBQTtFQUdoQjtFQWhGRjtJQWtGTSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5IHtcclxuXHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLmdyaWQtaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJDMEQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgLmluZ3JlZGllbnQtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAuaW5ncmVkaWVudC1pbWcge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAxcHggMCAxcHggMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tdm90ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICAgIGNvbG9yOiAjRkZCQzBEO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tdm90ZTpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMiwgNyk7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTg2LCAxMzQsIDMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctcmVzdWx0cyB7XHJcbiAgICBjb2xvcjogI0RCMDAwNztcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM1cHgpIHtcclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_burger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/burger.service */ "./src/app/services/burger.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(burgerService) {
        this.burgerService = burgerService;
        this.burgers = [];
        this.isLoadingResults = true;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.burgerService.getBurgers()
            .subscribe(function (res) {
            _this.burgers = res;
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    GalleryComponent.prototype.vote = function (id) {
        this.burgerService.vote(id)
            .subscribe(function (res) {
        }), function (err) {
            console.log(err);
        };
        this.burgers.sort(this.orderBurgersByVotes);
    };
    GalleryComponent.prototype.orderBurgersByVotes = function (a, b) {
        return b.votes - a.votes;
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_burger_service__WEBPACK_IMPORTED_MODULE_2__["BurgerService"]])
    ], GalleryComponent);
    return GalleryComponent;
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
/* harmony import */ var _stores_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/user-store.service */ "./src/app/stores/user-store.service.ts");



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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stores_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"]])
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

/***/ "./src/app/kitchen/kitchen.component.html":
/*!************************************************!*\
  !*** ./src/app/kitchen/kitchen.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kitchen\">\n  <h1>Kitchen</h1>\n  \n  <p>Get money from the grill and buy ingredients from the shop</p>\n  <p>Click to remove chosen ingredient and hold mouse to move order</p>\n\n  <ul>\n    <p>Ingredients:</p>\n    <div *ngFor=\"let ingredient of userStore.ingredients\">\n      <li *ngIf=\"ingredient.quantity > 0\" (click)=\"addIngredient(ingredient)\" class=\"ingredient-list-object\">\n        {{ ingredient.title }} ({{ ingredient.quantity }})\n      </li>\n    </div>\n  </ul>\n\n  <div cdkDropList class=\"burger-part-list\" *ngIf=\"burgerStore.ingredients\" (cdkDropListDropped)=\"drop($event)\">\n    <img class=\"burger-part-item\" *ngFor=\"let burgerPart of burgerStore.ingredients\" [src]=\"burgerPart.imageUrl\" [alt]=\"burgerPart.imageUrl\" cdkDrag (click)=\"removeIngredient(burgerPart.runningId)\" />\n  </div>\n\n  <div>\n    <p class=\"required-error\" *ngIf=\"requiredError\">Name and ingredient(s) are required</p>\n    <input class=\"save-burger-input\" type=\"text\" (change)=\"updateName($event)\" [value]=\"burgerName\" placeholder=\"Name for burger\" />\n    <button class=\"save-burger-btn\" (click)=\"saveBurger()\">Save</button>\n  </div>\n\n  <div *ngIf=\"isLoadingResults\">\n    <p class=\"loading-results\">Loading...</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/kitchen/kitchen.component.scss":
/*!************************************************!*\
  !*** ./src/app/kitchen/kitchen.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kitchen .ingredient-list-object {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px;\n  list-style: none;\n  color: #DB0007; }\n\n.kitchen .ingredient-list-object:hover {\n  cursor: pointer;\n  background-color: #DB0007;\n  color: #FFBC0D; }\n\n.kitchen .burger-part-list {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0; }\n\n.kitchen .burger-part-list .burger-part-item {\n    text-align: center;\n    margin: 1px 0 1px 0;\n    cursor: move;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box; }\n\n.kitchen .cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.kitchen .cdk-drag-placeholder {\n  opacity: 0; }\n\n.kitchen .cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.kitchen .burger-part-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.kitchen .no-ingredients {\n  color: #DB0007;\n  margin-top: 5px; }\n\n.kitchen .loading-results, .kitchen .required-error {\n  color: #DB0007; }\n\n.kitchen .save-burger-input {\n  display: block;\n  margin-top: 20px; }\n\n.kitchen .save-burger-btn {\n  background-color: #DB0007;\n  color: #FFBC0D;\n  margin-top: 10px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-size: 1em;\n  width: 100px; }\n\n.kitchen .save-burger-btn:hover {\n  cursor: pointer;\n  background-color: #9f0207;\n  color: #ba8603; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2l0Y2hlbi9DOlxcVXNlcnNcXFZpbGxlVmVya2tvbmVuXFxvbWF0XFxwcm9qZWt0aXRcXGFuZ3VsYXJcXGtpbmdidXJnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxraXRjaGVuXFxraXRjaGVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBTmxCO0VBVUksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBWmxCO0VBZ0JJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFwQmI7SUF1Qk0sa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQixFQUFBOztBQTlCNUI7RUFtQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxSEFFOEMsRUFBQTs7QUF2Q2xEO0VBMkNJLFVBQVUsRUFBQTs7QUEzQ2Q7RUErQ0ksc0RBQXNELEVBQUE7O0FBL0MxRDtFQW1ESSxzREFBc0QsRUFBQTs7QUFuRDFEO0VBdURJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBeERuQjtFQTRESSxjQUFjLEVBQUE7O0FBNURsQjtFQWdFSSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBakVwQjtFQXFFSSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQTVFaEI7RUFnRkksZUFBZTtFQUNmLHlCQUFnQztFQUNoQyxjQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAva2l0Y2hlbi9raXRjaGVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtpdGNoZW4ge1xyXG5cclxuICAuaW5ncmVkaWVudC1saXN0LW9iamVjdCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICNEQjAwMDc7XHJcbiAgfVxyXG5cclxuICAuaW5ncmVkaWVudC1saXN0LW9iamVjdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIwMDA3O1xyXG4gICAgY29sb3I6ICNGRkJDMEQ7XHJcbiAgfVxyXG5cclxuICAuYnVyZ2VyLXBhcnQtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgLmJ1cmdlci1wYXJ0LWl0ZW0ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMXB4IDAgMXB4IDA7XHJcbiAgICAgIGN1cnNvcjogbW92ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXJnZXItcGFydC1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4gIC5uby1pbmdyZWRpZW50cyB7XHJcbiAgICBjb2xvcjogI0RCMDAwNztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5sb2FkaW5nLXJlc3VsdHMsIC5yZXF1aXJlZC1lcnJvciB7XHJcbiAgICBjb2xvcjogI0RCMDAwNztcclxuICB9XHJcblxyXG4gIC5zYXZlLWJ1cmdlci1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2F2ZS1idXJnZXItYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICBjb2xvcjogI0ZGQkMwRDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNhdmUtYnVyZ2VyLWJ0bjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyLCA3KTtcclxuICAgIGNvbG9yOiByZ2IoMTg2LCAxMzQsIDMpO1xyXG4gIH1cclxufSJdfQ== */"

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
/* harmony import */ var _stores_burger_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/burger-store.service */ "./src/app/stores/burger-store.service.ts");
/* harmony import */ var _stores_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/user-store.service */ "./src/app/stores/user-store.service.ts");
/* harmony import */ var _services_burger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/burger.service */ "./src/app/services/burger.service.ts");
/* harmony import */ var _stores_kitchen_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/kitchen-store.service */ "./src/app/stores/kitchen-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var KitchenComponent = /** @class */ (function () {
    function KitchenComponent(burgerStore, userStore, kitchenStore, burgerService, router) {
        this.burgerStore = burgerStore;
        this.userStore = userStore;
        this.kitchenStore = kitchenStore;
        this.burgerService = burgerService;
        this.router = router;
        this.data = [];
        this.isLoadingResults = false;
        this.burgerName = '';
        this.requiredError = false;
    }
    KitchenComponent.prototype.ngOnInit = function () { };
    KitchenComponent.prototype.addIngredient = function (ing) {
        var ingredient = Object.assign({}, ing);
        ingredient.runningId = this.kitchenStore.runningId;
        this.kitchenStore.incrementId();
        this.burgerStore.addBurgerPart(ingredient);
        this.userStore.removeIngredient(ing.id);
    };
    KitchenComponent.prototype.removeIngredient = function (id) {
        this.burgerStore.removeBurgerPart(id);
        this.userStore.removeIngredient(id);
    };
    KitchenComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.burgerStore.ingredients, event.previousIndex, event.currentIndex);
    };
    KitchenComponent.prototype.updateName = function (event) {
        this.burgerName = event.target.value;
    };
    KitchenComponent.prototype.saveBurger = function () {
        var _this = this;
        if (!this.burgerName || this.burgerStore.ingredients.length === 0) {
            this.displayRequiredError();
            return;
        }
        this.isLoadingResults = true;
        var burger = {
            name: this.burgerName,
            ingredients: this.burgerStore.ingredients,
            votes: 0
        };
        this.burgerService.addBurger(burger)
            .subscribe(function (res) {
            _this.burgerStore.removeBurger();
            _this.isLoadingResults = false;
            _this.burgerName = '';
            _this.router.navigate(['/gallery']);
        }), function (err) {
            console.log(err);
            _this.isLoadingResults = false;
            _this.burgerName = '';
        };
    };
    KitchenComponent.prototype.displayRequiredError = function () {
        var _this = this;
        this.requiredError = true;
        setTimeout(function () { _this.requiredError = false; }, 3000);
    };
    KitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/kitchen/kitchen.component.html"),
            styles: [__webpack_require__(/*! ./kitchen.component.scss */ "./src/app/kitchen/kitchen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stores_burger_store_service__WEBPACK_IMPORTED_MODULE_3__["BurgerStoreService"],
            _stores_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"],
            _stores_kitchen_store_service__WEBPACK_IMPORTED_MODULE_6__["KitchenStoreService"],
            _services_burger_service__WEBPACK_IMPORTED_MODULE_5__["BurgerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
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

module.exports = "<header class=\"header\">\n  <div>\n    <nav>\n      <div class=\"router-div\">\n        <a routerLink=\"/\">\n          <img src=\"assets/images/logo.png\" alt=\"KingBurger logo\" class=\"logo\" />\n        </a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/kitchen\" class=\"router-link\">Kitchen</a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/shop\" class=\"router-link\">Shop</a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/grill\" class=\"router-link\">Grill</a>\n      </div>\n      <div class=\"router-div\">\n        <a routerLink=\"/gallery\" class=\"router-link\">Gallery</a>\n      </div>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #DB0007;\n  top: 0;\n  left: 0; }\n  .header .logo {\n    width: 3em; }\n  .header .router-div {\n    display: inline-block;\n    margin: 10px; }\n  .header .router-div .router-link {\n      color: #FFBC0D;\n      text-decoration: none;\n      font-size: 1.5em;\n      padding: 5px;\n      margin: auto; }\n  .header .router-div .router-link:hover {\n      cursor: pointer;\n      background-color: #FFBC0D;\n      color: #DB0007; }\n  @media only screen and (max-width: 450px) {\n    .header .router-div {\n      margin: 5px; }\n      .header .router-div .router-link {\n        padding: 0px;\n        font-size: 1.3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcVmlsbGVWZXJra29uZW5cXG9tYXRcXHByb2pla3RpdFxcYW5ndWxhclxca2luZ2J1cmdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPLEVBQUE7RUFIVDtJQU1JLFVBQVUsRUFBQTtFQU5kO0lBVUkscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQVhoQjtNQWNNLGNBQWM7TUFDZCxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixZQUFZLEVBQUE7RUFsQmxCO01Bc0JNLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsY0FBYyxFQUFBO0VBSWxCO0lBNUJGO01BOEJNLFdBQVcsRUFBQTtNQTlCakI7UUFpQ1EsWUFBWTtRQUNaLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgfVxyXG5cclxuICAucm91dGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgLnJvdXRlci1saW5rIHtcclxuICAgICAgY29sb3I6ICNGRkJDMEQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdXRlci1saW5rOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCQzBEO1xyXG4gICAgICBjb2xvcjogI0RCMDAwNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5yb3V0ZXItZGl2IHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgICAucm91dGVyLWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

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

/***/ "./src/app/services/burger.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/burger.service.ts ***!
  \********************************************/
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
        this.baseUrl = '/api/burgers';
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (burgers) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBurgers', [])));
    };
    BurgerService.prototype.addBurger = function (burger) {
        return this.http.post(this.baseUrl, burger, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (burger) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    BurgerService.prototype.vote = function (burger) {
        var updatedBurger = burger;
        updatedBurger.votes += 1;
        return this.http.put(this.baseUrl + ("/" + updatedBurger.id), updatedBurger)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (updatedBurger) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('vote')));
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

/***/ "./src/app/services/ingredient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ingredient.service.ts ***!
  \************************************************/
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

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shop\">\n  <h1>Shop</h1>\n\n  <p>Money: {{ userStore.money }}</p>\n\n  <div class=\"grid-container\" *ngIf=\"ingredients\">\n    <div class=\"grid-item\" *ngFor=\"let ingredient of ingredients.ingredients\">\n      <h3>{{ ingredient.title }}</h3>\n      <p>Price: {{ ingredient.price }}</p>\n      <img [src]=\"ingredient.imageUrl\" [alt]=\"ingredient.title\" />\n      <div class=\"button-div\">\n        <button class=\"btn-buy\" (click)=\"buyIngredient(ingredient)\" *ngIf=\"userStore.money >= ingredient.price\">Buy</button>\n        <button disabled class=\"btn-disabled\" *ngIf=\"ingredient.price > userStore.money\">No money</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shop/shop.component.scss":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop .grid-container {\n  background-color: #DB0007;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 5px; }\n\n.shop .grid-item {\n  background-color: #FFBC0D;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  font-size: 16px;\n  height: 170px;\n  width: 25vw;\n  min-width: 120px;\n  margin: 2px;\n  border-radius: 5px;\n  text-align: center;\n  position: relative; }\n\n.shop .grid-item h3 {\n    display: block;\n    margin: 5px 0 5px 0; }\n\n.shop .grid-item .button-div {\n    position: absolute;\n    margin-left: -50px;\n    left: 50%;\n    bottom: 10px; }\n\n.shop .grid-item button {\n    margin-top: 10px;\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    font-size: 1em;\n    width: 100px; }\n\n.shop .grid-item .btn-buy {\n    background-color: #DB0007;\n    color: #FFBC0D; }\n\n.shop .grid-item .btn-buy:hover {\n    cursor: pointer;\n    background-color: #9f0207;\n    color: #ba8603; }\n\n.shop .grid-item .btn-disabled {\n    background-color: grey;\n    color: black; }\n\n@media only screen and (max-width: 535px) {\n  .shop .grid-item {\n    flex-basis: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9DOlxcVXNlcnNcXFZpbGxlVmVya2tvbmVuXFxvbWF0XFxwcm9qZWt0aXRcXGFuZ3VsYXJcXGtpbmdidXJnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxzaG9wXFxzaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFSdEI7RUFZSSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBdEJ0QjtJQXlCTSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7O0FBMUJ6QjtJQThCTSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZLEVBQUE7O0FBakNsQjtJQXFDTSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVksRUFBQTs7QUExQ2xCO0lBOENNLHlCQUF5QjtJQUN6QixjQUFjLEVBQUE7O0FBL0NwQjtJQW1ETSxlQUFlO0lBQ2YseUJBQWdDO0lBQ2hDLGNBQXVCLEVBQUE7O0FBckQ3QjtJQXlETSxzQkFBc0I7SUFDdEIsWUFBWSxFQUFBOztBQUloQjtFQTlERjtJQWdFTSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wIHtcclxuXHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJDMEQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi1kaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWJ1eSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDc7XHJcbiAgICAgIGNvbG9yOiAjRkZCQzBEO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYnV5OmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyLCA3KTtcclxuICAgICAgY29sb3I6IHJnYigxODYsIDEzNCwgMyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1kaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM1cHgpIHtcclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

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
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ingredient.service */ "./src/app/services/ingredient.service.ts");
/* harmony import */ var _stores_user_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/user-store.service */ "./src/app/stores/user-store.service.ts");




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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ingredient_service__WEBPACK_IMPORTED_MODULE_2__["IngredientService"],
            _stores_user_store_service__WEBPACK_IMPORTED_MODULE_3__["UserStoreService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/stores/burger-store.service.ts":
/*!************************************************!*\
  !*** ./src/app/stores/burger-store.service.ts ***!
  \************************************************/
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
    BurgerStoreService.prototype.removeBurger = function () {
        this.ingredients = [];
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

/***/ "./src/app/stores/kitchen-store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/stores/kitchen-store.service.ts ***!
  \*************************************************/
/*! exports provided: KitchenStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenStoreService", function() { return KitchenStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var KitchenStoreService = /** @class */ (function () {
    function KitchenStoreService() {
        this._runningId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
    }
    Object.defineProperty(KitchenStoreService.prototype, "runningId", {
        get: function () {
            return this._runningId.getValue();
        },
        set: function (id) {
            this._runningId.next(id);
        },
        enumerable: true,
        configurable: true
    });
    KitchenStoreService.prototype.incrementId = function () {
        this.runningId += 1;
    };
    KitchenStoreService.prototype.decrementId = function () {
        this.runningId -= 1;
        if (this.runningId < 0) {
            this.runningId = 0;
        }
    };
    KitchenStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KitchenStoreService);
    return KitchenStoreService;
}());



/***/ }),

/***/ "./src/app/stores/user-store.service.ts":
/*!**********************************************!*\
  !*** ./src/app/stores/user-store.service.ts ***!
  \**********************************************/
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
        this._money = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
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