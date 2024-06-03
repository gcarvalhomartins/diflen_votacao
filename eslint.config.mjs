import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      semi: ["error", "always"],  // Força o uso de ponto e vírgula
      quotes: ["error", "single"],  // Força o uso de aspas simples
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
];
