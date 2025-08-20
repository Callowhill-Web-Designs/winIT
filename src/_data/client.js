module.exports = {
    name: "WinIT Consulting",
    email: "info@winit-consulting.com",
    phoneForTel: "463-213-9946",
    phoneFormatted: "(463) 213-9946",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Indianapolis",
        state: "IN",
        zip: "46204",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://winit-consulting.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
