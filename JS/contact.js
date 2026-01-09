// EmailJS Initialization
(function () {
    // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("ANG8Bxt75tbHk2y2U");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Show loading state
    const submitButton = document.getElementById('submitButton');
    const originalText = submitButton.innerText;
    submitButton.innerText = 'Sending...';
    submitButton.disabled = true;

    // These IDs from the form must match the variables in your EmailJS template
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone_number: document.getElementById('number').value,
        message: document.getElementById('message').value
    };

    // IMPORTANT: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
    emailjs.send('service_okborg6', 'template_783gw16', templateParams)
        .then(function () {
            alert('Message sent successfully!');
            submitButton.innerText = originalText;
            submitButton.disabled = false;
            document.getElementById('contactForm').reset();
        }, function (error) {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error);
            submitButton.innerText = originalText;
            submitButton.disabled = false;
        });
});
