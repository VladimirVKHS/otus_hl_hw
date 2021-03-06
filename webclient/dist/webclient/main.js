(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/YD1":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile-edit-page/profile-edit-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileEditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageComponent", function() { return ProfileEditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "k+G5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "uk-form-danger": a0 }; };
class ProfileEditPageComponent {
    constructor(activatedRoute, fb, auth) {
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.auth = auth;
    }
    ngOnInit() {
        this.data = this.activatedRoute.snapshot.data.user_data;
        this.initForm();
    }
    save() {
        if (this.form.invalid) {
            return;
        }
        this.auth.saveProfile(this.form.value).subscribe((r) => {
            this.data.user = r;
            this.initForm();
        }, (err) => {
            var _a;
            const error = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error;
            alert(error ? error : 'Error!');
        });
    }
    initForm() {
        this.form = this.fb.group({
            Login: [this.data.user.Login, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            FirstName: [this.data.user.FirstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            LastName: [this.data.user.LastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            City: [this.data.user.City, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Interests: [this.data.user.Interests, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4096)]],
            Age: [this.data.user.Age, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(150)]],
            Sex: [this.data.user.Sex, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            IsPublic: [this.data.user.IsPublic],
        });
    }
}
ProfileEditPageComponent.??fac = function ProfileEditPageComponent_Factory(t) { return new (t || ProfileEditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProfileEditPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProfileEditPageComponent, selectors: [["app-profile-edit-page"]], decls: 32, vars: 25, consts: [[1, "uk-container", "uk-container-center", "uk-margin-top", "uk-margin-large-bottom"], [1, "uk-grid"], [1, "uk-width-1-2"], [1, "uk-panel", "uk-panel-box", "uk-form", 3, "formGroup"], [1, "uk-form-row"], ["type", "text", "placeholder", "Login", "formControlName", "Login", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "Password", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "text", "placeholder", "First name", "formControlName", "FirstName", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "text", "placeholder", "Last name", "formControlName", "LastName", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "text", "placeholder", "City", "formControlName", "City", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "number", "placeholder", "Age", "formControlName", "Age", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "number", "placeholder", "Sex", "formControlName", "Sex", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["value", "male"], ["value", "female"], ["placeholder", "Interests", "formControlName", "Interests", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], [1, "uk-form-row", "uk-text-small"], [1, "uk-float-left"], ["type", "checkbox", "formControlName", "IsPublic"], ["href", "JavaScript:", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large", 3, "click"]], template: function ProfileEditPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " public profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProfileEditPageComponent_Template_a_click_30_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx.form.get("Login").invalid && ctx.form.get("Login").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx.form.get("Password").invalid && ctx.form.get("Password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx.form.get("FirstName").invalid && ctx.form.get("FirstName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx.form.get("LastName").invalid && ctx.form.get("LastName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, ctx.form.get("City").invalid && ctx.form.get("City").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx.form.get("Age").invalid && ctx.form.get("Age").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c0, ctx.form.get("Sex").invalid && ctx.form.get("Sex").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c0, ctx.form.get("Interests").invalid && ctx.form.get("Interests").touched));
    } }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtZWRpdC1wYWdlL3Byb2ZpbGUtZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProfileEditPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-edit-page',
                templateUrl: './profile-edit-page.component.html',
                styleUrls: ['./profile-edit-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\playground\otus_sn\otus_sn_go\webclient\src\main.ts */"zUnb");


/***/ }),

/***/ "0P1i":
/*!****************************************************************************!*\
  !*** ./src/app/pages/feed-page-component/feed-page-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: FeedPageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageComponentComponent", function() { return FeedPageComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "k+G5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post-card/post-card.component */ "V+zi");








function FeedPageComponentComponent_app_post_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-post-card", 3);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("post", post_r1);
} }
let eventsCreated = false;
class FeedPageComponentComponent {
    constructor(activatedRoute, auth) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
    }
    ngOnInit() {
        this.socket = io(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].wsUrl, {
            transports: ['websocket']
        });
        this.socket.connect();
        if (!eventsCreated) {
            this.socket.on('connect', () => {
                console.log('user connected');
                this.socket.emit('authorization', this.auth.payload.token);
            });
            this.socket.on('disconnect', () => {
                console.log('user disconnected');
            });
            this.socket.on('new_post_for_feed', (res) => {
                console.log('new post: ', res);
                const post = res.items[0];
                post.user = res.users[0];
                this.postsResponse.items.unshift(post);
            });
            eventsCreated = true;
        }
        this.postsResponse = this.activatedRoute.snapshot.data.feed;
    }
    ngOnDestroy() {
        if (this.socket) {
            console.log('disconnect');
            this.socket.disconnect();
            this.socket.destroy();
        }
    }
}
FeedPageComponentComponent.??fac = function FeedPageComponentComponent_Factory(t) { return new (t || FeedPageComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
FeedPageComponentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FeedPageComponentComponent, selectors: [["app-feed-page-component"]], decls: 6, vars: 1, consts: [[1, "uk-container", "uk-container-center", "uk-margin-top", "uk-margin-large-bottom"], [1, "uk-grid"], ["class", "uk-width-1-1", 3, "post", 4, "ngFor", "ngForOf"], [1, "uk-width-1-1", 3, "post"]], template: function FeedPageComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, FeedPageComponentComponent_app_post_card_5_Template, 1, 1, "app-post-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.postsResponse.items);
    } }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__["PostCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQtcGFnZS1jb21wb25lbnQvZmVlZC1wYWdlLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FeedPageComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed-page-component',
                templateUrl: './feed-page-component.component.html',
                styleUrls: ['./feed-page-component.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "uk-form-danger": a0 }; };
class LoginPageComponent {
    constructor(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            Login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Remember: [true],
        });
    }
    login() {
        if (this.form.invalid) {
            return;
        }
        this.auth.login({
            Login: this.form.value.Login,
            Password: this.form.value.Password,
        }, this.form.value.Remember).subscribe(() => {
            this.router.navigateByUrl('/');
        }, () => {
            alert('Error!');
        });
    }
}
LoginPageComponent.??fac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 18, vars: 7, consts: [[1, "uk-vertical-align", "uk-text-center", "uk-height-1-1"], [1, "uk-vertical-align-middle", 2, "width", "250px"], ["width", "140", "height", "120", "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwcHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9Ii0yOS41IDI3NS41IDE0MCAxMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTI5LjUgMjc1LjUgMTQwIDEyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0tNi4zMzMsMjk4LjY1NHY3My42OTFoOTMuNjY3di03My42OTFILTYuMzMzeiBNNzkuNzg4LDM2NC4zNTVIMS42NTZ2LTU3LjcwOWg3OC4xMzJWMzY0LjM1NXoiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjUuODYsMzU4LjE0MSAyMS45NjIsMzQxLjIxNiAyNy45OTUsMzQzLjgyNyA0Ny4wMzIsMzIzLjU2MSA1NC41MjQsMzMyLjUyMyA1Ny45MDUsMzMwLjQ4IA0KCQk3Ni4yMDMsMzU4LjE0MSAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMjQuNDYyIiBjeT0iMzIxLjMyMSIgcj0iNy4wMzQiLz4NCjwvZz4NCjwvc3ZnPg0K", "alt", "", 1, "uk-margin-bottom"], [1, "uk-panel", "uk-panel-box", "uk-form", 3, "formGroup"], [1, "uk-form-row"], ["type", "text", "placeholder", "Login", "formControlName", "Login", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "Password", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["href", "JavaScript:", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large", 3, "click"], [1, "uk-form-row", "uk-text-small"], [1, "uk-float-left"], ["type", "checkbox", "formControlName", "Remember"], ["routerLink", "/registration", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginPageComponent_Template_a_click_9_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.form.get("Login").invalid && ctx.form.get("Login").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.form.get("Password").invalid && ctx.form.get("Password").touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "qc5V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.cookieName = 'OTUS_SN_VK';
        this.payloadKey = 'otus_sn_vk_payload';
        this.storageName = this.cookieName;
        this.authorized$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isAuthorized());
        this.storedPath_ = null;
    }
    get authorized$() {
        return this.authorized$$.asObservable();
    }
    get storedPath() {
        const path = this.storedPath_;
        this.storedPath_ = null;
        return path;
    }
    set storedPath(v) {
        this.storedPath_ = v;
    }
    login(request, savePassword = true) {
        return this.api.post('auth/login', request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((payload) => {
            this.handleAuthResponse(payload, savePassword);
            this.authorized$$.next(this.isAuthorized());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
    registration(data) {
        return this.api.post('auth/register', data);
    }
    saveProfile(data) {
        return this.api.post('profile', data);
    }
    me() {
        return this.api.get('auth/me');
    }
    logout() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            observer.next(true);
            observer.complete();
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            this.sessionStorageSet(this.storageName, null);
            this.sessionStorageSet(this.payloadKey, null);
            this.localStorageSet(this.storageName, null);
            this.localStorageSet(this.payloadKey, null);
            this.authorized$$.next(false);
            this.router.navigateByUrl('/');
        }));
    }
    isAuthorized() {
        return !!this.localStorageGet(this.storageName) || !!this.sessionStorageGet(this.storageName);
    }
    get payload() {
        if (!this.isAuthorized()) {
            return null;
        }
        let result = this.sessionStorageGet(this.payloadKey);
        if (!result) {
            result = this.localStorageGet(this.payloadKey);
        }
        return result;
    }
    updatePayload(payload) {
        this.sessionStorageSet(this.payloadKey, payload);
        if (this.localStorageGet(this.payloadKey)) {
            this.localStorageSet(this.payloadKey, payload);
        }
    }
    handleAuthResponse(payload, savePassword = true) {
        this.sessionStorageSet(this.storageName, true);
        this.sessionStorageSet(this.payloadKey, payload);
        if (savePassword) {
            this.localStorageSet(this.storageName, true);
            this.localStorageSet(this.payloadKey, payload);
        }
    }
    sessionStorageSet(key, value) {
        this.setStorageItem(sessionStorage, key, value);
    }
    sessionStorageGet(key) {
        return this.getStorageItem(sessionStorage, key);
    }
    localStorageSet(key, value) {
        this.setStorageItem(localStorage, key, value);
    }
    localStorageGet(key) {
        return this.getStorageItem(localStorage, key);
    }
    setStorageItem(storage, key, value) {
        const v = { value };
        storage.setItem(key, JSON.stringify(v));
    }
    getStorageItem(storage, key) {
        const json = storage.getItem(key);
        if (!json) {
            return null;
        }
        return JSON.parse(json).value;
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    apiUrl: 'http://localhost:8085/api/',
    wsUrl: 'http://localhost:8086/',
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

/***/ "C7Ai":
/*!********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.ts ***!
  \********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_users_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/users-api.service */ "QIIi");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _core_services_messages_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/messages-api.service */ "UIj5");
/* harmony import */ var _core_services_counters_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/counters-api.service */ "aMhN");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "k+G5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/user-card/user-card.component */ "IDqH");
/* harmony import */ var _components_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/message-card/message-card.component */ "cWVb");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/post-card/post-card.component */ "V+zi");
















