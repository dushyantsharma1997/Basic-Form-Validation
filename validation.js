var text = new String();
var details = '{"data":[{"username":"Harry","password":"potter","first_name":"Harry James","last_name":"Potter","Age":"19"}]}';
obj = JSON.parse(details);

function mysubmit(){
    var x=document.forms["Login"]["name"].value;
    var y=document.forms["Login"]["pass"].value;
    var z=document.forms["Login"]["captcha"].value;
    if(x =="" || x != obj.data[0].username )
    {
        window.alert("Invalid Name");
        return false;
    }
    else if(y.length<=5 || y != obj.data[0].password)
    {
        window.alert("password not valid");
        return false;
    }
    else if(z!=text)
    {
        window.alert("invalid captcha");
        return false;
    }
    else 
        document.getElementById("first").innerHTML = "submission succesful";
        window.location.href = "welcome.html";
    }


    function generate_captcha()
{
    var a,i;
    a="abcdefghijklmnopqrstuvwxyz";
    for(i=0; i<5; i++)
    {
        text+=a.charAt(Math.floor((Math.random() * 26) + 1));    
    }
    document.getElementById("captcha").innerHTML = text;
}

function detail(){
    document.getElementById("temp1").innerHTML = "<h1> Welcome " + obj.data[0].first_name + " " +
                                                obj.data[0].last_name + "</h1>";
    document.getElementById("temp1").innerHTML += "<br><br>"
            
    var temp="<table align=\"center\" width=\"400px\" height=\"200px\">" + 
                "<tr><td> The username is </td> <td> " + obj.data[0].username + "</td></tr>" +
                "<tr><td> The password is </td> <td>" + obj.data[0].password + "</td></tr>" +
                "<tr><td> The first name is </td> <td>" +obj.data[0].first_name + "</td></tr>"+
                "<tr><td> The last name is </td> <td>" + obj.data[0].last_name + "</td></tr>"+
                "<tr><td> The age is </td> <td>" + obj.data[0].Age + " years </td></tr>"
                "</table>";
    document.getElementById("temp2").innerHTML += temp;
}