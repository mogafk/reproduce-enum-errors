const { Linter } = require("eslint");
const rule = require("eslint-plugin-typescript/lib/rules/no-unused-vars");
const fixedRule = require("./fixed_no-unused-vars");

const linter = new Linter();
linter.defineRule("typescript/no-unused-vars", rule);
linter.defineRule("fixed/no-unused-vars", fixedRule);
// require("debug").enable("eslint:*,-eslint:code-path,no-unused-vars");

function runTest(config) {
	const codes = [
		`
export enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
	`,
		`
enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
interface IFoo {
	fieldName: FormFieldIds,
}
	`,
		`
enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
interface IFoo {
	fieldName: FormFieldIds.EMAIL,
}
	`,
	]
	;

	const reports = [];
	for (let i = 0; i < codes.length; i++) {
		const code = codes[i];
		const messages = linter.verify(codes[0], config)
			.map(report => report.message);

		reports.push({code, messages});
	}

	// put errors to console
	const divider = '='.repeat(10);
	if (reports.length) {
		reports.forEach(({code, messages}) => {
			console.log('code:', code);
			if (messages.length) {
				console.log('throw errors: \n', messages.join('\n'));
			} else {
				console.log('success passed');
			}
			console.log(divider);
		});
	}

}

console.log('ORIGINAL:');
runTest({
	parser: "typescript-eslint-parser",
	rules: {
		'no-unused-vars': 'warn',
		'typescript/no-unused-vars': 'warn',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
	},

	plugins: [
		'typescript'
	],
});

console.log('\n\n\nFIXED:');
runTest({
	parser: "typescript-eslint-parser",
	rules: {
		'no-unused-vars': 'warn',
		'fixed/no-unused-vars': 'warn',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
	},
});