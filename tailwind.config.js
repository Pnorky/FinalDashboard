/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-100": "#fff",
        gray: {
          "100": "#fffdfd",
          "200": "#1f2937",
          "300": "#111827",
        },
        darkslategray: {
          "100": "#454a59",
          "200": "#374151",
        },
        mediumspringgreen: "#4ade80",
        snow: "#fffbfb",
        lavenderblush: "#f7f0f3",
        "black-80": "rgba(28, 28, 28, 0.8)",
        "secondary-green": "#a1e3cb",
        tomato: "#ff6a3b",
        "secondary-cyan": "#a8c5da",
        royalblue: "#2563eb",
        goldenrod: "#f2c552",
        "primary-brand": "#1c1c1c",
        chartreuse: "#61ff00",
        "secondary-mint": "#baedbd",
        red: {
          "100": "#ed2121",
          "200": "#ff0000",
        },
        "secondary-indigo": "#95a4fc",
        "black-801": "rgba(0, 0, 0, 0.8)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "black-20": "rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        boundvariablesdata1: "12px",
        boundvariablesdata4: "8px",
        boundvariablesdata5: "4px",
        boundvariablesdata6: "16px",
        boundvariablesdata7: "16px",
        boundvariablesdata8: "28px",
        boundvariablesdata9: "28px",
        boundvariablesdata11: "4px",
        boundvariablesdata13: "8px",
        boundvariablesdata15: "24px",
        boundvariablesdata17: "12px",
        boundvariablesdata18: "16px",
      },
      fontFamily: {
        roboto: "Roboto",
        inherit: "inherit",
        headline: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "81xl": "100px",
        "corner-small": "8px",
        boundvariablesdata: "16px",
        boundvariablesdata2: "8px",
        boundvariablesdata10: "8px",
        boundvariablesdata12: "16px",
        boundvariablesdata16: "12px",
        "radius-8": "8px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      lg: "18px",
      "2xs": "11px",
      xs: "12px",
      xl: "20px",
      "4xs": "9px",
      "3xs-7": "9.7px",
      smi: "13px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
