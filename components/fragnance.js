async function skinCare(){
    let res=await fetch(`https://639c531016d1763ab1465215.mockapi.io/Fragrance`);
    let data=await res.json()
    console.log("Data",data)
    append(data)
}
skinCare();
let cartItem= JSON.parse(localStorage.setItem("cartProductItem")) || [];
function append(data){
    data.forEach(function(el){
        let workspace=document.getElementById("workspace")
        let div_element=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        let brand=document.createElement("p")
        brand.innerText=el.brand
        brand.setAttribute("class","titleclass")
        let rating=document.createElement("p")
        rating.innerText="Rating: "+el.rating
        rating.setAttribute("class","rating")
        let price=document.createElement("p")
        price.innerText="$: "+el.price
        price.setAttribute("class","price")

        let btn=document.createElement("button")
        btn.innerText="QUICK BUY"
        btn.setAttribute("class","btn-class")
        btn.addEventListener("click",function(){
    
            cartItem.push(el);
            localStorage.setItem("cartProductItem",JSON.stringify(cartItem));
            alert("product added to the cart");
            })
        div_element.append(img,brand,rating,price,btn)
        workspace.append(div_element)

    })
}