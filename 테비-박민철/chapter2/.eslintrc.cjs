module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },

  plugins: ["react-refresh"],
  root: true,
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
};
