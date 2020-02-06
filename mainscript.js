 // SELECT CONTROL BUTTONS IN SECTION MENU
 var mixer = mixitup('.mix-container');
 $(document).ready(function() {
     $(".type>img").mouseenter(function() {

         $(this).css('transform', 'scale(1.3)');

     });

     $(".type>img").mouseleave(function() {

         $(this).css('transform', 'scale(1.0)');


     });
 });