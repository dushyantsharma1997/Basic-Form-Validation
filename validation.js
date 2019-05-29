var text = new String();
var req = new XMLHttpRequest();
req.open("GET", "data.json", true);
req.onload = function (e) 
{
    if (req.readyState === 4) 
    {
        if (req.status === 200) 
        {
            console.log(req.responseText);
            obj = JSON.parse(req.responseText);
        } 
        else 
        {
            console.error(req.statusText);
        }
    }
};
req.onerror = function (e) 
{
  console.error(req.statusText);
};
req.send(null);


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
    document.getElementById("temp1").innerHTML = "<h1> Welcome " + obj.first_name + " " +
                                                obj.last_name + "</h1>";
    document.getElementById("temp1").innerHTML += "<br><br>"
            
    var temp="<table align=\"center\" width=\"400px\" height=\"200px\">" + 
                "<tr><td> The username is </td> <td> " + obj.username + "</td></tr>" +
                "<tr><td> The password is </td> <td>" + obj.password + "</td></tr>" +
                "<tr><td> The first name is </td> <td>" +obj.first_name + "</td></tr>"+
                "<tr><td> The last name is </td> <td>" + obj.last_name + "</td></tr>"+
                "<tr><td> The age is </td> <td>" + obj.Age + " years </td></tr>"
                "</table>";
    document.getElementById("temp2").innerHTML += temp;
}
