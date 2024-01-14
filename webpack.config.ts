// импорты перед типизацией
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //  генерирует HTML-файл для вашего приложения и автоматически вставляет '
//                                                           //  в этот файл все созданные вами пакеты
// const path = require('path');
// const webpack = require('webpack')

// Webpack сборку тоже можно типизировать при помощи библиотек
// ts-node @types/node @types/webpack  @types/webpack-dev-server
// Так же надо изменить расширение webpack.config.js  на ts
// после этого импорты будут выглядеть иначе:
// импорты после типизации:

import webpack from 'webpack';
import type { Configuration as DevServerConfiguraton } from 'webpack-dev-server'; // необходимо для того что бы типизировался наш dev-server
// без него, ts  будет кругаться на свойство devServer:{}
import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

// module.exports = (env: any) => { // до типизации, после можно спокойно использовать export default
export default (env: EnvVariables) => {
    // __dirname - текущая папка d:\Учеба\WEBPACK__FULL__ULBI__TV
    console.log('env = ', env);

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.relative(__dirname, 'public'),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop',
    });
    return config;
};
