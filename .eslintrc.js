module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    // overrides: [
    //   {
    //     env: {
    //       node: true,
    //     },
    //     files: [
    //       '.eslintrc.{js,cjs}',
    //     ],
    //     parserOptions: {
    //       sourceType: 'script',
    //     },
    //   },
    // ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeauteres: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'i18next',
    ],
    rules: {
    // 'react/jsx-indent': [2, { indentMode: 4, ignoreTernaryOperator: true }],
    // 0 - 2, 0 -правило отключено, 1 - варнинг, 2 - правило работает
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'max-len': [0, 120, 2, { ignoreUrls: true, ignoreComments: true }],
        // react/jsx-filename-extension - указываем в каких файлах разрешен jsx
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'linebreak-style': [0, 'unix'],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
    },
    globals: {
        __PLATFORM__: true,
        __ENV__: true,
        __IS_DEV__: true,

    },

    overrides: [ // это свойство позволяет для определенного типа файлов переопределить какие либо правила
        {
            files: ['**/src/**/*.test.{ts,tsx}'], // для всех тестовых файлов отключаем проверку переводов
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
