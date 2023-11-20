// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString= withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    // step-3
    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    // step-4
    const currentWithdrewTotal= previousWithdrawTotal+newWithdrawAmount;
    // step-5
    
})