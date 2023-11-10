import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "hsl(277, 91%, 56%)",
      darkNavy: "hsl(216, 25%, 25%)",
      navy: "hsl(215, 27%, 32%)",
      greyNavy: "hsl(219, 13%, 44%)",
      darkGrey: "hsl(0, 0%, 20%)",
      lightBluish: "hsl(216, 47%, 78%)",
      lightGrey: "hsl(220, 38%, 97%)",
      white: "hsl(0, 0%, 100%)",
      green: "hsl(151, 70%, 50%)",
      red: "hsl(0, 82%, 63%)",
    },
    fontSize: {
      display: [
        "9rem",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      headingLBold: [
        "4rem",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      headingLRegular: [
        "4rem",
        {
          lineHeight: "100%",
          fontWeight: "300",
        },
      ],
      headingM: [
        "1.5rem",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      headingS: [
        "1.75rem",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      headingXS: [
        "1.125rem",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      bodyM: [
        "1.5rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
      bodyS: [
        "1.25rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
