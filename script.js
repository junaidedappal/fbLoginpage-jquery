$(document).ready(function(){
    $("#formSignup").validate({
rules:{
    fname:{
        required:true,
        minlength:4
    },
    sname:{
        required:true,
        minlength:4
    },
    email:{
        email:true
    },
    password:{
    required:true,
    minlength:8
    }
},
messages:{
    fname:{
        required:"give your firstname",
        minlength:"its too short"
    },
    sname:{
        required:"give your firstname",
        minlength:"its too short"
    }
}

    })

 


})