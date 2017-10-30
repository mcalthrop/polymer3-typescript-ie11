# polymer3-typescript-ie11

Trying to make Polymer 3, Typescript and IE11 play nicely together. Currently working in Chrome, but no IE11.

## Installation

Install `node` and `yarn`.

## Execution

``` bash
# install packages:
yarn

# start server and open web browser:
yarn start

# just start the server:
yarn build
```

## The IE11 issue

When you run `yarn start` in Chrome, everything works fine.

However, when you open the same URL in IE11, an error appears in the JS console. This is because of an arrow function that is trying to be executed &ndash; and of course arrow functions [are not supported in IE11](http://caniuse.com/#search=arrow%20functions).

## Credits

This repo is a cut-down and modified version of [github.com/chybie/poly-mini-game](https://github.com/chybie/poly-mini-game).