function UserPageComponent_app_user_card_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-user-card", 7);
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", user_r8);
} }
function UserPageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserPageComponent_app_user_card_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-user-card", 7);
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", user_r9);
} }
function UserPageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserPageComponent_app_user_card_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-user-card", 7);
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", user_r10);
} }
function UserPageComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserPageComponent_ng_container_39_app_message_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-message-card", 13);
} if (rf & 2) {
    const message_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("message", message_r12)("author", ctx_r11.userById(message_r12.AuthorId));
} }
const _c0 = function (a0) { return { "uk-form-danger": a0 }; };
function UserPageComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserPageComponent_ng_container_39_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.postMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Post message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UserPageComponent_ng_container_39_app_message_card_10_Template, 1, 2, "app-message-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r6.messageForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx_r6.messageForm.get("Message").invalid && ctx_r6.messageForm.get("Message").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r6.messages);
} }
function UserPageComponent_ng_container_40_app_post_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-post-card", 15);
} if (rf & 2) {
    const post_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("post", post_r16);
} }
function UserPageComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UserPageComponent_ng_container_40_app_post_card_4_Template, 1, 1, "app-post-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r7.posts);
} }
class UserPageComponent {
    constructor(activatedRoute, api, auth, messagesApi, fb, countersApi) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.auth = auth;
        this.messagesApi = messagesApi;
        this.fb = fb;
        this.countersApi = countersApi;
        this.posts = [];
        this.perPage = 10;
        this.showMessages = false;
        this.messages = [];
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        var _a;
        const user = (_a = this.auth.payload) === null || _a === void 0 ? void 0 : _a.user;
        this.data = this.activatedRoute.snapshot.data.user_data;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$$)).subscribe(() => {
            this.data = this.activatedRoute.snapshot.data.user_data;
        });
        this.api.getUserPosts(this.data.user.Id, {
            per_page: this.perPage
        }).subscribe((response) => {
            this.postsResponse = response;
            this.posts = response.items;
        });
        if (this.auth.isAuthorized() && this.data.user.Id !== this.auth.payload.user.Id) {
            this.showMessages = true;
            this.messagesApi.getMessages(this.data.user.Id).subscribe((data) => {
                this.messages = data.items;
                // mark as read
                if (user) {
                    setTimeout(() => {
                        const messageIds = [];
                        this.messages.forEach((m) => {
                            if (m.AuthorId !== user.Id && !m.IsRead) {
                                messageIds.push(m.Id);
                            }
                        });
                        if (messageIds.length > 0) {
                            this.messagesApi.markMessagesAsRead(this.data.user.Id, messageIds).subscribe((result) => {
                                const c = this.countersApi.counter;
                                if (c) {
                                    c.UnreadMessagesCount = c.UnreadMessagesCount - result.AffectedMessages;
                                    this.countersApi.counter = c;
                                }
                            });
                        }
                    }, 2000);
                }
            });
            this.messageForm = this.fb.group({
                Message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4096)]],
            });
        }
    }
    ngOnDestroy() {
        this.destroy$$.next();
        this.destroy$$.complete();
    }
    userById(id) {
        if (id === this.data.user.Id) {
            return this.data.user;
        }
        if (id === this.auth.payload.user.Id) {
            return this.auth.payload.user;
        }
        return null;
    }
    postMessage() {
        if (this.messageForm.invalid) {
            return;
        }
        this.messagesApi.postMessage(this.data.user.Id, this.messageForm.value.Message).subscribe((m) => {
            this.messages.unshift(m);
            this.messageForm.reset();
        });
    }
}
UserPageComponent.??fac = function UserPageComponent_Factory(t) { return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_users_api_service__WEBPACK_IMPORTED_MODULE_5__["UsersApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_messages_api_service__WEBPACK_IMPORTED_MODULE_7__["MessagesApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_counters_api_service__WEBPACK_IMPORTED_MODULE_8__["CountersApiService"])); };
UserPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserPageComponent, selectors: [["app-user-page"]], decls: 41, vars: 18, consts: [[1, "uk-container", "uk-container-center", "uk-margin-top", "uk-margin-large-bottom"], [1, "uk-grid"], [1, "uk-article", "uk-width-1-1"], ["width", "120", "height", "120", "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTIwcHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAgMTIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIi8+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRTBFMEUwIiBkPSJNMTA5LjM1NCw5OS40NzhjLTAuNTAyLTIuODA2LTEuMTM4LTUuNDA0LTEuOTAzLTcuODAxYy0wLjc2Ny0yLjM5Ny0xLjc5Ny00LjczMi0zLjA5My03LjAxMQ0KCQljLTEuMjk0LTIuMjc2LTIuNzc4LTQuMjE3LTQuNDU1LTUuODIzYy0xLjY4MS0xLjYwNC0zLjcyOS0yLjg4Ny02LjE0OC0zLjg0NmMtMi40MjEtMC45NTgtNS4wOTQtMS40MzgtOC4wMTctMS40MzgNCgkJYy0wLjQzMSwwLTEuNDM3LDAuNTE2LTMuMDIsMS41NDVjLTEuNTgxLDEuMDMyLTMuMzY3LDIuMTgyLTUuMzU1LDMuNDVjLTEuOTksMS4yNzEtNC41NzgsMi40MjEtNy43NjUsMy40NTENCgkJQzY2LjQxLDgzLjAzNyw2My4yMSw4My41NTIsNjAsODMuNTUyYy0zLjIxMSwwLTYuNDEtMC41MTUtOS41OTgtMS41NDZjLTMuMTg4LTEuMDMtNS43NzctMi4xODEtNy43NjUtMy40NTENCgkJYy0xLjk5MS0xLjI2OS0zLjc3NC0yLjQxOC01LjM1NS0zLjQ1Yy0xLjU4Mi0xLjAyOS0yLjU4OC0xLjU0NS0zLjAyLTEuNTQ1Yy0yLjkyNiwwLTUuNTk4LDAuNDc5LTguMDE3LDEuNDM4DQoJCWMtMi40MiwwLjk1OS00LjQ3MSwyLjI0MS02LjE0NiwzLjg0NmMtMS42ODEsMS42MDYtMy4xNjQsMy41NDctNC40NTgsNS44MjNjLTEuMjk0LDIuMjc4LTIuMzI2LDQuNjEzLTMuMDkyLDcuMDExDQoJCWMtMC43NjcsMi4zOTYtMS40MDIsNC45OTUtMS45MDYsNy44MDFjLTAuNTAyLDIuODAzLTAuODM5LDUuNDE1LTEuMDA2LDcuODM1Yy0wLjE2OCwyLjQyMS0wLjI1Miw0LjkwMi0wLjI1Miw3LjQ0DQoJCWMwLDEuODg0LDAuMjA3LDMuNjI0LDAuNTgyLDUuMjQ3aDEwMC4wNjNjMC4zNzUtMS42MjMsMC41ODItMy4zNjMsMC41ODItNS4yNDdjMC0yLjUzOC0wLjA4NC01LjAyLTAuMjUzLTcuNDQNCgkJQzExMC4xOTIsMTA0Ljg5MywxMDkuODU3LDEwMi4yOCwxMDkuMzU0LDk5LjQ3OHoiLz4NCgk8cGF0aCBmaWxsPSIjRTBFMEUwIiBkPSJNNjAsNzguMTZjNy42MiwwLDE0LjEyNi0yLjY5NiwxOS41Mi04LjA4OGM1LjM5Mi01LjM5Myw4LjA4OC0xMS44OTgsOC4wODgtMTkuNTE5DQoJCXMtMi42OTYtMTQuMTI2LTguMDg4LTE5LjUxOUM3NC4xMjYsMjUuNjQzLDY3LjYyLDIyLjk0Niw2MCwyMi45NDZzLTE0LjEyOCwyLjY5Ny0xOS41MTksOC4wODkNCgkJYy01LjM5NCw1LjM5Mi04LjA4OSwxMS44OTctOC4wODksMTkuNTE5czIuNjk1LDE0LjEyNiw4LjA4OSwxOS41MTlDNDUuODcyLDc1LjQ2NCw1Mi4zOCw3OC4xNiw2MCw3OC4xNnoiLz4NCjwvZz4NCjwvc3ZnPg0K", "alt", "", 1, "uk-border-circle"], [1, "uk-article-title"], ["class", "uk-width-medium-1-3", 3, "user", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "uk-width-medium-1-3", 3, "user"], [1, "uk-width-1-2"], [1, "uk-panel", "uk-panel-box", "uk-form", 3, "formGroup"], ["placeholder", "Post message", "formControlName", "Message", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["href", "JavaScript:", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large", 3, "click"], ["class", "uk-width-1-1", 3, "message", "author", 4, "ngFor", "ngForOf"], [1, "uk-width-1-1", 3, "message", "author"], ["class", "uk-width-1-1", 3, "post", 4, "ngFor", "ngForOf"], [1, "uk-width-1-1", 3, "post"]], template: function UserPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, UserPageComponent_app_user_card_27_Template, 1, 1, "app-user-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, UserPageComponent_div_28_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Incoming requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, UserPageComponent_app_user_card_32_Template, 1, 1, "app-user-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, UserPageComponent_div_33_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Outgoing requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, UserPageComponent_app_user_card_37_Template, 1, 1, "app-user-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, UserPageComponent_div_38_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, UserPageComponent_ng_container_39_Template, 11, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, UserPageComponent_ng_container_40_Template, 5, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.data.user.FirstName, " ", ctx.data.user.LastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Login: ", ctx.data.user.Login, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" First name: ", ctx.data.user.FirstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Last name: ", ctx.data.user.LastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Age: ", ctx.data.user.Age, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Sex: ", ctx.data.user.Sex === "female" ? "Female" : "Male", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" City: ", ctx.data.user.City, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Interests: ", ctx.data.user.Interests, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.data.user.IsPublic ? "Public profile" : "Private profile", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.friends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data.friends.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.incoming_requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data.incoming_requests.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data.outgoing_requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.data.outgoing_requests.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.posts);
    } }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_11__["UserCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _components_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_12__["MessageCardComponent"], _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_13__["PostCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-page',
                templateUrl: './user-page.component.html',
                styleUrls: ['./user-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _core_services_users_api_service__WEBPACK_IMPORTED_MODULE_5__["UsersApiService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _core_services_messages_api_service__WEBPACK_IMPORTED_MODULE_7__["MessagesApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _core_services_counters_api_service__WEBPACK_IMPORTED_MODULE_8__["CountersApiService"] }]; }, null); })();


/***/ }),

/***/ "Eb5S":
/*!************************************************************!*\
  !*** ./src/app/core/resolvers/profile-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: ProfileResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolverService", function() { return ProfileResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");



class ProfileResolverService {
    constructor(auth) {
        this.auth = auth;
    }
    resolve(route, state) {
        return this.auth.me();
    }
}
ProfileResolverService.??fac = function ProfileResolverService_Factory(t) { return new (t || ProfileResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileResolverService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProfileResolverService, factory: ProfileResolverService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProfileResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "GaAs":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-post-page/create-post-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatePostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPageComponent", function() { return CreatePostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_services_posts_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/posts-api.service */ "HUuX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "k+G5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0) { return { "uk-form-danger": a0 }; };
class CreatePostPageComponent {
    constructor(fb, api, router, auth) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        this.form = this.fb.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4096)]],
        });
    }
    save() {
        const user = this.auth.payload.user;
        this.api.createPost(this.form.value).subscribe(() => {
            this.router.navigateByUrl('/users/' + user.Id);
        });
    }
}
CreatePostPageComponent.??fac = function CreatePostPageComponent_Factory(t) { return new (t || CreatePostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_posts_api_service__WEBPACK_IMPORTED_MODULE_2__["PostsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
CreatePostPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CreatePostPageComponent, selectors: [["app-create-post-page"]], decls: 12, vars: 7, consts: [[1, "uk-container", "uk-container-center", "uk-margin-top", "uk-margin-large-bottom"], [1, "uk-grid"], [1, "uk-width-1-2"], [1, "uk-panel", "uk-panel-box", "uk-form", 3, "formGroup"], [1, "uk-form-row"], ["type", "text", "placeholder", "Title", "formControlName", "Title", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["formControlName", "Body", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["href", "JavaScript:", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large", 3, "click"]], template: function CreatePostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CreatePostPageComponent_Template_a_click_10_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.form.get("Title").invalid && ctx.form.get("Title").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.form.get("Body").invalid && ctx.form.get("Body").touched));
    } }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1wb3N0LXBhZ2UvY3JlYXRlLXBvc3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreatePostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post-page',
                templateUrl: './create-post-page.component.html',
                styleUrls: ['./create-post-page.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_posts_api_service__WEBPACK_IMPORTED_MODULE_2__["PostsApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "HUuX":
/*!****************************************************!*\
  !*** ./src/app/core/services/posts-api.service.ts ***!
  \****************************************************/
/*! exports provided: PostsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsApiService", function() { return PostsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "qc5V");




class PostsApiService {
    constructor(api) {
        this.api = api;
        this.endpoint = 'posts/';
    }
    createPost(request) {
        return this.api.post(this.endpoint, request);
    }
    getUserFeed() {
        return this.api.get(this.endpoint + 'feed').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((response) => {
            response.items.forEach((post) => {
                post.user = response.users.find(u => u.Id === post.UserId);
            });
        }));
    }
}
PostsApiService.??fac = function PostsApiService_Factory(t) { return new (t || PostsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
PostsApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PostsApiService, factory: PostsApiService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PostsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "IDqH":
/*!*************************************************************!*\
  !*** ./src/app/components/user-card/user-card.component.ts ***!
  \*************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _core_services_users_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/users-api.service */ "QIIi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserCardComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCardComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.addToFriends(ctx_r2.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "+ friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UserCardComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserCardComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.removeFromFriends(ctx_r4.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "- friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class UserCardComponent {
    constructor(auth, api) {
        this.auth = auth;
        this.api = api;
        this.showAddFriend = false;
        this.showRemoveFromFriends = false;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.updateAuth();
        this.auth.authorized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$$)).subscribe(() => {
            this.updateAuth();
        });
    }
    ngOnDestroy() {
        this.destroy$$.next();
        this.destroy$$.complete();
    }
    addToFriends(user) {
        this.api.addToFriends(user.Id).subscribe((r) => {
            this.authorizedUserData.friends = r.friends;
            this.authorizedUserData.outgoing_requests = r.outgoing_requests;
            this.authorizedUserData.incoming_requests = r.incoming_requests;
            this.auth.updatePayload(this.authorizedUserData);
            this.auth.authorized$$.next(true);
        }, () => {
            alert('Error!');
        });
    }
    removeFromFriends(user) {
        this.api.removeFromFriends(user.Id).subscribe((r) => {
            this.authorizedUserData.friends = r.friends;
            this.authorizedUserData.outgoing_requests = r.outgoing_requests;
            this.authorizedUserData.incoming_requests = r.incoming_requests;
            this.auth.updatePayload(this.authorizedUserData);
            this.auth.authorized$$.next(true);
        }, () => {
            alert('Error!');
        });
    }
    updateAuth() {
        this.authorizedUserData = this.auth.payload;
        if (!this.authorizedUserData || (this.authorizedUserData.user.Id === this.user.Id)) {
            this.showAddFriend = false;
            this.showRemoveFromFriends = false;
            return;
        }
        this.showRemoveFromFriends = !!this.authorizedUserData.outgoing_requests.find((u) => u.Id === this.user.Id) ||
            !!this.authorizedUserData.friends.find((u) => u.Id === this.user.Id);
        this.showAddFriend = !this.showRemoveFromFriends;
    }
}
UserCardComponent.??fac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_users_api_service__WEBPACK_IMPORTED_MODULE_4__["UsersApiService"])); };
UserCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserCardComponent, selectors: [["app-user-card"]], inputs: { user: "user" }, decls: 12, vars: 7, consts: [[1, "uk-row-first", 2, "margin-bottom", "16px"], [1, "uk-panel", "uk-panel-box", 2, "min-height", "120px"], [1, "uk-panel-title"], [1, "uk-icon-user"], [1, "uk-button-group"], [1, "uk-button", "uk-button-success", 3, "routerLink"], [1, "uk-icon-eye"], ["class", "uk-button uk-button-primary", "href", "JavaScript:", 3, "click", 4, "ngIf"], ["class", "uk-button uk-button-danger", "href", "JavaScript:", 3, "click", 4, "ngIf"], ["href", "JavaScript:", 1, "uk-button", "uk-button-primary", 3, "click"], ["href", "JavaScript:", 1, "uk-button", "uk-button-danger", 3, "click"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UserCardComponent_a_10_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, UserCardComponent_a_11_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.user.FirstName, " ", ctx.user.LastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" city: ", ctx.user.City, ", age: ", ctx.user.Age, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/users/", ctx.user.Id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showAddFriend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showRemoveFromFriends);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItY2FyZC91c2VyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-card',
                templateUrl: './user-card.component.html',
                styleUrls: ['./user-card.component.scss']
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _core_services_users_api_service__WEBPACK_IMPORTED_MODULE_4__["UsersApiService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_users_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/users-api.service */ "QIIi");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "k+G5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/user-card/user-card.component */ "IDqH");









function HomePageComponent_div_5_app_user_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-user-card", 7);
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", user_r3);
} }
function HomePageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomePageComponent_div_5_app_user_card_1_Template, 1, 1, "app-user-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.users);
} }
function HomePageComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomePageComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class HomePageComponent {
    constructor(api) {
        this.api = api;
        this.perPage = 99;
        this.data = null;
        this.users = [];
        this.searchTerm = '';
        this.totalPages = 0;
        this.searchChanged$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.initPage();
        this.searchChanged$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400)).subscribe(() => {
            this.initPage();
        });
    }
    nextPage() {
        this.api.getUsers({ page: this.data.page + 1, per_page: this.perPage, search: this.searchTerm }).subscribe((r) => {
            r.items.forEach(e => {
                this.users.push(e);
            });
            this.data = r;
        });
    }
    initPage() {
        this.api.getUsers({ per_page: this.perPage, search: this.searchTerm }).subscribe((r) => {
            this.data = r;
            this.users = r.items;
            this.totalPages = Math.ceil(r.total_items / r.per_page);
        });
    }
}
HomePageComponent.??fac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_users_api_service__WEBPACK_IMPORTED_MODULE_3__["UsersApiService"])); };
HomePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 7, vars: 3, consts: [[1, "uk-container", "uk-container-center", "uk-margin-top", "uk-margin-large-bottom"], [1, "uk-form"], ["type", "text", "name", "search", "placeholder", "Search", 3, "ngModel", "ngModelChange"], ["class", "uk-grid", 4, "ngIf"], ["class", "uk-button uk-width-1-1 uk-margin-small-bottom", 3, "click", 4, "ngIf"], [1, "uk-grid"], ["class", "uk-width-medium-1-3", 3, "user", 4, "ngFor", "ngForOf"], [1, "uk-width-medium-1-3", 3, "user"], [1, "uk-button", "uk-width-1-1", "uk-margin-small-bottom", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchTerm = $event; })("ngModelChange", function HomePageComponent_Template_input_ngModelChange_3_listener() { return ctx.searchChanged$$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HomePageComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, HomePageComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.data && ctx.data.page < ctx.totalPages);
    } }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__["UserCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _core_services_users_api_service__WEBPACK_IMPORTED_MODULE_3__["UsersApiService"] }]; }, null); })();


/***/ }),

