module.exports = {
  "extends": "airbnb",
  "plugins": [
    'react',
    'disable-features',
    'babel',
  ],
  "env": {
    "jest": true
  },
  "globals": {
    "window": true,
    "document": true,
    "fetch": true,
    "navigator": true,
    "Blob": true,
    "URL": true,
    "FormData": true,
    "URLSearchParams": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "curly": "off",
    "func-names": "off",
    "max-len": ["error", 120],
    "no-await-in-loop": "off",
    "no-case-declarations": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-proto": "off",
    "no-underscore-dangle": "off",
    
    "no-unused-vars": ["error", { "args": "none" }],
    "no-shadow": "off",
    "strict": "off",
    "valid-typeof": "off",
    "linebreak-style": "off",

    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "react/no-multi-comp": "off",
    "react/jsx-filename-extension": "off",
    "disable-features/disable-async-await":2,
    "import/no-extraneous-dependencies": 0,
  },
};
