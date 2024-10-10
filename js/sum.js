const inputText = document.querySelectorAll('.input-value');
const resultShow = document.getElementById('result');


document.getElementById('add-btn').addEventListener('click', function(){
     let sum = 0;
     inputText.forEach(input => {
         sum += parseInt(input.value);
     })
     resultShow.textContent = ` ${sum}`;  
})
document.getElementById('sub-btn').addEventListener('click', function(){
     let sub = inputText[0].value - inputText[1].value;
     resultShow.textContent = ` ${sub}`;
})
document.getElementById('mul-btn').addEventListener('click', function(){
     let mul = inputText[0].value * inputText[1].value;
     resultShow.textContent = ` ${mul}`;
})
document.getElementById('div-btn').addEventListener('click', function(){
     let div = inputText[0].value / inputText[1].value;
     const divTofixed = div.toFixed(2);
     resultShow.textContent = ` ${divTofixed}`;
})
