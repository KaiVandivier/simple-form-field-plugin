## Instructions

See also the [Capture Form Field Plugin docs](https://developers.dhis2.org/docs/capture-plugins/developer/form-field-plugins/introduction)

### Install the plugin

The same way that you would with a normal web app:

1. Build the plugin: `yarn && yarn build`
2. Deploy it to an instance: `yarn deploy http://localhost:8080 --username admin --password district`

### Configure the plugin

1. Use the App Management app > App Hub tab to install the Tracker Plugin Configurator app
2. Open the Tracker Plugin Configurator app
3. In the app, add datastore keys (recommended to do as a user with the "ALL" authority)
4. In the Form Field Plugins sectino, click "Add a configuration"
5. Choose a program: I recommend the TB program on demo instances
6. Viewing the program, click "Add an element"
7. Pick the Simple Form Field Plugin from the list
8. Click the ⚠️ icon for the Simple Form Field Plugin -- here, you can map values from the form in Capture to the plugin
    1. Only fields mapped here will be available to the plugin to see or set the value for
    2. The value in the "Plugin alias" field will become the key for that attribute in the plugin

### View in the Capture app

Enter the chosen program, then add a new person/tracked entity. The plugin should be visible in the form

---

This project was bootstrapped with [DHIS2 Application Platform](https://github.com/dhis2/app-platform).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner and runs all available tests found in `/src`.<br />

See the section about [running tests](https://platform.dhis2.nu/#/scripts/test) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
A deployable `.zip` file can be found in `build/bundle`!

See the section about [building](https://platform.dhis2.nu/#/scripts/build) for more information.

### `yarn deploy`

Deploys the built app in the `build` folder to a running DHIS2 instance.<br />
This command will prompt you to enter a server URL as well as the username and password of a DHIS2 user with the App Management authority.<br/>
You must run `yarn build` before running `yarn deploy`.<br />

See the section about [deploying](https://platform.dhis2.nu/#/scripts/deploy) for more information.

## Learn More

You can learn more about the platform in the [DHIS2 Application Platform Documentation](https://platform.dhis2.nu/).

You can learn more about the runtime in the [DHIS2 Application Runtime Documentation](https://runtime.dhis2.nu/).

To learn React, check out the [React documentation](https://reactjs.org/).
