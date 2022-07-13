let btn = document.getElementById('start');

function start(){
    let age = prompt("Enter your age in years");
    let text = document.getElementById('final');
    let days = age * 365;

    text.innerHTML = "you are " + days + " days Old";
    
document.getElementById("result").value.reset();
}
    function start1(){
        let age = prompt("Enter your age in years");
        let text = document.getElementById('final');
        let days = age * 12;
    
        text.innerHTML = "you are " + days + " months Old";
        document.getElementById("result").value = '0';
    }
    function start2(){
        let age = prompt("Enter your age in years");
        let text = document.getElementById('final');
        let days = age * 52;
    
        text.innerHTML = "you are " + days + " weeks Old";
        document.getElementById("result").value = '0';
    }
