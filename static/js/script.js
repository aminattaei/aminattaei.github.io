const codePanel = document.getElementById("code-panel");
const outputPanel = document.getElementById("output-panel");

const pythonCode = [
  "<span class='syntax-comment'># Amin Ataei — Backend & IoT Developer Portfolio</span>",
  "<span class='syntax-comment'># Focus: Django, DRF, IoT (ESP32 & MicroPython)</span>",
  "",
  "<span class='syntax-keyword'>import</span> datetime",
  "<span class='syntax-keyword'>import</span> json",
  "",
  "<span class='syntax-keyword'>class</span> Developer:",
  "    <span class='syntax-keyword'>def</span> <span class='syntax-function'>__init__</span>(self, profile):",
  "        self.profile = profile",
  "",
  "    <span class='syntax-keyword'>def</span> <span class='syntax-function'>bio</span>(self):",
  "        <span class='syntax-keyword'>print</span>(f\"Name: {self.profile.General.FirstName} {self.profile.General.LastName}\")",
  "        <span class='syntax-keyword'>print</span>(f\"Email: {self.profile.General.Email}\")",
  "        <span class='syntax-keyword'>print</span>(f\"Phone: {self.profile.General.Phone}\")",
  "        <span class='syntax-keyword'>print</span>(f\"Address: {self.profile.General.Address}\")",
  "        <span class='syntax-keyword'>print</span>(\"\\nSkills:\")",
  "        <span class='syntax-keyword'>print</span>(', '.join([s.Name for s in self.profile.Skills]))",
  "        <span class='syntax-keyword'>print</span>(\"\\nLanguages & Technologies:\")",
  "        <span class='syntax-keyword'>print</span>(', '.join([l.Name for l in self.profile.LangTech]))",
  "        <span class='syntax-keyword'>print</span>(\"\\nEducation:\")",
  "        <span class='syntax-keyword'>for</span> edu <span class='syntax-keyword'>in</span> self.profile.Educations:",
  "            <span class='syntax-keyword'>print</span>(f\"{edu.grade} in {edu.in} ({edu.from} - {edu.to if edu.to else 'Present'})\")",
  "        <span class='syntax-keyword'>print</span>(\"\\nWork Experience:\")",
  "        <span class='syntax-keyword'>for</span> work <span class='syntax-keyword'>in</span> self.profile.Work:",
  "            <span class='syntax-keyword'>print</span>(f\"{work.title} at {work.company}, {work.city} ({work.from} - {work.to if work.to else 'Present'})\")",
  "",
  "amin = Developer(profile)",
  "amin.bio()",
  "",
  "<span class='syntax-comment'># End of resume</span>",
];

const profile = {
  General: {
    FirstName: "Amin",
    LastName: "Ataei",
    Email: "aminataei2000@gmail.com",
    Phone: "09907761463",
    Address: "Isfahan, Iran",
  },

  Skills: [
    { Name: "Problem Solving" },
    { Name: "Self Learner" },
    { Name: "Backend Architecture" },
    { Name: "Debugging & Optimization" },
    { Name: "Cybersecurity Interest" },
  ],

  LangTech: [
    { Name: "Python" },
    { Name: "Django" },
    { Name: "Django Rest Framework" },
    { Name: "PostgreSQL" },
    { Name: "Git & GitHub" },
    { Name: "Docker (learning)" },
    { Name: "Redis & Celery (learning)" },
    { Name: "HTML & CSS" },
    { Name: "JavaScript (basic)" },
    { Name: "ESP32" },
    { Name: "MicroPython" },
    { Name: "WordPress" },
  ],

  Educations: [
  {
    from: "2022",
    to: "2025",
    grade: "Diploma",
    in: "Technical & Vocational (Computer)",
    institute: "Technical and Vocational High School",
  },
],
  Work: [
    {
      from: "",
      to: "Present",
      title: "Backend Developer (Freelance)",
      city: "Remote",
      company: "Freelance",
    },
    {
      from: "",
      to: "Present",
      title: "WordPress Developer",
      city: "Remote",
      company: "Freelance",
    },
  ],
};

let lineIndex = 0;

function printLine(text) {
  const line = document.createElement("div");
  line.classList.add("typed-line");
  line.innerHTML = text;
  codePanel.appendChild(line);
}

function printOutput(text) {
  const line = document.createElement("div");
  line.innerText = text;
  outputPanel.appendChild(line);
}

function typeLine() {
  if (lineIndex < pythonCode.length) {
    const lineContent = pythonCode[lineIndex];

    if (lineContent.includes("amin.bio()")) {
      printLine(lineContent);
      simulateBio();
    } else {
      printLine(lineContent);
    }

    lineIndex++;
    setTimeout(typeLine, 200);
  } else {
    const cursor = document.createElement("span");
    cursor.id = "cursor";
    cursor.innerText = "|";
    outputPanel.appendChild(cursor);
    setInterval(() => {
      cursor.style.visibility =
        cursor.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
  }
}

function simulateBio() {
  printOutput(`Name: ${profile.General.FirstName} ${profile.General.LastName}`);
  printOutput(`Email: ${profile.General.Email}`);
  printOutput(`Phone: ${profile.General.Phone}`);
  printOutput(`Address: ${profile.General.Address}`);

  printOutput("\nSkills:");
  printOutput(profile.Skills.map((s) => `• ${s.Name}`).join("\n"));

  printOutput("\nLanguages & Technologies:");
  printOutput(profile.LangTech.map((l) => `• ${l.Name}`).join("\n"));

  printOutput("\nEducation:");
  profile.Educations.forEach((e) => {
    printOutput(`• ${e.grade} in ${e.in} (${e.from} - ${e.to || "Present"})`);
  });

  printOutput("\nWork Experience:");
  profile.Work.forEach((w) => {
    printOutput(
      `• ${w.title} at ${w.company}, ${w.city} (${w.from} - ${
        w.to || "Present"
      })`
    );
  });
}

typeLine();

const profileCard = document.querySelector(".profile-card");
const blurOverlay = document.querySelector(".blur-overlay");

document
  .querySelector(".profile-card .close-btn")
  .addEventListener("click", () => {
    profileCard.style.opacity = "0";
    profileCard.style.transform = "translate(-50%, -50%) scale(0.9)";
    blurOverlay.classList.add("hidden");

    setTimeout(() => {
      profileCard.style.display = "none";
      blurOverlay.style.display = "none";
    }, 500);
  });