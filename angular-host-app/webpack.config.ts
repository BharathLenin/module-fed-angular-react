import {Configuration, container} from 'webpack';

export const webpackConfig: Configuration = {
    plugins: [
        new container.ModuleFederationPlugin({
          name: 'home',
          library: {type: 'var', name: 'home'},
          filename: 'remoteHome.js',
          exposes: {
            HomeComponent: 'src/app/pages/home/home.component.ts'
          }
        ],
    }

    export default webpackConfig;
