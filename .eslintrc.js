module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
		semi: 2,
		eqeqeq: [1, 'always'],
		quotes: [1, 'single'],
		'eol-last': [2, 'always'],
		camelcase: 'off',
		'max-len': ['error', { code: 160, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true, ignorePattern: '(\\.|[^"])' }],
		'no-caller': 2,
		'no-multiple-empty-lines': 2,
		'no-constructor-return': 2,
		'no-eval': 2,
		'no-shadow': 'off',
		'no-trailing-spaces': ['error', { ignoreComments: true }],
		'no-unused-expressions': 2,
		'jsx-quotes': [2, 'prefer-double'],
		radix: 2,
		'default-case': 2,
		'comma-dangle': 0,
		'no-var': 2,
		'no-empty': 0,
		curly: 2,
		'array-bracket-newline': ['error', { multiline: true }],
		'object-curly-spacing': ['error', 'always'],
		'no-multi-spaces': ['error'],
		'no-empty-function': 2,
		'react/jsx-boolean-value': ['error', 'never'],
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-wrap-multilines': 2,
		'react/no-array-index-key': 2,
		'react/no-string-refs': ['error', { noTemplateLiterals: true }],
		'react/require-render-return': 1,
		'react/prop-types': 0,
		'react/no-is-mounted': 2,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'@typescript-eslint/no-non-null-assertion': 1,
		'@typescript-eslint/array-type': [2, { default: 'array' }],
		'@typescript-eslint/no-shadow': ['warn'],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': ['error'],
				'@typescript-eslint/no-explicit-any': 2, 
				'@typescript-eslint/no-var-requires': 1, 
				'@typescript-eslint/ban-types': [
					'error',
					{
						extendDefaults: true,
						types: {
							'{}': false,
						},
					},
				],
			},
		},
	],
  plugins: ['@typescript-eslint', 'compat', 'react', 'react-hooks'],
  settings: {
    polyfills: ['fetch'],
    react: {
      pragma: 'React',
      version: 'detect'
    }
  } 
};
