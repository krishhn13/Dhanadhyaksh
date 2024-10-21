var check = 0;
var inputCreated = false;
function resetPassword() {
        var email = document.getElementById("forgot-email").value;
        var signupIndex = parseInt(localStorage.getItem('signupIndex')) || 0;
        var emailFound = false;

        for (var i = 0; i < signupIndex; i++) {
            if (localStorage.getItem('email' + i) === email) {
                check = i;
                emailFound = true;
                break;
            }
        }

        if (!emailFound) {
            alert("Email not found! Please check your email or sign up.");
        } else {
            if (!inputCreated) {
                document.getElementById('reset').value="Submit Your Answer";
                var input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('placeholder', "What's Your Pet Name?");
                input.setAttribute('id', 'security-question');
                input.id = "security-question-check";
                input.style.height = '50px';
                document.querySelector('.field2').appendChild(input);
                inputCreated = true;
        }
    }
    document.getElementById('reset').onclick = function() {
        if(localStorage.getItem("security"+check)===document.getElementById("security-question-check").value){
            alert("Your password is: "+localStorage.getItem("password"+check));
            window.location.href = "../index.html";
        }
        else{
            alert("Security answer is incorrect!");
        }
    }
}