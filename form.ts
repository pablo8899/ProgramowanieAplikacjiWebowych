import {InputField} from './index';
import {TextAreaField} from './index';
import {DateField} from './index';
import {EmailField} from './index';
import {SelectField} from './index';
import {CheckboxField} from './index';

import {Field} from './index';

export class Form {
     fieldsArray : Field[] = [new InputField, new InputField, new EmailField, new SelectField,new SelectField, new CheckboxField];

     render() : string {
        let retString = "";

        this.fieldsArray.forEach(element => {
            retString += element.render();
        });

        return retString;
     }

     
     getValue() : string {
        let retString = "";

        this.fieldsArray.forEach(element => {
            retString += element.render();
        });

        return retString;
     }
}