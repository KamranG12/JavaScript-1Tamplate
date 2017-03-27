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

click1.addEventListener('click',inputback);
click2.addEventListener('click',inputback);
x.addEventListener('click',inputback);
function inputback(){
    x.style.width=83.3333+'%';
    y.style.width=16.667+'%';
    input.value='search';
};








var right=document.getElementById("right");
var left=document.getElementById("left");
var img=document.querySelector(".slide img");
var images=["image/slide1.jpg","image/slide2.jpg","image/slide3.jpg",]
var count=0;
var text=document.querySelector(".text p");
var h11=document.getElementById('h11');
var h12=document.getElementById('h12');
var h13=document.getElementById('h13');
var pictures=document.getElementById('pictures');
var h111=['CREATIVE','RESPONSIVE','AMAZING']
var h122=['White','Design','Video']
var h133=['Templates','Theme','Background']
var txt=['The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.','The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.','The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.']
img.setAttribute("src",images[0]);
h11.style.transition='all 1.5s';
h12.style.transition='all 1s';
h13.style.transition='all 0.5s';
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
    for (var i = 0; i < pictures.childElementCount; i++) {
            pictures.children[i].classList.remove('active1');
        }
            pictures.children[count].classList.add('active1');
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
    for (var i = 0; i < pictures.childElementCount; i++) {
            pictures.children[i].classList.remove('active1');
        }
            pictures.children[count].classList.add('active1')
    text.innerHTML=txt[count];
    h11.innerHTML=h111[count];
    h12.innerHTML=h122[count];
    h13.innerHTML=h133[count];
	img.setAttribute("src",images[count]);
})

document.getElementById('pictures').addEventListener('click',function(event){
    var index1 = event.target.getAttribute('index1');
    // console.log(event)
    for (var i = 0; i < pictures.childElementCount; i++) {
            pictures.children[i].classList.remove('active1');
        }
        pictures.children[index1].classList.add('active1');
        img.setAttribute("src",images[index1]);
        h11.innerHTML=h111[index1];
        h12.innerHTML=h122[index1];
        h13.innerHTML=h133[index1];
        if(index1==0){
            document.getElementById('textall').style.color='black';
        }else{
            document.getElementById('textall').style.color='white';
        }
})






var writeh11=document.getElementById('writeh11');
var writeh12=document.getElementById('writeh12');
var writep=document.getElementById('writep');
var writeh111=['Clean','Technical','Responsive','Documentation','Quality','Support'];
var writeh122=['Code','Support','','','',''];
var writep1=['We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.Technical Suppor','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.','We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.'];

writeh11.innerHTML=writeh111[0];
writeh12.innerHTML=writeh122[0];
writep.innerHTML=writep1[0];
var boxed=document.getElementById('boxed')
document.getElementById('gear').addEventListener('click',function(event){
    set=event.target.getAttribute('set');
    // console.log(set)
    for (var i = 0; i < boxed.childElementCount; i++) {
           boxed.children[i].classList.remove('active2');
        }
         writeh11.innerHTML=writeh111[set];
         writeh12.innerHTML=writeh122[set];
         writep.innerHTML=writep1[set];
         boxed.children[set].classList.add('active2');
        // console.log(boxed.children[set])
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




 var wordclients=document.getElementById('wordclients');
     wordclients.style.transition='1s';
document.getElementById('threedots').addEventListener('click', function(event) {
        var index = event.target.getAttribute('index') - 1;
        console.log(event.target)
        for (var i = 0; i < threedots.childElementCount; i++) {
            this.children[i].classList.remove('active');
        }
        this.children[index].classList.add('active');
        wordclients.style.marginLeft=index*(-1170)+"px";
    })