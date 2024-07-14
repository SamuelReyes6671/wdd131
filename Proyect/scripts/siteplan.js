document.addEventListener('DOMContentLoaded', function() {

    // Sample data
    const courses = [
        { title: 'General English', description: 'Course description and available levels.' },
        { title: 'Exam Preparation', description: 'TOEFL, IELTS, etc.' },
        { title: 'Business English', description: 'Details about this course.' },
        { title: "Children's Classes", description: 'Relevant information.' }
    ];

    const testimonials = [
        { text: '"Testimonial text from a satisfied student."', author: 'Student Name' }
    ];

    // Function to display courses
    function displayCourses() {
        const coursesContainer = document.getElementById('courses');
        coursesContainer.innerHTML = ''; // Clear previous content

        courses.forEach(course => {
            const courseHTML = `
                <div class="course">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                </div>
            `;
            coursesContainer.innerHTML += courseHTML;
        });
    }

    // Function to display testimonials
    function displayTestimonials() {
        const testimonialsContainer = document.getElementById('testimonials');
        testimonialsContainer.innerHTML = ''; // Clear previous content

        testimonials.forEach(testimonial => {
            const testimonialHTML = `
                <blockquote>
                    <p>${testimonial.text}</p>
                    <cite>${testimonial.author}</cite>
                </blockquote>
            `;
            testimonialsContainer.innerHTML += testimonialHTML;
        });
    }

    // Event listener for form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Example of storing form data in localStorage
        const formData = { name, email, message };
        localStorage.setItem('formData', JSON.stringify(formData));

        // Display a confirmation message
        alert('Message sent successfully!');

        // Clear the form fields
        contactForm.reset();
    });

    // Initially display courses and testimonials
    displayCourses();
    displayTestimonials();

});
