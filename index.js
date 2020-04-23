
const skills = [
  { name: "HTML", percentage: "80", color: "blue" },
  { name: "javascript", percentage: "85", color: "blue" },
  { name: "css", percentage: "65", color: "blue" },
  { name: "java", percentage: "35", color: "blue" },
  { name: "Angular", percentage: "30", color: "green" },
  { name: "react", percentage: "40", color: "green" },
  { name: "jQuery", percentage: "70", color: "green" },
  { name: "Sass", percentage: "65", color: "green" },
  { name: "node.js", percentage: "65", color: "orange" },
  { name: "Express", percentage: "65", color: "orange" },
  { name: "MySql", percentage: "65", color: "red" },
  { name: "postgreSql", percentage: "70", color: "red" },
  { name: "Oracle", percentage: "65", color: "red" },
  { name: "git", percentage: "80", color: "purple" },
];

function createProgressBar(data) {
  for (const item of data) {
    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.setAttribute("id", `bar ${item.name}`);
    const progressBar = document.createElement("div");
    progressBar.setAttribute("id", `bar-int ${item.name}`);
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("style", "width: 0%;");
    progressBar.setAttribute("aria-valuenow", "0");
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", "100");
    progressBar.classList.add("progress-bar");
    progress.style.visibility = "hidden";
    progress.style.height = "3vh";
    progress.style.margin = "1vh";
    progress.style.fontSize = "1.5vh";

    progress.append(progressBar);

    const codeSkill = document.getElementById("codeSkills");

    codeSkill.appendChild(progress);
  }
}

createProgressBar(skills);

function mySkill() {
  for (const skill of skills) {
    let progress = document.getElementById(`bar-int ${skill.name}`);
    let progressBar = document.getElementById(`bar ${skill.name}`);
    let btnCodeSkills = document.getElementById('myBtn')
    progressBar.style.visibility = "visible";
    btnCodeSkills.style.visibility = "hidden";
    move();

    let width = 0;

    function move() {
      let i = 0;
      if (i == 0) {
        i = 1;

        let id = setInterval(frame, 15);

        function frame() {
          if (width == skill.percentage) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            progress.style.width = skill.percentage + "%";
            progress.innerHTML = `${skill.name} ` + width + "%";
            progress.style.backgroundColor = `${skill.color}`;
            console.log(width);
          }
        }
      }
    }
  }
}
document.getElementById("myBtn").addEventListener("click", mySkill);
