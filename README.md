eslint-config
=============

eslint config for [DAY1 COMPANY Inc.](https://day1company.co.kr)

![version](https://img.shields.io/github/package-json/v/day1co/eslint-config)

## Getting Started

### install dependencies

```console
$ npm install --save-dev @day1co/eslint-config eslint
```

### prepare eslint config

create/modify `.eslintrc.js` or else ...:

```js
module.exports = {
  extends: "@day1co/eslint-config",
};
```

or replace `<PRESET>` into your choice:

- common
- common-ts
- vue-js
- react-ts

```js
module.exports = {
  extends: "@day1co/eslint-config/<PRESET>",
};
```

### run eslint

```console
$ npx eslint
```

## Contribution

see https://eslint.org/docs/developer-guide/shareable-configs

## Referfences

* TBW: [DAY1 JavaScript Coding Guideline](https://day1co.github.io/guidelines/javascript.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

---
may the **SOURCE** be with you...
