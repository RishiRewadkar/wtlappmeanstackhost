(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron container\" style=\"text-align: center;\"> \n        <h1 style=\"font-family: 'Times New Roman', Times, serif;\"><b>Admin Control Panel</b></h1>\n  </div>\n  <div class=\"container\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\"(click)=\"viewexisting()\">View Existing Companys</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\"(click)=\"studentprofile()\">CREATE STUDENT PROFILE</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\"(click)=\"logout()\">LOGOUT</button>\n    <hr>\n  </div> \n\n <div class=\"container\" id=\"two\" style=\"display: none;\">\n  <div class=\"card\" *ngFor =\"let company of companies\">\n    <div class=\"card-header\" style=\"text-align: center;\">\n            <h4>Company Name: {{company.companyname}}</h4>\n    </div>\n    <div class=\"card-body\">\n        <p>Company URL: {{company.companyurl}}</p>\n        <p>Company Email ID: {{company.companyemail}}</p>\n        <p>Company Contact Number: {{company.companycontact}}</p>\n    </div> \n    <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" style=\"float: right;width: 20%;\"(click)=\"deletecompany(company.companyname)\">DELETE COMPANY</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" id=\"three\" style=\"display: none;\">\n  <h3> NEW STUDENT :</h3>\n  <form [formGroup]=\"myIForm\" >\n    <div class=\"form-group\">\n      <label for=\"uname\">STUDENT NAME:</label>\n      <input type=\"text\" formControlName=\"studentname\"class=\"form-control\" id=\"username\" placeholder=\"Enter username\" name=\"username\" >\n      <span class=\"help-block\" *ngIf=\"isValid('studentname')\" style=\"color: brown;\" >Please enter a valid username !!!</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">STUDENT PASSWORD:</label>\n      <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" >\n      <span class=\"help-block\" *ngIf=\"isValid('password')\" style=\"color: brown;\" >Please enter a valid username !!!</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">STUDENT ID:</label>\n      <input type=\"text\" formControlName=\"studentid\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" >\n      <span class=\"help-block\" *ngIf=\"isValid('studentid')\" style=\"color: brown;\" >Please enter a valid username !!!</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">STUDENT CGPA:</label>\n      <input type=\"text\" formControlName=\"studentCGPA\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" >\n      <span class=\"help-block\" *ngIf=\"isValid('studentCGPA')\" style=\"color: brown;\" >Please enter a valid username !!!</span>\n    </div>\n\n     \n    <div>\n      <hr>\n      <h4>Branch : </h4>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\" for=\"check1\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" formControlName=\"COMP\" name=\"option1\" value=\"present\">Computer Science\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\" for=\"check1\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" formControlName=\"IT\" value=\"present\">Information Technology\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\" for=\"check1\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" formControlName=\"ENTC\" value=\"present\">Electronics and Telecommunication Engineering \n        </label>\n      </div>\n    </div>\n    <hr>\n    <h4>Student In : </h4>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\" for=\"check1\">\n        <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"FE\" id=\"check1\" name=\"option1\" value=\"present\">First Year Engineering\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\" for=\"check1\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" formControlName=\"SE\" name=\"option1\" value=\"present\">Second Year Engineering\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\" for=\"check1\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" formControlName=\"TE\" name=\"option1\" value=\"present\">Third Year Engineering\n      </label>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\" for=\"check1\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" formControlName=\"BE\" value=\"present\">Final Year Engineering\n      </label>\n    </div>\n    <hr>\n    <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-outline-info\" (click)=\"newstudent()\" style=\"width: 30%;\">Create New Student Profile</button>\n  </div>\n  </form>\n  <hr>\n  <h3 style=\"color: green;\">{{successmsg}}</h3>\n  <hr>\n</div>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminlogin/adminlogin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminlogin/adminlogin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row h-100\" style=\"padding:15%;\" >\n  <div class=\"col-sm-12 my-auto\" >\n    <div style=\"text-align: center;font-size:40px;\">ADMIN LOGIN</div>\n    <form [formGroup]=\"loginForm\" >\n      <div class=\"form-group\">\n        <label for=\"uname\"> AdminUsername:</label>\n        <input type=\"text\" formControlName=\"Adminemail\"class=\"form-control\" id=\"username\" placeholder=\"Enter Admin Email\" name=\"username\" >\n        <span class=\"help-block\" *ngIf=\"isValid('Adminemail')\" style=\"color: brown;\">Please enter a valid User email Address !!!</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" >\n        <span class=\"help-block\"  *ngIf=\"isValid('password')\" style=\"color: brown;\">Please enter a valid Password !!!</span>\n      </div>\n      <div class=\"text-center\">\n        <button  type=\"submit\" (click)=\"Clogin()\" class=\"btn btn-secondary\" style=\"font-size: larger;width: 20%;\">Login</button>\n      </div>\n     \n    </form>\n      </div> \n   </div>\n\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <!-- Brand -->\n    <a class=\"navbar-brand\" routerLink=\"home\" style=\"font-size: larger;\">INTERN</a>\n  \n    <!-- Links -->\n    <ul class=\"navbar-nav\" style=\"font-size: larger;\">\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" routerLink=\"studentlogin\">STUDENT</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"companylogin\">COMPANY</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"adminlogin\">ADMIN</a>\n      </li>\n  \n    </ul>\n  </nav>\n  \n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/companyhome/companyhome.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/companyhome/companyhome.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron container\" style=\"text-align: center;\">\n            <h1>Company Name: {{companyname}}</h1>\n  </div>\n  <hr> \n\n  <div class=\"container\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\" (click)=\"addnew()\">ADD NEW Internship</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\" (click)=\"viewuploaded()\">View Uploaded Internship</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"fshortlist()\" style=\"margin-right: 30px;\">Short-List Students</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"logout()\">LOGOUT</button>\n    <hr>\n  </div>\n  <div class=\"container\" id=\"one\">\n    <form [formGroup]=\"myIForm\">\n        <div class=\"form-group\">\n          <label for=\"description\">About Internship:</label>\n          <textarea class=\"form-control\" rows=\"7\" formControlName=\"aboutinternship\" id=\"comment\" name=\"text\" placeholder=\"Description About the Internship\"></textarea>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"sel1\">Duration of Internship :</label>\n            <select class=\"form-control\" formControlName=\"durationofinternship\" id=\"sel1\">\n              <option>1 Month</option>\n              <option>2 Month</option>\n              <option>3 Month</option>\n            </select>\n          </div>\n        \n\n          <div class=\"form-group row\">\n            <label for=\"example-date-input\" class=\"col-2 col-form-label\">Starting from :</label>\n            <div class=\"col-3\">\n              <input class=\"form-control\" formControlName=\"startinternship\" type=\"date\" id=\"date-input\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">Apply Before</label>\n            <div class=\"col-3\">\n              <input class=\"form-control\" formControlName=\"applybefore\" type=\"date\" id=\"date-input\">\n            </div>\n          </div>\n\n          <label for=\"demo\">For further query add your email address here :</label>\n          <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"internshipemail\" placeholder=\"Email Address\" id=\"demo\" name=\"email\">\n          <div class=\"input-group-append\">\n              <span class=\"input-group-text\">@gmail.com</span>\n          </div>\n          </div>\n          <!-- hidden form passing company name -->\n          <input type=\"hidden\" [(ngModel)]=\"companyname\" id=\"cn\" formControlName=\"companyname\">\n\n          <!-- pass?? -->\n\n          <hr>\n          <h2> This Internship Is for :</h2>\n          <div style=\"padding: 10px;\">\n          <h4>Student In : </h4>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"FE\" id=\"check1\" name=\"option1\" value=\"present\">First Year Engineering\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" formControlName=\"SE\" name=\"option1\" value=\"present\">Second Year Engineering\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" formControlName=\"TE\" name=\"option1\" value=\"present\">Third Year Engineering\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" formControlName=\"BE\" value=\"present\">Final Year Engineering\n            </label>\n          </div>\n        </div>\n\n\n            <div style=\"padding: 10px;\">\n          <h4>Department : </h4>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" formControlName=\"COMP\" name=\"option1\" value=\"present\">Computer Science\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" formControlName=\"IT\" value=\"present\">Information Technology\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"check1\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" formControlName=\"ENTC\" value=\"present\">Electronics and Telecommunication Engineering \n            </label>\n          </div>\n        </div>\n\n        <div style=\"padding: 10px;\">\n          <h4>Academic grade minimum :</h4>\n          <div class=\"form-group row\">\n            <label for=\"example-number-input\" class=\"col-2 col-form-label\">CGPA:</label>\n            <div class=\"col-2\">\n              <input class=\"form-control\" type=\"number\" value=\"7\" min=\"0\" max=\"10\" formControlName=\"CGPA\" step=\"0.1\" id=\"example-number-input\">\n            </div>\n          </div>\n        </div>\n        <div class=\"text-center\">\n        <button type=\"submit\" style=\"width: 40%;margin-right: 50px;margin-left: 30px;\"class=\"btn btn-success\" (click)=\"addinternship()\">POST</button>\n      </div>\n      </form>\n      <hr>\n      <h3 style=\"color: green;\">{{successmessage}}</h3>\n      <hr>\n  </div>\n  <div class=\"container\" id=\"two\" style=\"display: none;\">\n    <h2>UPLOADED INTERNSHIP</h2>\n    <hr>\n    <div id=\"uploaded\" *ngFor =\"let upint of uploadedinternship\">\n      <p>About Internship:<br>{{upint.aboutinternship}}</p>\n      <p>Duration:{{upint.durationofinternship}}</p>\n      <p>Start: {{upint.startinternship.split(\"T\")[0]}}  Apply_Before:{{upint.applybefore.split(\"T\")[0]}}</p>\n      <p>Email Address: {{upint.internshipemail}}  <button type=\"button\" \n        class=\"btn btn-outline-danger\" style=\"float: right;\" (click)=\"deleteinternship(upint)\">REMOVE UPLODED INTERNSHIP</button></p>\n      <hr>\n    </div>\n  </div>\n  <div class=\"container\" id=\"three\" style=\"display: none;\" >\n    <h2>APPLIED CANDIDATES</h2>\n    <hr>\n    <div class=\"card\" *ngFor=\"let stu of arrayofstu\" style=\"margin: 10px;\">\n      <div class=\"card-header\">\n        <pre>Name Of Student: {{stu.studentname}} </pre> \n     <pre>STUDENT ID:{{stu.studentid}}   YEAR:{{stu.year}}   Branch:{{stu.branch}}  Average CGPA:{{stu.studentCGPA}} </pre>\n      </div>\n      <div class=\"card-body\">\n        <p>VIEW RESUME : <button type=\"button\" (click)=\"viewresume(stu.resume)\" class=\"btn btn-outline-secondary\">DOWNLOAD CANDIDATES RESUME</button></p>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"reject(stu.studentid)\">REJECT/REMOVE</button>\n        <button type=\"button\" class=\"btn btn-outline-success\" style=\"float: right;\" (click)=\"selected(stu.studentid)\" id=\"sl\">SHORTLIST</button>\n      </div>\n    </div>\n    <hr>\n    <h2>Send Message To Shortlisted Students</h2>\n    <form [formGroup]=\"finalmessage\">\n      <div class=\"form-group\">\n        <label for=\"comment\">for further process:</label>\n        <input class=\"form-control\" formControlName=\"msg\" id=\"comment\" name=\"text\" placeholder=\"WHAT NEXT ???\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"sendstudentmessage()\">SEND MESSAGE</button>\n    </form>\n    <hr>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/companylogin/companylogin.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/companylogin/companylogin.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row h-100\" style=\"padding:15%;\" >\n  <div class=\"col-sm-12 my-auto\" >\n    <h2 style=\"text-align: center;font-size:40px;\">COMPANY LOGIN</h2>\n    <form [formGroup]=\"loginForm\" >\n      <div class=\"form-group\"> \n        <label for=\"uname\">Username:</label>\n        <input type=\"text\" formControlName=\"companyemail\"class=\"form-control\" id=\"username\" placeholder=\"Enter Company Email\" name=\"username\" >\n        <span class=\"help-block\" *ngIf=\"isValid('companyemail')\" style=\"color: brown;\">Please enter a Company email Address username !!!</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" >\n        <span class=\"help-block\" *ngIf=\"isValid('password')\" style=\"color: brown;\"  >Please enter a valid Password !!!</span>\n      </div>\n      <button type=\"submit\" (click)=\"Clogin()\" class=\"btn btn-secondary\" style=\"font-size: larger;width: 20%;\">Login</button>\n      <button (click)=\"movetoregister()\" style=\"float: right;font-size: larger;\" class=\"btn btn-info\">Sign Up/ New User Registeration</button>\n    </form>\n  </div>  \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/newcompany/newcompany.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/newcompany/newcompany.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row h-100\" style=\"padding:2%;\" >\n  <div class=\"col-sm-12 my-auto\" >\n    <h1 style=\"text-align: center;font-size:40px;\">New Company Registration</h1>\n    <h5 style=\"color: darkblue;\">Please Fill out the following details to be a part of our Organisation :</h5>\n    <form   [formGroup]=\"myForm\">\n        <div class=\"form-group\">\n            <label for=\"cname\">Company Name:</label>\n            <input type=\"text\" formControlName=\"companyname\" class=\"form-control\" id=\"cname\" placeholder=\"Enter Company Name\" name=\"cname\" >\n            <span class=\"help-block\"  *ngIf=\"isValid('companyname')\" style=\"color: brown;\">Please enter a valid company name!!!</span>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"uname\">Company Email ID:</label>\n          <input type=\"email\" formControlName=\"companyemail\" class=\"form-control\" id=\"username\" placeholder=\"Enter Email Address\" name=\"EID\" >\n          <span class=\"help-block\" *ngIf=\"isValid('companyemail')\" style=\"color: brown;\" >Please enter a valid Email ID!!!</span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pwd\">URL OF Company Website:</label>\n          <input type=\"url\" formControlName=\"companyurl\" class=\"form-control\" id=\"url\" placeholder=\"Enter Link to company Website\" name=\"clink\" >\n          <span class=\"help-block\" *ngIf=\"isValid('companyurl')\" style=\"color: brown;\" >Please enter valid Company Website URL!!!</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"cnumber\">Contact Number:</label>\n            <input type=\"text\" formControlName=\"companycontact\" class=\"form-control\" id=\"cnumber\" placeholder=\"Enter Phone Number\" name=\"cnumber\" >\n            <span class=\"help-block\" *ngIf=\"isValid('companycontact')\" style=\"color: brown;\" >Please enter valid Company Phone Number!!!</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"cpass\">Set Login Password:</label>\n            <input type=\"text\" formControlName=\"password\"class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" name=\"cpass\" >\n            <span class=\"help-block\" *ngIf=\"isValid('password')\" style=\"color: brown;\" >Please enter valid password!!!</span>\n          </div>\n          <hr>\n        <button type=\"submit\" (click)=\"companyregister()\" class=\"btn btn-secondary\" style=\"width: 20%;\">Create New User</button>\n        <button type=\"submit\" (click)=\"movetologin()\" style=\"float: right;width: 20%;\"  class=\"btn btn-info\" >GO TO LOGIN</button>\n      </form>\n      <div style=\"text-align: center;color: darkgreen;font-size: larger;\">\n          {{successMessage}}\n      </div>\n      \n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <!-- Brand -->\n    <a class=\"navbar-brand\" href=\"#\">INTERN</a>\n  \n    <!-- Links -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"../student/studentlogin\">Student</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Company</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Admin</a>\n      </li>\n  \n      <!-- Dropdown -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          Previous Years Placement\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Year 2019</a>\n          <a class=\"dropdown-item\" href=\"#\">Year 2018</a>\n          <a class=\"dropdown-item\" href=\"#\">Year 2017</a>\n        </div>\n      </li>\n    </ul>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 20px;\">\n       <div  id=\"myNavbar\" data-target=\"#myNavbar\">\n          <ul class=\"nav justify-content-center\">\n            <li class=\"nav-item\"><a href=\"#section1\" class=\"nav-link\"><h3>About Us</h3></a></li>\n            <li class=\"nav-item\"><a href=\"#section2\" class=\"nav-link\"><h3>Director</h3></a></li>\n            <li class=\"nav-item\"><a href=\"#section3\" class=\"nav-link\"><h3>TNP Head</h3></a></li>\n          </ul>\n        </div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n  <div id=\"section1\" class=\"container-fluid\">\n    <h1>About US</h1>\n    <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate nihil neque optio ut eum nulla, blanditiis fugit dignissimos necessitatibus vero autem quod iusto nemo tempora ducimus debitis consequatur esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil, eum quia animi dicta deleniti hic ipsa totam quasi, atque, aliquid architecto omnis velit ipsam maxime dolore assumenda nulla aspernatur.\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe praesentium, pariatur cumque harum earum impedit voluptates blanditiis unde commodi, ab possimus alias totam dolorum distinctio eos architecto illo natus laudantium!\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi iure laudantium nobis tenetur vitae alias, doloribus dolorum quasi dolor quas quisquam at, facere asperiores unde sit inventore eveniet sed?\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque autem odio animi impedit non eum cum, placeat rem facere eaque rerum! Eveniet sunt molestiae a dolorem dolores reprehenderit dicta.\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis deserunt nobis, quisquam dolorem fugiat reprehenderit praesentium vero nihil laudantium maxime cupiditate modi voluptatibus dolore consequuntur alias quos tenetur!\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati recusandae ab repellendus? Vero id laudantium doloremque iure voluptatem, explicabo, porro soluta voluptate debitis consequuntur excepturi facere nihil recusandae animi quis?\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate nihil neque optio ut eum nulla, blanditiis fugit dignissimos necessitatibus vero autem quod iusto nemo tempora ducimus debitis consequatur esse! Lorem ipsum dolor sit amet\n        consectetur adipisicing elit. Cupiditate nihil, eum quia animi dicta deleniti hic ipsa totam quasi, atque, aliquid architecto omnis velit ipsam maxime dolore assumenda nulla aspernatur.\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis deserunt nobis, quisquam dolorem fugiat reprehenderit praesentium vero nihil laudantium maxime cupiditate modi voluptatibus dolore consequuntur alias quos tenetur!\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati recusandae ab repellendus? Vero id laudantium doloremque iure voluptatem, explicabo, porro soluta voluptate debitis consequuntur excepturi facere nihil recusandae animi quis?\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque atque quo. Obcaecati accusantium tempore in reprehenderit laborum error perferendis possimus iste molestias, sunt pariatur qui autem numquam ad blanditiis.\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque atque quo. Obcaecati accusantium tempore in reprehenderit laborum error perferendis possimus iste molestias, sunt pariatur qui autem numquam ad blanditiis.\n    </p>\n   \n  </div>\n</div>\n<div class=\"row\">\n  <div id=\"section2\" class=\"container-fluid\">\n    <h1>Message From Principal</h1>\n    <div class=\"row\">\n        <div class=\"col-sm-10\">\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quia libero, nihil exercitationem sapiente labore odio consectetur distinctio adipisci saepe molestias itaque velit porro aliquam, quibusdam culpa facere doloribus illo?\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate nihil neque optio ut eum nulla, blanditiis fugit dignissimos necessitatibus vero autem quod iusto nemo tempora ducimus debitis consequatur esse! Lorem ipsum dolor\n                sit amet consectetur adipisicing elit. Cupiditate nihil, eum quia animi dicta deleniti hic ipsa totam quasi, atque, aliquid architecto omnis velit ipsam maxime dolore assumenda nulla aspernatur.\n                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe praesentium, pariatur cumque harum earum impedit voluptates blanditiis unde commodi, ab possimus alias totam dolorum distinctio eos architecto illo natus laudantium!\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi iure laudantium nobis tenetur vitae alias, doloribus dolorum quasi dolor quas quisquam at, facere asperiores unde sit inventore eveniet sed?\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque autem odio animi impedit non eum cum, placeat rem facere eaque rerum! Eveniet sunt molestiae a dolorem dolores reprehenderit dicta.\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis deserunt nobis, quisquam dolorem fugiat reprehenderit praesentium vero nihil laudantium maxime cupiditate modi voluptatibus dolore consequuntur alias quos tenetur!\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati recusandae ab repellendus? Vero id laudantium doloremque iure voluptatem, explicabo, porro soluta voluptate debitis consequuntur excepturi facere nihil recusandae animi quis?\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque atque quo. Obcaecati accusantium tempore in reprehenderit laborum error perferendis possimus iste molestias, sunt pariatur qui autem numquam ad blanditiis.\n            </p></div>\n        <div class=\"col-sm-2\">  \n          <div class=\"card\">\n            <div class=\"card-header\">Director of INSTITUTE</div>\n            <div class=\"card-body\"><img class=\"img-responsive\" src=\"assets/img/dummy.png\" alt=\"Unable to display\" class=\"card-img-top\"></div> \n            <div class=\"card-footer\">Something......</div>\n          </div></div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div id=\"section3\" class=\"container-fluid\">\n    <h1>TNP Head</h1>\n    <div class=\"row\">\n        <div class=\"col-sm-10\">\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quia libero, nihil exercitationem sapiente labore odio consectetur distinctio adipisci saepe molestias itaque velit porro aliquam, quibusdam culpa facere doloribus illo?\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate nihil neque optio ut eum nulla, blanditiis fugit dignissimos necessitatibus vero autem quod iusto nemo tempora ducimus debitis consequatur esse! Lorem ipsum dolor\n                sit amet consectetur adipisicing elit. Cupiditate nihil, eum quia animi dicta deleniti hic ipsa totam quasi, atque, aliquid architecto omnis velit ipsam maxime dolore assumenda nulla aspernatur.\n                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe praesentium, pariatur cumque harum earum impedit voluptates blanditiis unde commodi, ab possimus alias totam dolorum distinctio eos architecto illo natus laudantium!\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi iure laudantium nobis tenetur vitae alias, doloribus dolorum quasi dolor quas quisquam at, facere asperiores unde sit inventore eveniet sed?\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque autem odio animi impedit non eum cum, placeat rem facere eaque rerum! Eveniet sunt molestiae a dolorem dolores reprehenderit dicta.\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis deserunt nobis, quisquam dolorem fugiat reprehenderit praesentium vero nihil laudantium maxime cupiditate modi voluptatibus dolore consequuntur alias quos tenetur!\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati recusandae ab repellendus? Vero id laudantium doloremque iure voluptatem, explicabo, porro soluta voluptate debitis consequuntur excepturi facere nihil recusandae animi quis?\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque atque quo. Obcaecati accusantium tempore in reprehenderit laborum error perferendis possimus iste molestias, sunt pariatur qui autem numquam ad blanditiis.\n            </p></div>\n        <div class=\"col-sm-2\">  \n          <div class=\"card\" style=\"width: 350;\">\n            <div class=\"card-header\">Director of INSTITUTE</div>\n            <div class=\"card-body\"><img class=\"img-responsive\" src=\"assets/img/dummy.png\" alt=\"Unable to display\" class=\"card-img-top\"></div>\n            <div class=\"card-footer\">Something......</div>\n          </div></div>\n  </div>\n</div>\n</div>\n</div>\n<footer id=\"sticky-footer\" class=\"py-4 bg-dark text-white-50\">\n    <div class=\"container text-center\">\n      <small>Copyright &copy;RISHI DEEPAK REWADKAR TE-4</small>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/studenthome/studenthome.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/studenthome/studenthome.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron container\" style=\"text-align: center;\">\n         <h3>Student Name:{{dval.studentname}} Student ID:{{dval.studentid}}</h3> \n           <h3> Branch:{{department}} Year:{{year}} CGPA:{{dval.studentCGPA}}</h3>\n  </div>\n  <div class=\"container\">\n    <h1>INTERNSHIP</h1>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\" (click)=\"viewinternship()\">Search for available/upcoming Internships</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\" (click)=\"viewnotification()\">Notifications</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\" (click)=\"editresume()\">Edit Resume</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"margin-right: 30px;\" (click)=\"logout()\">Log Out</button>\n  </div>\n  <div class=\"container\" id=\"one\" >\n    <hr>\n    <!-- Template for COMPANY INTERNSHIP VIEW -->\n    <div class=\"card\" *ngFor =\"let myint of myinternship\">\n        <div class=\"card-header\" style=\"text-align: center;\">   \n                <div style=\"font-size: larger;\">Company Name : {{myint.companyname}} </div>\n        </div>\n        <div class=\"card-body\">\n           <h4>About Internship:</h4>\n           <p>{{myint.aboutinternship}}</p> \n        </div> \n        <div class=\"card-footer\">\n         <pre style=\"font-size: larger;\"> Start Date:{{myint.startinternship.split(\"T\")[0]}}  Apply Before:{{myint.applybefore.split(\"T\")[0]}} Duration:{{myint.durationofinternship}}\n          <button type=\"button\" class=\"btn btn-outline-success\" style=\"float: right;\"  (click)=\"applyforinternship(myint.companyname)\" ><p id=\"applyint\">Apply for Internship</p></button></pre>\n        </div>\n      </div>\n  </div>\n  <div id=\"two\" class=\"container\" style=\"display: none;\">\n    <hr>\n    <div class=\"card\" *ngFor=\"let noti of notifications\">\n        <div class=\"card-header\" style=\"text-align: center;\">\n          <div style=\"font-size: larger;\">COMPANY NAME:{{noti.companyname}}</div>\n        </div>\n        <div class=\"card-body\">\n            <h5>Message from Company:</h5>\n            <p>{{noti.msg}}</p>\n        </div>\n\n      </div>\n  </div>\n\n  <div id=\"three\" class=\"container\" style=\"display: none;\">\n    <hr>\n    <div class=\"text-center\">\n      <h4>UPLOAD NEW RESUME/VIEW UPLOADED RESUME</h4>\n    </div>\n    <div style=\"text-align: center\" class=\"container\">\n      <form>      \n          <input type=\"file\" name=\"image\" (change)=\"selectImage($event)\" />\n          <button type=\"submit\" style=\"width: 30%;\" (click)=\"uploadresume()\" class=\"btn btn-info\">Upload Selected File</button>\n          <button (click)=\"downloadresume()\" style=\"float: right;width: 30%;\" type=\"button\" class=\"btn btn-secondary\">View Uploaded Resume</button>\n      </form>\n      \n    </div>\n  \n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/studentlogin/studentlogin.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/studentlogin/studentlogin.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row h-100\" style=\"padding:15%;\" >\n  <div class=\"col-sm-12 my-auto\" >\n  <h2 style=\"text-align: center;font-size:40px;\">STUDENT LOGIN</h2>\n  <form [formGroup]=\"loginForm\">\n    <div class=\"form-group\">\n      <label for=\"uname\">Username:</label>\n      <input type=\"text\" formControlName=\"studentid\" class=\"form-control\" id=\"username\" placeholder=\"Enter Student Id\" name=\"username\" >\n      <span class=\"help-block\" *ngIf=\"isValid('studentid')\" style=\"color: brown;\">Please enter a valid Student ID!!!</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\" >\n      <span class=\"help-block\" *ngIf=\"isValid('password')\" style=\"color: brown;\">Please enter a valid Password !!!</span>\n    </div>\n    <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-secondary\" style=\"font-size: larger;width: 20%;\" (click)=\"slogin()\">Login</button>\n    </div>\n  </form>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AdminComponent = class AdminComponent {
    constructor(_myservice, _router, _activatedRoute) {
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.myIForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            studentname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            studentid: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            studentCGPA: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            resume: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](" ", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            FE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            SE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            TE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            BE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            COMP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ENTC: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            IT: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this._myservice.getloginstatus()
            .subscribe(data => {
            this.status = data;
            if (this.status.status == false)
                this._router.navigate(['../adminlogin']);
        }, error => { this._router.navigate(['../adminlogin']); });
    }
    ngOnInit() {
    }
    isValid(controlName) {
        return this.myIForm.get(controlName).invalid && this.myIForm.get(controlName).touched;
    }
    viewexisting() {
        document.getElementById("two").style.display = "block";
        document.getElementById("three").style.display = "none";
        var obj = {};
        this._myservice.viewcompany(obj)
            .subscribe(data => this.companies = data, error => { this._router.navigate(['../admin']); });
    }
    studentprofile() {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "block";
    }
    newstudent() {
        this._myservice.addstudent(this.myIForm.value).subscribe(data => this.successmsg = 'Successfully  Created New Student Profile', error => this.successmsg = 'Error Occured Try Later');
    }
    deletecompany(cname) {
        var obj = { cname: cname };
        this._myservice.deletecompany(obj).subscribe();
        this.viewexisting();
    }
    logout() {
        this._myservice.adminlogout()
            .subscribe(data => {
            this.status = data;
            if (this.status.status == false)
                this._router.navigate(['../adminlogin']);
        }, error => { this._router.navigate(['../adminlogin']); });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\n{\n   font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqXG57XG4gICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AdminloginComponent = class AdminloginComponent {
    constructor(_myservice, _router, _activatedRoute) {
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Adminemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    Clogin() {
        console.log(this.loginForm.value);
        this._myservice.Alogin(this.loginForm.value).subscribe(data => {
            this._router.navigate(['/admin']);
        }, error => { console.log("INVALID CRED"); });
    }
};
AdminloginComponent.ctorParameters = () => [
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AdminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminlogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminlogin/adminlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminlogin.component.css */ "./src/app/adminlogin/adminlogin.component.css")).default]
    })
], AdminloginComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ang1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _student_studentlogin_studentlogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/studentlogin/studentlogin.component */ "./src/app/student/studentlogin/studentlogin.component.ts");
/* harmony import */ var _company_companylogin_companylogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/companylogin/companylogin.component */ "./src/app/company/companylogin/companylogin.component.ts");
/* harmony import */ var _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/studenthome/studenthome.component */ "./src/app/student/studenthome/studenthome.component.ts");
/* harmony import */ var _company_companyhome_companyhome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/companyhome/companyhome.component */ "./src/app/company/companyhome/companyhome.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _company_newcompany_newcompany_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company/newcompany/newcompany.component */ "./src/app/company/newcompany/newcompany.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/adminlogin/adminlogin.component.ts");

















