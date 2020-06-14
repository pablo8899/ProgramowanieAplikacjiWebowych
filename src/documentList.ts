import { Guid } from "guid-typescript";
import { TSMap } from "typescript-map"
import {LocStorage} from './dataStorage'

export class DocumentList {

    documents : Map<string,string>;

    getDocumentList() {
        
        let loc = new LocStorage();
        let arr = loc.getDocuments();

        let map = new Map<string,string>();
        arr.forEach(key => {
            if(Guid.isGuid(key))
                map.set(key, localStorage.getItem(key));
        });

        this.documents = map;
    }

    render() {
        this.getDocumentList();
        let res = "";
        this.documents.forEach((value,key) => {
            let Json = JSON.parse(JSON.parse(value));
            let head = "";
            let body = "";

            Object.keys(Json).forEach(function(k){
                head += "<th>"+k+"</th>"
                body += "<td>"+Json[k]+"</td>"
            });
            
            let str = "<table><tr><th>id</th>"+ head + "</tr><tr><td>"+
                    key+"</td>"+ body + "</tr></table>"
            
            res += str;
        });

        document.getElementById("documents").innerHTML = res;
    }
    
}