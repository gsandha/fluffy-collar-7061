let sign_submit = document.getElementById('sign_submit');
    let Facebook_sign = document.getElementById('sigh_facebook');
    let Google_sign = document.getElementById('sigh_google');
    
    Facebook_sign.onclick = ()=>{
        alert('Do You Want To Sign Up With Your Facebook');
    };

    Google_sign.onclick = ()=>{
        alert('Do You Want To Sign Up With Your Google');
    };

    sign_submit.onclick = ()=>{
        let name = document.getElementById('Full Name').value;
        let email = document.getElementById('Email address').value;
        let temp_email = document.getElementById('Confirm Email address').value;
        let password = document.getElementById('Password').value;
        let temp_passwod = document.getElementById('Confirm Password').value;
        let phone_no = document.getElementById('Cell Phone Number').value;

        if(temp_email !== email){
            alert("Email don't match")
        }
        else if(temp_passwod !== password){
            alert("password don't match")
        }
        else if(name === '' || email === '' || temp_email === '' || password === '' 
        || temp_passwod === '' || phone_no === ''){
            alert('fill all the details')
        }
        else{
            obj = {
                name : name,
                email : email,
                password : password,
                phone : phone_no,
            }

            name.value = '';
            email.value = '';
            temp_email.value = '';
            password.value = '';
            temp_email.value = '';
            phone_no.value = '';

            LocalStorage(obj);

            alert('sign up successfully!')

            window.location.href = './login.html'
        }
    };

    function LocalStorage(obj){
        let local_user = JSON.parse(localStorage.getItem('local_user')) || {};
        localStorage.setItem('local_user',JSON.stringify(obj))
    }
