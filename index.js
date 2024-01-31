var but=document.getElementById('but2');
var but1= document.getElementById('but1');
var but2=document.getElementById('but3');

function tofot(){
    var cn= document.getElementById('tocenti');
     var fot=document.getElementById('tofoot');
     cn.style.display="none";
     fot.style.display="block";
     document.body.style.backgroundColor="#2ecc71";
    //  document.getElementById('cm').style.borderBottom="#3498db";
     var cm =document.getElementById('ft'); 
     cm.style.borderBottom="2px solid #2ecc71";
     var foot=document.getElementById('inc');
     var inche=document.getElementById('cen');
     foot.style.borderBottom="2px solid #2ecc71";
     inche.style.borderBottom="2px solid #2ecc71";
     
 }
 function tocen(){
     var cn=document.getElementById('tofoot').style.display='none';
  var fot=document.getElementById('tocenti').style.display='block';
     but.style.backgroundColor="black";
     but.style.border="1px solid #3498db";
     but1.style.backgroundColor='#2ecc71';
     but2.style.backgroundColor='#2ecc71';
     document.body.style.backgroundColor="#3498db";
     var cm =document.getElementById('cm'); 
     cm.style.borderBottom="2px solid #3498db";
     var foot=document.getElementById('foot');
     var inche=document.getElementById('inche');
     foot.style.borderBottom="2px solid #3498db";
     inche.style.borderBottom="2px solid #3498db";
    //  var cm =document.getElementById('cm'); 
    //  cm.style.borderBottom="2px solid #2ecc71";
     
 }

  function tofoot(){
     
var cm=document.getElementById('cm').value;
    

  var feet=Math.round(cm * 0.0328084);
  var inches=Math.round  (cm/2.54);
  console.log(inches)
   document.getElementById('foot').textContent=feet + '     Foot ';
   document.getElementById('inche').textContent=inches + "      Inhces";
  }
   function tocm(){
      var foot=document.getElementById('ft').value;
      var inche=document.getElementById('inc').value;
      console.log(foot,inche)
      var cm= foot*3048 + inche*2.54;
      
      document.getElementById('cen').textContent=Math.round(cm)  + '    Centimeter';
   }
