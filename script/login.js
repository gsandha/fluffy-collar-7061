let local_data = JSON.parse(localStorage.getItem('take')) || [];
let local_name = document.getElementById('log_Name');
let local_email = document.getElementById('log_Email');
let local_password = document.getElementById('log_Password');
let check_name = local_data.Name;
let check_email = local_data.Email;
let check_password = local_data.Password;
let admin_name = document.getElementById('admin_Name');
let admin_email = document.getElementById('admin_Email');
let admin_password = document.getElementById('admin_Password');
let Facebook_log = document.getElementById('log_facebook');
let Google_log = document.getElementById('log_google');
let show_admin_form = document.getElementById('admin_open');
let admin_form = document.getElementById('admin_form')
let local_login = document.getElementById('local_user_log');
let admin_login = document.getElementById('admin_user_log');
let count = 0;

Facebook_log.onclick = () => {
    alert('Do You Want To Log In With Your Facebook');
};

Google_log.onclick = () => {
    alert('Do You Want To Log In With Your Google');
};

show_admin_form.onclick = () => {

    if (count % 2 === 0) {
        admin_form.style.display = 'block';
        show_admin_form.innerText = 'CLOSE Admin form';
        show_admin_form.style.backgroundColor = 'teal';
        count++;
    }
    else {
        admin_form.style.display = 'none';
        show_admin_form.innerText = 'OPEN Admin form';
        show_admin_form.style.backgroundColor = '#222222';
        count++;
    }

};

local_login.onclick = () => {
    // if (local_name.value === '' || local_password.value === '' || local_email.value) {
    //     alert('fill all the details');
    // }
    // else if (local_name.value !== check_name || local_password.value !== check_password
    //     || local_email.value !== check_email) {
    //     alert('wrong username or password');
    // }
    // else
    //     if (local_name.value == check_name && local_password.value == check_password
    //         && local_email.value == check_email) {
    //         alert('Log In successfully! Enjoy Your Shopping');
    //         window.location.href = './main.html'
    //     }

    let p = localStorage.getItem("take");
    let data = JSON.parse(p);

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        if (p == null) {
            alert("Sign Up first to login!")
        } else if (local_email.value == data[i].Email && local_password.value == data[i].Password) {
            alert("Sign in Successful")
        } else if (local_email.value != data[i].Email && local_password.value != "") {
            alert("Email Entered is Wrong!")
        } else if (local_password.value == "" && local_email.value != "") {
            alert("Password can't be empty!")
        }
        if (local_email.value == data[i].Email && local_password.value == data[i].Password) {
            let putArray = [];
            putArray = JSON.parse(localStorage.getItem("putArray"))
            if (putArray == null) {
                putArray = [];
            }
            putArray.push(data[i])
            localStorage.setItem("putArray", JSON.stringify(putArray))
            location.assign("index.html")
        }
    }
};

admin_login.onclick = () => {
    if (admin_name.value.toLowerCase() === '' || admin_password.value === '' || admin_email.value === '') {
        alert('fill all the details');
    }
    else if (admin_name.value.toLowerCase() !== 'admin' || admin_password.value !== '12345'
        || admin_email.value !== 'admin@gmail.com') {
        alert('wrong username or password');
    }
    else if (admin_name.value.toLowerCase() == 'admin' && admin_password.value == '12345'
        && admin_email.value == 'admin@gmail.com') {
        let obj = {
            name: admin_name.value.toLowerCase(),
            password: admin_password.value,
        }
        localStorage.setItem('Admin_obj', JSON.stringify(obj))
        alert('Log In successfully! as Admin');
        window.location.href = 'Admin-Panel/Admin.html';
    }
}