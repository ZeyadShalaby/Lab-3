document.querySelector('form').onsubmit = function(event){
    event.preventDefault();
    const x = document.querySelector('#x').value;
    const y = document.querySelector('#y').value;
    var num1 = parseInt(x)
    var num2 = parseInt(y)

   

    alert(`The result is ${num1+num2}`);

};