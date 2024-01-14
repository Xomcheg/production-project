import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import webpack, { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';
import { BuildOptions } from './types/types';

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
    const {
        mode, paths, analyzer, platform,
    } = options;

    const isDev = mode === 'development';
    const isProd = mode === 'production';
    const plugins: Configuration['plugins'] = [
        // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new HtmlWebpackPlugin({
            template: paths.html, // { template: './src/index.html' } ссылка до нашего html файла
            // favicon: path.resolve(paths.public, 'favicon.ico'), // для работы с фавиконом в папке publick
        }),

        new DefinePlugin({ // подменяет глобальные переменные которые мы используем в коде, на те значения которые мы задаем на этапе сборки
            __PLATFORM__: JSON.stringify(platform), // их необходимо называть особым образом, что бы они выделялись,
            // затем их необходимо декларировать в айле *.d.ts и эти переменные можно использовать в любом месте проекта,
            // а при сборке указывать значения которые в эти переменные будут передаваться
            __ENV__: JSON.stringify(mode),
            __IS_DEV__: JSON.stringify(isDev),
        }),

    ]; // .filter(Boolean), // .filter(Boolean) нельзя возвращать массив с какими-то непонятными значениями
    // .filter(Boolean) - убирает из массива все null, false, undefined и т.д.

    if (isDev) {
        plugins.push(
            // медленный
            new webpack.ProgressPlugin(), // показывает процент того на сколько собралась сборка
        );
        // plugins.push(
        //     new ForkTsCheckerWebpackPlugin(), // позволяет запускать проверку типов в отдельно процессе, что ускоряет сборку проекта
        //     // работает в связке с лоадером  loader: 'ts-loader', и его опцией  transpileOnly: true
        //     // по сути мы распараллелили сборку и проверку типов
        // )
        plugins.push(
            new ReactRefreshWebpackPlugin(), // плагин для работы в реакт hot module replacement(HMR) - по дефолту, если мы натыкали в интерфейсе какие-то значения, вызвали модалки что-то накликали и
            // нагенерировали какое-то текущее состояние, и затем мы написали какой-то код и сохранились, то страница перезагружается и настаканное состояние теряется
            // а HMR позволяет обновлять код, без перезагрузки страницы
            // на чистом js хватилобы добавления флага hot: true, но с фреймфорком, в нашем случае React, так просто сразу не заработает, необходим пдагин
            // react-hot-loader, который в зависимости от среды выполнения (в нашем случае webpack) рекомендует что лучше использовать, смотреть в доке к плагину
            // react-hot-loader => webpack - supports Fast Refresh (react-refresh-webpack-plugin) using a plugin.
            // для типизации дополнительно устанавливаем npm install -D react-refresh-typescript
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                // название файлов после компиляции
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        );

        plugins.push(
            new CopyPlugin({ // плагин для переноса в сборку каких-то дополнительных файлов стационарных, которые необходимы для работы приложения
                // потом удалить плагин из пет проекта для тестовых заданий если таких файлов нет
                // я создал тестовую папку в public testInnerFiles - ее тоже удалить она для теста
                patterns: [
                    {
                        from: path.resolve(paths.public, 'locales'), // так же тестовый путь, path.resolve(paths.public, 'testInnerFiles') склеивает пути
                        to: path.resolve(paths.output, 'locales'), // создаем папку locales в папке сборки проекта и туда переносим файлы
                    },
                ],
            }),
        );
    }

    if (analyzer) {
        plugins.push(
            new BundleAnalyzerPlugin(), // для анализа размера бандла
        );
    }

    return plugins;
};
