let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
let centerBox = document.querySelector('.center-box');

function getTableColumnName(data, row) {
    console.log(data, row)
    return data.reduce((acc, item) => {
        let th = document.createElement('th');
        th.className = ('col');
        th.innerText = item;

        acc.appendChild(th);

        return acc;
    }, row);
}

function getTableRows(data, row) {
    console.log(data, row)
    return Object.keys(data).reduce((acc, item) => {
        let td = document.createElement('td');
        td.className = ('col');
        td.innerText = data[item];

        acc.appendChild(td);

        return acc;
    }, row);
}

btn.onclick = function () {
    centerBox.classList.add('hide-center-box');

    if (textarea.value !== "") {
        const myjson = JSON.parse(textarea.value);

        let table = document.querySelector('table');
        const headTr = document.createElement('tr');

        const nameColumns = Object.keys(myjson.CyberPunk[0]);
        const tableHeadColumn = getTableColumnName(nameColumns, headTr);
        
        table.appendChild(tableHeadColumn);

        for (i in myjson.CyberPunk) {
            let tr = document.createElement('tr');
            
            const newTr = getTableRows(myjson.CyberPunk[i], tr);

            table.appendChild(newTr);
        }
        console.log(table);
    } else {
        alert("Вы не добавили JSON файл!");
        centerBox.classList.remove('hide-center-box');
    }

};