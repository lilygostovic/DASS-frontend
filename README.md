# Setup

## Dependencies

The following dependencies must be installed on your computer to be able to run the app locally. You can install these using npm.
- TypeScript
- Node.js

## Cloning the Repo
Next, you must clone the repo locally. This can be done with the following steps:
1. Open a new terminal
2. Navigate to the folder where you want to keep the code
3. Click on green button with text `<>Code` and copy the HTTPS url to your clipboard
4. Run `git clone <REPOSITORY_ADDRESS>` in terminal
5. Run `npm install` to install all dependent libraries locally
Once this is done, you now have access to the code locally so you can begin development!

## Starting the App
1. Navigate to your local folder of the code in the terminal
2. Run `npm run start`. This will open the app on localhost:3000 in your default web browser.


# Development Lifecycle
Below are the complete instructions for the steps that should be taken with each new task.
1. Create a new branch `git checkout -b "new-branch"`. Try to use meaningful names for branches to make reviewing easier
2. Publish branch by clicking blue "Publish Branch" button in the Source Control tab of VScode
3. Make changes to code
4. Stage changes by clicking `+` icon beside the file in the Source Control tab of VScode
5. Type a commit message that describes the changes you are commiting
6. Press blue Commit button
7. Push changes to remote using the same blue button you used to commit
8. Repeat steps 3-7 until you have made all the changes you want to make on that branch
9. Fix linting errors if there are any
10. In GitHub, create a Pull Request for your branch and request people to review it
11. Create the pull request and wait for reviews!

Once your pull request has been approved and merged, use the command `git checkout master` to return to the master branch and start the next task.


# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