/***/ "Ngw0":
/*!*********************************************************!*\
  !*** ./src/app/core/resolvers/feed-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: FeedResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedResolverService", function() { return FeedResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/posts-api.service */ "HUuX");



class FeedResolverService {
    constructor(api) {
        this.api = api;
    }
    resolve(route, state) {
        return this.api.getUserFeed();
    }
}
FeedResolverService.??fac = function FeedResolverService_Factory(t) { return new (t || FeedResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_posts_api_service__WEBPACK_IMPORTED_MODULE_1__["PostsApiService"])); };
FeedResolverService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: FeedResolverService, factory: FeedResolverService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FeedResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_posts_api_service__WEBPACK_IMPORTED_MODULE_1__["PostsApiService"] }]; }, null); })();


/***/ }),

/***/ "QIIi":
/*!****************************************************!*\
  !*** ./src/app/core/services/users-api.service.ts ***!
  \****************************************************/
/*! exports provided: UsersApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApiService", function() { return UsersApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "qc5V");





class UsersApiService {
    constructor(api) {
        this.api = api;
        this.endpoint = 'users/';
    }
    getUsers(query = {}) {
        return this.api.get(this.endpoint, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: query
            })
        });
    }
    getUserPosts(userId, query = {}) {
        return this.api.get(this.endpoint + String(userId) + '/posts', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: query
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            response.items.forEach((post) => {
                post.user = response.users.find(u => u.Id === post.UserId);
            });
        }));
    }
    getUser(id) {
        return this.api.get(this.endpoint + id);
    }
    addToFriends(userId) {
        return this.api.post(this.endpoint + userId + '/add_to_friends');
    }
    removeFromFriends(userId) {
        return this.api.post(this.endpoint + userId + '/remove_from_friends');
    }
}
UsersApiService.??fac = function UsersApiService_Factory(t) { return new (t || UsersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
UsersApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UsersApiService, factory: UsersApiService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'webclient';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "UIj5":
/*!*******************************************************!*\
  !*** ./src/app/core/services/messages-api.service.ts ***!
  \*******************************************************/
