module.exports = {
    name: "WinIT Consulting",
    email: "info@winit-consulting.com",
    phoneForTel: "317-123-4567",
    phoneFormatted: "(317) 123-4567",
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
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
