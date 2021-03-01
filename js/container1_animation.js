var data=["REWARDS", "SAVINGS" , "INVESTMENTS", "FOREX", "ANALAYTICS", "CARDS" , "PAYMENTS", "LOAN", "SUPPORT"]

var datax=["REWARDSX", "SAVINGSX" , "INVESTMENTSX", "FOREXX", "ANALYTICSX", "CARDSX" , "PAYMENTSX", "LOANX", "SUPPORTX"]
var datay=["REWARDSY", "SAVINGSY" , "INVESTMENTSY", "FOREXY", "ANALYTICSY", "CARDSY" , "PAYMENTSY", "LOANY", "SUPPORTY"]
var small=["icon/i_rewards.png", "icon/i_saving.png","icon/i_investment.png","icon/i_forex.png","icon/i_Analytics.png", "icon/i_card.png", "icon/i_payment.png", "icon/i_loan.png", "icon/i_support.png"];
var large=["icon/i_rewardsz.png", "icon/i_savingz.png","icon/i_investmentz.png","icon/i_forexz.png","icon/i_Analyticsz.png", "icon/i_cardz.png", "icon/i_paymentz.png", "icon/i_loanz.png", "icon/i_supportz.png"]


var y1=0;
var y2=0;

var myVar = setInterval(myTimer, 100);
var i=0;
var j=0;
var k=true;
var p=false;
var q="";
var count=10;
function myTimer() {
  if(i==data.length)
  {
      i=0;
  }
  if(j==0)
  {
     k=true;
  }
  if(j%2==0)
  {
   q="|";
  }
  if(j%2!=0)
  {
    q="";
  }
  if(j==data[i].length-1)
  {
     k=false;
  }
var s=data[i];
document.getElementById('container1_span').innerHTML=(s.slice(0,j+1)+q);

 if(k==true)
 {
     j++;
 }
 if(p==true)
 {
     p=false;
     j=0;
     i++;
 }

 if(k==false)
 {
     j--;
     if(j==0)
     {
         p=true;
     }
 }
if(count==0)
{
    if(y1==datax.length)
    {
        y1=0;
    }
    document.getElementById(datax[y1]).src = large[y1]; 
    document.getElementById(datay[y1]).src = large[y1];
 
    for(y2=0; y2<datax.length; y2++)
    {
        if(y2!=y1)
        {
          document.getElementById(datax[y2]).src = small[y2];
          document.getElementById(datay[y2]).src = small[y2];
         
        }
    }
  
   y1++;
   count=10;
}
 count--;
}




//

