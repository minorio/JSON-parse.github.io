let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");
let centerBox = document.querySelector(".center-box");
let table = document.querySelector("table");
const myjson = JSON.parse(textarea.value);
const modal = document.querySelector(".modal-box");
const closeButton = document.querySelector(".close-button");
const modalTable = document.querySelector(".modal-content table");

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
    

    if (typeof data[item].data !== "object") {
      td.className = "col";
      td.innerText = data[item];
    } else {
      td.id = "btnview";
      const buttonView = document.createElement("button");
      buttonView.innerText = "view";
      buttonView.id = data[item].id;

      buttonView.className = "view";

      td.appendChild(buttonView);
    }

    acc.appendChild(td);

    return acc;
  }, row);
}

function createTable(Data, trow)  {console.log(Data);
  return Object.keys(Data).reduce((acc, item) => {

    let modaltd = document.createElement("td");
    modaltd.className = "modaltd";
    modaltd.innerText = Data[item];
    acc.appendChild(modaltd);
    console.log(Data[item])
    return acc;
  }, trow);
 
}

table.onclick = function (event) {
  if (event.target.className === "view") {
    modalTable.innerHTML = "";
    const targetId = event.target.id;
    console.log(targetId);
    const modalData = myjson.CyberPunk.find(
      (item) => item.attachments.id == targetId
    ).attachments.data;
       let modalkeys = Object.keys(modalData)
      console.log(modalkeys)
        let tr1 = document.createElement("tr");
        let tr2 = document.createElement("tr");
        const newModalTh = createTable(modalkeys,tr1);
        const newModalTr = createTable(modalData,tr2);
        modalTable.appendChild(newModalTh);
        modalTable.appendChild(newModalTr);

        console.log(modalData)
    
  modal.classList.add("modal-visible");
  }

};
modal.onclick = function () {
  modal.classList.remove("modal-visible");
};
closeButton.onclick = function () {
  modal.classList.remove("modal-visible");
};

btn.onclick = function () {
  centerBox.classList.add("hide-center-box");

  if (textarea.value !== "") {
    const headTr = document.createElement("tr");

    const nameColumns = Object.keys(myjson.CyberPunk[0]);
    const tableHeadColumn = getTableColumnName(nameColumns, headTr);

    table.appendChild(tableHeadColumn);

    for (i = 0; i < myjson.CyberPunk.length; i++) {
      let tr = document.createElement("tr");

      const newTr = getTableRows(myjson.CyberPunk[i], tr);

      table.appendChild(newTr);
    }
  } else {
    alert("Вы не добавили JSON файл!");
    centerBox.classList.remove("hide-center-box");
  }
};
