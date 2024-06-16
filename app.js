let boxes = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('#reset-btn');

let turn=true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; 
boxes.forEach((btn) => {
    btn.addEventListener("click",() => {
        console.log("button was clicked")
        if(turn){
            btn.innerText="0";
            turn=false;
        }
        else{
            btn.innerText="X";
            turn=true;
        }

        btn.disabled=true;
    })
})
resetBtn.addEventListener("click",()=>{
    console.log("reset is clicked")
})