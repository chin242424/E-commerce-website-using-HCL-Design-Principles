/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function fn1()
{
  var Standard_delivery = document.getElementById("Standard_delivery");
  var Express_delivery = document.getElementById("Express_delivery");
  var Scheduled_delivery = document.getElementById("Scheduled_delivery");
  
  if(Standard_delivery.checked == true)
    window.open("Standard_delivery.html","_self");
  else if(Express_delivery.checked == true)
    window.open("Express_delivery.html","_self");
  else if(Scheduled_delivery.checked == true)
    window.open("Scheduled_delivery.html","_self");
  else
    displaymodal();
}

function fn2()
{
  var backbutton_delivery = document.getElementById("backbutton_delivery");
  
    window.open("delivery_options.html","_self");
}

function fn3()
{
   window.open("checkout_page.html","_self");
}

function fn4()
{
   window.open("payment.html","_self");
}


function fn6()
{
  var backbutton_products = document.getElementById("backbutton_products");
  
    window.open("products.html","_self");
}

function fn7()
{
  var PayPal = document.getElementById("PayPal");
  var AmazonPay = document.getElementById("GooglePay");
  var Credit = document.getElementById("Credit");
  
  if(PayPal.checked == true)
    window.open("https://www.paypal.com/us/signin","_self");
  else if(AmazonPay.checked == true)
    window.open("https://pay.amazon.com/","_self");
  else if(Credit.checked == true)
    window.open("blank","_self");
  
}

function fn8() {
  window.open("checkout_page.html","_self");
}

