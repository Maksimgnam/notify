import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '82%': '82%',
        'column': '260px',
        'table-block': '17%',
        '1px': '1px',
        "menu":"19%",
        "table-menu":"16%",
        "table-columns":"80%",
        "table-bar": "4%",
        "jars-container":"96%",
        "jars-tool-bar":"4%",
        "play-sticker":"480px"
      
      },

      height: {
        'card': '68px',
        '3px': '2px',
        '1px': '1px',
        'menu-tasks':"87%",
        "play-sticker":"480px"

      },
      boxShadow: {
        'table': '0 0 5px #ccc',
        'block': '0 0 5px #ccc',
        'remind': '0 0 4px #ccc',
        'done-remind': '0 0 2px #ccc'
      },
      minWidth: {
        'table-header-block': '11%'
      },
      backgroundColor:{
        'black-shadow':"rgba(0, 0 , 0, 0.7)"
      }
    },
  },
  plugins: [],
};
export default config;
