[eslint-plugin-typescript#issue235](https://github.com/bradzacher/eslint-plugin-typescript/issues/235) 

[PR: [FIX][no-unused-vars] add EnumMember](https://github.com/bradzacher/eslint-plugin-typescript/pull/236)

file ./fixed_no-unused-vars copied from eslint-typescript-plugin for demostrate the fix.

you can reproduce bug just `clone` & `npm i` & `node testlinter.js`

`node testlinter` run eslint with no-unused-vars rule from eslint and eslint-typescript-plugin

below result of execution code with linter errors:
(I think this is wrong behavior)

1)
```JS
export enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
```
```
throw errors:
'PHONE' is assigned a value but never used.
'EMAIL' is assigned a value but never used.
```


2)
```JS
enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
interface IFoo {
	fieldName: FormFieldIds,
}
```
```
throw errors:
'PHONE' is assigned a value but never used.
'EMAIL' is assigned a value but never used.
```


3)
```JS
enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
interface IFoo {
	fieldName: FormFieldIds.EMAIL,
}
```
```
throw errors:
'PHONE' is assigned a value but never used.
'EMAIL' is assigned a value but never used.
```