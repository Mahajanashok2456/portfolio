// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".skill-card, .project-card, .timeline-item, .cert-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! This is a demo form.");
  e.target.reset();
});

document.querySelector(".see-more-btn")?.addEventListener("click", function () {
  const hiddenCerts = document.querySelectorAll(".cert-card.hidden");
  const isExpanded = this.classList.contains("expanded");

  if (isExpanded) {
    hiddenCerts.forEach((cert) => cert.classList.add("hidden"));
    this.textContent = "See More Certifications";
    this.classList.remove("expanded");
  } else {
    hiddenCerts.forEach((cert) => cert.classList.remove("hidden"));
    this.textContent = "Show Less";
    this.classList.add("expanded");
  }
});

if (typeof lottie !== "undefined") {
  lottie.loadAnimation({
    container: document.getElementById("lottie-rocket"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "rocket no blackground.json",
  });
}

// Chat Assistant Notification
window.addEventListener("load", function () {
  // Create notification element immediately
  const notification = document.createElement("div");
  notification.className = "chat-notification";
  notification.innerHTML = `
    <div class="chat-notification-content">
      <span class="chat-notification-icon">💬</span>
      <div class="chat-notification-text">
        <strong>Hi there! 👋</strong>
        <p>Need help? Ask me anything!</p>
      </div>
      <button class="chat-notification-close">&times;</button>
    </div>
  `;
  document.body.appendChild(notification);

  // Show notification with animation instantly
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto hide after 8 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 8000);

  // Close button functionality
  notification
    .querySelector(".chat-notification-close")
    .addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });

  // Click on notification to open chat
  notification.addEventListener("click", (e) => {
    if (!e.target.classList.contains("chat-notification-close")) {
      // Try to trigger Botpress chat
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: "show" });
      }
    }
  });
});
