module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#181818",
                secondary: "#202020",
                tertiary: "#ff0000",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
