import Esbuild from 'rollup-plugin-esbuild';

export default {
    esbuild: {
        loader: 'jsx', // This sets the default loader to jsx for all files
        jsxFactory: 'UIFramework.createElement',
        jsxFragment: 'UIFramework.Fragment'
    },
    plugins: [
        Esbuild({
            include: /\.jsx?$/, // This will match both .js and .jsx files
            loader: 'jsx',
            jsxFactory: 'UIFramework.createElement',
            jsxFragment: 'UIFramework.Fragment'
        })
    ]
}