const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'student', component: _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_8__["StudenthomeComponent"] },
    { path: 'company', component: _company_companyhome_companyhome_component__WEBPACK_IMPORTED_MODULE_9__["CompanyhomeComponent"] },
    { path: 'studentlogin', component: _student_studentlogin_studentlogin_component__WEBPACK_IMPORTED_MODULE_6__["StudentloginComponent"] },
    { path: 'companylogin', component: _company_companylogin_companylogin_component__WEBPACK_IMPORTED_MODULE_7__["CompanyloginComponent"] },
    { path: 'newCompany', component: _company_newcompany_newcompany_component__WEBPACK_IMPORTED_MODULE_12__["NewcompanyComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"] },
    { path: 'adminlogin', component: _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_16__["AdminloginComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _student_studentlogin_studentlogin_component__WEBPACK_IMPORTED_MODULE_6__["StudentloginComponent"],
            _company_companylogin_companylogin_component__WEBPACK_IMPORTED_MODULE_7__["CompanyloginComponent"],
            _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_8__["StudenthomeComponent"],
            _company_companyhome_companyhome_component__WEBPACK_IMPORTED_MODULE_9__["CompanyhomeComponent"],
            _company_newcompany_newcompany_component__WEBPACK_IMPORTED_MODULE_12__["NewcompanyComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
            _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_16__["AdminloginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
        ],
        providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_14__["MyserviceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company/companyhome/companyhome.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company/companyhome/companyhome.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueWhvbWUvY29tcGFueWhvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/company/companyhome/companyhome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company/companyhome/companyhome.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyhomeComponent", function() { return CompanyhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






let CompanyhomeComponent = class CompanyhomeComponent {
    constructor(_myservice, _router, _activatedRoute) {
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.successmessage = '';
        this.companyname = '';
        this.myIForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            companyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            aboutinternship: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            durationofinternship: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            startinternship: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            applybefore: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            internshipemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email),
            FE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            SE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            TE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            BE: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            COMP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ENTC: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            IT: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.finalmessage = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            msg: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this._myservice.getCompanyName()
            .subscribe(data => this.companyname = data.toString(), error => { this._router.navigate(['../companylogin']); });
    }
    ngOnInit() {
    }
    addnew() {
        document.getElementById("one").style.display = "block";
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
    }
    viewuploaded() {
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "block";
        document.getElementById("three").style.display = "none";
        this._myservice.getinternship()
            .subscribe(data => this.uploadedinternship = data, error => { this._router.navigate(['../Company']); });
    }
    fshortlist() {
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "block";
        this._myservice.shortlist(this.companyname).subscribe(data => { this.arrayofstu = data; }, error => console.log("Unable TO Fetch"));
    }
    logout() {
        localStorage.removeItem('token');
        this._router.navigate(['../Companylogin']);
    }
    addinternship() {
        this._myservice.addinternship(this.myIForm.value).subscribe(data => this.successmessage = 'Registration Success', error => this.successmessage = 'Some Error');
    }
    deleteinternship(obj) {
        this._myservice.deleteinternship(obj).subscribe(data => this.successmessage = 'Successfully Deleted', error => this.successmessage = 'Some Error');
        this.viewuploaded();
    }
    sendstudentmessage() {
        var obj = { "companyname": this.companyname, "msg": this.finalmessage.value.msg };
        this._myservice.sendmsg(obj).subscribe(data => this.successmessage = 'Successfully Completed ', error => this.successmessage = 'Some Error');
    }
    selected(studentid) {
        var studentobj = { "studentid": studentid };
        this._myservice.selectedstudent(studentobj).subscribe(data => this.successmessage = "DOne Happy", error => this.successmessage = "Not Happy");
        document.getElementById("sl").innerHTML = "ShortListed";
    }
    reject(studentid) {
        var studentobj = { "studentid": studentid };
        this._myservice.rejectedstudent(studentobj).subscribe(data => this.successmessage = "Done Happy", error => this.successmessage = "Not Happy");
        this.fshortlist();
    }
    viewresume(resume) {
        var obj = { filename: resume };
        this._myservice.downloadresume(obj).subscribe(data => { Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(data, resume); }, error => { console.log("Nahi mila"); });
    }
};
CompanyhomeComponent.ctorParameters = () => [
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CompanyhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companyhome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companyhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/companyhome/companyhome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companyhome.component.css */ "./src/app/company/companyhome/companyhome.component.css")).default]
    })
], CompanyhomeComponent);



