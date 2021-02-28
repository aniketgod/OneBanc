var datax=["REWARDSX", "SAVINGSX" , "INVESTMENTSX", "FOREXX", "ANALYTICSX", "CARDSX" , "PAYMENTSX", "LOANX", "SUPPORTX"]
var datay=["REWARDSY", "SAVINGSY" , "INVESTMENTSY", "FOREXY", "ANALYTICSY", "CARDSY" , "PAYMENTSY", "LOANY", "SUPPORTY"]
var small=["icon/i_rewards.png", "icon/i_saving.png","icon/i_investment.png","icon/i_forex.png","icon/i_Analytics.png", "icon/i_card.png", "icon/i_payment.png", "icon/i_loan.png", "icon/i_support.png"];
var large=["icon/i_rewardsz.png", "icon/i_savingz.png","icon/i_investmentz.png","icon/i_forexz.png","icon/i_Analyticsz.png", "icon/i_cardz.png", "icon/i_paymentz.png", "icon/i_loanz.png", "icon/i_supportz.png"]
var myVar = setInterval(myTimer, 700);

var i=0;
var j=0;
function myTimer() 
{
    if(i==datax.length)
    {
        i=0;
    }
    document.getElementById(datax[i]).src = large[i]; 
    document.getElementById(datay[i]).src = large[i]; 
    for(j=0;j<datax.length;j++)
    {
        if(j!=i)
        {
          document.getElementById(datax[j]).src = small[j];
          document.getElementById(datay[j]).src = small[j];
        }
    }
  
   i++
}