/*! exports provided: MessagesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesApiService", function() { return MessagesApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "qc5V");



class MessagesApiService {
    constructor(api) {
        this.api = api;
        this.endpoint = 'messages/';
    }
    getMessages(userId) {
        return this.api.get(this.endpoint + userId);
    }
    postMessage(userId, message) {
        return this.api.post(this.endpoint + userId, {
            Message: message
        });
    }
    markMessagesAsRead(userId, messageIds) {
        return this.api.post(this.endpoint + userId + '/mark_as_read', {
            MessageIds: messageIds
        });
    }
}
MessagesApiService.??fac = function MessagesApiService_Factory(t) { return new (t || MessagesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
MessagesApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: MessagesApiService, factory: MessagesApiService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MessagesApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "V+zi":
/*!*************************************************************!*\
  !*** ./src/app/components/post-card/post-card.component.ts ***!
  \*************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PostCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostCardComponent.??fac = function PostCardComponent_Factory(t) { return new (t || PostCardComponent)(); };
PostCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PostCardComponent, selectors: [["app-post-card"]], inputs: { post: "post" }, decls: 10, vars: 4, consts: [[1, "uk-width-medium"], [1, "uk-panel", "uk-panel-box"], [1, "uk-panel-title"]], template: function PostCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.post.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Author: ", ctx.post.user ? ctx.post.user.FirstName + " " + ctx.post.user.LastName : "-", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.post.UpdatedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.post.Body);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PostCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-card',
                templateUrl: './post-card.component.html',
                styleUrls: ['./post-card.component.scss']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Vrgt":
/*!******************************************************!*\
  !*** ./src/app/core/guards/authorized-only.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthorizedOnlyGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedOnlyGuard", function() { return AuthorizedOnlyGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthorizedOnlyGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.can();
    }
    canActivateChild(next, state) {
        return this.can();
    }
    canLoad(route, segments) {
        const can = this.can();
        if (!can) {
            this.auth.storedPath = segments.map(e => e.path).join('/');
        }
        return can;
    }
    can() {
        const can = this.auth.isAuthorized();
        if (!can) {
            this.router.navigateByUrl('/login');
        }
        return can;
    }
}
AuthorizedOnlyGuard.??fac = function AuthorizedOnlyGuard_Factory(t) { return new (t || AuthorizedOnlyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthorizedOnlyGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthorizedOnlyGuard, factory: AuthorizedOnlyGuard.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthorizedOnlyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "k+G5");
/* harmony import */ var _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-card/user-card.component */ "IDqH");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "C7Ai");
/* harmony import */ var _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page404/page404.component */ "r/gj");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "foYC");
/* harmony import */ var _pages_profile_edit_page_profile_edit_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/profile-edit-page/profile-edit-page.component */ "/YD1");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/post-card/post-card.component */ "V+zi");
/* harmony import */ var _pages_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/post-page/post-page.component */ "lkLW");
/* harmony import */ var _pages_create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/create-post-page/create-post-page.component */ "GaAs");
/* harmony import */ var _pages_feed_page_component_feed_page_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/feed-page-component/feed-page-component.component */ "0P1i");
/* harmony import */ var _components_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/message-card/message-card.component */ "cWVb");




















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"],
        _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__["UserCardComponent"],
        _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__["UserPageComponent"],
        _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"],
        _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
        _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationPageComponent"],
        _pages_profile_edit_page_profile_edit_page_component__WEBPACK_IMPORTED_MODULE_13__["ProfileEditPageComponent"],
        _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_14__["PostCardComponent"],
        _pages_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_15__["PostPageComponent"],
        _pages_create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_16__["CreatePostPageComponent"],
        _pages_feed_page_component_feed_page_component_component__WEBPACK_IMPORTED_MODULE_17__["FeedPageComponentComponent"],
        _components_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_18__["MessageCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                    _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"],
                    _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__["UserCardComponent"],
                    _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__["UserPageComponent"],
                    _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"],
                    _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                    _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationPageComponent"],
                    _pages_profile_edit_page_profile_edit_page_component__WEBPACK_IMPORTED_MODULE_13__["ProfileEditPageComponent"],
                    _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_14__["PostCardComponent"],
                    _pages_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_15__["PostPageComponent"],
                    _pages_create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_16__["CreatePostPageComponent"],
                    _pages_feed_page_component_feed_page_component_component__WEBPACK_IMPORTED_MODULE_17__["FeedPageComponentComponent"],
                    _components_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_18__["MessageCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aMhN":
/*!*******************************************************!*\
  !*** ./src/app/core/services/counters-api.service.ts ***!
  \*******************************************************/
/*! exports provided: CountersApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountersApiService", function() { return CountersApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "qc5V");





class CountersApiService {
    constructor(api) {
        this.api = api;
        this.endpoint = 'counters/';
        this.countersUpdates$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._counter = null;
    }
    get countersUpdate$() {
        return this.countersUpdates$$.asObservable();
    }
    get counter() {
        return this._counter;
    }
    set counter(c) {
        this._counter = c;
        this.countersUpdates$$.next(c);
    }
    getCounters() {
        return this.api.get(this.endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            this.countersUpdates$$.next(data);
        }));
    }
}
CountersApiService.??fac = function CountersApiService_Factory(t) { return new (t || CountersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
CountersApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CountersApiService, factory: CountersApiService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountersApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "cWVb":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-card/message-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCardComponent", function() { return MessageCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessageCardComponent.??fac = function MessageCardComponent_Factory(t) { return new (t || MessageCardComponent)(); };
MessageCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MessageCardComponent, selectors: [["app-message-card"]], inputs: { message: "message", author: "author" }, decls: 8, vars: 3, consts: [[1, "uk-width-medium"], [1, "uk-panel", "uk-panel-box"]], template: function MessageCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Author: ", ctx.author ? ctx.author.FirstName + " " + ctx.author.LastName : "-", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.message.CreatedAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.message.Message);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS1jYXJkL21lc3NhZ2UtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MessageCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-card',
                templateUrl: './message-card.component.html',
                styleUrls: ['./message-card.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "foYC":
/*!************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "uk-form-danger": a0 }; };
class RegistrationPageComponent {
    constructor(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            Login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            City: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            Interests: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4096)]],
            Age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(150)]],
            Sex: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            IsPublic: [true],
        });
    }
    registration() {
        if (this.form.invalid) {
            return;
        }
        this.auth.registration(this.form.value).subscribe(() => {
            this.router.navigateByUrl('/login');
        }, (err) => {
            var _a;
            const error = (_a = err.error) === null || _a === void 0 ? void 0 : _a.error;
            alert(error ? error : 'Error!');
        });
    }
}
RegistrationPageComponent.??fac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistrationPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], decls: 34, vars: 25, consts: [[1, "uk-vertical-align", "uk-text-center", "uk-height-1-1"], [1, "uk-vertical-align-middle", 2, "width", "400px"], ["width", "140", "height", "120", "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwcHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9Ii0yOS41IDI3NS41IDE0MCAxMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTI5LjUgMjc1LjUgMTQwIDEyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0tNi4zMzMsMjk4LjY1NHY3My42OTFoOTMuNjY3di03My42OTFILTYuMzMzeiBNNzkuNzg4LDM2NC4zNTVIMS42NTZ2LTU3LjcwOWg3OC4xMzJWMzY0LjM1NXoiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjUuODYsMzU4LjE0MSAyMS45NjIsMzQxLjIxNiAyNy45OTUsMzQzLjgyNyA0Ny4wMzIsMzIzLjU2MSA1NC41MjQsMzMyLjUyMyA1Ny45MDUsMzMwLjQ4IA0KCQk3Ni4yMDMsMzU4LjE0MSAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMjQuNDYyIiBjeT0iMzIxLjMyMSIgcj0iNy4wMzQiLz4NCjwvZz4NCjwvc3ZnPg0K", "alt", "", 1, "uk-margin-bottom"], [1, "uk-panel", "uk-panel-box", "uk-form", 3, "formGroup"], [1, "uk-form-row"], ["type", "text", "placeholder", "Login", "formControlName", "Login", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "Password", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "text", "placeholder", "First name", "formControlName", "FirstName", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "text", "placeholder", "Last name", "formControlName", "LastName", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "text", "placeholder", "City", "formControlName", "City", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "number", "placeholder", "Age", "formControlName", "Age", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["type", "number", "placeholder", "Sex", "formControlName", "Sex", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], ["value", "male"], ["value", "female"], ["placeholder", "Interests", "formControlName", "Interests", 1, "uk-width-1-1", "uk-form-large", 3, "ngClass"], [1, "uk-form-row", "uk-text-small"], [1, "uk-float-left"], ["type", "checkbox", "formControlName", "IsPublic"], ["href", "JavaScript:", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large", 3, "click"], ["routerLink", "/login", 1, "uk-width-1-1", "uk-button", "uk-button-primary", "uk-button-large"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " public profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegistrationPageComponent_Template_a_click_29_listener() { return ctx.registration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c0, ctx.form.get("Login").invalid && ctx.form.get("Login").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx.form.get("Password").invalid && ctx.form.get("Password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx.form.get("FirstName").invalid && ctx.form.get("FirstName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx.form.get("LastName").invalid && ctx.form.get("LastName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, ctx.form.get("City").invalid && ctx.form.get("City").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx.form.get("Age").invalid && ctx.form.get("Age").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c0, ctx.form.get("Sex").invalid && ctx.form.get("Sex").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c0, ctx.form.get("Interests").invalid && ctx.form.get("Interests").touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegistrationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-page',
                templateUrl: './registration-page.component.html',
                styleUrls: ['./registration-page.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "k+G5":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _core_services_counters_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/counters-api.service */ "aMhN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function MainMenuComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
function MainMenuComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "My page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/users/", ctx_r2.data.user.Id, "");
} }
function MainMenuComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Create post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainMenuComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Unread messages: ", ctx_r7.counter.UnreadMessagesCount, "");
} }
function MainMenuComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "My page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/users/", ctx_r10.data.user.Id, "");
} }
function MainMenuComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Create post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MainMenuComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MainMenuComponent_li_30_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class MainMenuComponent {
    constructor(auth, countersApi) {
        this.auth = auth;
        this.countersApi = countersApi;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.counter = null;
    }
    ngOnInit() {
        this.authorized = this.auth.isAuthorized();
        this.data = this.auth.payload;
        this.auth.authorized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$$)).subscribe(() => {
            this.authorized = this.auth.isAuthorized();
            this.data = this.auth.payload;
            if (this.authorized) {
                this.countersApi.getCounters().subscribe();
            }
            else {
                this.counter = null;
            }
        });
        this.countersApi.countersUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$$)).subscribe((data) => {
            this.counter = data;
        });
        if (this.auth.isAuthorized()) {
            this.countersApi.getCounters().subscribe();
        }
    }
    ngOnDestroy() {
        this.destroy$$.next();
        this.destroy$$.complete();
    }
    logout() {
        this.auth.logout().subscribe(() => { });
    }
}
MainMenuComponent.??fac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_counters_api_service__WEBPACK_IMPORTED_MODULE_4__["CountersApiService"])); };
MainMenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 31, vars: 19, consts: [[1, "uk-navbar", "uk-margin-large-bottom"], ["routerLink", "/", 1, "uk-navbar-brand", "uk-hidden-small"], [1, "uk-navbar-nav", "uk-hidden-small"], ["routerLinkActive", "uk-active", 3, "routerLinkActiveOptions"], ["routerLink", "/"], ["routerLinkActive", "uk-active", 4, "ngIf"], ["routerLinkActive", "uk-active", 3, "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["href", "#offcanvas", "data-uk-offcanvas", "", 1, "uk-navbar-toggle", "uk-visible-small"], [1, "uk-navbar-brand", "uk-navbar-center", "uk-visible-small"], ["id", "offcanvas", 1, "uk-offcanvas"], [1, "uk-offcanvas-bar"], [1, "uk-nav", "uk-nav-offcanvas"], ["routerLinkActive", "uk-active"], ["routerLink", "/registration"], ["routerLink", "/login"], [3, "routerLink"], ["routerLink", "/profile"], ["routerLink", "/create_post"], ["routerLink", "/feed"], ["href", "JavaScript:", 3, "click"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Social network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MainMenuComponent_li_7_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, MainMenuComponent_li_8_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MainMenuComponent_li_9_Template, 3, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MainMenuComponent_li_10_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MainMenuComponent_li_11_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MainMenuComponent_li_12_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MainMenuComponent_li_13_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MainMenuComponent_li_14_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Social network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, MainMenuComponent_li_24_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, MainMenuComponent_li_25_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, MainMenuComponent_li_26_Template, 3, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, MainMenuComponent_li_27_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, MainMenuComponent_li_28_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, MainMenuComponent_li_29_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, MainMenuComponent_li_30_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authorized);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-menu',
                templateUrl: './main-menu.component.html',
                styleUrls: ['./main-menu.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _core_services_counters_api_service__WEBPACK_IMPORTED_MODULE_4__["CountersApiService"] }]; }, null); })();


/***/ }),

/***/ "lkLW":
/*!********************************************************!*\
  !*** ./src/app/pages/post-page/post-page.component.ts ***!
  \********************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PostPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostPageComponent.??fac = function PostPageComponent_Factory(t) { return new (t || PostPageComponent)(); };
PostPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PostPageComponent, selectors: [["app-post-page"]], decls: 2, vars: 0, template: function PostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "post-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QtcGFnZS9wb3N0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-page',
                templateUrl: './post-page.component.html',
                styleUrls: ['./post-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nPaU":
/*!*********************************************************!*\
  !*** ./src/app/core/resolvers/user-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: UserResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolverService", function() { return UserResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_users_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users-api.service */ "QIIi");



