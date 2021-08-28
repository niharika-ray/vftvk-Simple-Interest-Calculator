function printInterest(interest){
    // const interest = document.getElementById("interest").value;
    const interestResult = document.getElementById("interestResult");
    interestResult.innerHTML = interest + '%'
}
function getData(){
    const amountBox = document.getElementById("amount");
    const amount = amountBox.value;
    const interest = document.getElementById("interest").value;
    const year = +document.getElementById("year").value;
    const result = document.getElementById("result");

  //Check if amount field is empty
  if(amount === ""){
        alert("Please enter the amount");
        amountBox.focus();
        return false;
  }
  if(+amount <= 1){
    alert("Please enter a positive number");
    amountBox.focus();
    return false;
}
  const finalAmount = Math.round(+amount * ( (+interest/100) * +year))  
  const d = new Date();
  const fy = d.getFullYear();
  const finalYear = fy+year-1
  const interestResult = document.getElementById("interestResult");
  interestResult.innerHTML = interest + '%'
  const resultContent = `If you deposit <span class="yellow">${amount}</span>, <br/>
  at an interest rate of <span class="yellow">${interest}%</span>.<br/>
  You will receive an amount of <span class="yellow">${finalAmount}</span>,<br/>
  in the year <span class="yellow">${finalYear}</span>`
  result.innerHTML = resultContent
  return true;
}