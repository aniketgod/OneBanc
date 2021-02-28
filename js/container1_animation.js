var data=["REWARDS", "SAVINGS" , "INVESTMENTS", "FOREX", "ANALAYTICS", "CARDS" , "PAYMENTS", "LOAN", "SUPPORT"]


var myVar = setInterval(myTimer, 100);
var i=0;
var j=0;
var k=true;
var p=false;
var q="";
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

}