/***/ }),

/***/ "./src/app/company/companylogin/companylogin.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/company/companylogin/companylogin.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\n{\n   font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jb21wYW55bG9naW4vY29tcGFueWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS9jb21wYW55bG9naW4vY29tcGFueWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqXG57XG4gICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/company/companylogin/companylogin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/companylogin/companylogin.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyloginComponent", function() { return CompanyloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CompanyloginComponent = class CompanyloginComponent {
    constructor(_myservice, _router, _activatedRoute) {
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    Clogin() {
        console.log(this.loginForm.value);
        this._myservice.login(this.loginForm.value).subscribe(data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/company']);
        }, error => { console.log("INVALID CRED"); });
    }
    movetoregister() {
        this._router.navigate(['../newCompany'], { relativeTo: this._activatedRoute });
    }
};
CompanyloginComponent.ctorParameters = () => [
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CompanyloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companylogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companylogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/companylogin/companylogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companylogin.component.css */ "./src/app/company/companylogin/companylogin.component.css")).default]
    })
], CompanyloginComponent);



/***/ }),

/***/ "./src/app/company/newcompany/newcompany.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company/newcompany/newcompany.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\n {\n     font-size: large;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9uZXdjb21wYW55L25ld2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7S0FFSyxnQkFBZ0I7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L25ld2NvbXBhbnkvbmV3Y29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxuIHtcbiAgICAgZm9udC1zaXplOiBsYXJnZTtcbiB9Il19 */");

