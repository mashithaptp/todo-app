const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const usernameValue = username.value.trim();
   
    const passwordValue = password.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else if(usernameValue==="admin"){
        setSuccess(username);
    }
    else{
        setError(username, 'Wrong UserName');

    }
       
    

    



    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue==="12345" ) {
        setSuccess(password); 
    } else {
        setError(password, 'Wrong Password');
    }

   

};