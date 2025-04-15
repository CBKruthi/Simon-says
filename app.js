let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["red","green","yellow","blue"];
let btn=document.querySelector(".btn");
let wrong=document.querySelector(".wrongAns");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    } 
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
   }

   function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
   }

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    // console.log(randIndx);
    // console.log(randColor);
    gameSeq.push(randColor);
    
    let randbtn=document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
}

function gamePress(){
    let btn=this;
   gameFlash(btn);
}

function userPress(){
    let btn=this;
   userFlash(btn);
   
   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",userPress);
}

function checkAns(indx){
    if(userSeq[indx]==gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        h2.innerHTML=`Game over!  Your score was ${level-1}  <br> Press any key to start again `;
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}