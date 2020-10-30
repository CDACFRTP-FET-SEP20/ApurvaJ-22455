if(!window.jQuery) {
    alert("jQuery Unavailable");
}
else {
    $(document).ready(()=>{

        //TO ADD REGULAR EXPRESSION METHOD AS A RULE FOR VALIDATION
        $.validator.addMethod('regx', function(value, element, param) {
            return this.optional(element) || value.match(typeof param == 'string'
                ? new RegExp(param)
                : param);
        });
        $("#regForm").validate({
            // Specify validation rules
            rules: {
              // The key name on the left side is the name attribute
              // of an input field. Validation rules are defined
              // on the right side
                email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                },
                password: {
                    required: true
                },
                cpassword: {
                    required: true,
                    equalTo: "#password"
                },
                phone: {
                    maxlength: 10,
                    regx: "^[7-9]+[0-9]{9}",
                    number: true
                },
                weight: {
                    required: true,
                    number: true
                },
                height: {
                    required: true,
                    number: true
                },
                dob: {
                    required: true
                }
            },
            // Specify validation error messages
            messages: {
                password: {
                    required: "Please provide a password"
                },
                cpassword: {
                    required: "Please confirm  password",
                    equalTo: "Password does not match"
                },
                email: "Please enter a valid email address",
                phone: {
                    required: "Please enter a valid phone number",
                    regx: 'Invalid number'
                },
                weight: {
                    required: " Please enter your weight",
                    number: " Only numbers allowed"
                },
                height: {
                    required: " Please enter your height",
                    number: " Only numbers allowed"
                },
                dob: {
                    required: "Please enter your birthdate"
                }
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function (form) {
                $successMsg.show();
            }
        });
    });
}
