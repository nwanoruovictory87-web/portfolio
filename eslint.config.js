import tailwindcss from "eslint-plugin-tailwindcss";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // Add this new configuration block for Tailwind v4
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/migration-from-tailwind-v3": "off", // Turned off since you are starting directly with v4
    },
    settings: {
      tailwindcss: {
        // Point this directly to your Tailwind v4 CSS entry file
        config: "./src/index.css",
      },
    },
  },
]);
