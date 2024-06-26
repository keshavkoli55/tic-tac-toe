let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let MsgWinner =document.querySelector('.msg-container')
let win_msg =document.querySelector('#win-msg')
let draw_msg_container =document.querySelector('.draw-msg-container')
let win_btn =document.querySelector('#win-btn')
let new_btn =document.querySelector('#new-btn')
// let draw_msg =document.querySelector('#draw-msg')
let turn_Zero = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const ResetBoxes=()=>{
  for(box of boxes){
    turn_Zero = true;
    box.innerText="";
    box.disabled=false;
    MsgWinner.classList.add("hide");
    draw_msg_container.classList.add("hide"); 
    count=0;
  }

}
const DisableBoxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
}
let count=0;
win_btn.addEventListener("click", (ResetBoxes));
resetBtn.addEventListener("click", (ResetBoxes));
new_btn.addEventListener("click", (ResetBoxes));
boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn_Zero) {
      btn.innerText = "0";
      turn_Zero = false;
      btn.style.color="black";
      count++;
      if(count=="9"){
        count=0;
        draw_msg_container.classList.remove("hide");
      }
    } else {
      btn.innerText = "X";
      btn.style.color="red";
      count++;
      turn_Zero = true;
    }
    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winPatterns) {
    pos1val = boxes[pattern[0]].innerText;
    pos2val = boxes[pattern[1]].innerText;
    pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos2val);
      }
    }
  }
}
function showWinner(winner){
  win_msg.innerText=`congratulations !! Winner is ${winner}`
  DisableBoxes();
  MsgWinner.classList.remove("hide");
}
