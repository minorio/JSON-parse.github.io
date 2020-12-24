let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");
let centerBox = document.querySelector(".center-box");
let table = document.querySelector("table");
const myjson = JSON.parse(textarea.value);
const modal = document.querySelector('.modal-box');
const closeButton = document.querySelector('.close-button');
const modalBox = document.querySelector('.modal-box');
const modalTable = document.querySelector('.modal-content table');

function getTableColumnName(data, row) {
    console.log(data, row);
    return data.reduce((acc, item) => {
        let th = document.createElement("th");
        th.className = "thname";
        th.innerText = item;

        acc.appendChild(th);

        return acc;
    }, row);
}

function getTableRows(data, row) {
    console.log(data, row);
    return Object.keys(data).reduce((acc, item) => {
        let td = document.createElement("td");
        td.className = "col";

        if (typeof data[item].data !== "object") {
            td.innerText = data[item];
        } else {
            const buttonView = document.createElement("button");
            buttonView.innerText = 'view';
            buttonView.id = data[item].id;

            buttonView.className = 'view';

            td.appendChild(buttonView);
        }

        acc.appendChild(td);

        return acc;
    }, row);
}

function createTable(modalData){
console.log(modalData);
}

table.onclick = function (event) {

    if (event.target.className === 'view') {
        modalTable.innerHTML = '';
        const targetId = event.target.id;
        console.log(targetId);
        const modalData = myjson.CyberPunk.find(item => item.attachments.id == targetId).attachments.data;

        createTable(modalData);
    }
    modal.classList.add('modal-visible')
}
modalBox.onclick = function () {
    modal.classList.remove('modal-visible');
}
closeButton.onclick = function () {
    modal.classList.remove('modal-visible');
}

btn.onclick = function () {
    centerBox.classList.add("hide-center-box");

    if (textarea.value !== "") {


        const headTr = document.createElement("tr");

        const nameColumns = Object.keys(myjson.CyberPunk[0]);
        const tableHeadColumn = getTableColumnName(nameColumns, headTr);

        table.appendChild(tableHeadColumn);

        for (i in myjson.CyberPunk) {
            let tr = document.createElement("tr");

            const newTr = getTableRows(myjson.CyberPunk[i], tr, i);

            table.appendChild(newTr);
        }
    } else {
        alert("Вы не добавили JSON файл!");
        centerBox.classList.remove("hide-center-box");
    }
};