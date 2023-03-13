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
 FavoriteLanguage: Javascript,
 Learning: NodeJS,
 ProjectInMind: Node Module,
 Motto: Deeds Not Words,
 TotalCommits: {{ COMMITS }},
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
 <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=plastic&logo=php&logoColor=white">
 <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white">
 <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E">
 <img src="https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB">
 <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=plastic&logo=c-sharp&logoColor=white">
 <img src="https://img.shields.io/badge/markdown-%23000000.svg?style=plastic&logo=markdown&logoColor=white">
 <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=plastic&logo=netlify&logoColor=#00C7B7">
 <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=plastic&logo=npm&logoColor=white">
 <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white">
 <img src="https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=plastic&logo=microsoft%20sql%20server&logoColor=white">
</div>



<h2 align="center"> 💰 Help me by Donating 💰 </h2>

<div align="center">
 <a href="https://buymeacoffee.com/bosic">
     <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=plastic&logo=buy-me-a-coffee&logoColor=black">
 </a>
</div>

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
