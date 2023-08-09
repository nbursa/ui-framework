import Esbuild from 'rollup-plugin-esbuild';

export default {
    esbuild: {
        loader: 'jsx',
        jsxFactory: 'UIFramework.createElement',
        jsxFragment: 'UIFramework.Fragment'
    },
    plugins: [
        Esbuild({
            include: /\.jsx?$/,
            loader: 'jsx',
            jsxFactory: 'UIFramework.createElement',
            jsxFragment: 'UIFramework.Fragment'
        })
    ]
}