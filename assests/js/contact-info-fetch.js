/*Author:Siddharth Bansal
Date:June 10,2021
*/

$(document).ready(function(e) {

    var conatactID = localStorage.getItem('id');

    for (var i = 0; i < contactInfo.length; i++) {
        if (conatactID == contactInfo[i].key) {
            //fetching all contact information from contactInfo object 
            var contactname = contactInfo[i].name;
            var homePhoneNumber = contactInfo[i].homePhoneNumber;
            var workPhoneNumber = contactInfo[i].workPhoneNumber;
            var email = contactInfo[i].email;
            var site = contactInfo[i].site;
            var skypeId = contactInfo[i].skpye_id;
            var imagePath = contactInfo[i].image_url;
            //Adding image path 
            var imgElement = document.getElementById('contact_image');
            imgElement.src = imagePath;
            //Adding contact information
            document.getElementById('home_phone').innerHTML = homePhoneNumber + "<img class='all_image_icons' id='example' src='assests/images/message.png'></img>" + "<img class='all_image_icons' id='example' src='assests/images/telephone.png'></img>";
            document.getElementById('work_phone').innerHTML = workPhoneNumber + "<img class='all_image_icons' id='example' src='assests/images/message.png'></img>" + "<img class='all_image_icons' id='example' src='assests/images/telephone.png'></img>";
            document.getElementById('email_id').innerHTML = email + "<img class='all_image_icons' id='example' src='assests/images/email.png'></img>";
            document.getElementById('site_url').innerHTML = site + "<img class='all_image_icons' id='example' src='assests/images/internet.png'></img>";
            document.getElementById('skype_id').innerHTML = skypeId + "<img class='all_image_icons' id='example' src='assests/images/skype.png'></img>";
            document.getElementById('contact_card_name').innerText = contactname;


        }
    }
    $('#backButon').click(function() {
        window.location.href = 'contact-list.html';
    });
});