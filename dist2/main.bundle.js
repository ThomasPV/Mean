webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n    \r\n    margin-bottom: 0px;\r\n    \r\n}\r\n\r\n.middle{\r\n    \r\n    \r\n    margin:0 0 50px 0;\r\n    padding: 0;\r\n    \r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n \n\n</div>\n\n\n<div style=\"text-align: center;\" class =\"col-xs-11 col-xs-offset-1 col-sm-5 col-sm-offset-4\" >\n    \n     <h1>\n    Welcome to your Todos App!\n  </h1> \n    <br>\n\n    <input type=\"text\" placeholder=\"Enter Scheduled Todo....\" style=\"width:300px\"  #todoText>\n    <input type=\"button\" class=\"btn btn-md btn-info\" (click)=\"addTodo($event, todoText)\" value=\"Add\">\n        \n    <br>\n    \n<div [hidden]= \"todos.length > 0\">\n    No Todos\n</div>\n     <br>\n<h2>Todos for the day : </h2>\n    <br>\n     <br>\n    <div class=\"row\"  *ngFor=\"let todo of todos\">\n        <div class=\"col-xs-1 col-sm-1\">\n            <input type=\"checkbox\" [checked]=\"todo.isCompleted\" (click)=\"updateCompletionTodo($event, todo)\">\n        </div>\n            \n        <div class=\"col-xs-6 col-sm-5 col-lg-6\">\n            <span [class.hidden]=\"todo.inEditMode\">{{todo.text}}</span>\n            <input type=\"text\" [class.hidden]=\"!todo.inEditMode\" [value]=\"todo.text\" (keypress)=\"updateTodoText($event, todo)\">\n            <button class=\"btn btn-warning\" [class.hidden]=\"!todo.inEditMode\" (click)=\"setEditStatus(todo, false)\">Cancel</button>\n        </div>\n\n        \n        <div class=\"col-xs-5 col-sm-6 col-lg-4\">\n        <div class=\"pull-right\">\n            <input type=\"button\" id=\"delete\" (click)=\"deleteTodo($event, todo._id)\"  class=\"btn btn-md btn-danger\" value=\"delete\">\n            \n            </div>\n        <div class=\"pull-left\">\n            <input [class.disabled]=\"todo.isCompleted\" (click)=\"setEditStatus(todo, true)\" type=\"button\" id=\"edit\" class=\"btn btn-md btn-default\" value=\"edit\">\n            </div>\n        </div>\n\n\n    \n   \n\n</div>\n    <div class=\"row\" *ngFor = \"let item of items\">\n        <li>{{item.name}}</li>\n    \n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_todoService, db) {
        this._todoService = _todoService;
        this.db = db;
        this.items = db.list('/items');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos = [];
        this._todoService.getTodos()
            .subscribe(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.addTodo = function ($event, todoText) {
        var _this = this;
        if ($event.which === 1) {
            var result;
            var newTodo = {
                _id: null,
                text: todoText.value,
                isCompleted: false
            };
            this._todoService.saveTodo(newTodo).subscribe(function (x) {
                _this.todos = [];
            });
            this._todoService.getTodos().subscribe(function (todos) { return _this.todos = todos; });
            todoText.value = '';
        }
    };
    AppComponent.prototype.updateCompletionTodo = function ($event, todo) {
        if ($event.which === 1) {
            var _Todo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: !todo.isCompleted
            };
            var result = this._todoService.updateTodo(_Todo);
            result.map(function (res) { return res.json(); }).subscribe(function (data) { todo.isCompleted = !todo.isCompleted; });
        }
    };
    AppComponent.prototype.updateTodoText = function ($event, todo) {
        var _this = this;
        if ($event.which === 13) {
            todo.text = $event.target.value;
            var _updTodo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };
            var result = this._todoService.updateTodo(_updTodo);
            result.map(function (res) { return res.json(); }).subscribe(function (data) { _this.setEditStatus(todo, false); });
        }
    };
    AppComponent.prototype.setEditStatus = function (todo, state) {
        if (state) {
            todo.inEditMode = state;
        }
        else {
            delete todo.inEditMode;
        }
    };
    AppComponent.prototype.deleteTodo = function ($event, id) {
        var todos = this.todos;
        if ($event.which === 1) {
            this._todoService.removeTodo(id).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < todos.length; i++) {
                        if (todos[i]._id == id)
                            todos.splice(i, 1);
                    }
                }
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* todoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* todoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__("../../../../../src/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase, 'mean-dev'), __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* todoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBgTStqwzmsdHULS_TDsFh_RRFzTd4kTro",
        authDomain: "mean-dev-e7fd0.firebaseapp.com",
        databaseURL: "https://mean-dev-e7fd0.firebaseio.com",
        projectId: "mean-dev-e7fd0",
        storageBucket: "mean-dev-e7fd0.appspot.com",
        messagingSenderId: "648059720875"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return todoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var todoService = (function () {
    function todoService(_http) {
        this._http = _http;
    }
    todoService.prototype.getTodos = function () {
        return this._http.get('/api/todos').map(function (res) { return res.json(); });
    };
    todoService.prototype.saveTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/todos/add', JSON.stringify(todo), { headers: headers }).map(function (res) { return res.json(); });
    };
    todoService.prototype.updateTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('api/todos/' + todo._id, JSON.stringify(todo), { headers: headers });
    };
    todoService.prototype.removeTodo = function (id) {
        return this._http.delete('/api/todos/delete/' + id);
    };
    return todoService;
}());
todoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], todoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map