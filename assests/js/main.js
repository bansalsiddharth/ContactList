// Author:Siddharth Bansal
// Date:June 10,2021

$(document).ready(function(e) {
    $(".all_image_icons").click(function(e) {
        e.preventDefault();
        $(this).parent().addClass("current");
        var eid = '#' + this.id;
        $(eid).parent().css('background-color', 'darkgrey');
        $("<img class='all_image_icons' id='msg' src='assests/images/message.png'></img>").insertAfter(eid);
        $("<img class='all_image_icons' id='tel' src='assests/images/telephone.png'></img>").insertAfter(eid);

    });


    $(".list-group-item").click(function() {
        var contactId = this.id;
        localStorage.setItem('id', contactId);
        var a = document.getElementById(contactId);
        a.href = 'contact-card.html';

    });

});