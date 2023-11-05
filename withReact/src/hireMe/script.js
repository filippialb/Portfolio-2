emailjs.init("JcV5iPHNv8AMgB7Hq");
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check if any of the fields are empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    // Send the email using EmailJS
    emailjs.send("service_957rz0n", "template_7a4muam", {
      name: name,
      email: email,
      message: message
    }).then(function(response) {
      alert('Message sent successfully!');
      // clear the form after sending the message
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, function(error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    });
  });