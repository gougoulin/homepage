// run all functions
showSkill();
showHiddenTags();
toggleHeaderNav();

function toggleHeaderNav() {
  const navbar = document.querySelector(".sidebar--nav");
  const navbarToggler = document.querySelector(".sidebar--toggle");

  navbarToggler.addEventListener("click", () => {
    const computedDisplay = getComputedStyle(navbar).getPropertyValue(
      "display"
    );
    const bars = document.querySelectorAll(".sidebar--toggle .bar");
    bars[0].classList.toggle("bar-down-to-center");
    bars[2].classList.toggle("bar-up-to-center");
    console.log("current computed display:", computedDisplay);
    if (computedDisplay === "none") {
      navbar.classList.toggle("opacity--0");
      navbar.classList.remove("hide");
      navbar.classList.toggle("display--flex");
      setTimeout(() => {
        navbar.classList.toggle("opacity--0");
        navbar.classList.toggle("opacity--1");
      }, 10);
      console.log(navbar.classlist);
    } else {
      console.log(navbar.classList);
      navbar.classList.remove("opacity--1");
      navbar.classList.add("opacity--0");
      navbar.classList.remove("display--flex");
      // console.log(navbar.classList);
      navbar.addEventListener("transitionend", () => {
        navbar.classList.toggle("hide");
      });
      console.log(navbar.classList);
    }
    console.log(navbar.style.display);
  });
}

// showSkill()
// when a div.skill is clicked,
// create a paragraph of related description in span.skill--words
function showSkill() {
  const skillText = document.querySelector(".skills--words");
  const skills = document.querySelectorAll("#skills .skill");
  skills.forEach(item => {
    item.addEventListener("click", ev => {
      const target = ev.currentTarget;
      const text = returnText(target.dataset.skill);
      skillText.innerHTML = text;
    });
  });
}
// return related text for function showSkill
function returnText(text) {
  const texts = {
    html:
      "I use semantic <strong>HTML5</strong> to covert your designs to websites and/or <strong>Accessible Rich Internet Applications (aria)</strong> , ensuring the <strong>accessiblity</strong> (A11Y) meeting the requirements of the <strong>WCAG 2.1</strong> (Web Content Accessiblity Guideline).<br><br>Keywords: semantic, accessiblity, A11Y, WCGC",
    css:
      "I use the lastest version of <strong>CSS3 (Level 3)</strong> in addition to CSS 2.1 to style the html elements and create <strong>responsive</strong>, <strong>cross-platforms</strong> (mobile, pad, desktop) websites/applications.<br><br>Keywords: css3, flexbox, css grid, animation, transition, transform",
    javascript:
      "I use JavaScript (ES6) and JavaScript libraries (React and JQuery) to create applications for web.<br><br>Keywords: ES6, functions, objects, arrow functions, classes, modules, destructure, generators, promises, asyc/await",
    react:
      "I use <strong>React</strong> to build components and create single-page applications (SAPs). I also use packages like <strong>React-redux, redux-thunk, React-router, and create-react-app</strong>.",
    wordpress:
      "I can help to create your blog or website using <strong>WordPress</strong> with the themes and plugins, and assit/teach you to publish your content with the WordPress <strong>CMS</strong> (content management system). I can also develop customised WordPress theme, if required.",
    bootstrap:
      "<strong>Bootstrap</strong> is my favoritate CSS framework. I can help you to create a website/application using Bootstrap 4, which will greatly accelarate the developement process and guarantee the consistent appearance for UI/UX.",
    sass:
      "I use <strong>Sass</strong> to create and maintain css files for large projects, when they become larger, complexer, and harder to maintain. The features of variables, nesting, mixins, modules, and extend/inheritance in Sass make it easier to manage large css files.",
    php:
      "I can create simple server-side applications with PHP to make dynamic websites.",
    mysql:
      "I use <strong>MySQL</strong> to connect applications with server-side database, and fullfill basic <strong>CRUD</strong> (create, read, update, delete) and more complex operations.",
    jquery:
      "I can help to create and/or maintain projects with the lastest version of JQuery library.",
    photoshop:
      "I do a little design using photoshop. I use it to make wireframes and mood boards for customers. I also use it to edit images and photos to achieve better quality and performance for web.",
    illustrator: "I use Illustrator to make icons and logos for web.",
    git: "I use <strong>Git</strong> for version control in all projects.",
    npm:
      "I use <strong>NPM</strong> to manage all the packages when developing applications.",
    figma:
      "I love to use <strong>Figma</strong> to create wireframes, mood boards, prototypes, raster icons, logos.",
    nodejs:
      "I use node.js to create and run front-end applications. I am learning to use it for server-side programming."
  };
  switch (text) {
    case "html":
      return texts.html;
    case "css":
      return texts.css;
    case "javascript":
      return texts.javascript;
    case "react":
      return texts.react;
    case "wordpress":
      return texts.wordpress;
    case "bootstrap":
      return texts.bootstrap;
    case "sass":
      return texts.sass;
    case "php":
      return texts.php;
    case "npm":
      return texts.npm;
    case "git":
      return texts.git;
    case "node":
      return texts.nodejs;
    case "photoshop":
      return texts.photoshop;
    case "illustrator":
      return texts.illustrator;
    case "figma":
      return texts.figma;
    case "mysql":
      return texts.mysql;
    case "jquery":
      return texts.jquery;
    default:
      return "This is new. I'm currently learning it.";
  }
}

// show hidden tags when filter button being clicked
function showHiddenTags() {
  const tags = document.querySelectorAll(".skills--tag");
  const filter = document.querySelector("#skill--filter");
  filter.addEventListener("click", () => {
    tags.forEach(item => {
      // console.log(item);
      if (item !== filter) {
        if (item.classList.contains("hide")) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      }
    });
  });
}
