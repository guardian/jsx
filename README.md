# JSX server-only

JSX factory and typings for server-side only projects.

## Motivation

JSX is a really nice way to do templating that is familiar to a lot of
people, but React JSX brings with it a lot of things that may not be
relevant if you are entirely server-side - for example, keys and refs,
and component types. We want to keep JSX but not the React-specific
parts.

## How to use

Specify the `jsx` Typescript compiler flag as 'jsx', either from the CLI
or better in your `tsconfig.json` file. Then things should work!

## JSX and Typescript

https://www.typescriptlang.org/docs/handbook/jsx.html is a useful
resource here.

JSX elements that begin with a lowercase are called 'intrinsic' elements
and are resolved by the JSX function registered under the `jsx` TS
compiler option. ELements beginning with an uppercase are called
'value-based' elements or 'components'.

Our JSX implementation only needs to care about intrinsic elements.
Value-based elements are resolved to regular TS function calls or
methods.