export enum FieldType {
    Input,
    TextArea,
    Date,
    Email,
    Select,
    Checkbox
}

export interface Field {
    name: string;
    label: FieldLabel;
    type: FieldType;
    value: string;
    render(): string;
    getValue(): string;
}

class FieldLabel
{
    label: string;
    constructor(text: string) {
        this.label = "<label>"+text+"</label>";
    }

    show() {
        return this.label;
    }
}

export class InputField implements Field {
    name : string;
    label : FieldLabel;
    labelView : string;
    value : string;
    type = FieldType.Input;
    
    getValue() {
        return (<HTMLInputElement>document.getElementById(this.name)).value;
    }
    
    render() {
        return this.labelView + "<input type='input' name='"+this.name+"' id='"+this.name+"' value='"+this.value+"'/>";
    }

    constructor(label : string  ,name = "Input",value = "") {
        this.name = name;
        this.label = new FieldLabel(label);
        this.labelView = this.label.show();
        this.value = value;
    }
}


export class DateField implements Field {
    name : string;
    label : FieldLabel;
    labelView : string;
    value : string;
    type = FieldType.Date;
    
    getValue() {
        return (<HTMLInputElement>document.getElementById(this.name)).value;
    }
    
    render() {
        return this.labelView + "<input type='date' name='"+this.name+"' id='"+this.name+"' value='"+this.value+"'/>";
    }
    
    constructor(label : string  ,name = "Input",value = "") {
        this.name = name;
        this.label = new FieldLabel(label);
        this.labelView = this.label.show();
        this.value = value;
    }
}

export class EmailField implements Field {
    name : string;
    label : FieldLabel;
    labelView : string;
    value : string;
    type = FieldType.Email;
    
    getValue() {
        return (<HTMLInputElement>document.getElementById(this.name)).value;
    }
    
    render() {
        return this.labelView + "<input type='email' name='"+this.name+"' id='"+this.name+"' value='"+this.value+"'/>";
    }
    
    constructor(label : string  ,name = "Input",value = "") {
        this.name = name;
        this.label = new FieldLabel(label);
        this.labelView = this.label.show();
        this.value = value;
    }
}

export class SelectField implements Field {
    name : string;
    label : FieldLabel;
    labelView : string;
    value : string;
    options : string[];
    type = FieldType.Select;   

    getValue() {
        return (<HTMLInputElement>document.getElementById(this.name)).value;
    }
    
    render() {
        let options = "";
        this.options.forEach(element => {
            options += "<option>"+element+"</option>";
        });

        return this.labelView + "<select name='"+this.name+"' id='"+this.name+"' value='"+this.value+"'/>"+options+"</select>";
    }
    constructor(label : string, options : string[] ,name = "Input",value = "") {
        this.name = name;
        this.label = new FieldLabel(label);
        this.labelView = this.label.show();
        this.value = value;
        this.options = options;
    }
}
export class CheckboxField implements Field {
    name : string;
    label : FieldLabel;
    labelView : string;
    value : string;
    isChecked : boolean;
    type = FieldType.Checkbox;
    
    getValue() {
        return "" + (<HTMLInputElement>document.getElementById(this.name)).checked;
    }
    
    render() {
        return this.labelView + "<input type='checkbox' name='"+this.name+"' id='"+this.name+"' value='"+this.value+"'/>";
    }
    
    constructor(label : string ,name = "Input",value = "") {
        this.name = name;
        this.label = new FieldLabel(label);
        this.labelView = this.label.show();
        this.value = value;
    }
}

    export class TextAreaField implements Field{
        name : string;
        label : FieldLabel;
        labelView : string;
        value : string;
        type = FieldType.TextArea;
    
        getValue() {
            return (<HTMLInputElement>document.getElementById(this.name)).value;
        }
        
        render() {
            return this.labelView + "<textarea name='"+this.name+"' id='"+this.name+"' />"+this.value+"</textarea>";
        }
        
        constructor(label : string ,name = "Input",value = "") {
            this.name = name;
            this.label = new FieldLabel(label);
            this.labelView = this.label.show();
            this.value = value;
        }
    }
