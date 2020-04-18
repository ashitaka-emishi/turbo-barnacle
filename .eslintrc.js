// MIT License
// https://github.com/ashitaka-emishi/turbo-barnacle/blob/master/LICENSE
//
// Copyright (c) 2020 Emishi Ashitaka

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "ignorePatterns": ["cypress/"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["error", "double"]
    }
};
