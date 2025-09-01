module.exports = {
    name: "WinIT Consulting",
    email: "contact-us@winit-consulting.com",
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
    members: {
        brian: {
            name: "Brian Winnie",
            role: "Client Experience Director & President",
            photo: "/assets/images/brian.png",
            bio: "With more than 25 years of customer service expertise, Brian leads the client relations side of WinIT Consulting. He is dedicated to ensuring every client receives the highest level of care and support, fostering long-term partnerships built on trust. Brian’s commitment to openness and honesty is at the core of how we serve our clients.",
            contact: {
                email: "bwinnie@winit-consulting.com",
                linkedin: "https://www.linkedin.com/in/brianwinnie/",
                phone: "123-456-7890"
            }
        },
        jacob: {
            name: "Jacob Watson",
            role: "Head of Engineering & CTO",
            photo: "/assets/images/jacob.png",
            bio: "Jacob specializes in cloud infrastructure and network architecture. With expertise in Microsoft 365, Google Workspace, and AWS, he ensures our clients' systems are scalable, secure, and optimized for performance.",
            contact: {
                email: "jwatson@winit-consulting.com",
                linkedin: "https://www.linkedin.com/in/jacobwatson/",
                phone: "123-456-7890"
            }
        }
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://winit-consulting.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
