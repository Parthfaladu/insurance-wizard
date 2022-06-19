# Insurance Policy Buy App

The project focuses on creating a buy insurance policy using multi-step wizard so that the candidate can fill in detail and select their country and can buy a policy in their currency.

## Technical details

- Vue 3 framework
- Typescript
- Tailwind CSS
- Vuex 4
- Jest unit test

## Installation and setup

Clone the repo:

```sh
git clone https://github.com/Parthfaladu/insurance-wizard.git
```

To setup and start the project run the following commands:

```sh
cd insurance-wizard
yarn install
```

To run the project use the following command:
```sh
yarn run serve
```

To run unit tests use the following command:
```sh
yarn run test:unit
```

## Architecture details

- `views` folder contains start, form wizard and age error pages
- `components/form` folder contains all forms
- `assets` folder style file contains CSS details
- `router` folder contains all route details
- `store` folder vuex file contains the user, insurance plan list, and total premium details
- `tests/unit` folder contains all unit tests

## Application access details

- application start page will be displayed on the `/` route  
- clicking on the start button next the user information form will be display
- after filling up user details and selecting country, policy plan and based it total premium price will be displayed above the navigation buttons
- clicking on the next button summary form will be display
- if the user's age is 100 or more then it user will be redirected to an error page
- from the error page clicking on the ok button user will be redirected to the start page
- on the summary page all user details and policy details will be displayed and by clicking on the buy button user can buy a policy
- after the buy policy user will be redirected to the start page