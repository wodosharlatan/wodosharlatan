const path = require("path");
const fetch = require("node-fetch");
const fs = require("fs");

let stars = 0,
  page = 1;
let special;

const CountStars = async () => {
  let StarsData = await fetch(
    `https://api.github.com/users/wodosharalatn/starred?per_page=100&page=${page}`
  ).then((res) => res.json());
  stars += StarsData.length;
  page++;
  if (StarsData.length === 100) CountStars();
  else WriteReadMe();
};

const WriteReadMe = async () => {
  //Get ReadMe path
  const ReadMe = path.join(__dirname, "..", "README.md");
  const date = new Date();
  
 //Season Based Emoji
 let dd = date.getDate(),
 mm = date.getMonth() + 1;

if (mm === 12) special = ["⛄", "❄", "🎄"];
else if (mm === 6 && dd === 5) special = ["🎉", "🎈", "🎊"];

//Fetching Info From Github API
let UserData = await fetch("https://api.github.com/users/wodosharlatan").then(
 (res) => res.json()
);

//Creating the text what we gonna save on ReadMe file
const text = `## Hello World 👋 I'm Tom
A Web Developer from the Czech Republic. I like to code web applications and explore the limits of my skills. I have worked on many projects in the past. Some of them are open-source, make sure to check them out.  

Thanks for visiting my GitHub profile. Have a great day ahead!

<h2 align="center"> ${special ? special[0] : "💫"} About Me ${
 special ? special[0] : "💫"
}</h2>

\`\`\`js
const Tom = {
 FavoriteLanguage: Laravel,
 Learning: Java,
 ProjectInMind: Birthday Reminder,
 OpenedPullRequests: {{ PULL_REQUESTS }},
 TotalCommits: {{ COMMITS }},
 OpenedIssues: {{ ISSUES }},
 Stars: {{ STARS }},
 Repositories: {
    Created: {{ REPOSITORIES }},
    Contributed: {{ REPOSITORIES_CONTRIBUTED_TO }}
 },
}; // My stats as an Epic Object ✨
\`\`\`

<h2 align="center"> ${special ? special[1] : "🚀"} My Stats ${
 special ? special[1] : "🚀"
}</h2>

<div align="center">
<img src="https://github-readme-streak-stats.herokuapp.com/?user=wodosharlatan&theme=dark&hide_border=false">
</div>


<h2 align="center"> 💻 Tech Stack 💻 </h2>

<div align="center">
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original-wordmark.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"  title="JS" alt="JS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original-wordmark.svg" title="Github"  alt="Github" width="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title="Visual Studio Code" alt="Visual Studio Code" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" title="Terminal" alt="Terminal" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="Npm" alt="Npm" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/bash/bash-original.svg" title="Bash" alt="Bash" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/php/php-original.svg" title="PHP" alt="PHP" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg" title="MySql" alt="MySql" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/linux/linux-original.svg" title="Linux" alt="Linux" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/laravel/laravel-original.svg" title="Laravel" alt="Laravel" width="40" height="40" />&nbsp;
 
</div>

<h2 align="center"> ⚙️ Last Updated ⚙️ </h2>

<!-- Last updated on ${date.toString()} ;-;-->
<div align="center">
<i>Last updated on ${date.getDate()}${
 date.getDate() === 1
   ? "st"
   : date.getDate() === 2
   ? "nd"
   : date.getDate() === 3
   ? "rd"
   : "th"
} ${
 [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
 ][date.getMonth()]
} ${date.getFullYear()} using Samsung Smart Refrigerator</i> ${
 special ? special[2] : "🧊"
} ${mm === 6 && dd === 5 ? "and... today is my birthday" : ""}
</div>
`;

//Saving on readme.md
fs.writeFileSync(ReadMe, text);
};

(() => {
    CountStars();
})()
