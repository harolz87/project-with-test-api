module.exports = {
    "parser": '@typescript-eslint/parser',
    "plugins": [
        '@typescript-eslint',
        'eslint-plugin-import',
        'react-hooks',
        'react',
    ],
    "extends": [
      'airbnb',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    "parserOptions": {
      "project": [
          './tsconfig.json'
      ],
      "tsconfigRootDir": __dirname,
      "ecmaVersion": 2021,
      "sourceType": 'module',
    },
    "rules": {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        { "selector": 'enum', "format": ['StrictPascalCase'] },
        { "selector": 'enumMember', "format": ['PascalCase'] }
      ],
      "react/jsx-filename-extension": [
          "warn",
          {"extensions": [".tsx"]},
      ],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "camelcase":  ["error", {
        "ignoreDestructuring": true,
        "ignoreGlobals": true,
      }],
      "react/require-default-props": "off",
      "no-param-reassign": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
    },
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
  }