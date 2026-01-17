// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

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
  .querySelectorAll(".skill-card, .project-card, .timeline-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const message = e.target.querySelector('textarea').value;
  
  const whatsappNumber = "916305447461";
  
  // Use proper URL encoding
  const formattedText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const encodedText = encodeURIComponent(formattedText);
  
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  
  e.target.reset();
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

// See More Certifications
document.querySelector(".see-more-btn")?.addEventListener("click", function () {
  const hiddenCerts = document.querySelectorAll(".cert-card.hidden");
  
  if (hiddenCerts.length > 0) {
    // Show hidden certs
    hiddenCerts.forEach(cert => {
      cert.style.display = "block"; 
      setTimeout(() => {
        cert.classList.remove("hidden");
        cert.style.opacity = 0;
        cert.style.transform = "translateY(20px)";
        
        void cert.offsetWidth; // Trigger reflow
        
        cert.style.transition = "all 0.5s ease";
        cert.style.opacity = 1;
        cert.style.transform = "translateY(0)";
      }, 10);
    });
    
    this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
  } else {
    const allCerts = document.querySelectorAll(".cert-card");
    allCerts.forEach((cert, index) => {
        if(index >= 6) { // Keep first 6 always visible
            cert.classList.add("hidden");
            cert.style.display = "none"; // Hide immediately
        }
    });

    this.innerHTML = 'See More Certifications <i class="fas fa-chevron-down"></i>';
  }
});

// Chat Notification
document.addEventListener("DOMContentLoaded", function () {
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

  setTimeout(() => notification.classList.add("show"), 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 8000);

  notification
    .querySelector(".chat-notification-close")
    .addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });

  notification.addEventListener("click", (e) => {
    if (!e.target.classList.contains("chat-notification-close")) {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: "show" });
      }
    }
  });
});

/* Shader Gradient Background using Three.js */
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gradient-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Use a simple Orthographic camera for full screen 2D shader effect
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const geometry = new THREE.PlaneGeometry(2, 2);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader to mimic the ShaderGradient flow and colors
  // Colors: #a8ffe9, #bd86db, #5199e1
  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex 2D noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      // Rotation/Movement roughly matching uSpeed=0.4, uFrequency=5.5
      float time = uTime * 0.2; 
      vec2 uv = vUv * 1.5; // Scale roughly 

      // Create complex flow using layers of noise
      float n1 = snoise(uv + vec2(time * 0.5, time * 0.2));
      float n2 = snoise(uv * 2.0 - vec2(time * 0.4, time * 0.6));
      float n3 = snoise(uv * 4.0 + vec2(n1, n2));

      // Mix colors based on noise
      // Base mix between Color 1 and Color 2
      vec3 color = mix(uColor1, uColor2, n1 * 0.5 + 0.5);
      // Add Color 3 accents
      color = mix(color, uColor3, n2 * 0.4 + 0.3);
      // Textural detail
      color = mix(color, uColor1, n3 * 0.2);

      // Stronger Grain Effect (Noise)
      // High frequency noise
      float grain = (fract(sin(dot(vUv.xy, vec2(12.9898,78.233))) * 43758.5453) - 0.5) * 0.15; // Increased strength to 0.15
      
      // Output with grain
      gl_FragColor = vec4(color + grain, 1.0);
    }
  `;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#3d3855') },
      uColor2: { value: new THREE.Color('#501340') },
      uColor3: { value: new THREE.Color('#111b21') }
    },
    vertexShader,
    fragmentShader
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    material.uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
