if(!window.jQuery){
    alert("jQuery Unavailable") 
 }
 else{
     $(document).ready(()=>{

        $.ajax({
            url:"https://jsonplaceholder.typicode.com/photos",
            method:"GET",
            success:(x)=>{
              //  console.log("Date=>",x);
                x.forEach(element => {
                   /* var str = "<div class='thumbnail'> <div class='colors'><img src='"+element.thumbnailUrl+"'></div>"
                    str+= "<p>Description: "+element.title.slice(0,20)+"</p>"
                    str+= "<p> Price: "+element.id+"</p>"
                    str+= "<br><button>Add to cart</button</div>"
                    $('#result').append(str);*/

                    var result = $('#result');
                    var thumbnaildiv = $('<div></div>').appendTo(result).addClass('thumbnail');
                    var colorsDiv=$('<div></div>').appendTo(thumbnaildiv).addClass('colors');
                    $('<img>').appendTo(colorsDiv).attr('src',element.thumbnailUrl);
                    $('<p>').appendTo(thumbnaildiv).append(element.title.slice(0,20));
                   // $('<p>').appendTo(thumbnaildiv).append("Price : "+element.id);
                    $('<button>Add To Cart</button>').appendTo(thumbnaildiv);
                   
                });
              
            }
        });
    });
    
}
