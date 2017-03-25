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






var writeh11=document.getElementById('writeh11');
var writeh12=document.getElementById('writeh12');
var writep=document.getElementById('writep');
var writeh111=['Clean','Technical','Responsive','Documentation','Quality','Support'];
var writeh122=['Code','Support','','','',''];
var writep1=['We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.Technical Suppor','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.'];
var set1=document.getElementById('set1');
var set2=document.getElementById('set2');
var set3=document.getElementById('set3');
var set4=document.getElementById('set4');
var set5=document.getElementById('set5');
var set6=document.getElementById('set6');

writeh11.innerHTML=writeh111[0];
writeh12.innerHTML=writeh122[0];
writep.innerHTML=writep1[0];
set1.style.backgroundColor='white';

set1.addEventListener('click',function(){
    writeh11.innerHTML=writeh111[0];
    writeh12.innerHTML=writeh122[0];
    writep.innerHTML=writep1[0];
    set1.style.backgroundColor='white';
    set2.style.backgroundColor='';
    set3.style.backgroundColor='';
    set4.style.backgroundColor='';
    set5.style.backgroundColor='';
    set6.style.backgroundColor='';
})

set2.addEventListener('click',function(){
    writeh11.innerHTML=writeh111[1];
    writeh12.innerHTML=writeh122[1];
    writep.innerHTML=writep1[1];
    set1.style.backgroundColor='';
    set2.style.backgroundColor='white';
    set3.style.backgroundColor='';
    set4.style.backgroundColor='';
    set5.style.backgroundColor='';
    set6.style.backgroundColor='';
})

set3.addEventListener('click',function(){
    writeh11.innerHTML=writeh111[2];
    writeh12.innerHTML=writeh122[2];
    writep.innerHTML=writep1[2];
    set1.style.backgroundColor='';
    set2.style.backgroundColor='';
    set3.style.backgroundColor='white';
    set4.style.backgroundColor='';
    set5.style.backgroundColor='';
    set6.style.backgroundColor='';
})

set4.addEventListener('click',function(){
    writeh11.innerHTML=writeh111[3];
    writeh12.innerHTML=writeh122[3];
    writep.innerHTML=writep1[3];
    set1.style.backgroundColor='';
    set2.style.backgroundColor='';
    set3.style.backgroundColor='';
    set4.style.backgroundColor='white';
    set5.style.backgroundColor='';
    set6.style.backgroundColor='';
})

set5.addEventListener('click',function(){
    writeh11.innerHTML=writeh111[4];
    writeh12.innerHTML=writeh122[4];
    writep.innerHTML=writep1[4];
    set1.style.backgroundColor='';
    set2.style.backgroundColor='';
    set3.style.backgroundColor='';
    set4.style.backgroundColor='';
    set5.style.backgroundColor='white';
    set6.style.backgroundColor='';
})

set6.addEventListener('click',function(){
    writeh11.innerHTML=writeh111[5];
    writeh12.innerHTML=writeh122[5];
    writep.innerHTML=writep1[5];
    set1.style.backgroundColor='';
    set2.style.backgroundColor='';
    set3.style.backgroundColor='';
    set4.style.backgroundColor='';
    set5.style.backgroundColor='';
    set6.style.backgroundColor='white';
})






var buy=document.getElementById('buy');
var buyp=document.getElementById('buyp');

buyp.innerHTML='BUY THIS THEME';
buy.addEventListener('mouseover',function(){
    buyp.innerHTML='YES I WANT IT';
})

buy.addEventListener('mouseout',function(){
    buyp.innerHTML='BUY THIS THEME';
})






var next = 0;
var margin=0;

var slider7_width=document.getElementsByClassName('slider7')[0].clientWidth;
var sliders7_length=document.querySelectorAll('.sliders7 .slider7').length;
var sliders7=document.getElementsByClassName('sliders7')[0];
    sliders7.style.transition="0.3s";

var right2=document.getElementById('right2');
var left2=document.getElementById('left2');

right2.addEventListener('click',novbeti);

function novbeti(){
    next++;
    margin -=slider7_width;
    // console.log(next);
    // console.log(margin);
    sliders7.style.marginLeft= margin+'px';
    if(next>=sliders7_length-3){
        margin=0;
        sliders7.style.marginLeft=margin+'px';
        next=0;
    }
}

left2.addEventListener('click',evvelki);

function evvelki(){
    next--;
    margin +=slider7_width;
    // console.log(margin);
    //  console.log(next);
    sliders7.style.marginLeft= margin+'px';
    if(next<=0){
        margin=3*(-slider7_width);
       sliders7.style.marginLeft= margin+'px';
       next=sliders7_length-3;
    }  
}




var next1 = 0;
var margin1=0;

var worker_width=document.getElementsByClassName('worker')[0].clientWidth;
var team_length=document.querySelectorAll('.team .worker').length;
var team=document.getElementsByClassName('team')[0];
    team.style.transition="0.3s";

var right3=document.getElementById('right3');
var left3=document.getElementById('left3');

right3.addEventListener('click',novbeti1);

function novbeti1(){
    next1++;
    margin1 -=worker_width;
    team.style.marginLeft= margin1+'px';
    if(next1>=team_length-2){
        margin1=0;
        team.style.marginLeft=margin1+'px';
        next1=0;
    }
}

left3.addEventListener('click',evvelki1);

function evvelki1(){
    next1--;
    margin1 +=worker_width;
    team.style.marginLeft= margin1+'px';
    if(next1<=0){
        margin1=5*(-worker_width);
       team.style.marginLeft= margin1+'px';
       next1=team_length-2;
    }  
}