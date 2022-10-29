
// credentials = [
//     {
//         "username":"test1",
//         "password":"test1"
//     },
//     {
//         "username":"test2",
//         "password":"test2"
//     }
// ]
let credentials_url = 'https://raw.githubusercontent.com/tarangini-shetty/tarangini_AdvancedJavascript_gradedproj2/master/credentials.json'

function preventBack() { 
	window.history.forward(); 
}
setTimeout("preventBack()", 0);
window.onunload = function () { null };

function login()
{
    fetch(credentials_url)
	    .then((response) => response.json())
		.then((credentials) => { validate(credentials); });

}
function validate(credentials)
{
	var uname = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	if(uname =='')
	{
		alert("please enter user name.");
	}
	else if(pwd=='')
	{
    	alert("enter the password");
	}
    for (let i=0; i < credentials.length; i++ ){
        if (credentials[i]['username'] == uname && credentials[i]['password'] == pwd ){
            window.location = "resume.html";
            return
        }
    }
		
	alert("Wrong Credentials!");
}
		
