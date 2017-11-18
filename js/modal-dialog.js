$( function() {
    var dialog, form,
        dialogSite,
        dialogNumber,
        dialogAdress,
        firstName = $( "#firstName" ),
        lastName = $( "#lastName" ),
        webSite = $( "#webSite" ),
        phoneNumber = $( "#phoneNumber" ),
        userAdress = $( "#userAdress" ),
        allFields = $( [] ).add( firstName ).add( lastName ).add( webSite ).add( phoneNumber );

    function checkLength( o, n, min, max ) {
        if ( o.val().length > max || o.val().length < min ) {
            o.addClass( "ui-state-error" );
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp( o, regexp, n ) {
        if ( !( regexp.test( o.val() ) ) ) {
            o.addClass( "ui-state-error" );
            return false;
        } else {
            return true;
        }
    }

    function renameUser() {

        var valid = true;
        allFields.removeClass( "ui-state-error" );

        valid = valid && checkLength( firstName, "firstName", 3, 25 );
        valid = valid && checkLength( lastName, "lastName", 3, 25 );

        //valid = valid && checkRegexp( firstName, /^[a-z]([0-9a-z_\s])+$/i, "Fisrtname may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
        //valid = valid && checkRegexp( lastName, /^[a-z]([0-9a-z_\s])+$/i, "Lastname may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );

        if ( valid ) {
            $('#firstName-user-label').text(firstName.val());
            $('#firstName').text(firstName.val());
            $('#lastName-user-label').text(lastName.val());
            $('#lastName').text(lastName.val());
            $(".ui-dialog-content").dialog("close");
        }
        return valid;
    }
    function renameSite() {

        var valid = true;
        allFields.removeClass( "ui-state-error" );

        valid = valid && checkLength( webSite, "webSite", 8, 45 );

        valid = valid && checkRegexp( webSite, /^(www)?[a-zA-Z0-9-\.]+\.[a-z]{2,4}/, "" );

        if ( valid ) {
            $('#site-label').text(webSite.val());
            $('#webSite').text(webSite.val());
            $(".ui-dialog-content").dialog("close");
        }
        return valid;
    }
    function renameNumber() {

        var valid = true;
        allFields.removeClass( "ui-state-error" );

        if ( valid ) {
            $('#number-label').text(phoneNumber.val());
            $('#phoneNumber').text(phoneNumber.val());
            $(".ui-dialog-content").dialog("close");
        }
        return valid;
    }
    function renameAdress() {

        var valid = true;
        allFields.removeClass( "ui-state-error" );

        valid = valid && checkLength( userAdress, "userAdress", 3, 60 );

        if ( valid ) {
            $('#adress-label').text(userAdress.val());
            $('#userAdress').text(userAdress.val());
            $(".ui-dialog-content").dialog("close");
        }
        return valid;
    }


    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        maxheight: 300,
        width: 300,
        modal: false,
        resizable: false,
        position: { my: "left-28 top-20", at: "right top", of: "#edit-name" },
        draggable: false,
        buttons: {
            Cancel: function() {
                $(".ui-dialog-content").dialog("close");
            },
            "save": renameUser
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });
    dialogSite = $( "#dialog-form-link" ).dialog({
        autoOpen: false,
        maxheight: 250,
        width: 300,
        modal: false,
        resizable: false,
        position: { my: "left-28 top-20", at: "right top", of: "#edit-site" },
        draggable: false,
        buttons: {
            Cancel: function() {
                $(".ui-dialog-content").dialog("close");
            },
            "save": renameSite
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });
    dialogNumber = $( "#dialog-form-number" ).dialog({
        autoOpen: false,
        maxheight: 250,
        width: 300,
        modal: false,
        resizable: false,
        position: { my: "left-28 top-20", at: "right top", of: "#edit-number" },
        draggable: false,
        buttons: {
            Cancel: function() {
                $(".ui-dialog-content").dialog("close");
            },
            "save": renameNumber
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        renameUser();
    });
    dialogAdress = $( "#dialog-form-adress" ).dialog({
        autoOpen: false,
        maxheight: 250,
        width: 300,
        modal: false,
        resizable: false,
        position: { my: "left-28 top-20", at: "right top", of: "#edit-adress" },
        draggable: false,
        buttons: {
            Cancel: function() {
                $(".ui-dialog-content").dialog("close");
            },
            "save": renameAdress
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        renameUser();
    });

    $( "#edit-name" ).button().on( "click", function() {
        $(".ui-dialog-content").dialog("close");
        $firstName = $('#firstName-user-label').text();
        $lastName = $('#lastName-user-label').text();
        $('#firstName').attr('value', $firstName);
        $('#lastName').attr('value', $lastName);
        dialog.dialog( "open" );

    });
    $( "#edit-site" ).button().on( "click", function() {
        $(".ui-dialog-content").dialog("close");
        $firstName = $('#site-label').text();
        $('#webSite').attr('value', $firstName);
        dialogSite.dialog( "open" );

    });
    $( "#edit-number" ).button().on( "click", function() {
        $(".ui-dialog-content").dialog("close");
        $phoneNumber = $('#number-label').text();
        $('#phoneNumber').attr('value', $phoneNumber);
        dialogNumber.dialog( "open" );

    });
    $( "#edit-adress" ).button().on( "click", function() {
        $(".ui-dialog-content").dialog("close");
        $userAdress = $('#adress-label').text();
        $('#userAdress').attr('value', $userAdress);
        dialogAdress.dialog( "open" );

    });

    $( "#edit-in-mobile" ).button().on( "click", function() {
        $('#hideThenEdit').hide();
        $('#dialog-form-mobile').slideDown();
        //$userAdress = $('#adress-label').text();
        //$('#userAdress').attr('value', $userAdress);
        //dialogMobile.dialog( "open" );

    });
} );

$("#phoneNumber").mask("(999) 999-9999");


$("#phoneNumber").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 3 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
        var lastfour = move + last;

        var first = $(this).val().substr( 0, 9 );

        $(this).val( first + '-' + lastfour );
    }
});