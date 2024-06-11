import "./styles.css";

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%"; //set menu height to 100%
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"; // set color
subMenuEl.classList.add("flex-around"); // add class
subMenuEl.style.position = "Absolute"; // trying to hide the subMenuEl...
subMenuEl.style.top = "0px"; //...by moving to top of page...

const topMenuLinks = topMenuEl.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target);

  //adding helper function here?
  function subMenuBuilder(sublinkArr) {
    subMenuEl.innerHTML = ""; //clear text
    if (sublinkArr) {
      // handles "about" case
      sublinkArr.forEach((subLink) => {
        const subAnchor = document.createElement("a");
        subAnchor.setAttribute("href", subLink.href);
        subAnchor.textContent = subLink.text;
        subMenuEl.appendChild(subAnchor);
      });
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0px";
    }
  }

  //load relevant sublinks
  const myLink = menuLinks.find(
    (link) => link.text === event.target.textContent,
  );

  //active element toggle
  topMenuLinks.forEach((link) => {
    if (link === event.target && myLink.subLinks) {
      if (link.classList.contains("active")) {
        link.classList.remove("active");
        subMenuBuilder(null);
      } else {
        link.classList.add("active");
        subMenuBuilder(myLink.subLinks);
      }
    } else if (link === event.target && !myLink.subLinks) {
      link.classList.toggle("active");
      subMenuBuilder(null);
    } else {
      link.classList.remove("active");
    }
  });
}

topMenuEl.addEventListener("click", handleClick);
