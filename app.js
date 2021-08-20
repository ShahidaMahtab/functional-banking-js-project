function updatingInputs(inputId){
const inputField = document.getElementById(inputId);
const newAmount = parseFloat(inputField.value);
inputField.value = "";
return newAmount;
}

function updatingTotalField(totalId,amount){
const totalAmount = document.getElementById(totalId);
const previousAmount = parseFloat(totalAmount.innerText);
totalAmount.innerText = previousAmount + amount;
}
function getCurrentBalance(){
 const balanceTotal = document.getElementById("total-balance");
 const previousBalanceAmount = parseFloat(balanceTotal.innerText);
 return previousBalanceAmount;
}
function updatingBalance(amount,isAdd){
const balanceTotal = document.getElementById("total-balance");
const previousBalanceAmount = getCurrentBalance();
if(isAdd == true){
 balanceTotal.innerText = previousBalanceAmount + amount;
}else{
  balanceTotal.innerText = previousBalanceAmount - amount;
}
}


document.getElementById('btn-deposit').addEventListener('click',function(){
 const depositAmount = updatingInputs('deposit-input');
 //updating balance
 if(depositAmount > 0){
  updatingBalance(depositAmount, true);
  updatingTotalField('total-deposit',depositAmount);
 }
 
})
document.getElementById('btn-withdraw').addEventListener('click',function(){
 const withdrawAmount = updatingInputs('withdraw-input');
 const currentBalance = getCurrentBalance()
 if(withdrawAmount > 0 && withdrawAmount < currentBalance){
   updatingBalance(withdrawAmount, false);
   updatingTotalField("total-withdraw", withdrawAmount);
 }
})