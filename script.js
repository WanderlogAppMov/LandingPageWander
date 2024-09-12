document.getElementById('about-button').addEventListener('click', function() {
    var content = document.getElementById('about-content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      setTimeout(function() {
        content.classList.add('show');
      }, 50);
    } else {
      content.classList.remove('show');
      setTimeout(function() {
        content.style.display = 'none';
      }, 500);
    }
  });
  
  document.getElementById('about-us-button').addEventListener('click', function() {
    var content = document.getElementById('about-us-content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      setTimeout(function() {
        content.classList.add('show');
      }, 50);
    } else {
      content.classList.remove('show');
      setTimeout(function() {
        content.style.display = 'none';
      }, 500);
    }
  });



/*Joaquin*/

function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function formValidation() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        var email = document.querySelector('input[type="email"]').value;
        var feedback = document.querySelector('.feedback');

        if (feedback) {
            feedback.remove();
        }

        if (!email) {
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p class="feedback" style="color: red;">Please enter your email.</p>');
        } else if (!validateEmail(email)) {
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p class="feedback" style="color: red;">Please enter a valid email.</p>');
        } else {
            document.querySelector('form').insertAdjacentHTML('beforeend', '<p class="feedback" style="color: green;">Thank you for subscribing!</p>');
            var successMessage = document.createElement('p');
            successMessage.textContent = 'Form submitted successfully!';
            document.body.appendChild(successMessage);
            clearForm();
        }
        setTimeout(clearFeedback, 3000);
    });
}

function clearFeedback() {
    var feedback = document.querySelector('.feedback');

    if (feedback) {
        feedback.remove();
    }
}

function clearForm() {
    document.querySelector('input[type="email"]').value = '';
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

smoothScrolling();
formValidation();

document.querySelector('.hamburger').addEventListener('click', function() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'none') {
      navLinks.style.display = 'flex';
  } else {
      navLinks.style.display = 'none';
  }
});
