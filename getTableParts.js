function getModalTableRow(Data, trow) {
  return Object.keys(Data).reduce((acc, item) => {
    let modaltd = document.createElement("td");

    modaltd.className = "modaltd";
    modaltd.innerText = Data[item];

    acc.appendChild(modaltd);

    return acc;
  }, trow);
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