/***/ }),

/***/ "./src/app/company/newcompany/newcompany.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company/newcompany/newcompany.component.ts ***!
  \************************************************************/
/*! exports provided: NewcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcompanyComponent", function() { return NewcompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NewcompanyComponent = class NewcompanyComponent {
    constructor(_myservice, _router, _activatedRoute) {
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.successMessage = '';
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            companyname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            companyurl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            companycontact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    isValid(controlName) {
        return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
    }
    companyregister() {
        this._myservice.submitRegister(this.myForm.value).subscribe(data => this.successMessage = 'Registration Success', error => this.successMessage = 'Some Error');
    }
    movetologin() {
        this._router.navigate(['../companylogin'], { relativeTo: this._activatedRoute });
    }
};
NewcompanyComponent.ctorParameters = () => [
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
NewcompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newcompany',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newcompany.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/newcompany/newcompany.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newcompany.component.css */ "./src/app/company/newcompany/newcompany.component.css")).default]
    })
], NewcompanyComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    position: relative; \n  }\n  #section1 {padding-top:50px;height:600px;color: rgb(0, 0, 0); background-color: #a7ccdd;}\n  #section2 {padding-top:50px;height:600px;color: rgb(0, 0, 0); background-color: #e8e5ee;}\n  #section3 {padding-top:50px;height:600px;color: rgb(0, 0, 0); background-color: #c3ced3;}\n  a{\n      color: black;\n  }\n  .card-img-top {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    -o-object-fit:contain;\n       object-fit:contain;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7RUFDQSxXQUFXLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztFQUN4RixXQUFXLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztFQUN4RixXQUFXLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztFQUV4RjtNQUNJLFlBQVk7RUFDaEI7RUFDQTtJQUNFLG1CQUFZO1lBQVosWUFBWTtJQUNaLHFCQUFrQjtPQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gIH1cbiAgI3NlY3Rpb24xIHtwYWRkaW5nLXRvcDo1MHB4O2hlaWdodDo2MDBweDtjb2xvcjogcmdiKDAsIDAsIDApOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjY2RkO31cbiAgI3NlY3Rpb24yIHtwYWRkaW5nLXRvcDo1MHB4O2hlaWdodDo2MDBweDtjb2xvcjogcmdiKDAsIDAsIDApOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlNWVlO31cbiAgI3NlY3Rpb24zIHtwYWRkaW5nLXRvcDo1MHB4O2hlaWdodDo2MDBweDtjb2xvcjogcmdiKDAsIDAsIDApOyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjZWQzO31cbiAgXG4gIGF7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLmNhcmQtaW1nLXRvcCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcbn1cbiAgIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MyserviceService = class MyserviceService {
    constructor(_http) {
        this._http = _http;
    }
    submitRegister(body) {
        return this._http.post('companyroute/newCompany', body, { observe: 'body' });
    }
    login(body) {
        return this._http.post('companyroute/Companylogin', body, { observe: 'body' });
    }
    slogin(body) {
        return this._http.post('users/studentlogin', body, { observe: 'body' });
    }
    Alogin(body) {
        return this._http.post('users/adminlogin', body, { observe: 'body' });
    }
    getCompanyName() {
        return this._http.get('companyroute/companyname', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    }
    getstudentid() {
        return this._http.get('users/studentid', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    }
    getloginstatus() {
        var body = {};
        return this._http.post('users/loginstatus', body, { observe: 'body' });
    }
    adminlogout() {
        var body = {};
        return this._http.post('users/adminlogout', body, { observe: 'body' });
    }
    getinternship() {
        return this._http.get('companyroute/uploadedinternship', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    }
    appliedinternship(body) {
        return this._http.post('users/studentapplied', body, { observe: 'body' });
    }
    shortlist(val) {
        return this._http.get('users/shortlist', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('companyname', val)
        });
    }
    getallinternship(body) {
        return this._http.get('users/studentinternship', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('SFE', body.FE).set('SSE', body.SE).set('STE', body.TE).set('SBE', body.BE)
        });
    }
    deleteinternship(body) {
        return this._http.post('companyroute/deleteinternship', body, { observe: 'body' });
    }
    addinternship(body) {
        return this._http.post('companyroute/addinternship', body, { observe: 'body' });
    }
    addstudent(body) {
        return this._http.post('users/addstudent', body, { observe: 'body' });
    }
    selectedstudent(body) {
        return this._http.post('users/selectedstudent', body, { observe: 'body' });
    }
    rejectedstudent(body) {
        return this._http.post('users/rejectedstudent', body, { observe: 'body' });
    }
    sendmsg(body) {
        return this._http.post('users/studentmsg', body, { observe: 'body' });
    }
    viewcompany(body) {
        return this._http.post('companyroute/getcompany', body, { observe: 'body' });
    }
    getnotification(body) {
        return this._http.post('users/getmsg', body, {});
    }
    downloadresume(body) {
        return this._http.post('users/downloadresume', body, { responseType: 'blob', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json') });
    }
    deletecompany(body) {
        return this._http.post('companyroute/deletecompany', body, { observe: 'body' });
    }
};
MyserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyserviceService);



/***/ }),

