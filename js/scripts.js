// check if input is focused then add new css style
$(document).ready(function() {
    $('.leap').focus(function () {
        $("label[for='"+(this.id)+"']").removeClass('notFocused entered').addClass('focused');
    })
    $('.leap').blur(function () {
        var $pass = $(this).val();
        //console.log(($pass));
        if ( ($pass).length < 1 ) {
            $("label[for='"+(this).id+"']").removeClass('focused').addClass('notFocused');
            //console.log('no');
        } else {
            $("label[for='"+(this).id+"']").removeClass('notEntered focused').addClass('entered');
        }
    })


// check the input's is not empty
   $('.submitButton').click(function() {
       if ( $('#username').val().length < 1 ) {
           $('#username').addClass('err');
           $("label[for='username']").addClass('err');
       } else {
           $('#username').removeClass('err');
           $("label[for='username']").removeClass('err');
       }
       if ( $('#email').val().length < 1 ) {
           $('#email').addClass('err');
           $("label[for='email']").addClass('err');
       } else {
           $('#email').removeClass('err');
           $("label[for='email']").removeClass('err');
       }
       if ( $('#password').val().length < 1 ) {
           $('#password').addClass('err');
           $("label[for='password']").addClass('err');
       } else {
           $('#password').removeClass('err');
           $("label[for='password']").removeClass('err');
       }
       if ( $('#username').val().length < 1 || $('#email').val().length < 1 || $('#password').val().length < 1 ) {
           return false;
       }
   });
});
