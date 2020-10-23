"use strict"

var arr = [];
function displayAddBook(){
    var addBook = document.getElementById("add_book");
    if (addBook.style.display === "block") {
        addBook.style.display = "none";
      } else {
        addBook.style.display = "block";
      }
};
function displayAllBook(){
    var allBook = document.getElementById("all_books");
    var addBook = document.getElementById("add_book");
    if (allBook.style.display === "none") {
       
        addBook.style.display = "none";
        allBook.style.display = "block";
      } else {
        allBook.style.display = "block";
        addBook.style.display = "none";
      }

      arr.forEach(element => {
        console.log(element.bName +","+ element.bAuth+","+element.bDesc  );
       var row = document.createElement("tr");
       var cell1 = document.createElement("td");
       var cell2 = document.createElement("td");
       var cell3 = document.createElement("td");
       var cellText1= document.createTextNode(element.bName  );
       var cellText2= document.createTextNode(element.bAuth );
       var cellText3= document.createTextNode(element.bDesc );
       cell1.appendChild(cellText1);
       cell2.appendChild(cellText2);
       cell3.appendChild(cellText3);
       row.appendChild(cell1);
       row.appendChild(cell2);
       row.appendChild(cell3);

      addBook.appendChild(row);
    });
};


function addBook()
{
    console.log("hello");
    var bname = document.getElementById("bName").value;
    var bauth = document.getElementById("bAuthor").value;
    var bdesc = document.getElementById("bDesc").value;
    console.log(bname +","+bauth+","+bdesc)
    var obj = {bName : bname , bAuth: bauth, bDesc:bdesc};

    arr.push(obj);
}


   
    
