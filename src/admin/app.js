

const config = {
  
  auth: {
    logo:"/onatural_2d6d3307ca.png",
  },
  // Replace the favicon
  head: {
    title: "Your Custom Title",
    favicon: "/onatural_2d6d3307ca.png",
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo:"/onatural_2d6d3307ca.png",
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Store Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Store",

      "Auth.form.welcome.title": "Welcom to O'Natural",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
      
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
