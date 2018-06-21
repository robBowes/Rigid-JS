module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "google"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "curly": ["error", "multi-or-nest"],
    }
};