import { TSMap } from "typescript-map"
import {InputField} from './field';
import {TextAreaField} from './field';
import {DateField} from './field';
import {EmailField} from './field';
import {SelectField} from './field';
import {CheckboxField} from './field';
import {FieldType} from './field';

import {Field} from './field';
import {LocStorage} from './dataStorage'
export class Form {
     fieldsArray : Field[] = [new InputField("Imię","name"), new InputField("Nazwisko","surname"), new EmailField("Email","email"), new SelectField("Kierunek studiów",["Pierwsza opcja","Druga opcja"],"study"), new CheckboxField("Czy preferujesz e-learning ?","elearningCHBoX"),new TextAreaField("Uwagi","note")];

      render() : string {
        let retString = "";

        this.fieldsArray.forEach(element => {
            retString += "<div class='Field'>"+element.render()+"</div>";
        });  
        return retString +"<button id='goBack'>Wstecz</button><button id='saveForm'>Zapisz</button>";
     }

     
      getValue() : string {
        const map = new TSMap();
        this.fieldsArray.forEach(el => {
            map.set(el.name, el.getValue());
        })
        return JSON.stringify(map);
     }

     save() {
      let loc = new LocStorage();
      loc.saveDocument(this.getValue());
      window.location.href = "index.html";
     }
}