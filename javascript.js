let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count=0;
let winner="";
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame= ()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
    count=0;


};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        count++;
        console.log(count);


        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

};
const draw= ( ) => {
    msg.innerText = "Match is Drawn";
    msgContainer.classList.remove("hide");
    disableboxes();

};


const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val= boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && posVal2 != "" && pos3val != "") {
            if (pos1val === posVal2 && posVal2 === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
            else if(count===9&&winner===""){
                console.log("Match Draw");
                draw();
                break;
            }

        }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);








