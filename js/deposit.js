document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalstring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring);
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalstring= balanceTotalElement.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceTotalstring);
    const currentBalanceTotal =previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})