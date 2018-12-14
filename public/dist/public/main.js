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

/***/ "./src/app/add-player/add-player.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-player/add-player.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#name.ng-valid {\n    outline: 1px solid green;\n}\n\n.invalid {\n    color: red;\n    font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBsYXllci9hZGQtcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wbGF5ZXIvYWRkLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hbWUubmctdmFsaWQge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLmludmFsaWQge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-player/add-player.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-player/add-player.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h2>Add Player</h2>\n  <form (submit) = 'onSubmit()'>\n    Player Name: <input id = 'name' type=\"text\" name = 'name' [(ngModel)] = 'playerToAdd.name' required minlength=\"2\" #name = 'ngModel'>\n    Preferred Position: <input type=\"text\" name='position' [(ngModel)] = 'playerToAdd.position'>\n    <input type=\"submit\" value=\"Add\" [disabled] = \"!name.valid\">\n  </form>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/add-player/add-player.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-player/add-player.component.ts ***!
  \****************************************************/
/*! exports provided: AddPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponent", function() { return AddPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
        this.playerToAdd = { name: "", position: "" };
    };
    AddPlayerComponent.prototype.onSubmit = function () {
        var newPlayer = this._httpService.newPlayer(this.playerToAdd);
        newPlayer.subscribe(function (data) {
            console.log(data);
        });
        this.playerToAdd = { name: "", position: "" };
        this._router.navigate(['/manage/list']);
    };
    AddPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-player',
            template: __webpack_require__(/*! ./add-player.component.html */ "./src/app/add-player/add-player.component.html"),
            styles: [__webpack_require__(/*! ./add-player.component.css */ "./src/app/add-player/add-player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());



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
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
/* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-player/add-player.component */ "./src/app/add-player/add-player.component.ts");
/* harmony import */ var _player_management_player_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-management/player-management.component */ "./src/app/player-management/player-management.component.ts");
/* harmony import */ var _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-status/player-status.component */ "./src/app/player-status/player-status.component.ts");







