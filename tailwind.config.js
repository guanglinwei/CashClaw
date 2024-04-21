/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                kanit: ["Kanit", "sans-serif"],
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                slidein: 'slidein 1s ease 300ms',
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                slidein: {
                    from: {
                      opacity: "0",
                      transform: "translateY(-10px)",
                    },
                    to: {
                      opacity: "1",
                      transform: "translateY(0)",
                    },
                },
            },
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '8': '8px',
        },
    },
    plugins: [],
}

