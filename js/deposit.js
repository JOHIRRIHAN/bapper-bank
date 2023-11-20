document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value='';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
     }

    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalstring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring);
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalstring= balanceTotalElement.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceTotalstring);
    if(newDepositAmount > previousDepositTotal){
        alert('you do no have safetion balance!!')
        return;
    }
    const currentBalanceTotal =previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})