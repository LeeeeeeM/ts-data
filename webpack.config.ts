declare var __dirname: any;

export default {
    entry: './built/src/test.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/test'
    }
}