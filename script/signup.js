let sign_submit = document.getElementById('sign_submit');
let Facebook_sign = document.getElementById('sigh_facebook');
let Google_sign = document.getElementById('sigh_google');

Facebook_sign.onclick = () => {
    alert('Do You Want To Sign Up With Your Facebook');
};

Google_sign.onclick = () => {
    alert('Do You Want To Sign Up With Your Google');
};
let takeArr = JSON.parse(localStorage.getItem("take")) || [];
sign_submit.onclick = () => {
    let Name = document.getElementById('Full Name').value;
    let Email = document.getElementById('Email address').value;
    let temp_email = document.getElementById('Confirm Email address').value;
    let Password = document.getElementById('Password').value;
    let temp_passwod = document.getElementById('Confirm Password').value;
    let phone_no = document.getElementById('Cell Phone Number').value;

    if (temp_email !== Email) {
        alert("Email don't match")
    }
    else if (temp_passwod !== Password) {
        alert("password don't match")
    }
    else if (Name === '' || Email === '' || temp_email === '' || Password === ''
        || temp_passwod === '' || phone_no === '') {
        alert('fill all the details')
    }
    else {

            let takeObj = {
                Name,
                Email,
                phone_no,
                Password
            };
            takeArr.push(takeObj)
            localStorage.setItem("take", JSON.stringify(takeArr));

            alert('sign up successfully!')

            window.location.href = './login.html'
    }
};

    // function LocalStorage(obj){
    //     let local_user = JSON.parse(localStorage.getItem('local_user')) || {};
    //     localStorage.setItem('local_user',JSON.stringify(obj))
    // }
