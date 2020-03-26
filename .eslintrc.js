module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "prettier"],
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-no-target-blank": "off", // noopener ok but noreferrer no
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
      rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
}
