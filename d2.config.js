/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
    type: 'app',
    title: 'Simple Form Field Plugin',
    description:
        'A form field plugin. It can populate fields with dummy text and log the props that are provided to form field plugins',

    entryPoints: {
        plugin: './src/App.jsx',
    },
    pluginType: 'CAPTURE',

    direction: 'auto',
}

module.exports = config
