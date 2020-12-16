// let jsjson = JSON.parse(text)
let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
btn.onclick = function() {
    alert(`Спасибо за бесмысленный кусочек - ${textarea.value}`);
   JSON.parse(textarea.value)
   
  };
  