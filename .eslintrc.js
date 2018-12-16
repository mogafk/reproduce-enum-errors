module.exports = {
    env: {
        'node': true
    },

    // extends: 'eslint:recommended',
    extends: [
        'eslint:recommended',
        // 'plugin:vue/recommended'
    ],

    parser: 'typescript-eslint-parser',
	parserOptions: {
        // parser: 'typescript-eslint-parser',
        sourceType: 'module',
        ecmaVersion: 6,
	},
    plugins: [
        // 'vue',
        'typescript'
    ],
    rules: {
        "no-unused-vars": "error",
        'typescript/no-unused-vars': "error",
        'no-console': 0,
        'indent': [
            'error',
            'tab'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        // 'quotes': [
        //     'error',
        //     'double'
        // ],
        'semi': [
            'error',
            'always'
        ]
    }
};