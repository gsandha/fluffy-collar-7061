// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  
    let specificData1=JSON.parse(localStorage.getItem("cartProducts"))||[];
    let totalamount=specificData1.reduce((acc,elem)=>acc+elem.price, 0);
  console.log(totalamount);
  document.getElementById("totalcart").innerHTML=totalamount;
  let gettingdataTotal=document.getElementById("total_cart_amt");
  gettingdataTotal.innerHTML=totalamount+40;
    
  function myfunction(){
    window.location.href="paymentdone.html";
  }