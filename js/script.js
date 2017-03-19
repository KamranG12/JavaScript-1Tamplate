var click=document.getElementById('click');
var x=document.getElementById('leftpart');
var y=document.getElementById('rightpart');
var click1=document.getElementById('content');
var click2=document.getElementById('footer');
var input=document.getElementById('input');

x.style.transition='0.5s';
y.style.transition='0.5s';

click.addEventListener('click',function(){
    x.style.width=72+'%';
    input.border='none';
    y.style.width=28+'%';
})

input.addEventListener('focus',function(){
    this.value=" ";
})

click1.addEventListener('click',function(){
    x.style.width=83.3333+'%';
    y.style.width=16.667+'%';
    input.value='search';
})

click2.addEventListener('click',function(){
    x.style.width=83.3333+'%';
    y.style.width=16.667+'%';
    input.value='search';
})

x.addEventListener('click',function(){
    x.style.width=83.3333+'%';
    y.style.width=16.667+'%';
    input.value='search';
})

