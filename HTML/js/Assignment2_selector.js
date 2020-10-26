function changeParaColor()
{
    var selectedPara = document.querySelectorAll("div > p");
    for(var i = 0; i<selectedPara.length; i++)
    {
        selectedPara[i].style.color= "Brown"
    }
}
