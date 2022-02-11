# Shipper Driver Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Project Information
- typescript
- eslint, husky, lint-staged
- react-semantic-ui
- react-toastify
- redux
- redux-persist

## Production site
Open [https://shipper-test-mseac.ondigitalocean.app/](https://shipper-test-mseac.ondigitalocean.app/) to view it.

## Available Scripts
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Runs the eslinter (rules: .eslintrc) and (ignore: .eslintignore)

### `npm run lint --fix`

Runs the eslinter with autofixing

### `npm run build:{env-name}`

Runs the react app build with specific file `env.[staging-state]`

----------

## Route list
- **/** => `pages/Home.tsx` (Beranda)
- **/driver-management** => `pages/DriverManagement.tsx` (list of driver)
- **/pickup** => `pages/pickup.tsx` (list of pickup)
- **/** => `pages/NotFound.tsx` (For redirect route that not been listed in App)

## Project folder structure
### `__test__`
contains unit test file and snapshot test (not all finished)
### `components`
contains list of reusable components pagination, card, header, sidebar and navbar
### `constants`
contain many variables that being used as a constant data
### `redux`
contain a reducer, a action and store config for state management
### `services`
contains index.ts (Generic Function for API Call) and others redux-thunk actions
### `styles`
contains list of scss modules for each component
### `type`
contains general type/interface/enum and also redux typing in each page
### `utils`
contains a small util function to do a low level abstractions of function
______
### Important Notes
- App.scss => `for all the whole styles`
- _mixin.scss => `for handling breakpoint screen`
- _variable.scss => `for handling color and screen breakpoint variable`

## Important Logic
1. if redux-persist is empty (specific whitelist reducer) will do Fetching API call
2. each routes is using lazy load
3. if user in desktop site, every click on prevBtn or nextBtn will trigger `transform: TranslateX()`
4. if user in mobile site, `previewDriver` will be cut in each `MAX_DRIVER_PER_PAGE`
5. `cari driver input` will be wait `1000ms` after user is stop typing and will do filter in `previewDriver`
    then will replace `previewDriver`, if `cari driver input` is empty string `previewDriver` will be replace with
    `data`
