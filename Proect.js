let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
btn.onclick = function() {
    const JSONtoObj = JSON.parse(textarea.value);
    console.log(JSONtoObj);
};
