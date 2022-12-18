let cart=document.querySelectorAll("btn btn-primary")
let something=document.getElementsByClassName("cart-body product-title").innerHTML
cart.forEach(function(el){
el.addEventListener("click",function(){
    localStorage.setItem("cart_key",something)
})
})
let btn=document.getElementsByClassName("btn btn-link dropdown-toggle")
btn.onclick=()=>{
    //  window.location.assign("skincare.html")
     window.location.replace()
}