if(!window.jQuery){
    alert("jQuery Unavailable") 
 }
 else{
     $(document).ready(()=>{

      $successMsg = $(".alert");

        $('#showPasswordCheck').click(function(){
            $(this).is(':checked') ? $('#password').attr('type', 'text') : $('#password').attr('type', 'password');
        });
        $('#showConfirmPasswordCheck').click(function(){
            $(this).is(':checked') ? $('#cpassword').attr('type', 'text') : $('#cpassword').attr('type', 'password');
        });
       /* var availableSkills = [
            "C",
            "C++",
            "Java",
            "JavaScript",
            "Perl",
            "PHP"
          ];
          $("#skills").autocomplete({source: availableSkills});*/

          //displying cities from given list
          let optionList = document.getElementById('city').options;
          let options = [
            { 
              text: 'Pune',
              value: 'Pune 1'
            },
            {
              text: 'Mumbai',
              value: 'Mumbai 2',
            
            },
            {
              text: 'Kolhapur',
              value: 'Kolhapur'
            },
            {
              text: 'Delhi',
              value: 'Delhi'
            }
          ];
          
          options.forEach(option =>
            optionList.add(
              new Option(option.text, option.value, option.selected)
            )
          );
         

          //TO ADD REGULAR EXPRESSION METHOD AS A RULE FOR VALIDATION
          $.validator.addMethod('regx', function(value, element, param) {
            return this.optional(element) ||
                value.match(typeof param == 'string' ? new RegExp(param) : param);
        });
        
          $("#myForm").validate({
            // Specify validation rules
            rules: {
              // The key name on the left side is the name attribute
              // of an input field. Validation rules are defined
              // on the right side
              username: "required",
              email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
              },
              password: {
                required: true,
              
               
              },
              cpassword: {
                required: true,
                equalTo: "#password"
               
              },
              phone:{
                required: true,
                maxlength:10,
                regx : "^[7-9]+[0-9]{9}",
                
              },
              city:"required"

            },
            // Specify validation error messages
            messages: {
                username: "Please enter your username",
            
              password: {
                required: "Please provide a password",
               
              },
              cpassword: {
                required: "Please confirm  password",
                equalTo:"Password does not match"
               
              },
              email: "Please enter a valid email address",
              phone : {
                  required: "Please enter a valid phone number",
                  regx : 'Invalid number',
                
                }

            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
              $successMsg.show();
              alert("Hello : ");
             
              console.log($('#username').val())
              console.log($('#phone').val())
              console.log($('#email').val())
             
            }
          });
         
    });
}
