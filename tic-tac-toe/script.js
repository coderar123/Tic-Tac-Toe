let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO= true;//playerx ,playerO

//2d  array;
let winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

boxes.forEach((box)  =>{
    box.addEventListener("click",()=>
    {
        console.log("box was clicked");
       if(turnO)
       {
        box.innerText="O";
        turnO=false;
       }
       else
       {
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;


       checkWinner();
    });
});
const resetGame=() =>
    {
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }
const disableBoxes=() =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=() =>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
       
    }
const showWinner=(winner)=>
{
  msg.innerText=`Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  
}
//check winner function
const checkWinner=()=>{
    for (let pattren of winPatterns)
    {
            let pos1val=boxes[pattren[0]].innerText;
            let pos2val=boxes[pattren[1]].innerText;
            let pos3val= boxes[pattren[2]].innerText;
            if(pos1val !="" && pos2val !="" && pos3val !="")
            {
                if(pos1val===pos2val && pos2val===pos3val)
                {

                    showWinner(pos1val);
                }
            }
    };
    
};





newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);