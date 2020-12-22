let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
btn.onclick = function () {
    try {
        if (textarea.value !== "") {
            const myjson = JSON.parse(textarea.value);
            let table = document.querySelector('table');
            for(let key in myjson.CyberPunk){
                console.log(CyberPunk.key)
            }
            for (i in myjson.CyberPunk) {
                

                let tr = document.createElement('tr');
                
                let td = document.createElement('td');
                td.className = ('td');
                td.innerText = myjson.CyberPunk[i];
                tr.appendChild(td);


                let td1 = document.createElement('td');
                td1.className = ('col');
                td1.innerText = myjson.CyberPunk[i].name;
                tr.appendChild(td1);
                let td2 = document.createElement('td');
                td2.innerText =   myjson.CyberPunk[i];
                td2.innerText = myjson.CyberPunk[i].material;
                tr.appendChild(td2);

                let td3 = document.createElement('td');
                td3.innerText = myjson.CyberPunk[i].use;
                tr.appendChild(td3);

                let td4 = document.createElement('td');
                td4.innerText = myjson.CyberPunk[i].lifeTime + ' years';
                tr.appendChild(td4);

                let td5 = document.createElement('td');
                td5.innerText = myjson.CyberPunk[i].price + ' $';
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