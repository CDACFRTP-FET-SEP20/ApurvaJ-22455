var namesArr=  [];

function addToArray(){
    var name = document.getElementById('name').value;
    namesArr.push(name);
    console.log(namesArr.length)
}

function displayAllNames()
{
    //var table = document.getElementById("names-table");
    
    var tableString = "<h3>List of Students</h3> <hr><table>"
    namesArr.forEach(name => {
        /*
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        var text = document.createTextNode(name);
        cell.appendChild(text);
        row.appendChild(cell);
        table.appendChild(row);
        */

        tableString += "<tr><td>"+ name+"</td></tr>";
    });
    tableString +="</table>";
    document.getElementById("names-table").innerHTML = tableString
}