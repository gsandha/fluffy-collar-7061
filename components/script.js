let go_login = document.getElementById('go_login');
let xyz=document.getElementById("gotoSkinCare");

xyz.onclick=()=>{
    window.location.href="./skincare.html"
}
let go_to_makeup=document.getElementById("gotoMakeup")
go_to_makeup.onclick=()=>{
    window.location.href="./makeup.html"
}
let go_to_fragrance=document.getElementById("gotoHairFragrance")
gotoHairFragrance.onclick=()=>{
    window.location.href="./components/fragrance.html"
}
let go_to_haircare=document.getElementById("gotoHairCare")
go_to_haircare.onclick=()=>{
    window.location.href="./haircare.html"
}

    let go_signup = document.getElementById('go_signup');
console.log("HELLO")
    go_login.onclick = () => {
        window.location.href = "./login.html";
    };

    go_signup.onclick = () => {
        window.location.href = "./signup.html";
    };

    let getDataLocalStorage = JSON.parse(localStorage.getItem('putArray'))||[];

    for (let i = 0; i < getDataLocalStorage.length; i++) {
        let getAccount = document.querySelector('#op');

        if (getDataLocalStorage[i] !== '') {
            getAccount.innerHTML = `
            <i class="fa-regular fa-user"></i>
            ${getDataLocalStorage[i].Name}
            `
        }
    }

    let computeddata=document.getElementById("cartpieces");

   computeddata.addEventListener("click",function(){
    window.location.href="cartpage.html"
   })