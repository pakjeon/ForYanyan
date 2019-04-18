function randomColor() {
  let color = "rgba("
  let r = parseInt(Math.random()*256);
  let g = parseInt(Math.random()*256);
  let b = parseInt(Math.random()*256);
  let a = 0;
  color = color+r+","+g+","+b+","+a+")";
  return color;
}

function randomColor2() {
  let color = "rgba("
  let r = parseInt(Math.random()*256);
  let g = parseInt(Math.random()*256);
  let b = parseInt(Math.random()*256);
  color = color+r+","+g+","+b+")";
  return color;
}

function randomInnerHTML() {
  let arr = ['☆', '❤', '★', '我爱你', '燕燕', '么么哒', '抱抱'];
  let i = parseInt(Math.random() * 6);
  return arr[i];
}

function randomRotate() {
  let ran = parseInt(Math.random()*90);
  return `${ran}deg`;
}


export default function Fireworks(Div,x,y) {
  Div.style.backgroundColor=randomColor();   //给烟花添加背景色
  Div.style.color=randomColor2();
  Div.innerHTML = randomInnerHTML();
  Div.className="fireworks";					//添加一个class
  document.body.appendChild(Div);
  Div.style.left=x+"px";						//把鼠标点击坐标给div
  Div.style.top=y+"px";
  Div.style.rotate = randomRotate();
  let speedX = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*16 + 1);  //三目运算符随机移动方向，概率50%,为1时往正方向移动，负1时往反方向移动第二个随机数随机速度快慢
  let speedY = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*20 + 1);
  this.move=function(){
    let i = 3;
    let time1=setInterval(function(){
      i++;
      Div.style.left=Div.offsetLeft+speedX+"px";
      Div.style.top=Div.offsetTop+speedY+i+"px";   //当i+speedY>0时,烟花朝下运动。
      if(Div.offsetLeft+Div.offsetWidth>window.innerWidth|| Div.offsetLeft<2 || Div.offsetTop+Div.offsetHeight>window.innerHeight || Div.offsetTop<2 ){
        Div.remove();		//移动出可视区域记得删除div和清除定时器
        clearInterval(time1);
      }
    },30);
  }
}