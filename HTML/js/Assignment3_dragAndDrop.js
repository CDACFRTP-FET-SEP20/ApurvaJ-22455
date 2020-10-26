function allowDrop(event)
{
    console.log("inside alloweDrop")
    event.preventDefault(); //to prevent the default behavior of the element
}

function drag(event)
{
    console.log("inside drag")
   // console.log(event.target.id);
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event)
{
    console.log("inside drop");
    event.preventDefault();  //to prevent the default behavior of the element
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


