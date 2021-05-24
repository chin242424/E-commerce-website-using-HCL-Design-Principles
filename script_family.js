//family section

console.log("hi");
$(function() {
  
  $('.submit-button').click(submitButton);//Family section
  $('.back-B').click(backButton);
  });

function backButton(){
  location.href=("index.html");
  
}

function submitButton(){
   
     
  var status = [];
    checkers(status);
    
  
  checkStatus(status);
 
}

function checkers(status){
  var checkboxes = document.getElementsByTagName("input");
    for (var i = 0;  i < checkboxes.length; i++ ) {
      if (checkboxes[i].type == "checkbox" && checkboxes[i].checked == true){
        
        status[i] = checkboxes[i].value;
        
        } else {
          status[i] = "blank";
        }
    }
  
  status[5] = document.getElementById('household').value;
  status[6] = document.getElementById('mealtime').value;
  
  return status;
}

function checkStatus(status){
  
  var count = 0;
  for (var i = 0; i < 5; i++){
    if (status[i] == "blank"){
      count++;
    }
  }
  
  if(status[5] == 1 &&count == 5 && status[6] == "empty"){
    alert("No selection was made. Try again");
    
    console.log(status);
  } 
  /*if(status[5] == 1){
    window.alert("Missing a selection in: Number in Household. Try again");
    
    console.log(status);
  } 
  else if (count == 5){
    window.alert("Missing a selection in: Type of Age Group. Try again");
    console.log(status);
    
  }  else if (status[6] == "empty"){
    window.alert("Missing a selection in: Type of Meal. Try again");
    console.log(status);
   
  }*/  
  else {
    location.href = "products.html#products2";
    console.log(status);
    console.log(count);
  }

  
}

//family section end