const data = {
  name: "Mehedi Hasan Masum",
  role: "Student of SUST CSE",
  profileImage:
    "https://raw.githubusercontent.com/2021331019/myPortfolio/main/profile.jpg",
  about:
    "Hello! I’m Mehedi Hasan Masum, a Computer Science & Engineering student at SUST. I love programming, solving problems, and building creative web applications.",
  projects: [
    {
      icon: "🎮",
      title: "Tic-tac-Toe Game",
      description: "A simple game to practice programming logic.",
    },
    {
      icon: "💻",
      title: "Tuition Media Web App",
      description: "A web app for managing tuition classes and student info.",
    },
    // তুমি এখানেই নতুন প্রজেক্ট যোগ করতে পারো
  ],
  contact: {
    email: "mahadihasankhan00@gmail.com",
    mobile: "01601496272",
    facebook: "https://www.facebook.com/mehadihasan.masum.3",
  },
};

// Load all data dynamically
function loadPortfolio() {
  document.getElementById("profile-img").src = data.profileImage;
  document.getElementById("name").textContent = data.name;
  document.getElementById("role").textContent = data.role;

  document.getElementById("about-text").textContent = data.about;

  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";

  data.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-icon">${project.icon}</div>
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.description}</div>
    `;

    projectsGrid.appendChild(card);
  });

  document.getElementById("email-link").textContent = data.contact.email;
  document.getElementById("email-link").href = "mailto:" + data.contact.email;
  document.getElementById("mobile").textContent = data.contact.mobile;
  document.getElementById("facebook-link").href = data.contact.facebook;

  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll Animation for sections
  const faders = document.querySelectorAll(".fade-in-section");
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("is-visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}

window.onload = loadPortfolio;
