$(document).ready(function(){
    // Sticky Navbar and Scroll-up button
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var options = {
        strings: ["Engineer", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    new Typed(".typing", options);
    new Typed(".typing-2", options);

    var submitted = false;

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        if (submitted) return;

        var formData = $(this).serialize();
        $.ajax({
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSdYr0_QaM7vCIGAaHSSsg27NUXcPR-vC_eBwKMw1B7UYgDCFA/formResponse',
            type: 'POST',
            data: formData,
            success: function() {
                Swal.fire(
                    'Success!',
                    'Your response has been submitted.',
                    'success'
                );
                $('#contactForm')[0].reset();
                submitted = true;
            },
            error: function() {
                Swal.fire(
                    'OOPS!',
                    'Unfortunately This Service has not been started yet,Instead Call or Text me (+918010089662).',
                    'error'
                );
            }
        });
    });
});





// $(document).ready(function(){
//     // Sticky Navbar and Scroll-up button
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }
        
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         } else {
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('.navbar .menu li a').click(function(){
//         $('html').css("scrollBehavior", "smooth");
//     });

//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     var options = {
//         strings: ["Engineer", "Developer", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     };
//     new Typed(".typing", options);
//     new Typed(".typing-2", options);


//     var submitted = false;

//     document.getElementById('contactForm').addEventListener('submit', function(e) {
//         if(submitted) {
//             e.preventDefault();
//             submitted = false;
//             Swal.fire(
//                 'Success!',
//                 'Your response has been submitted.',
//                 'success'
//             );
//         }
//     });

//     // Reset the form after submission
//     document.getElementById('hidden_iframe').addEventListener('load', function() {
//         if(submitted) {
//             document.getElementById('contactForm').reset();
//         }
//     });
//     // const contactForm = document.getElementById('contactForm');

//     // contactForm.addEventListener('submit', (e) => {
//     //     e.preventDefault();

//     //     const formData = new FormData(contactForm);

//     //     const xhr = new XMLHttpRequest();
//     //     xhr.open("POST", contactForm.action, true);
//     //     xhr.onload = function() {
//     //         if (xhr.status === 200) {
//     //             alert("Response submitted successfully!");
//     //             // Optional: You can also use a library like SweetAlert to show a nicer popup
//     //             // swal("Response submitted successfully!", "", "success");
//     //         } else {
//     //             alert("Error submitting form. Please try again.");
//     //             // Optional: You can also use a library like SweetAlert to show a nicer popup
//     //             // swal("Error submitting form", "Please try again.", "error");
//     //         }
//     //     };
//     //     xhr.send(formData);
//     // });
// });
// // import { getDatabase } from "firebase/database";
// // import { db } from "./firebase";

// // $(document).ready(function(){
// //     // Sticky Navbar and Scroll-up button
// //     $(window).scroll(function(){
// //         if(this.scrollY > 20){
// //             $('.navbar').addClass("sticky");
// //         } else {
// //             $('.navbar').removeClass("sticky");
// //         }
        
// //         if(this.scrollY > 500){
// //             $('.scroll-up-btn').addClass("show");
// //         } else {
// //             $('.scroll-up-btn').removeClass("show");
// //         }
// //     });

// //     $('.scroll-up-btn').click(function(){
// //         $('html').animate({scrollTop: 0});
// //         $('html').css("scrollBehavior", "auto");
// //     });

// //     $('.navbar .menu li a').click(function(){
// //         $('html').css("scrollBehavior", "smooth");
// //     });

// //     $('.menu-btn').click(function(){
// //         $('.navbar .menu').toggleClass("active");
// //         $('.menu-btn i').toggleClass("active");
// //     });

// //     var options = {
// //         strings: ["Engineer", "Developer", "Designer", "Freelancer"],
// //         typeSpeed: 100,
// //         backSpeed: 60,
// //         loop: true
// //     };
// //     new Typed(".typing", options);
// //     new Typed(".typing-2", options);

    

// // //firebase


// // const contactForm = document.getElementById('contactForm');

// // contactForm.addEventListener('submit', (e) => {
// //   e.preventDefault();

// //   const Name = document.querySelector('input[name="name"]').value;
// //   const Email = document.querySelector('input[name="email"]').value;
// //   const Subject = document.querySelector('input[name="subject"]').value;
// //   const Message = document.querySelector('textarea[name="message"]').value;

// //   const database = getDatabase(db);
// //   const submissionsRef = database.ref('contact-form-submissions');

// //   submissionsRef.push({
// //     Name,
// //     Email,
// //     Subject,
// //     Message,
// //   })
// //   .then(() => {
// //     console.log('Form submission successful!');
// //     // You can also display a success message to the user here
// //   })
// //   .catch((error) => {
// //     console.error('Error submitting form:', error);
// //   });
// // });

// // });
