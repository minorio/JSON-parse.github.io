let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
btn.onclick = function () {
    try {
        if (textarea.value !== "") {
            const JSONtoObj = JSON.parse(textarea.value);
            console.log(JSONtoObj);
        } else alert("Вы не добавили JSON файл!");
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Неправильный формат")
        }
    }
};