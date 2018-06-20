$(document).ready(function(){
    
    // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("topBtn").style.display = "block";
            } else {
                document.getElementById("topBtn").style.display = "none";
            }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        $("#topBtn").click(function(){
            topFunction();
        });
    
    // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("topBtn").style.display = "block";
//     } else {
//         document.getElementById("topBtn").style.display = "none";
//     }
// }

// Effects for the back to top button
// // When the user clicks on the button, scroll to the top of the document

// $("#topBtn").on("click") = function() {topFunction()};

// // onclick="topFunction()"

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

    $("#toggle-map").click(function(){
        $("#world-map").slideToggle();
    });
    
    
});