var routes = [
    { path: 'manage', component: _player_management_player_management_component__WEBPACK_IMPORTED_MODULE_5__["PlayerManagementComponent"], children: [
            { path: 'addPlayer', component: _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_4__["AddPlayerComponent"] },
            { path: 'list', component: _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__["PlayerListComponent"] }
        ] },
    { path: 'status', component: _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_6__["PlayerStatusComponent"] }
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

module.exports = "<div class = 'container'>\n  <a [routerLink] = \"['/manage']\">Manager Players</a>   |   <a [routerLink] = \"['/status']\">Manage Player Status</a>\n</div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'public';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/manage/list']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_management_player_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-management/player-management.component */ "./src/app/player-management/player-management.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
/* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-player/add-player.component */ "./src/app/add-player/add-player.component.ts");
/* harmony import */ var _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./player-status/player-status.component */ "./src/app/player-status/player-status.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _player_management_player_management_component__WEBPACK_IMPORTED_MODULE_7__["PlayerManagementComponent"],
                _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_8__["PlayerListComponent"],
                _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__["AddPlayerComponent"],
                _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_10__["PlayerStatusComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.all = function () {
        return this._http.get('/players');
    };
    HttpService.prototype.newPlayer = function (obj) {
        return this._http.post('/new', obj);
    };
    HttpService.prototype.updatePlayer = function (id, game, status) {
        return this._http.get('/update/' + id + "/" + game + '/' + status);
    };
    HttpService.prototype.delete = function (obj) {
        return this._http.post('/delete', obj);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/player-list/player-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/player-list/player-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/player-list/player-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/player-list/player-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead *ngIf = 'allPlayers.length > 0'>\n    <tr>\n      <td>Player Name</td>\n      <td>Preferred Position</td>\n      <td>Actions</td>\n    </tr>\n  </thead>\n  <tbody *ngIf = 'allPlayers.length > 0'>\n    <tr *ngFor = 'let player of allPlayers'>\n      <td><a>{{player.name}}</a></td>\n      <td>{{player.position}}</td>\n      <td><button (click) = 'confirmDelete(player._id)'>Delete</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/player-list/player-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/player-list/player-list.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(_httpService) {
        this._httpService = _httpService;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var self = this;
        this.allPlayers = [];
        var all = this._httpService.all();
        all.subscribe(function (data) {
            self.allPlayers = data.data;
        });
    };
    PlayerListComponent.prototype.confirmDelete = function (id) {
        if (confirm("Are you sure you want to delete this player?")) {
            for (var i = 0; i < this.allPlayers.length; i++) {
                if (this.allPlayers[i]._id == id) {
                    this.allPlayers.splice(i, 1);
                }
            }
            var response = this._httpService.delete({ id: id });
            response.subscribe(function (data) {
                console.log(data);
            });
        }
    };
    PlayerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-list',
            template: __webpack_require__(/*! ./player-list.component.html */ "./src/app/player-list/player-list.component.html"),
            styles: [__webpack_require__(/*! ./player-list.component.css */ "./src/app/player-list/player-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/player-management/player-management.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/player-management/player-management.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1tYW5hZ2VtZW50L3BsYXllci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/player-management/player-management.component.html":
/*!********************************************************************!*\
  !*** ./src/app/player-management/player-management.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <a [routerLink] = \"['list']\">List</a>  |  <a [routerLink] = \"['addPlayer']\">Add Player</a>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/player-management/player-management.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/player-management/player-management.component.ts ***!
  \******************************************************************/
/*! exports provided: PlayerManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerManagementComponent", function() { return PlayerManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerManagementComponent = /** @class */ (function () {
    function PlayerManagementComponent() {
    }
    PlayerManagementComponent.prototype.ngOnInit = function () {
    };
    PlayerManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-management',
            template: __webpack_require__(/*! ./player-management.component.html */ "./src/app/player-management/player-management.component.html"),
            styles: [__webpack_require__(/*! ./player-management.component.css */ "./src/app/player-management/player-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerManagementComponent);
    return PlayerManagementComponent;
}());



/***/ }),

/***/ "./src/app/player-status/player-status.component.css":
/*!***********************************************************!*\
  !*** ./src/app/player-status/player-status.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".undecided {\n    background-color: yellow;\n}\n\n.not_playing {\n    background-color: red;\n    \n}\n\n.playing {\n    background-color: green;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyLXN0YXR1cy9wbGF5ZXItc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxzQkFBc0I7O0NBRXpCOztBQUVEO0lBQ0ksd0JBQXdCOztDQUUzQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1zdGF0dXMvcGxheWVyLXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuZGVjaWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4ubm90X3BsYXlpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBcbn1cblxuLnBsYXlpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/player-status/player-status.component.html":
/*!************************************************************!*\
  !*** ./src/app/player-status/player-status.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Player Status - Game {{gameNumber}}</h1>\n\n<button (click) = 'changeGame(1)'>Game 1</button> | <button (click) = 'changeGame(2)'>Game 2</button> | <button (click) = 'changeGame(3)'>Game 3</button>\n\n<table>\n  <thead>\n    <tr>\n      <td>Player Name</td>\n      <td>Actions</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = 'let player of allPlayers'>\n      <td>{{player.name}}</td>\n      <td>\n        <button [ngClass] = \"{'playing' : player.games[gameNumber - 1].status == 'playing'}\" (click) = 'changeStatus(player._id, gameNumber, \"playing\")'>Playing</button>\n        <button [ngClass] = \"{'not_playing' : player.games[gameNumber - 1].status == 'not_playing'}\" (click) = 'changeStatus(player._id, gameNumber, \"not_playing\")'>Not Playing</button>\n        <button [ngClass] = \"{'undecided' : player.games[gameNumber - 1].status == 'undecided'}\" (click) = 'changeStatus(player._id, gameNumber, \"undecided\")'>Undecided</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/player-status/player-status.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-status/player-status.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatusComponent", function() { return PlayerStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var PlayerStatusComponent = /** @class */ (function () {
    function PlayerStatusComponent(_httpService) {
        this._httpService = _httpService;
    }
    PlayerStatusComponent.prototype.ngOnInit = function () {
        this.gameNumber = 1;
        this.allPlayers = [];
        var self = this;
        var response = this._httpService.all();
        response.subscribe(function (data) {
            console.log(data);
            self.allPlayers = data.data;
        });
    };
    PlayerStatusComponent.prototype.changeGame = function (number) {
        this.gameNumber = number;
    };
    PlayerStatusComponent.prototype.changeStatus = function (id, gameNumber, status) {
        for (var i = 0; i < this.allPlayers.length; i++) {
            if (this.allPlayers[i]._id == id) {
                this.allPlayers[i].games[gameNumber - 1].status = status;
            }
        }
        var response = this._httpService.updatePlayer(id, gameNumber, status);
        response.subscribe(function (data) {
            console.log(data);
        });
    };
    PlayerStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-status',
            template: __webpack_require__(/*! ./player-status.component.html */ "./src/app/player-status/player-status.component.html"),
            styles: [__webpack_require__(/*! ./player-status.component.css */ "./src/app/player-status/player-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PlayerStatusComponent);
    return PlayerStatusComponent;
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

module.exports = __webpack_require__(/*! /Users/bbauer/Desktop/MEAN/angular/teamManager/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map