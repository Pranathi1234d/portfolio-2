
        function sendMessage() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;

            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Message: " + message);

        }

        document.addEventListener("DOMContentLoaded", function () {
          
            console.log("DOM is ready!");

            var sendButton = document.querySelector("#contact button");
            if (sendButton) {
                sendButton.addEventListener("click", sendMessage);
            }
            document.addEventListener("DOMContentLoaded", function () {
           
              AOS.init({
                  duration: 800, // Duration of animations in milliseconds
                  easing: 'ease-in-out', // Easing function for animations
                  once: true // Whether animation should only happen once
              });
  
             
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                      e.preventDefault();
  
                      document.querySelector(this.getAttribute('href')).scrollIntoView({
                          behavior: 'smooth'
                      });
                  });
              });
  
              
          });
        });

       
