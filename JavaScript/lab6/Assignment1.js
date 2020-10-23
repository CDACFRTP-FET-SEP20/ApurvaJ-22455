
var tableString = "<table border='1'>"
tableString +="<tr> <td>Href: </td><td>"+ window.location.href+"</td><tr>"
tableString +="<tr> <td>Path Name: </td><td>"+ window.location.pathname+"</td><tr>"
tableString +="<tr> <td>Protocol</td><td>"+ window.location.protocol+"</td><tr>"
tableString += "</table>";

document.getElementById('location').innerHTML=tableString;
function goBack(){
    history.back();
}