"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("./index");
var index_4 = require("./index");
var Form = /** @class */ (function () {
    function Form() {
        this.fieldsArray = [new index_1.InputField, new index_1.InputField, new index_2.EmailField, new index_3.SelectField, new index_3.SelectField, new index_4.CheckboxField];
    }
    Form.prototype.render = function () {
        var retString = "";
        this.fieldsArray.forEach(function (element) {
            retString += element.render();
        });
        return retString;
    };
    Form.prototype.getValue = function () {
        var retString = "";
        this.fieldsArray.forEach(function (element) {
            retString += element.render();
        });
        return retString;
    };
    return Form;
}());
exports.Form = Form;
