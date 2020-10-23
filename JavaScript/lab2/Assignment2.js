function calculateCompoundInterest()
{
    var principalAmt = prompt("Enter the Principal Amount");
    var roi = prompt("Enter rate of interest(%)");
    var period = prompt("Enter Period(in years)");
    
    var giveToIndex = 1 + (roi/100);
    var compoundInterest = (principalAmt * Math.pow(giveToIndex,period) )- principalAmt
   
    alert("Compound Interest is "+ compoundInterest )
}