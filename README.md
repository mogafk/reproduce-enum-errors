file ./fixed_no-unused-vars copied from eslint-typescript-plugin for demostrate the fix.

you can reproduce bug just `clone` & `npm i` & `node testlinter.js`

node testlinter run eslint with no-unused-vars rule from eslint and eslint-typescript-plugin

below result of execution code with linter errors:
(I think this is wrong behavior)

```
code:
export enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}

throw errors:
'PHONE' is assigned a value but never used.
'EMAIL' is assigned a value but never used.
==========
code:
enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
interface IFoo {
	fieldName: FormFieldIds,
}

throw errors:
'PHONE' is assigned a value but never used.
'EMAIL' is assigned a value but never used.
==========
code:
enum FormFieldIds {
	PHONE = 'phone',
	EMAIL = 'email',
}
interface IFoo {
	fieldName: FormFieldIds.EMAIL,
}

throw errors:
'PHONE' is assigned a value but never used.
'EMAIL' is assigned a value but never used.
```