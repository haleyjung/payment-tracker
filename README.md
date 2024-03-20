# Payment Tracker

![codingChallengeTable](https://user-images.githubusercontent.com/73789849/177018913-2294cce3-b549-4dd3-829c-51c9c56b6a69.png)

For this project, I created a table to track clients' debt payment status with **JSON data** fetched from a private API. I used **prop-types** library to ensure the values passed to a component have the correct datatype.

I added **unit tests** using Jest and React Testing Library and achieved 100% code coverage. I wrote the tests parallel to the production code, which helped me to foresee and question the expected behavior of the code with less time spent on debugging and refactoring codes.

I have also set up **Continuous Integration** with Jest and GitHub Actions to automate unit tests when the code is pushed to the main branch or a pull request is created from any branch to main.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Test Coverage
<img src="./public/badges/badge-lines.svg" alt="badge-lines"> <img src="./public/badges/badge-branches.svg" alt="badge-branches"> <img src="./public/badges/badge-functions.svg" alt="badge-functions"> <img src="./public/badges/badge-statements.svg" alt="badge-statements">


## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=for-the-badge)
![React Testing Library](https://img.shields.io/badge/-React_Testing_Library-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner for the unit tests in the interactive watch mode with coverage summary.

### `npm run test:coverage && test:badges`

Generates Jest coverage badges inside coverage folder by reading from Istanbul's JSON summary reporter.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
