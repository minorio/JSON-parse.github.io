let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");
let centerBox = document.querySelector(".center-box");
let table = document.querySelector("table");
let myjson = {};
const modal = document.querySelector(".modal-box");
const closeButton = document.querySelector(".close-button");
const modalTable = document.querySelector(".modal-content table");

window.onload = function () {
  table.onclick = function (event) {
    if (event.target.className === "view") {
      modalTable.innerHTML = "";

      let trHead = document.createElement("tr");
      let trBody = document.createElement("tr");

      const targetId = event.target.id;
      const modalData = myjson.CyberPunk.find(
        (item) => item.attachments.id == targetId
      ).attachments.data;
      const modalkeys = Object.keys(modalData);
      const newModalTh = getModalTableRow(modalkeys, trHead);
      const newModalTr = getModalTableRow(modalData, trBody);

      modalTable.appendChild(newModalTh);
      modalTable.appendChild(newModalTr);

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
    myjson = JSON.parse(textarea.value);

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
};
