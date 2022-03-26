console.log('works');


const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const email = document.getElementById('email');
const out1 = document.getElementById('output1');
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function fun1() {
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click',fun1);

function checkforblank(event) {
        event.preventDefault();
    if (document.getElementById('tbuser').value == "") {
        alert('please enter your name');
        return false; 
            }
            
}