class UserResolverService {
    constructor(api) {
        this.api = api;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        return this.api.getUser(Number(id));
    }
}
UserResolverService.??fac = function UserResolverService_Factory(t) { return new (t || UserResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_users_api_service__WEBPACK_IMPORTED_MODULE_1__["UsersApiService"])); };
UserResolverService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UserResolverService, factory: UserResolverService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_users_api_service__WEBPACK_IMPORTED_MODULE_1__["UsersApiService"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "qc5V");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_api_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api-interceptor.service */ "vumh");
/* harmony import */ var _services_users_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/users-api.service */ "QIIi");
/* harmony import */ var _guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/guest-only.guard */ "ub8W");
/* harmony import */ var _guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/authorized-only.guard */ "Vrgt");
/* harmony import */ var _services_posts_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/posts-api.service */ "HUuX");
/* harmony import */ var _services_messages_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/messages-api.service */ "UIj5");
/* harmony import */ var _services_counters_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/counters-api.service */ "aMhN");












class CoreModule {
}
CoreModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CoreModule });
CoreModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_api_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["ApiInterceptorService"], multi: true },
        _services_users_api_service__WEBPACK_IMPORTED_MODULE_5__["UsersApiService"],
        _services_posts_api_service__WEBPACK_IMPORTED_MODULE_8__["PostsApiService"],
        _guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_6__["GuestOnlyGuard"],
        _guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizedOnlyGuard"],
        _services_messages_api_service__WEBPACK_IMPORTED_MODULE_9__["MessagesApiService"],
        _services_counters_api_service__WEBPACK_IMPORTED_MODULE_10__["CountersApiService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
                ],
                providers: [
                    _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_api_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["ApiInterceptorService"], multi: true },
                    _services_users_api_service__WEBPACK_IMPORTED_MODULE_5__["UsersApiService"],
                    _services_posts_api_service__WEBPACK_IMPORTED_MODULE_8__["PostsApiService"],
                    _guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_6__["GuestOnlyGuard"],
                    _guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizedOnlyGuard"],
                    _services_messages_api_service__WEBPACK_IMPORTED_MODULE_9__["MessagesApiService"],
                    _services_counters_api_service__WEBPACK_IMPORTED_MODULE_10__["CountersApiService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qc5V":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    /**
     * Request to API
     */
    request(request) {
        return this.http.request(request);
    }
    /**
     * JSONp request to API
     */
    jsonp(url, callback) {
        url = this.removeSlash(url);
        return this.http.jsonp(this.apiUrl + url, callback);
    }
    /**
     * GET request to API
     */
    get(url, options = {}) {
        url = this.removeSlash(url);
        return this.http.get(this.apiUrl + url, options);
    }
    /**
     * POST request to API
     */
    post(url, body = null, options = {}) {
        url = this.removeSlash(url);
        return this.http.post(this.apiUrl + url, body, options);
    }
    /**
     * PUT request to API
     */
    put(url, body, options = {}) {
        url = this.removeSlash(url);
        return this.http.put(this.apiUrl + url, body, options);
    }
    /**
     * DELETE request to API
     */
    delete(url, options = {}) {
        url = this.removeSlash(url);
        return this.http.delete(this.apiUrl + url, options);
    }
    /**
     * PATCH request to API
     */
    patch(url, body, options = {}) {
        url = this.removeSlash(url);
        return this.http.patch(this.apiUrl + url, body, options);
    }
    /**
     * OPTIONS request to API
     */
    options(url, options = {}) {
        url = this.removeSlash(url);
        return this.http.options(this.apiUrl + url, options);
    }
    /**
     * HEAD request to API
     */
    head(url, options = {}) {
        url = this.removeSlash(url);
        return this.http.head(this.apiUrl + url, options);
    }
    removeSlash(url) {
        const last = url.slice(-1);
        if (last === '/') {
            url = url.slice(0, url.length - 1);
        }
        return url;
    }
}
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "r/gj":
/*!****************************************************!*\
  !*** ./src/app/pages/page404/page404.component.ts ***!
  \****************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ "k+G5");



class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.??fac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 4, vars: 0, consts: [[1, "uk-container", "uk-container-center", "uk-margin-top", "uk-margin-large-bottom"], [1, "uk-grid"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MainMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ub8W":
/*!*************************************************!*\
  !*** ./src/app/core/guards/guest-only.guard.ts ***!
  \*************************************************/
