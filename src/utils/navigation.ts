// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Livros", url: "/products" },
  //{ name: "Services", url: "/services" },
  //{ name: "Blog", url: "/blog" },
  { name: "Contato", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Leia",
    links: [
      { name: "Amazon", url: "/welcome-to-docs/" },
      { name: "Saraiva", url: "/products" },
      { name: "Jambô", url: "/products" },
    ],
  },
  {
    section: "Menu",
    links: [
      { name: "Home", url: "#" },
      { name: "Livros", url: "/blog" },
      { name: "Contato", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/waldir.l.santos.7",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};