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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_valid_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/valid.service */ "./src/app/services/valid.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navbar2/navbar2.component */ "./src/app/components/navbar2/navbar2.component.ts");
/* harmony import */ var _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/adminpanel/adminpanel.component */ "./src/app/components/adminpanel/adminpanel.component.ts");
/* harmony import */ var _components_adminproperty_adminproperty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/adminproperty/adminproperty.component */ "./src/app/components/adminproperty/adminproperty.component.ts");
/* harmony import */ var _components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/adminusers/adminusers.component */ "./src/app/components/adminusers/adminusers.component.ts");
/* harmony import */ var _components_adminuser_adminuser_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/adminuser/adminuser.component */ "./src/app/components/adminuser/adminuser.component.ts");
/* harmony import */ var _components_header2_header2_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/header2/header2.component */ "./src/app/components/header2/header2.component.ts");
/* harmony import */ var _components_admindashbreadcomb_admindashbreadcomb_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admindashbreadcomb/admindashbreadcomb.component */ "./src/app/components/admindashbreadcomb/admindashbreadcomb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import { FlashMessagesModule } from 'angular2-flash-messages';








//import { HashLocationStrategy, LocationStrategy } from '@angular/common'
//{provide: LocationStrategy, useClass: HashLocationStrategy }
var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: 'admin', component: _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_21__["AdminpanelComponent"] },
    { path: 'admin/property', component: _components_adminproperty_adminproperty_component__WEBPACK_IMPORTED_MODULE_22__["AdminpropertyComponent"] },
    { path: 'admin/users', component: _components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_23__["AdminusersComponent"] },
    { path: 'admin/user/:id', component: _components_adminuser_adminuser_component__WEBPACK_IMPORTED_MODULE_24__["AdminuserComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_20__["Navbar2Component"],
                _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_21__["AdminpanelComponent"],
                _components_adminproperty_adminproperty_component__WEBPACK_IMPORTED_MODULE_22__["AdminpropertyComponent"],
                _components_adminusers_adminusers_component__WEBPACK_IMPORTED_MODULE_23__["AdminusersComponent"],
                _components_adminuser_adminuser_component__WEBPACK_IMPORTED_MODULE_24__["AdminuserComponent"],
                _components_header2_header2_component__WEBPACK_IMPORTED_MODULE_25__["Header2Component"],
                _components_admindashbreadcomb_admindashbreadcomb_component__WEBPACK_IMPORTED_MODULE_26__["AdmindashbreadcombComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_19__["NgFlashMessagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_valid_service__WEBPACK_IMPORTED_MODULE_16__["ValidService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admindashbreadcomb/admindashbreadcomb.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/admindashbreadcomb/admindashbreadcomb.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5kYXNoYnJlYWRjb21iL2FkbWluZGFzaGJyZWFkY29tYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admindashbreadcomb/admindashbreadcomb.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admindashbreadcomb/admindashbreadcomb.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Breadcomb area Start-->\n\t<div class=\"breadcomb-area\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"breadcomb-list\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<div class=\"breadcomb-wp\">\n\t\t\t\t\t\t\t\t\t<div class=\"breadcomb-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"notika-icon notika-windows\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"breadcomb-ctn\">\n\t\t\t\t\t\t\t\t\t\t<h2>Admin Dashboard</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Hamock</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-3\">\n\t\t\t\t\t\t\t\t<!--<div class=\"breadcomb-report\">\n\t\t\t\t\t\t\t\t\t<button data-toggle=\"tooltip\" data-placement=\"left\" title=\"Download Report\" class=\"btn\"><i class=\"notika-icon notika-sent\"></i></button>\n\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Breadcomb area End-->\n"

/***/ }),

/***/ "./src/app/components/admindashbreadcomb/admindashbreadcomb.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admindashbreadcomb/admindashbreadcomb.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdmindashbreadcombComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashbreadcombComponent", function() { return AdmindashbreadcombComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmindashbreadcombComponent = /** @class */ (function () {
    function AdmindashbreadcombComponent() {
    }
    AdmindashbreadcombComponent.prototype.ngOnInit = function () {
    };
    AdmindashbreadcombComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admindashbreadcomb',
            template: __webpack_require__(/*! ./admindashbreadcomb.component.html */ "./src/app/components/admindashbreadcomb/admindashbreadcomb.component.html"),
            styles: [__webpack_require__(/*! ./admindashbreadcomb.component.css */ "./src/app/components/admindashbreadcomb/admindashbreadcomb.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmindashbreadcombComponent);
    return AdmindashbreadcombComponent;
}());



/***/ }),

/***/ "./src/app/components/adminpanel/adminpanel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/adminpanel/adminpanel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5wYW5lbC9hZG1pbnBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/adminpanel/adminpanel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/adminpanel/adminpanel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<app-header2></app-header2>\n<app-admindashbreadcomb></app-admindashbreadcomb>\n\n<!-- Start Status area -->\n<div class=\"notika-status-area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30\">\n                    <div class=\"website-traffic-ctn\">\n                        <h2><span class=\"counter\">8</span></h2>\n                        <p>Total Users</p>\n                    </div>\n                    <!--<div class=\"sparkline-bar-stats1\">9,4,8,6,5,6,4,8,3,5,9,5</div>-->\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30\">\n                    <div class=\"website-traffic-ctn\">\n                        <h2><span class=\"counter\">30</span></h2>\n                        <p>Total Properties</p>\n                    </div>\n                    <!--<div class=\"sparkline-bar-stats2\">1,4,8,3,5,6,4,8,3,3,9,5</div>-->\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30 dk-res-mg-t-30\">\n                    <div class=\"website-traffic-ctn\">\n                        <h2><span class=\"counter\">20</span></h2>\n                        <p>Total Transactions</p>\n                    </div>\n                    <!--<div class=\"sparkline-bar-stats3\">4,2,8,2,5,6,3,8,3,5,9,5</div>-->\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"wb-traffic-inner notika-shadow sm-res-mg-t-30 tb-res-mg-t-30 dk-res-mg-t-30\">\n                    <div class=\"website-traffic-ctn\">\n                        <h2><span class=\"counter\">1,000</span></h2>\n                        <p>Total Support Tickets</p>\n                    </div>\n                    <!--<div class=\"sparkline-bar-stats4\">2,4,8,4,5,7,4,7,3,5,7,5</div>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Status area-->\n\n<!-- Start Email Statistic area-->\n    <div class=\"notika-email-post-area mg-tb-40\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"recent-post-wrapper notika-shadow sm-res-mg-t-30 tb-res-ds-n dk-res-ds\">\n                        <div class=\"recent-post-ctn\">\n                            <div class=\"recent-post-title\">\n                                <h2>Users</h2>\n                            </div>\n                        </div>\n                        <div class=\"recent-post-items\">\n                            <div class=\"recent-post-signle rct-pt-mg-wp\">\n                                <a href=\"#\">\n                                    <div class=\"recent-post-flex\">\n                                        <div class=\"recent-post-img\">\n                                            <img src=\"img/post/2.jpg\" alt=\"\" />\n                                        </div>\n                                        <div class=\"recent-post-it-ctn\">\n                                            <h2>{{user.name}}</h2>\n                                            <p>{{user.email}}</p>\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"recent-items-wp notika-shadow sm-res-mg-t-30\">\n                        <div class=\"rc-it-ltd\">\n                            <div class=\"recent-items-ctn\">\n                                <div class=\"recent-items-title\">\n                                    <h2>Properties</h2>\n                                </div>\n                            </div>\n                            <div class=\"recent-items-inn\">\n                                <table class=\"table table-inner table-vmiddle\">\n                                    <thead>\n                                        <tr>\n                                            <th></th>\n                                            <th></th>\n                                            <th style=\"width: 60px\"></th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n\n                                    </tbody>\n                                </table>\n                            </div>\n\t\t\t\t\t\t\t<div id=\"recent-items-chart\" class=\"flot-chart-items flot-chart vt-ct-it tb-rc-it-res\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Email Statistic area-->\n"

/***/ }),

/***/ "./src/app/components/adminpanel/adminpanel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminpanel/adminpanel.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelComponent", function() { return AdminpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminpanelComponent = /** @class */ (function () {
    function AdminpanelComponent(userService, ngFlashMessageService, router) {
        this.userService = userService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    AdminpanelComponent.prototype.ngOnInit = function () {
    };
    AdminpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminpanel',
            template: __webpack_require__(/*! ./adminpanel.component.html */ "./src/app/components/adminpanel/adminpanel.component.html"),
            styles: [__webpack_require__(/*! ./adminpanel.component.css */ "./src/app/components/adminpanel/adminpanel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminpanelComponent);
    return AdminpanelComponent;
}());



/***/ }),

/***/ "./src/app/components/adminproperty/adminproperty.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/adminproperty/adminproperty.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5wcm9wZXJ0eS9hZG1pbnByb3BlcnR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/adminproperty/adminproperty.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/adminproperty/adminproperty.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<app-header2></app-header2>\n<app-admindashbreadcomb></app-admindashbreadcomb>\n"

/***/ }),

/***/ "./src/app/components/adminproperty/adminproperty.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/adminproperty/adminproperty.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminpropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpropertyComponent", function() { return AdminpropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminpropertyComponent = /** @class */ (function () {
    function AdminpropertyComponent() {
    }
    AdminpropertyComponent.prototype.ngOnInit = function () {
    };
    AdminpropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminproperty',
            template: __webpack_require__(/*! ./adminproperty.component.html */ "./src/app/components/adminproperty/adminproperty.component.html"),
            styles: [__webpack_require__(/*! ./adminproperty.component.css */ "./src/app/components/adminproperty/adminproperty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminpropertyComponent);
    return AdminpropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/adminuser/adminuser.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/adminuser/adminuser.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-user-view {\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbnVzZXIvYWRtaW51c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWludXNlci9hZG1pbnVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtdXNlci12aWV3IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/adminuser/adminuser.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/adminuser/adminuser.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n\n<app-header2></app-header2>\n<app-admindashbreadcomb></app-admindashbreadcomb>\n\n<div class=\"contact-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <ng-flash-message></ng-flash-message>\n        <div class=\"contact-list single-user-view\">\n          <div class=\"contact-win\">\n            <div class=\"contact-img\">\n            </div>\n            <!--<div class=\"conct-sc-ic\">\n                <a class=\"btn\" href=\"#\"><i class=\"notika-icon notika-facebook\"></i></a>\n                <a class=\"btn\" href=\"#\"><i class=\"notika-icon notika-twitter\"></i></a>\n                <a class=\"btn\" href=\"#\"><i class=\"notika-icon notika-pinterest\"></i></a>\n            </div>-->\n          </div>\n          <div class=\"contact-ctn\">\n            <div class=\"contact-ad-hd\">\n\t\t\t\t\t\t        <h2>{{user.name}}</h2>\n                    <p>{{user.username}}</p>\n\t\t\t\t\t          <p class=\"ctn-ads\">{{user.email}}</p>\n\t\t\t\t\t\t</div>\n          </div>\n          <div class=\"social-st-list\">\n          </div>\n          <div class=\"\">\n              <h5>Balance:</h5>\n              <p>{{user.balance}}</p>\n          </div>\n          <div class=\"\">\n              <h5></h5>\n              <p><button class=\"btn btn-success notika-btn-primary waves-effect\" (click)=\"activateUser(user)\" >Send Activation Link</button></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/adminuser/adminuser.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/adminuser/adminuser.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminuserComponent", function() { return AdminuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminuserComponent = /** @class */ (function () {
    function AdminuserComponent(userService, route, ngFlashMessageService, router) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        /*this.userService.getUser(id)
          .subscribe(data => {
            this.users = data.msg;
            //console.log(data);
          });*/
        this.route.params.subscribe(function (params) {
            //console.log(params);
            _this.userService.getUser(params['id'])
                .subscribe(function (data) {
                _this.user = data.msg[0];
                //console.log(data);
            });
        });
    }
    AdminuserComponent.prototype.ngOnInit = function () {
    };
    AdminuserComponent.prototype.activateUser = function (user) {
        var _this = this;
        this.userService.activateUser(user)
            .subscribe(function (data) {
            //console.log("My Res - "+data.message);
            if (data.success) {
                ///user.active = true;
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg + ""],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                _this.router.navigate(['/admin/users']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg + ""],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
            }
        });
    };
    AdminuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminuser',
            template: __webpack_require__(/*! ./adminuser.component.html */ "./src/app/components/adminuser/adminuser.component.html"),
            styles: [__webpack_require__(/*! ./adminuser.component.css */ "./src/app/components/adminuser/adminuser.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminuserComponent);
    return AdminuserComponent;
}());



/***/ }),

/***/ "./src/app/components/adminusers/adminusers.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/adminusers/adminusers.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-data-container {\n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 1px 0.5px rgba(0,0,0,0.1);\n    margin-bottom: 20px;\n}\n\n.user-data-container p, .user-data-container h4, .user-data-container h5 {\n    margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbnVzZXJzL2FkbWludXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW51c2Vycy9hZG1pbnVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kYXRhLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMC41cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51c2VyLWRhdGEtY29udGFpbmVyIHAsIC51c2VyLWRhdGEtY29udGFpbmVyIGg0LCAudXNlci1kYXRhLWNvbnRhaW5lciBoNSB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/adminusers/adminusers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/adminusers/adminusers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<app-header2></app-header2>\n<app-admindashbreadcomb></app-admindashbreadcomb>\n    <!-- Data Table area Start-->\n    <div class=\"data-table-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <ng-flash-message></ng-flash-message>\n                    <div class=\"data-table-list\">\n                        <div class=\"basic-tb-hd\">\n                            <h2>Users</h2>\n                            <p>All Registered Users on the Hamock platform.</p>\n                        </div>\n                        <div class=\"table-responsive\">\n                            <table id=\"data-table-basic\" class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Full Name</th>\n                                        <th>Username</th>\n                                        <th>Email</th>\n                                        <th></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let user of users\">\n                                        <td>{{user.name}}</td>\n                                        <td>{{user.username}}</td>\n                                        <td>{{user.email}}</td>\n                                        <td><a class=\"btn btn-success notika-btn-success waves-effect\" [routerLink]=\"['/admin/user/'+user.username]\"  >View</a></td>\n\n                                    </tr>\n                                </tbody>\n                                <tfoot>\n                                    <tr>\n                                        <th>Full Name</th>\n                                        <th>Username</th>\n                                        <th>Email</th>\n                                        <th></th>\n\n                                    </tr>\n                                </tfoot>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Data Table area End-->\n\n              <!--<input type=\"button\" (click)=\"verifyUser(user._id)\" value=\"Activate\" class=\"btn btn-info\"> -->\n"

/***/ }),

/***/ "./src/app/components/adminusers/adminusers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminusers/adminusers.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusersComponent", function() { return AdminusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminusersComponent = /** @class */ (function () {
    function AdminusersComponent(userService, ngFlashMessageService) {
        var _this = this;
        this.userService = userService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data.msg;
            //console.log(data);
        });
    }
    AdminusersComponent.prototype.ngOnInit = function () {
    };
    AdminusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminusers',
            template: __webpack_require__(/*! ./adminusers.component.html */ "./src/app/components/adminusers/adminusers.component.html"),
            styles: [__webpack_require__(/*! ./adminusers.component.css */ "./src/app/components/adminusers/adminusers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], AdminusersComponent);
    return AdminusersComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--========== FOOTER ==========-->\n        <footer class=\"g-bg-color--dark\">\n            <!-- Links -->\n            <div class=\"g-hor-divider__dashed--white-opacity-lightest\">\n                <div class=\"container g-padding-y-80--xs\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-2 g-margin-b-20--xs g-margin-b-0--md\">\n                            <ul class=\"list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs\">\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" [routerLink]=\"['/home']\" >Home</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" [routerLink]=\"['/about']\" >About</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" [routerLink]=\"['/register']\" >Get Started</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" [routerLink]=\"['/contact']\" >Contact</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"col-sm-2 g-margin-b-20--xs g-margin-b-0--md\">\n                            <ul class=\"list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs\">\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" href=\"http://twitter.com/hamock/\">Twitter</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" href=\"http://facebook.com/hamock/\">Facebook</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" href=\"http://instagram.com/hamock/\">Instagram</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" href=\"http://linkedin.com/hamock/\">Linkedin</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"col-sm-2 g-margin-b-40--xs g-margin-b-0--md\">\n                            <ul class=\"list-unstyled g-ul-li-tb-5--xs g-margin-b-0--xs\">\n\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" [routerLink]=\"['/privacy']\" >Privacy Policy</a></li>\n                                <li><a class=\"g-font-size-15--xs g-color--white-opacity\" [routerLink]=\"['/terms']\" >Terms &amp; Conditions</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 s-footer__logo g-padding-y-50--xs g-padding-y-0--md\">\n                            <h3 class=\"g-font-size-18--xs g-color--white\">Hamock</h3>\n                            <p class=\"g-color--white-opacity\">Real estate platform that focuses on unlocking real estate capital in Africa by digitally enabling ease of transaction, transfer and secured ownership.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- End Links -->\n\n            <!-- Copyright -->\n            <div class=\"container g-padding-y-50--xs\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <a href=\"index.html\">\n                            <img class=\"g-width-100--xs g-height-auto--xs\" src=\"assets/img/hamock-text-logo-sm-white.png\" alt=\"Hamock Logo\">\n                        </a>\n                    </div>\n                    <div class=\"col-xs-6 g-text-right--xs\">\n                        <p class=\"g-font-size-14--xs g-margin-b-0--xs g-color--white-opacity-light\"><a [routerLink]=\"['/terms']\" >Hamock</a> Powered by: <a href=\"http://www.crestsage.com/\" target=\"_blank\" >Crestsage Ltd</a></p>\n                    </div>\n                </div>\n            </div>\n            <!-- End Copyright -->\n        </footer>\n        <!--========== END FOOTER ==========-->\n\n        <!-- Back To Top -->\n        <a href=\"javascript:void(0);\" class=\"s-back-to-top js__back-to-top\"></a>\n\n        <!--========== JAVASCRIPTS (Load javascripts at bottom, this will reduce page load time) ==========-->\n        <!-- Vendor -->\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.migrate.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.smooth-scroll.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.back-to-top.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/scrollbar/jquery.scrollbar.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/swiper/swiper.jquery.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/masonry/jquery.masonry.pkgd.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/masonry/imagesloaded.pkgd.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.equal-height.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.parallax.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/vendor/jquery.wow.min.js\"></script>\n\n        <!-- General Components and Settings -->\n        <script type=\"text/javascript\" src=\"assets/js/global.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/header-sticky.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/scrollbar.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/swiper.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/masonry.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/equal-height.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/parallax.min.js\"></script>\n        <script type=\"text/javascript\" src=\"assets/js/components/wow.min.js\"></script>\n        <!--========== END JAVASCRIPTS ==========-->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--========== SWIPER SLIDER ==========-->\n        <div class=\"s-swiper js__swiper-slider\">\n            <!-- Swiper Wrapper -->\n            <div class=\"swiper-wrapper\">\n                <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/14.jpg');\">\n                    <div class=\"container g-ver-center--xs\">\n                        <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <div class=\"g-margin-b-50--xs\">\n                                    <h1 class=\"g-font-size-32--xs g-font-size-45--sm g-font-size-60--md g-color--white\">Medical Services<br>that You Can Trust</h1>\n                                    <p class=\"g-font-size-18--xs g-font-size-22--sm g-color--white-opacity\">A clinic is a healthcare facility that is primarily focused on the care of outpatients.</p>\n                                </div>\n                                <a href=\"http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" class=\"text-uppercase s-btn s-btn--md s-btn--white-brd g-radius--50 g-padding-x-50--xs\">Read More</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/13.jpg');\">\n                    <div class=\"container g-text-right--xs g-ver-center--xs\">\n                        <div class=\"row\">\n                            <div class=\"col-md-7 col-md-offset-5\">\n                                <div class=\"g-margin-b-50--xs\">\n                                    <h2 class=\"g-font-size-32--xs g-font-size-45--sm g-font-size-55--md g-color--white\">Medical Excellence<br>Every Day</h2>\n                                    <p class=\"g-font-size-18--xs g-font-size-22--sm g-color--white-opacity\">Clinics can be privately operated or publicly managed and funded.</p>\n                                </div>\n                                <a href=\"http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" class=\"text-uppercase s-btn s-btn--md s-btn--white-brd g-radius--50 g-padding-x-50--xs\">Read More</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- End Swiper Wrapper -->\n\n            <!-- Pagination -->\n            <div class=\"s-swiper__pagination-v1 s-swiper__pagination-v1--bc s-swiper__pagination-v1--white js__swiper-pagination\"></div>\n        </div>\n        <!--========== END SWIPER SLIDER ==========-->\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header2/header2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/header2/header2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyMi9oZWFkZXIyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/header2/header2.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/header2/header2.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--========== top header ==========-->\n<div class=\"general-top-header dashboard-header\">\n    <!-- Swiper Wrapper -->\n    <div class=\"swiper-wrapper\">\n        <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/real-estate-bg-dark.jpg');\">\n            <div class=\"container g-ver-center--xs\">\n                <div class=\"row\">\n                    <div class=\"col-md-7\">\n                        <div class=\"g-margin-b-50--xs\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Swiper Wrapper -->\n"

/***/ }),

/***/ "./src/app/components/header2/header2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/header2/header2.component.ts ***!
  \*********************************************************/
/*! exports provided: Header2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header2Component", function() { return Header2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header2Component = /** @class */ (function () {
    function Header2Component() {
    }
    Header2Component.prototype.ngOnInit = function () {
    };
    Header2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header2',
            template: __webpack_require__(/*! ./header2.component.html */ "./src/app/components/header2/header2.component.html"),
            styles: [__webpack_require__(/*! ./header2.component.css */ "./src/app/components/header2/header2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Header2Component);
    return Header2Component;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!--========== SWIPER SLIDER ==========-->\n<div class=\"s-swiper js__swiper-slider\">\n    <!-- Swiper Wrapper -->\n    <div class=\"swiper-wrapper\">\n        <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/real-estate-bg.jpg');\">\n            <div class=\"container g-ver-center--xs\">\n                <div class=\"row\">\n                    <div class=\"col-md-7\">\n                        <div class=\"g-margin-b-50--xs\">\n                            <h1 class=\"g-font-size-32--xs g-font-size-45--sm g-font-size-60--md g-color--white\">Unlocking Real Estate Capital in Africa<br></h1>\n                            <p class=\"g-font-size-18--xs g-font-size-22--sm g-color--white-opacity\">Making Real Estate Transactions in Africa Hassle-free.</p>\n                        </div>\n                        <a [routerLink]=\"['/register']\" class=\"text-uppercase s-btn s-btn--md s-btn--white-brd g-radius--50 g-padding-x-50--xs\">Get Started</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/real-estate-bg-02.jpg');\">\n            <div class=\"container g-text-right--xs g-ver-center--xs\">\n                <div class=\"row\">\n                    <div class=\"col-md-7 col-md-offset-5\">\n                        <div class=\"g-margin-b-50--xs\">\n                            <h2 class=\"g-font-size-32--xs g-font-size-45--sm g-font-size-55--md g-color--white\">Digitalizing the African Real Estate Market<br></h2>\n                            <p class=\"g-font-size-18--xs g-font-size-22--sm g-color--white-opacity\">Secured Transactions on Blockchain.</p>\n                        </div>\n                        <a [routerLink]=\"['/about']\" class=\"text-uppercase s-btn s-btn--md s-btn--white-brd g-radius--50 g-padding-x-50--xs\">Learn More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Swiper Wrapper -->\n\n    <!-- Pagination -->\n    <div class=\"s-swiper__pagination-v1 s-swiper__pagination-v1--bc s-swiper__pagination-v1--white js__swiper-pagination\"></div>\n</div>\n<!--========== END SWIPER SLIDER ==========-->\n\n<!--========== PAGE CONTENT ==========-->\n<!-- Services -->\n<div class=\"container g-padding-y-80--xs g-padding-y-125--sm\">\n    <div class=\"row g-margin-b-10--xs\">\n        <div class=\"col-md-6 g-margin-b-60--xs g-margin-b-0--lg\">\n            <!-- Masonry Grid -->\n            <div class=\"row g-row-col--5 g-overflow--hidden js__masonry\">\n                <div class=\"col-xs-6 js__masonry-sizer\"></div>\n                <div class=\"col-xs-6 g-full-width--xs g-margin-b-10--xs g-margin-b-0--sm js__masonry-item\">\n                    <div class=\"wow fadeInDown\" data-wow-duration=\".3\" data-wow-delay=\".1s\">\n                        <img class=\"img-responsive\" src=\"assets/img/400x550/real-estate-feat-01.jpg\" alt=\"Image\">\n                    </div>\n                </div>\n                <div class=\"col-xs-6 g-full-width--xs g-margin-b-10--xs js__masonry-item\">\n                    <div class=\"wow fadeInRight\" data-wow-duration=\".3\" data-wow-delay=\".3s\">\n                        <img class=\"img-responsive\" src=\"assets/img/970x647/city-view-real-estate.jpg\" alt=\"Image\">\n                    </div>\n                </div>\n                <div class=\"col-xs-6 g-full-width--xs js__masonry-item\">\n                    <div class=\"wow fadeInRight\" data-wow-duration=\".3\" data-wow-delay=\".5s\">\n                        <img class=\"img-responsive\" src=\"assets/img/970x647/house-by-the-beach.jpg\" alt=\"Image\">\n                    </div>\n                </div>\n            </div>\n            <!-- End Masonry Grid -->\n        </div>\n        <div class=\"col-md-5 g-margin-b-10--xs g-margin-b-0--lg g-margin-t-10--lg g-margin-l-20--lg\">\n            <div class=\"g-margin-b-30--xs\">\n                <p class=\"text-uppercase g-font-size-14--xs g-font-weight--700 g-color--primary g-letter-spacing--2 g-margin-b-15--xs\">Hamock</p>\n                <h2 class=\"g-font-size-32--xs g-font-size-36--sm\">Register, Sell and Buy Assets Securely, all on one platform.</h2>\n                <p>Acquiring Real estate assets has been a tough process for many investors in Africa, considering the time it takes to complete the purchase process or validation process, This platform takes away the bulk of the stress involved and makes it easy to perform Real Estate transaction.</p>\n            </div>\n            <div class=\"row\">\n                <ul class=\"list-unstyled col-xs-4 g-full-width--xs g-ul-li-tb-5--xs g-margin-b-20--xs g-margin-b-0--sm\">\n                    <li><i class=\"g-font-size-12--xs g-color--primary g-margin-r-10--xs ti-check\"></i>Fast</li>\n\n                </ul>\n                <ul class=\"list-unstyled col-xs-4 g-full-width--xs g-ul-li-tb-5--xs g-margin-b-20--xs g-margin-b-0--sm\">\n                    <li><i class=\"g-font-size-12--xs g-color--primary g-margin-r-10--xs ti-check\"></i>Secure</li>\n\n                </ul>\n                <ul class=\"list-unstyled col-xs-4 g-full-width--xs g-ul-li-tb-5--xs\">\n                    <li><i class=\"g-font-size-12--xs g-color--primary g-margin-r-10--xs ti-check\"></i>Easy</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Services -->\n\n<!-- Process -->\n<div class=\"g-bg-color--primary-ltr\">\n    <div class=\"container g-padding-y-80--xs g-padding-y-125--sm\">\n        <div class=\"g-text-center--xs g-margin-b-100--xs\">\n            <p class=\"text-uppercase g-font-size-14--xs g-font-weight--700 g-color--white-opacity g-letter-spacing--2 g-margin-b-25--xs\"></p>\n            <h2 class=\"g-font-size-32--xs g-font-size-36--sm g-color--white\">How it Works</h2>\n        </div>\n        <ul class=\"list-inline row g-margin-b-100--xs\">\n            <!-- Process -->\n            <li class=\"col-sm-3 col-xs-6 g-full-width--xs s-process-v1 g-margin-b-60--xs g-margin-b-0--md\">\n                <div class=\"center-block g-text-center--xs\">\n                    <div class=\"g-margin-b-30--xs\">\n                        <span class=\"g-display-inline-block--xs g-width-100--xs g-height-100--xs g-font-size-38--xs g-color--primary g-bg-color--white g-box-shadow__dark-lightest-v4 g-padding-x-20--xs g-padding-y-20--xs g-radius--circle\">01</span>\n                    </div>\n                    <div class=\"g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-color--white\">Register</h3>\n                        <p class=\"g-color--white-opacity\">Create Account/Sign in to the platform.</p>\n                    </div>\n                </div>\n            </li>\n            <!-- End Process -->\n\n            <!-- Process -->\n            <li class=\"col-sm-3 col-xs-6 g-full-width--xs s-process-v1 g-margin-b-60--xs g-margin-b-0--md\">\n                <div class=\"center-block g-text-center--xs\">\n                    <div class=\"g-margin-b-30--xs\">\n                        <span class=\"g-display-inline-block--xs g-width-100--xs g-height-100--xs g-font-size-38--xs g-color--primary g-bg-color--white g-box-shadow__dark-lightest-v4 g-padding-x-20--xs g-padding-y-20--xs g-radius--circle\">02</span>\n                    </div>\n                    <div class=\"g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-color--white\">Browse Properties</h3>\n                        <p class=\"g-color--white-opacity\">Look through the platform to see available properties</p>\n                    </div>\n                </div>\n            </li>\n            <!-- End Process -->\n\n            <!-- Process -->\n            <li class=\"col-sm-3 col-xs-6 g-full-width--xs s-process-v1 g-margin-b-60--xs g-margin-b-0--sm\">\n                <div class=\"center-block g-text-center--xs\">\n                    <div class=\"g-margin-b-30--xs\">\n                        <span class=\"g-display-inline-block--xs g-width-100--xs g-height-100--xs g-font-size-38--xs g-color--primary g-bg-color--white g-box-shadow__dark-lightest-v4 g-padding-x-20--xs g-padding-y-20--xs g-radius--circle\">03</span>\n                    </div>\n                    <div class=\"g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-color--white\">Buy Property</h3>\n                        <p class=\"g-color--white-opacity\">Purchase your property of interest.</p>\n                    </div>\n                </div>\n            </li>\n            <!-- End Process -->\n\n            <!-- Process -->\n            <li class=\"col-sm-3 col-xs-6 g-full-width--xs s-process-v1\">\n                <div class=\"center-block g-text-center--xs\">\n                    <div class=\"g-margin-b-30--xs\">\n                        <span class=\"g-display-inline-block--xs g-width-100--xs g-height-100--xs g-font-size-38--xs g-color--primary g-bg-color--white g-box-shadow__dark-lightest-v4 g-padding-x-20--xs g-padding-y-20--xs g-radius--circle\">04</span>\n                    </div>\n                    <div class=\"g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-color--white\">Get Proof of Asset</h3>\n                        <p class=\"g-color--white-opacity\">All needed document, would be made available without stress.</p>\n                    </div>\n                </div>\n            </li>\n            <!-- End Process -->\n        </ul>\n\n        <div class=\"g-text-center--xs\">\n            <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".1s\">\n                <a [routerLink]=\"['/register']\" class=\"text-uppercase s-btn s-btn--md s-btn--white-bg g-radius--50\">GET STARTED</a>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Process -->\n\n<!-- Features -->\n<div class=\"g-hor-divider__solid--sky-light\">\n    <div class=\"container g-padding-y-80--xs g-padding-y-125--sm\">\n        <div class=\"row g-margin-b-60--xs g-margin-b-70--md\">\n\n            <div class=\"col-sm-4 g-margin-b-60--xs g-margin-b-0--md\">\n              <!-- Media -->\n              <div class=\"clearfix\">\n                  <div class=\"g-media g-width-60--xs\">\n                      <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".3s\">\n                        <img class=\"img-responsive\" src=\"assets/img/icons/register-asset.png\" alt=\"Register Properties\" />\n\n                      </div>\n                  </div>\n                  <div class=\"g-media__body g-padding-x-20--xs\">\n                      <h3 class=\"g-font-size-18--xs g-margin-b-10--xs\">Register Properties</h3>\n                      <p class=\"g-margin-b-0--xs\">Register your properties and ensure that all newly purchased properties are registered on this platform</p>\n                  </div>\n              </div>\n              <!-- End Media -->\n            </div>\n            <div class=\"col-sm-4 g-margin-b-60--xs g-margin-b-0--md\">\n                <!-- Media -->\n                <div class=\"clearfix\">\n                    <div class=\"g-media g-width-60--xs\">\n                        <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".1s\">\n                            <img class=\"img-responsive\" src=\"assets/img/icons/browse-asset.png\" alt=\"Browse Properties\" />\n                        </div>\n                    </div>\n                    <div class=\"g-media__body g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-margin-b-10--xs\">Browse Properties</h3>\n                        <p class=\"g-margin-b-0--xs\">Check out properties on our platform.</p>\n                    </div>\n                </div>\n                <!-- End Media -->\n            </div>\n            <div class=\"col-sm-4\">\n                <!-- Media -->\n                <div class=\"clearfix\">\n                    <div class=\"g-media g-width-60--xs\">\n                        <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".2s\">\n                          <img class=\"img-responsive\" src=\"assets/img/icons/transact-asset.png\" alt=\"Buy and Sell Properties\" />\n\n                        </div>\n                    </div>\n                    <div class=\"g-media__body g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-margin-b-10--xs\">Buy / Sell Properties</h3>\n                        <p class=\"g-margin-b-0--xs\">Perform basic Real Estate transactions on the platform, buy properties and sell them with Ease.</p>\n                    </div>\n                </div>\n                <!-- End Media -->\n            </div>\n        </div>\n\n        <div class=\"row g-margin-b-60--xs g-margin-b-70--md\">\n            <div class=\"col-sm-4 g-margin-b-60--xs g-margin-b-0--md\">\n                <!-- Media -->\n                <div class=\"clearfix\">\n                    <div class=\"g-media g-width-60--xs\">\n                        <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".4s\">\n                            <img class=\"img-responsive\" src=\"assets/img/icons/secure-asset.png\" alt=\"Secure Transaction\" />\n                        </div>\n                    </div>\n                    <div class=\"g-media__body g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-margin-b-10--xs\">Secure Transactions</h3>\n                        <p class=\"g-margin-b-0--xs\">All Transactions are carried on the blockchain network and they are secured and safe.</p>\n                    </div>\n                </div>\n                <!-- End Media -->\n            </div>\n            <div class=\"col-sm-4 g-margin-b-60--xs g-margin-b-0--md\">\n                <!-- Media -->\n                <div class=\"clearfix\">\n                    <div class=\"g-media g-width-60--xs\">\n                        <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".5s\">\n                            <img class=\"img-responsive\" src=\"assets/img/icons/insight-asset.png\" alt=\"Obtain Data Driven Insight on Properties\" />\n                        </div>\n                    </div>\n                    <div class=\"g-media__body g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-margin-b-10--xs\">Obtain Data Driven Insights</h3>\n                        <p class=\"g-margin-b-0--xs\">Engaging the power of Artificial Intelligence, data driven insights could be pulled from all asset data to help with Real Estate Investment decisions.</p>\n                    </div>\n                </div>\n                <!-- End Media -->\n            </div>\n            <div class=\"col-sm-4\">\n                <!-- Media -->\n                <div class=\"clearfix\">\n                    <div class=\"g-media g-width-60--xs\">\n                        <div class=\"wow fadeInUp\" data-wow-duration=\".3\" data-wow-delay=\".6s\">\n                            <img class=\"img-responsive\" src=\"assets/img/icons/getfunding-asset.png\" alt=\"Get Funding Properties\" />\n                        </div>\n                    </div>\n                    <div class=\"g-media__body g-padding-x-20--xs\">\n                        <h3 class=\"g-font-size-18--xs g-margin-b-10--xs\">Obtaining Funding</h3>\n                        <p class=\"g-margin-b-0--xs\">Financial Service Institutions would find it easy to verify properties which are to be used to obtain funding.</p>\n                    </div>\n                </div>\n                <!-- End Media -->\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Features -->\n\n<!-- Parallax -->\n<div class=\"s-promo-block-v5 g-bg-position--center js__parallax-window\" style=\"background: url(assets/img/1920x1080/real-estate-bg.jpg) 50% 0 no-repeat fixed;\">\n    <div class=\"container g-text-center--xs g-padding-y-80--xs g-padding-y-125--sm\">\n        <div class=\"g-margin-b-80--xs\">\n            <h2 class=\"g-font-size-40--xs g-font-size-50--sm g-font-size-60--md g-color--white\">Real Estate Transactions made easy</h2>\n        </div>\n        <a [routerLink]=\"['/register']\" class=\"text-uppercase s-btn s-btn--md s-btn--white-brd g-radius--50\">Get Started</a>\n    </div>\n</div>\n<!-- End Parallax -->\n\n<!--========== END PAGE CONTENT ==========-->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!--========== top header ==========-->\n<div class=\"general-top-header\">\n    <!-- Swiper Wrapper -->\n    <div class=\"swiper-wrapper\">\n        <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/real-estate-bg-dark.jpg');\">\n            <div class=\"container g-ver-center--xs\">\n                <div class=\"row\">\n                    <div class=\"col-md-7\">\n                        <div class=\"g-margin-b-50--xs\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Swiper Wrapper -->\n</div>\n\n<!-- Form -->\n<div id=\"js__scroll-to-appointment\" class=\"g-bg-color--sky-light g-padding-y-80--xs g-padding-y-125--sm\">\n    <div class=\"container flashmsg\">\n      <ng-flash-message></ng-flash-message>\n    </div>\n\n    <div class=\"container g-bg-color--white g-box-shadow__dark-lightest-v3 custom-sm-form-container\">\n        <div class=\"row\">\n            <!-- Form -->\n            <div class=\"col-md-12 js__form-eqaul-height-v1\">\n                <div class=\"g-padding-x-40--xs g-padding-y-50--xs\">\n                    <h2 class=\"g-font-size-24--xs g-color--primary g-margin-b-50--xs\">Sign In</h2>\n                    <form (submit)=\"onLoginSubmit()\" class=\"custom-form\">\n                        <div class=\"row g-margin-b-30--xs g-margin-b-50--md\">\n                            <div class=\"col-sm-12\">\n                                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control s-form-v4__input g-padding-l-0--xs\" placeholder=\"* Username\">\n                            </div>\n\n                            <div class=\"col-sm-12 g-margin-b-30--xs g-margin-b-0--md\">\n                                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control s-form-v4__input g-padding-l-0--xs\" placeholder=\"* Password\">\n                            </div>\n                        </div>\n                        <div class=\"g-text-center--xs\">\n                            <button type=\"submit\" class=\"text-uppercase s-btn s-btn--md s-btn--primary-bg g-radius--50 g-padding-x-70--xs g-margin-b-20--xs\">SIGN IN</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- End Form -->\n\n\n        </div>\n    </div>\n</div>\n<!-- End Form -->\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, ngFlashMessageService, router) {
        this.authService = authService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            console.log(data.message);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ['You are now logged in'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [data.message],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--========== HEADER V2 ==========-->\n        <header class=\"navbar-fixed-top s-header-v2 js__header-sticky\">\n            <!-- Navbar -->\n            <nav class=\"s-header-v2__navbar\">\n                <div class=\"container g-display-table--lg\">\n                    <!-- Navbar Row -->\n                    <div class=\"s-header-v2__navbar-row\">\n                        <!-- Brand and toggle get grouped for better mobile display -->\n                        <div class=\"s-header-v2__navbar-col\">\n                            <button type=\"button\" class=\"collapsed s-header-v2__toggle\" data-toggle=\"collapse\" data-target=\"#nav-collapse\" aria-expanded=\"false\">\n                                <span class=\"s-header-v2__toggle-icon-bar\"></span>\n                            </button>\n                        </div>\n\n                        <div class=\"s-header-v2__navbar-col s-header-v2__navbar-col-width--180\">\n                            <!-- Logo -->\n                            <div class=\"s-header-v2__logo\">\n                                <a [routerLink]=\"['/']\" class=\"s-header-v2__logo-link\">\n                                    <img class=\"s-header-v2__logo-img s-header-v2__logo-img--default\" src=\"assets/img/hamock-text-logo-sm-white.png\" alt=\"Hamock Logo\">\n                                    <img class=\"s-header-v2__logo-img s-header-v2__logo-img--shrink\" src=\"assets/img/hamock-text-logo-sm-cx.png\" alt=\"Hamock Logo\">\n                                </a>\n                            </div>\n                            <!-- End Logo -->\n                        </div>\n\n                        <div class=\"s-header-v2__navbar-col s-header-v2__navbar-col--right\">\n                            <!-- Collect the nav links, forms, and other content for toggling -->\n                            <div class=\"collapse navbar-collapse s-header-v2__navbar-collapse\" id=\"nav-collapse\">\n                                <ul class=\"s-header-v2__nav\">\n                                    <!-- Home -->\n                                    <li class=\"dropdown s-header-v2__nav-item\" >\n                                        <a  [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/']\"  class=\"s-header-v2__nav-link\" data-toggle=\"dropdown\" role=\"button\"> Home</a>\n                                    </li>\n                                    <!-- End Home -->\n\n                                    <!-- Pages -->\n                                    <li class=\"dropdown s-header-v2__nav-item s-header-v2__dropdown-on-hover\">\n                                        <a href=\"javascript:void(0);\" class=\"dropdown-toggle s-header-v2__nav-link\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" >Trade <span class=\"g-font-size-10--xs g-margin-l-5--xs ti-angle-down\"></span></a>\n                                        <ul class=\"dropdown-menu s-header-v2__dropdown-menu\">\n                                            <li><a  [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/buy-property']\" class=\"s-header-v2__dropdown-menu-link\">Buy Property</a></li>\n                                            <li ><a  [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/sell-property']\"  class=\"s-header-v2__dropdown-menu-link\">Sell  Property</a></li>\n                                        </ul>\n                                    </li>\n                                    <!-- End Pages -->\n\n                                    <li class=\"s-header-v2__nav-item\" ><a  [routerLink]=\"['/about']\" [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"s-header-v2__nav-link\">About</a></li>\n                                    <li class=\"s-header-v2__nav-item\"><a  [routerLink]=\"['/login']\" [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\"  class=\"s-header-v2__nav-link\">Sign In</a></li>\n                                    <li class=\"s-header-v2__nav-item\"><a  [routerLink]=\"['/register']\" [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"s-header-v2__nav-link\">Create Account</a></li>\n                                    <li class=\"s-header-v2__nav-item\" ><a [routerLink]=\"['/contacts']\" [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"s-header-v2__nav-link s-header-v2__nav-link--dark\">Contacts</a></li>\n                                </ul>\n                            </div>\n                            <!-- End Nav Menu -->\n                        </div>\n                    </div>\n                    <!-- End Navbar Row -->\n                </div>\n            </nav>\n            <!-- End Navbar -->\n        </header>\n        <!--========== END HEADER V2 ==========-->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar2/navbar2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/navbar2/navbar2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyMi9uYXZiYXIyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navbar2/navbar2.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navbar2/navbar2.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--========== HEADER V2 ==========-->\n<header class=\"navbar-fixed-top s-header-v2 js__header-sticky navbar-v2\">\n    <!-- Navbar -->\n    <nav class=\"s-header-v2__navbar\">\n        <div class=\"container g-display-table--lg\">\n            <!-- Navbar Row -->\n            <div class=\"s-header-v2__navbar-row\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"s-header-v2__navbar-col\">\n                    <button type=\"button\" class=\"collapsed s-header-v2__toggle\" data-toggle=\"collapse\" data-target=\"#nav-collapse\" aria-expanded=\"false\">\n                        <span class=\"s-header-v2__toggle-icon-bar\"></span>\n                    </button>\n                </div>\n\n                <div class=\"s-header-v2__navbar-col s-header-v2__navbar-col-width--180\">\n                    <!-- Logo -->\n                    <div class=\"s-header-v2__logo\">\n                        <a [routerLink]=\"['/']\" class=\"s-header-v2__logo-link\">\n                            <img class=\"s-header-v2__logo-img s-header-v2__logo-img--default\" src=\"assets/img/hamock-text-logo-sm-white.png\" alt=\"Hamock Logo\">\n                            <img class=\"s-header-v2__logo-img s-header-v2__logo-img--shrink\" src=\"assets/img/hamock-text-logo-sm-cx.png\" alt=\"Hamock Logo\">\n                        </a>\n                    </div>\n                    <!-- End Logo -->\n                </div>\n\n                <div class=\"s-header-v2__navbar-col s-header-v2__navbar-col--right\">\n                    <!-- Collect the nav links, forms, and other content for toggling -->\n                    <div class=\"collapse navbar-collapse s-header-v2__navbar-collapse\" id=\"nav-collapse\">\n                        <ul class=\"s-header-v2__nav\">\n                            <!-- Home -->\n                            <li class=\"dropdown s-header-v2__nav-item\" >\n                                <a [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/admin']\"  class=\"s-header-v2__nav-link\" data-toggle=\"dropdown\" role=\"button\">Admin Dashboard</a>\n                            </li>\n                            <li class=\"dropdown s-header-v2__nav-item\" >\n                                <a [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/admin/properties']\"  class=\"s-header-v2__nav-link\" data-toggle=\"dropdown\" role=\"button\">Property</a>\n                            </li>\n\n                            <li class=\"dropdown s-header-v2__nav-item\" >\n                                <a  [routerLinkActive]=\"['-is-active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/admin/users']\"  class=\"s-header-v2__nav-link\" data-toggle=\"dropdown\" role=\"button\">Users</a>\n                            </li>\n\n                        </ul>\n                    </div>\n                    <!-- End Nav Menu -->\n                </div>\n            </div>\n            <!-- End Navbar Row -->\n        </div>\n    </nav>\n    <!-- End Navbar -->\n</header>\n<!--========== END HEADER V2 ==========-->\n"

/***/ }),

/***/ "./src/app/components/navbar2/navbar2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar2/navbar2.component.ts ***!
  \*********************************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Navbar2Component = /** @class */ (function () {
    function Navbar2Component() {
    }
    Navbar2Component.prototype.ngOnInit = function () {
    };
    Navbar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar2',
            template: __webpack_require__(/*! ./navbar2.component.html */ "./src/app/components/navbar2/navbar2.component.html"),
            styles: [__webpack_require__(/*! ./navbar2.component.css */ "./src/app/components/navbar2/navbar2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Navbar2Component);
    return Navbar2Component;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!--========== top header ==========-->\n<div class=\"general-top-header\">\n    <!-- Swiper Wrapper -->\n    <div class=\"swiper-wrapper\">\n        <div class=\"s-promo-block-v4 g-fullheight--xs g-bg-position--center swiper-slide\" style=\"background: url('assets/img/1920x1080/real-estate-bg-dark.jpg');\">\n            <div class=\"container g-ver-center--xs\">\n                <div class=\"row\">\n                    <div class=\"col-md-7\">\n                        <div class=\"g-margin-b-50--xs\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End Swiper Wrapper -->\n</div>\n\n<!-- Form -->\n<div id=\"js__scroll-to-appointment\" class=\"g-bg-color--sky-light g-padding-y-80--xs g-padding-y-125--sm\">\n    <div class=\"container flashmsg\">\n      <ng-flash-message></ng-flash-message>\n    </div>\n\n    <div class=\"container g-bg-color--white g-box-shadow__dark-lightest-v3 custom-sm-form-container\">\n        <div class=\"row\">\n            <!-- Form -->\n            <div class=\"col-md-12 js__form-eqaul-height-v1\">\n                <div class=\"g-padding-x-40--xs g-padding-y-50--xs\">\n                    <h2 class=\"g-font-size-24--xs g-color--primary g-margin-b-50--xs\">Create an account</h2>\n                    <form (submit)=\"onRegisterSubmit()\" class=\"custom-form\">\n                        <div class=\"row g-margin-b-30--xs g-margin-b-50--md\">\n                            <div class=\"col-sm-12 g-margin-b-30--xs g-margin-b-0--md\">\n                                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control s-form-v4__input g-padding-l-0--xs\" placeholder=\"* Full Name\">\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control s-form-v4__input g-padding-l-0--xs\" placeholder=\"* Username\">\n                            </div>\n                            <div class=\"col-sm-12 g-margin-b-30--xs g-margin-b-0--md\">\n                                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control s-form-v4__input g-padding-l-0--xs\" placeholder=\"* Email\">\n                            </div>\n                            <div class=\"col-sm-12 g-margin-b-30--xs g-margin-b-0--md\">\n                                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control s-form-v4__input g-padding-l-0--xs\" placeholder=\"* Password\">\n                            </div>\n                        </div>\n                        <div class=\"g-text-center--xs\">\n                            <button type=\"submit\" class=\"text-uppercase s-btn s-btn--md s-btn--primary-bg g-radius--50 g-padding-x-70--xs g-margin-b-20--xs\">CREATE ACCOUNT</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- End Form -->\n\n\n        </div>\n    </div>\n</div>\n<!-- End Form -->\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_valid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/valid.service */ "./src/app/services/valid.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    //private flashMessage: FlashMessagesService
    function RegisterComponent(validService, ngFlashMessageService, authService, router) {
        this.validService = validService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //Required Fields
        if (!this.validService.validRegister(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Please fill in all fields"],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            return false;
        }
        //Validate Emails
        if (!this.validService.validEmail(user.email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Please use a valid email"],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["You are now registered and can log in"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Something went wrong"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_valid_service__WEBPACK_IMPORTED_MODULE_1__["ValidService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/auth', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Observable';
//import { catchError, map, tap } from 'rxjs/operators';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    /*getUsers(): Observable<User[]>{
      return this.http.get<User[]>('http://localhost:6001/users/list')
        .pipe(
          tap(_ => console.log('fetched users'))
        );
        //return this.http.get('http://localhost:6001/users/list')
          //.map(res =>res.json());
    }
  
    getUser(id): Observable<User[]>{
      return this.http.get<User[]>('http://localhost:6001/users/list/'+id)
        .pipe(
          tap(_ => console.log('Fetch this user'))
        );
    }*/
    UserService.prototype.getUsers = function () {
        return this.http.get('users/list');
        //.map(res => console.log(res));
        //return this.http.get('http://localhost:6001/users/list')
        //.map(res =>res.json());
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get('users/list/' + id);
    };
    UserService.prototype.activateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/verify', user, { headers: headers });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/valid.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/valid.service.ts ***!
  \*******************************************/
/*! exports provided: ValidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidService", function() { return ValidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidService = /** @class */ (function () {
    function ValidService() {
    }
    ValidService.prototype.validRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidService.prototype.validEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidService);
    return ValidService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ibukunoluwa/hammock-watson/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map