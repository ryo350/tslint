module.exports = {
	parser:  'vue-eslint-parser',
	parserOptions: {
		'parser': '@typescript-eslint/parser',
	},
	extends:  [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				'singleQuote': true,
				'trailingComma': 'all'
			}
		],
		'interface-name': false,
		'ordered-imports': false,
		'object-literal-sort-keys': false,
		'no-consecutive-blank-lines': false,
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		"@typescript-eslint/no-unused-vars": 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
	}
}