/***/ "./src/app/student/studenthome/studenthome.component.css":
/*!***************************************************************!*\
  !*** ./src/app/student/studenthome/studenthome.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudGhvbWUvc3R1ZGVudGhvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/student/studenthome/studenthome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student/studenthome/studenthome.component.ts ***!
  \**************************************************************/
/*! exports provided: StudenthomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudenthomeComponent", function() { return StudenthomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






let StudenthomeComponent = class StudenthomeComponent {
    constructor(http, _myservice, _router, _activatedRoute) {
        this.http = http;
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._myservice.getstudentid()
            .subscribe(data => {
            this.dval = data;
            if (this.dval.COMP == true) {
                this.department = "Computer Science";
            }
            if (this.dval.IT == true) {
                this.department = "Information Technology";
            }
            if (this.dval.ENTC == true) {
                this.department = "Electronics And Tele COmmunication";
            }
            if (this.dval.FE == true) {
                this.year = "First Year Engineering";
            }
            if (this.dval.SE == true) {
                this.year = "Second Year Engineering";
            }
            if (this.dval.TE == true) {
                this.year = "Third Year Engineering";
            }
            if (this.dval.BE == true) {
                this.year = "Final Year Engineering";
            }
        }, error => { this._router.navigate(['../studentlogin']); });
    }
    ngOnInit() {
    }
    viewnotification() {
        document.getElementById("two").style.display = "block";
        document.getElementById("one").style.display = "none";
        document.getElementById("three").style.display = "none";
        var obj = { "studentid": this.dval.studentid };
        this._myservice.getnotification(obj).subscribe(data => { this.notifications = data, console.log(data); }, error => { console.log("Nahi mila"); });
    }
    viewinternship() {
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "block";
        document.getElementById("three").style.display = "none";
        var obj = { "FE": this.dval.FE, "SE": this.dval.SE, "TE": this.dval.TE, "BE": this.dval.BE };
        this._myservice.getallinternship(obj)
            .subscribe(data => { this.myinternship = data; }, error => { console.log("Nahi mila"); });
    }
    applyforinternship(companyname) {
        var obj = { "companyname": companyname, "s_id": this.dval._id, "department": this.department, "year": this.year, "resume": this.dval.resume };
        this._myservice.appliedinternship(obj).subscribe(data => { console.log("Successfull done"); }, error => { console.log("Nahi mila"); });
        document.getElementById("applyint").innerHTML = "You Have Applied";
    }
    logout() {
        localStorage.removeItem('token');
        this._router.navigate(['../studentlogin']);
    }
    editresume() {
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "none";
        document.getElementById("three").style.display = "block";
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.images = file;
        }
    }
    uploadresume() {
        const formData = new FormData();
        formData.append('file', this.images);
        formData.append('sid', this.dval.studentid);
        this.http.post('http://localhost:3000/file', formData).subscribe((res) => console.log(res), (err) => console.log(err));
    }
    downloadresume() {
        var obj = { filename: this.dval.resume };
        this._myservice.downloadresume(obj).subscribe(data => { Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(data, this.dval.resume); }, error => { console.log("Nahi mila"); });
    }
};
StudenthomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
StudenthomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-studenthome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studenthome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/studenthome/studenthome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studenthome.component.css */ "./src/app/student/studenthome/studenthome.component.css")).default]
    })
], StudenthomeComponent);



/***/ }),

/***/ "./src/app/student/studentlogin/studentlogin.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/student/studentlogin/studentlogin.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\n{\n   font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50bG9naW4vc3R1ZGVudGxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50bG9naW4vc3R1ZGVudGxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqXG57XG4gICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/student/studentlogin/studentlogin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/student/studentlogin/studentlogin.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentloginComponent", function() { return StudentloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let StudentloginComponent = class StudentloginComponent {
    constructor(_myservice, _router, _activatedRoute) {
        this._myservice = _myservice;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            studentid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    slogin() {
        this._myservice.slogin(this.loginForm.value).subscribe(data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/student']);
        }, error => { console.log("INVALID STUDENT CRED"); });
    }
};
StudentloginComponent.ctorParameters = () => [
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
StudentloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-studentlogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studentlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/studentlogin/studentlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studentlogin.component.css */ "./src/app/student/studentlogin/studentlogin.component.css")).default]
    })
], StudentloginComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rishi/Desktop/NEW1ofWTL4/backend1/ang1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map