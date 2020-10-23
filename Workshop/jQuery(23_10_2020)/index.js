/*
    Author  : Apurva Jogal
    EmpId   : 22455
    Date    : 23/10/2020
*/
if(!window.jQuery){
    alert("jQuery Unavailable") 
 }
 else{
    $('document').ready(function(){
       
       
        var body = $('body');
        var header= $('<header></header>').appendTo(body);
        
        header.css('border','1px solid black').width('1200px').height('100px');
        header.append("<h1>Header</h1>").css('text-align','center');

        var section = $('<section></section>').appendTo(body);
        section.css({'border':'1px solid black','display':'flex'}).width('1200px').height('500px');
        
        var aside = $('<aside></aside').appendTo(section).width('400px').height('500px');
        aside.css('border','1px solid black')
        aside.append("<h4>Aside</h4>").css('text-align','center');

        
        var inner_div = $('<div></div').appendTo(section).width('400px').height('500px');
        inner_div.css('border','1px solid black');
        inner_div.append("<h4>Main Section</h4>").css('text-align','center');

        
        var nav = $('<div></div').appendTo(section).width('400px').height('500px');
        nav.css('border','1px solid black');
        nav.append("<h4>Navigation</h4>").css('text-align','center');


        var footer = $('<footer></footer>').appendTo(body).width('1200px').height('100px');
        footer.css('border','1px solid black');
        footer.append("<h1>Footer</h1>").css('text-align','center');
        


    });
 }