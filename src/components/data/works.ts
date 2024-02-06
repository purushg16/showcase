import budgetFareImages from "../../assets/images/budgetfare/budgetFareImages";
import urjaImages from "../../assets/images/urja/urjaImages";

export default {
  results: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
    data: [
      {
        id: "1",
        date: "March, 2023",
        title: "Urja",
        slug: "urja",
        breif: "Urja is an E-Commerce web application that runs on MERN Stack.",
        description:
          "Urja is an E-Commerce web application that runs on MERN Stack. Admin Panel, Online Payment, Cart and more have been incorporated in Urja. ",
        note: "Urja took 3 months to submit to the client, the source is available in my github page.",

        tags: ["MERN", "Javascript", "Github"],
        platform: ["Netlify", "render"],

        url: "https://urja-thedyingstudio.netlify.app/",
        logo: "https://urja-thedyingstudio.netlify.app/static/media/logo.b7237d76420d18270deb.png",
        git: "https://github.com/purushg16/boutique",

        screenshots: urjaImages,
        screenshostDesc: [
          "Landing Page",
          "Top products browsing in homepage.",
          "Seperate Products List page",
          "Cart Page",
          "Checkout Page",
          "Footer",
        ],
        designSystem: {
          typography: ["Josefin Sans", "Tilt Neon", "Schibsted Grotesk"],
          color: ["7D875F", "ECF4DA", "93958D", "ffffff"],
        },
      },

      {
        id: "2",
        date: "July, 2022",
        title: "BudgetFare",
        slug: "budgetfare",
        breif: "BudgetFare is an frontend web application created using React.",
        description:
          "BudgetFare is an frontend web application created using React. It is a flight deals revealing application, but my part was to create the frontend.",
        note: "BudgetFare took a month to complete, the full project is available in github also.",
        tags: ["React", "Javascript", "Github"],
        platform: ["Netlify", "render"],

        url: "https://budgetfare.netlify.app/",
        logo: "data:image/png;base64,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",
        git: "https://github.com/purushg16/budgetfare",

        screenshots: budgetFareImages,
        screenshostDesc: [
          "Landing Page",
          "Top deals browsing with slider and search input.",
          "Walkthrough Revealing section",
          "Register Section",
          "Review (or) Testimonals Section",
          "Pricing Section",
          "Founder's Note Section",
          "FAQs",
          "Footer",
        ],
        designSystem: {
          typography: ["MackinacMed", "Poppins"],
          color: ["D2F5E0", "417570", "F8F6F3", "54B84C"],
        },
      },
    ],
  },
};
