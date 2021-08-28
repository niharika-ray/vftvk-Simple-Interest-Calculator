function printInterest(interest){
    // const interest = document.getElementById("interest").value;
    const interestResult = document.getElementById("interestResult");
    interestResult.innerHTML = interest
}
function getData(){
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("interest").value;
    const year = +document.getElementById("year").value;
    const result = document.getElementById("result");

  //Check if amount field is empty
  if(amount === ""){
        alert("Please enter the amount");
        amount.focus();
        return false;
  }
  const finalAmount = Math.round(+amount * ( (+interest/100) * +year))  
  const d = new Date();
  const fy = d.getFullYear();
  const finalYear = fy+year-1
  const interestResult = document.getElementById("interestResult");
  interestResult.innerHTML = interest + '%'
  const resultContent = `If you deposit ${amount}, <br/>
  at an interest rate of ${interest}%.<br/>
  You will receive an amount of ${finalAmount},<br/>
  in the year ${finalYear}`
  result.innerHTML = resultContent
  return true;
}