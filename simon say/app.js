let h2 = document.querySelector("h2");
let gameSeq=[];
let higherScore=[0];
let userSeq=[];
let btns = ['red','yellow','green','purple'];
let starter = false;
let level = 0;
let hScore = document.querySelector("h3");

document.addEventListener("keydown", function(){
    if(starter==false){
        starter=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameBtnFlash(randBtn);
};

function gameBtnFlash(btn){
   
    btn.classList.add("blink");
    setTimeout(function(){
        btn.classList.remove("blink");
    },100);
    
};

function userBtnFlash(btn){
   
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },100);
    
};

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        higherScoreF();
        h2.innerText=`Game Over! Your Score was ${level}
         Press any key to start`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },150);
        reset();
    }
}
function higherScoreF(){
    if(level>=higherScore[higherScore.length-1]){
        higherScore.push(level);
        hScore.innerText=`Higher Score ${higherScore[higherScore.length-1]}`;
    }
    


}

function btnPress(){
    let btn =this;
    userBtnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");

for(const btn of allBtns){
    btn.addEventListener("click", btnPress);
};

function reset(){
    starter=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}