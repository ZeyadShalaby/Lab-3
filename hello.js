document.querySelector('form').onsubmit = function(event){
    event.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const birth_year = document.querySelector('#age').value;
    var age = 2022-birth_year

    alert(`Welcome, ${fname} ${lname}, you are ${age} years old`);

};