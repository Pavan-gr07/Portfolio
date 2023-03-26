/* ******** */
/* Variables */
/* ******** */
const yearE1 = document.getElementById('year1');
const projectsE1 = document.getElementById('projects');

// yearE1.innerHTML = new Date().getFullYear();


/* ******** */
/* projects */
/* ******** */
const projects = [
    {
        name:"foodwebsite",
        img:'food website.png',
        codeUrl:'https://github.com/Pavan-gr07/-food-website',
        liveUrl:'https://pavan-gr07.github.io/-food-website/ass1error.html',
        tags: ['html', 'js']
    },
    {
        name:"Company Stories",
        img:'company stories.png',
        codeUrl:'https://github.com/Pavan-gr07/Story-Page',
        liveUrl:'https://pavan-gr07.github.io/Story-Page/ass2edyoudha.html',
        tags:['css']
    },
    {
        name:"Own Website",
        img:'own website.png',
        codeUrl:"https://github.com/Pavan-gr07/ownwensite",
        tags:['html'],
        liveUrl:"https://pavan-gr07.github.io/ownwensite/"
    },
    {
        name:"nuuk Website",
        img:'nuuk website.png',
        codeUrl:"https://github.com/Pavan-gr07/Nuuk_Webapp-HTML_CSS-Final-Project-",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Nuuk_Webapp-HTML_CSS-Final-Project-//"
    },
    {
        name:"Theme-Change",
        img:'theme-changer.png',
        codeUrl:"https://github.com/Pavan-gr07/Theme-Changer",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Theme-Changer/"
    },
    {
        name:"TO-DO APP",
        img:'todo.png',
        codeUrl:"https://github.com/Pavan-gr07/My-To-Do-List.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/My-To-Do-List/"
    },
    {
        name:"Switch Dark to Light-Theme",
        img:'switchDTL.png',
        codeUrl:"https://github.com/Pavan-gr07/Switch-Dark-Theme-to-Light-Theme",
        tags:['css','js'],
        liveUrl:" https://pavan-gr07.github.io/Switch-Dark-Theme-to-Light-Theme/"
    },
    {
        name:"Table Genertor",
        img:'tablegenerator.png',
        codeUrl:"https://github.com/Pavan-gr07/TableCalculator.git",
        tags:['css','js'],
        liveUrl:" https://pavan-gr07.github.io/TableCalculator/"
    },
    {
        name:"Color Genertor",
        img:'colorgenerator.png',
        codeUrl:"https://github.com/Pavan-gr07/Color-Generator.git",
        tags:['css','js'],
        liveUrl:" https://pavan-gr07.github.io/Color-Generator/"
    },
    {
        name:"Digital-Clock",
        img:'timecounter.png',
        codeUrl:"https://github.com/Pavan-gr07/Digital-Clock.git",
        tags:['css','js'],
        liveUrl:" https://pavan-gr07.github.io/Digital-Clock/"
    },
    {
        name:"Dynamic HTML-Grid",
        img:'dynamic.png',
        codeUrl:"https://github.com/Pavan-gr07/dynamic-HTML.git",
        tags:['css','js'],
        liveUrl:" https://pavan-gr07.github.io/dynamic-HTML/shop.html"
    },
    {
        name:"Java Script Events",
        img:'javascriptevents.png',
        codeUrl:"https://github.com/Pavan-gr07/JavaScript-Events.git",
        tags:['css','js'],
        liveUrl:" https://pavan-gr07.github.io/JavaScript-Events/"
    },
    {
        name:"Drum Kit",
        img:'drumkit.png',
        codeUrl:"https://github.com/Pavan-gr07/Drum-Kit.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Drum-Kit/drumkit.html"
    },
    {
        name:"Analog Clock",
        img:'analog.png',
        codeUrl:"https://github.com/Pavan-gr07/Analog-Clock.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Analog-Clock/"
    },
    {
        name:"Dynamic Quiz-App",
        img:'quizapp.png',
        codeUrl:"https://github.com/Pavan-gr07/Quiz-App.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Quiz-App/"
    },
    {
        name:"Playing with CSS variables using JS",
        img:'cssimage.png',
        codeUrl:"https://github.com/Pavan-gr07/Playing-with-CSS-variables-using-JS.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Playing-with-CSS-variables-using-JS/"
    },
    {
        name:"Flex Panel Image Gallery",
        img:'flex.png',
        codeUrl:"https://github.com/Pavan-gr07/Flex-Panel-Image-Gallery.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/Flex-Panel-Image-Gallery/"
    },
    {
        name:"E-commerce Website",
        img:'ecommerce.png',
        codeUrl:"https://github.com/Pavan-gr07/ShopPlane-Website.git",
        tags:['css','js'],
        liveUrl:"https://pavan-gr07.github.io/ShopPlane-Website/"
    },
];



   
let output = '';

for(let i=0;i< projects.length;i++)
{
    output += `<div class="project">
    <img src="images/${projects[i].img}"  alt="Food website">
    <div class="content flex">
      <p>"${projects[i].name}"</p>
      <p class="flex">
          <a href="${projects[i].codeUrl}" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="${projects[i].liveUrl}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </p>
    </div>
  </div>`;
}
 

projectsE1.innerHTML = output;



//string Literal > inside we can sue variables