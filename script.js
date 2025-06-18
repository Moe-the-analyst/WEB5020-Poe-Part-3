
document.addEventListener("DOMContentLoaded", function () {
    // === Enquiry Form Validation ===
    const enquiryForm = document.getElementById("enquiryForm");
    const responseDiv = document.getElementById("responseMessage");
  
    if (enquiryForm) {
      enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();
  
        if (name === "" || email === "" || service === "" || message.length < 10) {
          responseDiv.style.color = "red";
          responseDiv.textContent = "Please complete all fields correctly before submitting.";
          return;
        }
  
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
          responseDiv.style.color = "red";
          responseDiv.textContent = "Please enter a valid email address.";
          return;
        }
  
        responseDiv.style.color = "green";
        responseDiv.textContent = `Thank you, ${name}! We’ve received your enquiry about ${service}. One of our coaches will reach out soon.`;
        enquiryForm.reset();
      });
    }
  
    // === Contact Form Validation ===
    const contactForm = document.getElementById("contactForm");
    const contactResponse = document.getElementById("contactResponse");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const type = document.getElementById("message-type").value;
        const message = document.getElementById("contact-message").value.trim();
  
        if (name === "" || email === "" || type === "" || message.length < 10) {
          contactResponse.style.color = "red";
          contactResponse.textContent = "Please complete all fields correctly before submitting.";
          return;
        }
  
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
          contactResponse.style.color = "red";
          contactResponse.textContent = "Please enter a valid email address.";
          return;
        }
  
        contactResponse.style.color = "green";
        contactResponse.textContent = `Thanks ${name}, your ${type.toLowerCase()} has been received. We'll be in touch soon!`;
        contactForm.reset();
      });
    }
  
    // === Scroll Animation ===
    const animatedElements = document.querySelectorAll('.animate');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  
    // === Lightbox Gallery ===
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");
  
    if (lightbox) {
      document.querySelectorAll(".lightbox-trigger").forEach(img => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
        });
      });
  
      lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
  
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          lightbox.style.display = "none";
        }
      });
    }
  });
  