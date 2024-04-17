const display = document.getElementById('button');

type="text/javascript"
var color = ["#22333b","#3c635b","#7da891","#5b4e77","#5b4e77","#014f5c"];
var i = 0;
document.querySelector("button").addEventListener("click",function(){
i= 1 < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]})

const name = prompt('Please Enter Your Name:');
window.alert('Hello ' + name + ', welcome to my website!');
