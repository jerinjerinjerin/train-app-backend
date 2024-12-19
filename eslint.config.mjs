import globals from "globals";
import pluginJs from "@eslint/js";
import pluginTypeScript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Ignore dist directory or any other build output folder
    ignores: ["dist/"],
  },
  {
    // Specify files to be linted, including .js, .ts files
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: globals.browser, // Browser global variables like window, document, etc.
    },
    parser: parser, // Use TypeScript parser
  },
  pluginJs.configs.recommended, // Apply recommended JS rules
  pluginTypeScript.configs.recommended, // Apply recommended TypeScript rules
  {
    rules: {
      // Custom rules can go here, e.g. turn off specific rules
      "@typescript-eslint/no-unused-vars": "warn", // Example rule for unused vars in TypeScript
      "no-console": "warn", // Example rule for logging
    },
  },
];
