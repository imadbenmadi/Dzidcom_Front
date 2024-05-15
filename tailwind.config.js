/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                red_error: "#F84141",
                green: "#469F78",
                yallow: "#F6BC63",
                perpol: "#9DA0E3",
                black_text: "#1E1E1E",
                gray: "#454545",
                gray_white: "#e6e6e6",
                image_animation: "#b6b2b22e",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar")({
            nocompatible: true,
            preferredStrategy: "pseudoelements",
        }),
    ],
};
