# Contributing

Thank you for considering contributing to `natural-orderby`. Below you´ll find useful information for contributing including how to setup the library, how to work with it in development and how to commit.

Please note that this project is released with a Contributor [Code of Conduct](./CODE_OF_CONDUCT.md).

## Development

### Setup

```bash
# npm
npm install

# yarn
yarn install
```

### Testing

You will find tests for files in separate `__tests__` directories. Whenever making any changes, please ensure that all existing tests pass by running `yarn test`.

If you are adding a new feature or extra functionality, please also add appropriate tests.

> Note: Some tests require the timezone to be set to `UTC` which is done by setting the `TZ` environment variable accordingly when running `yarn test`. But unfortunately this won´t work on Windows. To pass all tests you´d have to set your timezone manually. 🙄

### Linting and Formatting

Before committing any changes, please run `yarn lint` and `yarn flow` to lint all relevant files using [ESLint](https://eslint.org/) and [Flow](https://flow.org/) and receive output on any changes that you need to make.

There is also a pre-commit hook in place to lint all staged files and to format files using [prettier](https://prettier.io/). If any of the staged files do not conform to the eslint or flow rules, your commit will fail until you resolve all listed issues.

### Committing

`natural-orderby` follows [this convention](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md) for commit messages and uses [commitlint](https://github.com/marionebl/commitlint) to adhere to it.
