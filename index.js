let expression="";
function add(x)
    {
        
      document.getElementById('input').value+= x;
    }
    function solve()
    {
      
     let x= document.getElementById('input').value
      let b=eval(x);
      document.getElementById('input').value=b;
    }
    function clr()
    {
        expression=" ";
      document.getElementById('input').value=" ";
    }







