enum FieldType {
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
}

class FieldLabel
{
    render(label : string) : string {
        return "<b>"+label+"</b>";
    }
}

export class InputField implements Field {
    name = "Input";
    label = new FieldLabel();
    type = FieldType.Input;
    value = "";
    render() : string {
        return "<input type='text' name='"+this.name+"' value='"+this.value+"'/>";
    }
}

export class TextAreaField implements Field{
    name = "TextArea";
    label = new FieldLabel();
    type =FieldType.TextArea;
    value = "";
    render() {
        return "<input type='email' name='"+this.name+"' value='"+this.value+"'/>";
    }
}

export class DateField implements Field {
    name = "Date";
    label = new FieldLabel();
    type = FieldType.Date;
    value = "";
    render() {
        return "<input type='date' name='"+this.name+"' value='"+this.value+"'/>";
    };
}

export class EmailField implements Field {
    name= "Email";
    label= new FieldLabel();
    type= FieldType.Email;
    value= "";
    render() : string {
        return "<input type='email' name='"+this.name+"' value='"+this.value+"'/>";
    }
}

export class SelectField implements Field {
    name = "Select";
    label = new FieldLabel();
    type = FieldType.Select;
    value = "";
    render() {
        return "<input type='email' name='"+this.name+"' value='"+this.value+"'/>";
    }
}
export class CheckboxField implements Field {
    name = "Checkbox";
    label = new FieldLabel();
    type = FieldType.Checkbox;
    value = "";
    render() {
        return "<input type='checkbox' name='"+this.name+"' value='"+this.value+"'/>";
    }
}