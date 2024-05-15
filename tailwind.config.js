/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                red_error: "#F84141",
                green_v: "#469F78",
                yallow_v: "#F6BC63",
                perpol_v: "#9DA0E3",
                Rose_v: "#EFCFF9",
                blue_v: "#D3E1FD",
                black_text: "#1E1E1E",
                gray_v: "#454545",
                gray_white_v: "#e6e6e6",
                image_animation_v: "#b6b2b22e",
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
