var msg ="<p><code>The script is located in external script file called as math.js</code></p>";

function addNumber(headParam,bodyParam)
{
    document.body.innerHTML=msg;
    var para = document.createElement("p")
    var textNode= document.createTextNode("Addition of "+ headParam + " and "+bodyParam +" is: "+( headParam+bodyParam));
    para.appendChild(textNode);
    document.body.appendChild(para);
}