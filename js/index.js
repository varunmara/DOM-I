const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headel = document.getElementsByTagName("a");
headel[0].textContent = siteContent.nav["nav-item-1"];
headel[1].textContent = siteContent.nav["nav-item-2"];
headel[2].textContent = siteContent.nav["nav-item-3"];
headel[3].textContent = siteContent.nav["nav-item-4"];
headel[4].textContent = siteContent.nav["nav-item-5"];
headel[5].textContent = siteContent.nav["nav-item-6"];

let headerText = document.getElementsByTagName("h1");
headerText[0].textContent = siteContent.cta.h1;

let buttonText = document.querySelector(".cta-text button");
buttonText.textContent = siteContent.cta.button;

let ctaimg = document.querySelector("#cta-img");
ctaimg.src = siteContent.cta["img-src"];

let textContenth4 = document.querySelector(".text-content h4");
textContenth4.textContent = siteContent["main-content"]["features-h4"];

let textContentp = document.querySelector(".text-content p");
textContentp.textContent = siteContent["main-content"]["features-content"];

let abouth4 = document.querySelectorAll(".text-content h4");
abouth4[1].textContent = siteContent["main-content"]["about-h4"];

let aboutp = document.querySelectorAll(".text-content p");
aboutp[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

abouth4[2].textContent = siteContent["main-content"]["services-h4"];

aboutp[2].textContent = siteContent["main-content"]["services-content"];

abouth4[3].textContent = siteContent["main-content"]["product-h4"];

aboutp[3].textContent = siteContent["main-content"]["product-content"];

abouth4[4].textContent = siteContent["main-content"]["vision-h4"];

aboutp[4].textContent = siteContent["main-content"]["vision-content"];

let contactText = document.querySelector(".contact h4");
contactText.textContent = siteContent["contact"]["contact-h4"];

let contactTextp = document.querySelectorAll(".contact p");

contactTextp[0].textContent = siteContent["contact"]["address"];
contactTextp[1].textContent = siteContent["contact"]["email"];
contactTextp[2].textContent = siteContent["contact"]["phone"];

let foot = document.querySelector("footer p");
foot.textContent = siteContent.footer.copyright;

let addnav = document.querySelector(".container nav");
let navchi = document.createElement("a");
navchi.textContent = "Blog";
addnav.appendChild(navchi);
addnav.prepend(navchi);
