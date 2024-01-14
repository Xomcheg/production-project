import webpack from 'webpack';
import type { Configuration as DevServerConfiguraton } from 'webpack-dev-server'; // необходимо для того что бы типизировался наш dev-server
import { buildDedvServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
// без него, ts  будет кругаться на свойство devServer:{}

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = options.mode === 'development';

    return (
        {

            mode: mode ?? 'development', // mode определяет в каком режиме необходимо собирать проект в development/production,
            // в проде удаляется все лишнее, пробелы комменты и тд
            // env - переменная окружения, опредлить ее можено как угодно, как какие-нибудь глобальные переменные
            // или в нашем случае мы ее определяем в scripts при сборке проекта "build: dev": "webpack --env mode=development"

            entry: {
                // helloWorld: paths.resolve(__dirname, 'src', 'index.tsx'),
                main: paths.entry,
                // пример работы с несколькими файлами
                // helloWorld2: path.resolve(__dirname, 'src', 'index2.tsx'),
            },

            output: { // конфигурация того, куда и как сборка будет происходить
                // path: paths.resolve(__dirname, 'build'),
                path: paths.output,
                filename: '[name].[contenthash].js', // есть множество вариантов нейминга файлов, https://webpack.js.org/configuration/, [name].[contenthash].js,
                // contenthash - это уникальный ключ который формируется при сборке проекта, меняется только если изменилось содержимое в файле
                clean: true, // удаляет файлы перед новой сборкой

            },

            plugins: buildPlugins(options),

            module: {
                // в массиве rules указываются лоадеры
                // Порядок лоадеров очень важен!
                rules: buildLoaders(options),
            },

            resolve: buildResolvers(options),

            devtool: isDev && 'inline-source-map', // если на выходе сборки нашего приложения мы получаем один огромный бандл, то естественно сложно найти ошибку, которая
            // где-либо могла произойти или каким образом она произошла и не отследить stack trace. и Вот sorce-map - это карты исходного кода
            // и именно они помогояет понять в каком исходном виде был написан код
            // sorce-map много азличных видов для разных ситуаций, можно ознакомиться загуглив webpack source map
            devServer: isDev ? buildDedvServer(options) : undefined,

        }
    );
}
