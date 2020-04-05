"use strict";
exports.__esModule = true;
var FieldType;
(function (FieldType) {
    FieldType[FieldType["Input"] = 0] = "Input";
    FieldType[FieldType["TextArea"] = 1] = "TextArea";
    FieldType[FieldType["Date"] = 2] = "Date";
    FieldType[FieldType["Email"] = 3] = "Email";
    FieldType[FieldType["Select"] = 4] = "Select";
    FieldType[FieldType["Checkbox"] = 5] = "Checkbox";
})(FieldType || (FieldType = {}));
var FieldLabel = /** @class */ (function () {
    function FieldLabel() {
    }
    FieldLabel.prototype.render = function (label) {
        return "<b>" + label + "</b>";
    };
    return FieldLabel;
}());
var InputField = /** @class */ (function () {
    function InputField() {
        this.name = "Input";
        this.label = new FieldLabel();
        this.type = FieldType.Input;
        this.value = "";
    }
    InputField.prototype.render = function () {
        return "<input type='text' name='" + this.name + "' value='" + this.value + "'/>";
    };
    return InputField;
}());
exports.InputField = InputField;
var TextAreaField = /** @class */ (function () {
    function TextAreaField() {
        this.name = "TextArea";
        this.label = new FieldLabel();
        this.type = FieldType.TextArea;
        this.value = "";
    }
    TextAreaField.prototype.render = function () {
        return "<input type='email' name='" + this.name + "' value='" + this.value + "'/>";
    };
    return TextAreaField;
}());
exports.TextAreaField = TextAreaField;
var DateField = /** @class */ (function () {
    function DateField() {
        this.name = "Date";
        this.label = new FieldLabel();
        this.type = FieldType.Date;
        this.value = "";
    }
    DateField.prototype.render = function () {
        return "<input type='date' name='" + this.name + "' value='" + this.value + "'/>";
    };
    ;
    return DateField;
}());
exports.DateField = DateField;
var EmailField = /** @class */ (function () {
    function EmailField() {
        this.name = "Email";
        this.label = new FieldLabel();
        this.type = FieldType.Email;
        this.value = "";
    }
    EmailField.prototype.render = function () {
        return "<input type='email' name='" + this.name + "' value='" + this.value + "'/>";
    };
    return EmailField;
}());
exports.EmailField = EmailField;
var SelectField = /** @class */ (function () {
    function SelectField() {
        this.name = "Select";
        this.label = new FieldLabel();
        this.type = FieldType.Select;
        this.value = "";
    }
    SelectField.prototype.render = function () {
        return "<input type='email' name='" + this.name + "' value='" + this.value + "'/>";
    };
    return SelectField;
}());
exports.SelectField = SelectField;
var CheckboxField = /** @class */ (function () {
    function CheckboxField() {
        this.name = "Checkbox";
        this.label = new FieldLabel();
        this.type = FieldType.Checkbox;
        this.value = "";
    }
    CheckboxField.prototype.render = function () {
        return "<input type='checkbox' name='" + this.name + "' value='" + this.value + "'/>";
    };
    return CheckboxField;
}());
exports.CheckboxField = CheckboxField;