/*! exports provided: GuestOnlyGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestOnlyGuard", function() { return GuestOnlyGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class GuestOnlyGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.can();
    }
    canActivateChild(next, state) {
        return this.can();
    }
    canLoad(route, segments) {
        return this.can();
    }
    can() {
        const can = !this.auth.isAuthorized();
        if (!can) {
            this.router.navigateByUrl('/');
        }
        return can;
    }
}
GuestOnlyGuard.??fac = function GuestOnlyGuard_Factory(t) { return new (t || GuestOnlyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GuestOnlyGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: GuestOnlyGuard, factory: GuestOnlyGuard.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GuestOnlyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "C7Ai");
/* harmony import */ var _core_resolvers_user_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/resolvers/user-resolver.service */ "nPaU");
/* harmony import */ var _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page404/page404.component */ "r/gj");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guards/guest-only.guard */ "ub8W");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "foYC");
/* harmony import */ var _pages_profile_edit_page_profile_edit_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/profile-edit-page/profile-edit-page.component */ "/YD1");
/* harmony import */ var _core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/guards/authorized-only.guard */ "Vrgt");
/* harmony import */ var _core_resolvers_profile_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/resolvers/profile-resolver.service */ "Eb5S");
/* harmony import */ var _pages_create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/create-post-page/create-post-page.component */ "GaAs");
/* harmony import */ var _pages_feed_page_component_feed_page_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/feed-page-component/feed-page-component.component */ "0P1i");
/* harmony import */ var _core_resolvers_feed_resolver_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/resolvers/feed-resolver.service */ "Ngw0");

















