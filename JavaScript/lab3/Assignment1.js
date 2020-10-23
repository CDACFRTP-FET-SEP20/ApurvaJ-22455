
var date = new Date();
var stringDatetoLocaleTimeString = date.toLocaleTimeString();
var stringDate = date.toDateString();
var hour = parseInt(date.getHours())
var msg; 
if(hour< 12)
{
    msg = "Good Morning";
}
else if(hour>= 12 && hour<17)
{
    msg="Good Afternoon"
}
else{
    msg="Good Evening"
}

document.write(stringDate + " " + stringDatetoLocaleTimeString);
document.write("<br>");
document.write(msg);

