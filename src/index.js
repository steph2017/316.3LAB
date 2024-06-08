import "./styles.css";

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main"); // selects main element from html
mainEl.style.backgroundColor = "var(--main-bg)"; // sets color to the variable color
const header = document.createElement("h1"); //creates an H1 element
mainEl.appendChild(header); //adds header under main element
header.textContent = "DOM Manipulation"; //adds text to h1 element
mainEl.classList.add("flex-ctr"); //adds class to main element

const topMenuEl = document.querySelector("nav"); //select nav element
topMenuEl.style.height = "100%"; //set menu height to 100%
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"; //set bg color
topMenuEl.classList.add("flex-around"); // add class
//not sure why the nav element looks different here than on the progress check.

menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link.href);
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);
});

const subNav = document.createElement("nav");
