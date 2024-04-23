/* ----------------------- Toggle icon navbar ----------------------------- */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ---------------------- Scroll section active link --------------------- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*----------------------  Sticky navbar-----------------------  */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*  Remove toggle icon and navbar when click navbar link (scroll)  */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    /*  Scroll reveal  */
    ScrollReveal({ 
        //reset: true,
        distance:'80px', 
        duration: 2000,
        delay:200
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-row, .skills-row, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//-----------------------Form Submission------------------------------------//

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form input values
    var fullName = document.getElementById('fullName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    // Perform basic validation
    if (fullName.trim() === '' || emailAddress.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // You can perform additional validation here (e.g., email validation)

    // Prepare data to send (you can use FormData for more complex forms)
    var formData = {
        fullName: fullName,
        emailAddress: emailAddress,
        mobileNumber: mobileNumber,
        emailSubject: emailSubject,
        message: message
    };

    // Simulate form submission (you can replace this with AJAX call to your server)
    console.log(formData);
    alert('Message sent successfully!'); // Display success message

    // Reset form fields
    document.getElementById('contactForm').reset();
});
