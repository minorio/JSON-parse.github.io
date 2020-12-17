let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
btn.onclick = function () {
    try {
        if (textarea.value !== "") {
            const myjson = JSON.parse(textarea.value);
            let table = document.querySelector('table');
            for (let elem in myjson) {
                let tr = document.createElement('tr');
      
                let td1 = document.createElement('td');
                td1.innerText =  elem;
                tr.appendChild(td1);
                
                let td2 = document.createElement('td');
                td2.innerText =  elem;
                tr.appendChild(td2);
                
                let td3 = document.createElement('td');
                td3.innerText = elem.use;
                tr.appendChild(td3);

                let td4 = document.createElement('td');
                td4.innerText = elem.lifeTime;
                tr.appendChild(td4);

                let td5 = document.createElement('td');
                td5.innerText = elem.price;
                tr.appendChild(td5);
                
                table.appendChild(tr);
            }
        } else alert("Вы не добавили JSON файл!");
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Неправильный формат")
        }
    } finally {
        alert("Всё хорошо");
    }
};