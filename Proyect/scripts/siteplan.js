document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to the EWS English Academy!');
    
    const exploreCoursesBtn = document.getElementById('explore-courses-btn');
    exploreCoursesBtn.addEventListener('click', () => {
        alert('Exploring our courses!');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            contactForm.submit();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
