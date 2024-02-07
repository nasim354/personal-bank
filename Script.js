const buttonArea =document.getElementById("button-Area");
buttonArea.addEventListener("click", function(){
    const loginArea =document.getElementById("login-area");
    loginArea.style.display = "none";
    const nextArea =document.getElementById("next-item");
    nextArea.style.display = "block"
})

const Deposit =document.getElementById("Deposit");
Deposit.addEventListener("click",function(){
    const addAmount =document.getElementById("inAmount").value;
    const addBalance = parseFloat(addAmount);
    updateText("current", addBalance);
    updateText("balance", addBalance)
    document.getElementById("inAmount").value = "";
})
function updateText(id, addBalance){
    const withdraw =document.getElementById(id).innerText;
    const withdrawBalance = parseFloat(withdraw);
    const total = addBalance + withdrawBalance;
    document.getElementById(id).innerText = total ;
}
 const withdraw = document.getElementById("Withdraw");
    withdraw.addEventListener("click",function(){
        const disWithdraw = document.getElementById("disWithdraw").value;
        const disBalance =parseFloat(disWithdraw);
        disUpdate("disCurrent",disBalance);
        disUpdate("balance", -1* disBalance);
        document.getElementById("disWithdraw").value = "";
    })
    function disUpdate(id , addBalance){
        const disWithdraw = document.getElementById(id).innerText;
        const disBalance =parseFloat(disWithdraw);
        const totalBalance = disBalance + addBalance;
        document.getElementById(id).innerText = totalBalance;
    }