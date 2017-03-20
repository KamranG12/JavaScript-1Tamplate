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




var right=document.getElementById("right");
var left=document.getElementById("left");
var img=document.querySelector(".slide img");
var images=["image/slide1.jpg","image/slide2.jpg","image/slide3.jpg",]
var count=0;
var text=document.querySelector(".text p");
var h11=document.getElementById('h11');
var h12=document.getElementById('h12');
var h13=document.getElementById('h13');
var h111=['CREATIVE','RESPONSIVE','AMAZING']
var h122=['White','Design','Video']
var h133=['Templates','Theme','Background']
var txt=['The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.','The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.','The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.']
img.setAttribute("src",images[0]);
h11.style.transition='1.5s';
h12.style.transition='1s';
h13.style.transition='0.5s';
text.innerHTML=txt[0];
h11.innerHTML=h111[0];
h12.innerHTML=h122[0];
h13.innerHTML=h133[0];
right.addEventListener("click",function(){
	count++;
	if(count>images.length-1){
		count=0;
	}
    if(count==0){
        document.getElementById('textall').style.color='black';
    }else{
        document.getElementById('textall').style.color='white';
    }
    text.innerHTML=txt[count];
    h11.innerHTML=h111[count];
    h12.innerHTML=h122[count];
    h13.innerHTML=h133[count];
    img.setAttribute("src",images[count]);
})

left.addEventListener("click",function(){
	
	count--;
	if(count<0){
		count=images.length-1;
	}
    if(count==0){
        document.getElementById('textall').style.color='black';
    }else{
        document.getElementById('textall').style.color='white';
    }
    text.innerHTML=txt[count];
    h11.innerHTML=h111[count];
    h12.innerHTML=h122[count];
    h13.innerHTML=h133[count];
	img.setAttribute("src",images[count]);
})

var shar0=document.getElementById('shar0');

shar0.addEventListener('click',function(){
   img.setAttribute("src",images[0]);
   shar0.style.border='5px solid white'; 
   shar1.style.border='';
   shar2.style.border='';
   h11.innerHTML=h111[0];
   h12.innerHTML=h122[0];
   h13.innerHTML=h133[0];
   document.getElementById('textall').style.color='black';
})

var shar1=document.getElementById('shar1');

shar1.addEventListener('click',function(){
   img.setAttribute("src",images[1]);
   shar1.style.border='5px solid white';
   shar0.style.border='';
   shar2.style.border=''; 
   h11.innerHTML=h111[1];
   h12.innerHTML=h122[1];
   h13.innerHTML=h133[1];
   document.getElementById('textall').style.color='white';
})

var shar2=document.getElementById('shar2');

shar2.addEventListener('click',function(){
   img.setAttribute("src",images[2]);
   shar2.style.border='5px solid white';
   shar1.style.border='';
   shar0.style.border=''; 
   h11.innerHTML=h111[2];
   h12.innerHTML=h122[2];
   h13.innerHTML=h133[2];
   document.getElementById('textall').style.color='white';
})