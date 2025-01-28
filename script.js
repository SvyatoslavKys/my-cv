
const translations = {
    en: {
      name: "Kyslytsia Sviatoslav",
      title: "Front-End Developer",
      details: {
        location: "Bytom, Poland",
        phone: "516 487 234",
        email: "svyat.ne@gmail.com",
      },
      skills: ["Jira", "Confluence", "Functional Testing", "Visual studio code", "Figma", "Git hub"],
      profile: "Responsible employee with a desire for improvement. My diligence and dedication to work allow me to achieve set goals. I believe in continuous self-development and am ready to take on additional tasks to maximize my contribution to the success of the company.",
      experience: [
        {
          title: "Business Analyst, Moyo, Kyiv",
          dates: "May 2023 – Jun 2024",
          tasks: ["Agreed on client requirements.", "Business process descriptions and specifications.", "Test case creation and result tracking."],
        },
        {
          title: "IT Support Team Lead, Moyo, Kyiv",
          dates: "July 2022 – May 2023",
          tasks: ["Managed IT team operations and distributed tasks.", "Ensured data accuracy using Power BI.", "Oversaw system testing and support."],
        },
      ],
    },
    pl: {
      name: "Kyslytsia Sviatoslav",
      title: "Front-End Developer",
      details: {
        location: "Bytom, Polska",
        phone: "516 487 234",
        email: "svyat.ne@gmail.com",
      },
      skills: ["Jira", "Confluence", "Testowanie funkcjonalne", "Visual studio code", "Figma", "Git hub"],
      profile: "Odpowiedzialny pracownik z chęcią do doskonalenia. Moja sumienność i oddanie pozwalają osiągać wyznaczone cele. Wierzę w ciągły rozwój osobisty i jestem gotów podjąć dodatkowe zadania, aby zmaksymalizować swój wkład w sukces firmy.",
      experience: [
        {
          title: "Analityk Biznesowy, Moyo, Kijów",
          dates: "Maj 2023 – Chervec 2024",
          tasks: ["Uzgodniono wymagania klientów.", "Opis procesów biznesowych i specyfikacji.", "Tworzenie przypadków testowych i śledzenie wyników."],
        },
        {
          title: "Kierownik Zespołu IT, Moyo, Kijów",
          dates: "Lipiec 2022 – Maj 2023",
          tasks: ["Zarządzanie operacjami zespołu IT i rozdzielanie zadań.", "Zapewnienie dokładności danych przy użyciu Power BI.", "Nadzór nad testowaniem systemu i wsparciem."],
        },
      ],
    },
  };
  
  
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
  
  
  let currentLang = "en";
  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pl" : "en";
    updateContent();
  });
  
  function updateContent() {
    const lang = translations[currentLang];
  
    document.getElementById("name").textContent = lang.name;
    document.getElementById("title").textContent = lang.title;
    document.getElementById("location").textContent = lang.details.location;
    document.getElementById("phone").textContent = lang.details.phone;
    document.getElementById("email").textContent = lang.details.email;
  
    const skills = lang.skills;
    skills.forEach((skill, index) => {
      document.getElementById(`skill${index + 1}`).textContent = skill;
    });
  
    document.getElementById("profile-text").textContent = lang.profile;
  
    const experiences = lang.experience;
    experiences.forEach((exp, index) => {
      const job = document.getElementById(`job${index + 1}`);
      if (job) {
        job.querySelector("h4").textContent = exp.title;
        job.querySelector("p").textContent = exp.dates;
        const tasks = job.querySelectorAll("ul li");
        tasks.forEach((task, taskIndex) => {
          task.textContent = exp.tasks[taskIndex];
        });
      }
    });
  }
  
  
  updateContent();
  