const routes = [
    {
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'users/:id',
        component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"],
        pathMatch: 'full',
        resolve: {
            user_data: _core_resolvers_user_resolver_service__WEBPACK_IMPORTED_MODULE_4__["UserResolverService"]
        },
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
        pathMatch: 'full',
        canLoad: [_core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__["GuestOnlyGuard"]],
        canActivate: [_core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__["GuestOnlyGuard"]],
        canActivateChild: [_core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__["GuestOnlyGuard"]],
    },
    {
        path: 'registration',
        component: _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationPageComponent"],
        pathMatch: 'full',
        canLoad: [_core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__["GuestOnlyGuard"]],
        canActivate: [_core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__["GuestOnlyGuard"]],
        canActivateChild: [_core_guards_guest_only_guard__WEBPACK_IMPORTED_MODULE_7__["GuestOnlyGuard"]],
    },
    {
        path: 'profile',
        component: _pages_profile_edit_page_profile_edit_page_component__WEBPACK_IMPORTED_MODULE_9__["ProfileEditPageComponent"],
        pathMatch: 'full',
        canLoad: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        canActivate: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        canActivateChild: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        resolve: {
            user_data: _core_resolvers_profile_resolver_service__WEBPACK_IMPORTED_MODULE_11__["ProfileResolverService"]
        }
    },
    {
        path: 'create_post',
        component: _pages_create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_12__["CreatePostPageComponent"],
        pathMatch: 'full',
        canLoad: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        canActivate: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        canActivateChild: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
    },
    {
        path: 'feed',
        component: _pages_feed_page_component_feed_page_component_component__WEBPACK_IMPORTED_MODULE_13__["FeedPageComponentComponent"],
        pathMatch: 'full',
        canLoad: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        canActivate: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        canActivateChild: [_core_guards_authorized_only_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizedOnlyGuard"]],
        resolve: {
            feed: _core_resolvers_feed_resolver_service__WEBPACK_IMPORTED_MODULE_14__["FeedResolverService"]
        }
    },
    {
        path: '**',
        component: _pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vumh":
/*!**********************************************************!*\
  !*** ./src/app/core/services/api-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: ApiInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptorService", function() { return ApiInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class ApiInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const auth = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        const payload = auth.payload;
        const token = payload ? payload.token : null;
        req = this.addToken(req, token);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 401) {
                auth.logout();
            }
            if (error.status === 403) {
                router.navigateByUrl('/');
            }
            throw error;
        }));
    }
    addToken(req, token) {
        const requestOptions = {};
        if (req.body) {
            requestOptions.body = req.body;
        }
        if (token) {
            requestOptions.setHeaders = {
                Authorization: 'Bearer ' + token,
            };
        }
        return req.clone(requestOptions);
    }
}
ApiInterceptorService.??fac = function ApiInterceptorService_Factory(t) { return new (t || ApiInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ApiInterceptorService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ApiInterceptorService, factory: ApiInterceptorService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map