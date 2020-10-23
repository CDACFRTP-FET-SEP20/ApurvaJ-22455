/*
    Author  : Apurva Jogal
    EmpId   : 22455
    Date    : 19/10/2020
*/
if(!window.jQuery){
    alert("jQuery Unavailable") 
 }
 else{
    $('document').ready(function(){
       
        $('#showRed').click(function(){
            $('.red').show();
            $('.yellow,.orange').hide();
            $('#showOrange,#showYellow,#showAll').css('background-color','gray');
            $('#showRed').css('background-color','green');
        })

        
        $('#showOrange').click(function(){
            $('.orange').show();
            $('.yellow,.red').hide();
            $('#showRed,#showYellow,#showAll').css('background-color','gray');
            $('#showOrange').css('background-color','green');
          
        })

        
        $('#showYellow').click(function(){
            $('.yellow').show();
            $('.red,.orange').hide();
            $('#showOrange,#showRed,#showAll').css('background-color','gray');
            $('#showYellow').css('background-color','green');
          
        })

        
        $('#showAll').click(function(){
         
            $('.red,.yellow,.orange').show();
            $('#showOrange,#showYellow,#showRed').css('background-color','gray');
            $('#showAll').css('background-color','green');
           
          
        })

    });
 }