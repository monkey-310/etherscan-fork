import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        'full': "100%"
      },
      colors: {
        light: {
          borderColor: "#e9ecef",
          secondaryColor: "#6c757d",
          bgColor: "#fff"
        },
        dark: {
          borderColor: "#222",
          secondaryColor: "#bbb",
          bgColor: "#0b1120"
        },
        dim: {
          borderColor: "#273343",
          secondaryColor: "#93a3b8",
          bgColor: "#111a2e"
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('flowbite/plugin'),
    ],
  }
}
export default config;
