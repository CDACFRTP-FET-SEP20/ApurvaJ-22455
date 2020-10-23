var companyName = "Cybage Software Pvt Ltd";

function search(){
    var letterToSearch = document.getElementById('letterToSearch').value;
    
    var index = companyName.indexOf(letterToSearch);

    if(index <0 )
    {
        document.write("Character "+ letterToSearch + " not found");
    }
    else{
        document.write("Character "+ letterToSearch + " found at position : " + (index+1));

    }
    document.write("<br>")

    document.write(companyName + " is popularly knows as " + companyName.split('Pvt')[0]);
    document.write("<br>")
    document.write( companyName.toLowerCase());
    document.write("<br>")
    document.write( companyName.toUpperCase());
    
}
