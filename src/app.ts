import {Form} from './form';
import {DocumentList} from './documentList'
import './style/main.scss';

class App {
    newDocument = new Form();
    documentList = new DocumentList();
}


window.onload = () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    let AppClass = new App();
    if(page == "new-document.html") {
        let main = document.getElementById("main");
        main.innerHTML = AppClass.newDocument.render();

        let saveButton = document.getElementById("saveForm");
        let backButton = document.getElementById("goBack");
        let resultsDiv = document.getElementById("results");
        saveButton.addEventListener("click", () => {
            AppClass.newDocument.getValue();
            resultsDiv.innerText = AppClass.newDocument.getValue();
            AppClass.newDocument.save();
        });

        backButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if(page == "document-list.html") {
        AppClass.documentList.render();
    }
};
