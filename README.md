# ACIH frontend

Frontend application for [Artist Centered Image Hosting](https://github.com/fenya123/bingin).


## Table of contents

[System requirements](#system-requirements)

[First time setup](#first-time-setup)

[Run app](#run-app)


## [System requirements](#table-of-contents)

To develop this project you need to have the following software installed.

- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)


## [First time setup](#table-of-contents)

_Before going through this section you have to meet [System requirements](#system-requirements)._

Commands below will help you to set up this project for development.

Go to the project root directory.

1. Set up your git for this repository.
```bash
# change values below to your name and email
git config user.name "John Doe"
git config user.email "john.doe@mail.com"
```

2. Install NodeJS and project dependencies.
```bash
# install NodeJS version required by `.nvmrc`
nvm install

# switch to NodeJS version required by `.nvmrc`
nvm use

# install dependencies
npm clean-install
```


## [Run app](#table-of-contents)

_Before going through this section you have to complete all steps from [First time setup](#first-time-setup)._

1. Run development server.
```bash
# switch to NodeJS version required by `.nvmrc`
nvm use

# run development server
npm run start
```

2. Open app in browser.

   http://localhost:4200/
