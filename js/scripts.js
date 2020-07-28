$(document).ready(function() {
  $("form#answer").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#input").val());
    var lowEnd = 0;
    var highEnd = number;
    var arr = [];
    while(lowEnd <= highEnd){
    arr.push(lowEnd++);
    }
console.log(arr);
  var arrMod = arr.forEach(function(number,i) {
    
    var digits = number.toString().split("");
    if (digits.includes ("3")) arr[i] = "Won't you be my neighbor?"; 
     else if (digits.includes("2")) arr[i] = "Boop!"; 
     else if (digits.includes ("1")) arr[i] = "Beep!"; 
     else {
      return number;
    
    };
   console.log(arrMod); 
  });
  return arrMod.join(", ");
  });


 $("#arrMod").show();

 
  
})
