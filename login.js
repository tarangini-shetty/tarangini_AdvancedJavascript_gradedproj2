
credentials = [
    {
        "username":"test1",
        "password":"test1"
    },
    {
        "username":"test2",
        "password":"test2"
    }
]

function preventBack() { 
	window.history.forward(); 
}
setTimeout("preventBack()", 0);
window.onunload = function () { null };

function login()
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
		
