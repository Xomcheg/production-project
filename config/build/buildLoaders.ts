// В этом файле конфигурируем лоадеры
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
    const isDev = options.mode === 'development';

    const cssLoaderWithModules = buildCssLoader(isDev);

    // const scssLoader = {
    //     test: /\.s[ac]ss$/i,
    //     use: [
    //         // Creates `style` nodes from JS strings
    //         // "style-loader",
    //         // style-lloader добавляет сss код в js,
    //         // но лучше его вынести в отдельные файлы при помощи лоадера MiniCssExtractPlugin.loader
    //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         // Translates CSS into CommonJS
    //         // "css-loader",
    //         cssLoaderWithModules,
    //         // Compiles Sass to CSS
    //         'sass-loader',
    //     ],
    // };

    const tsLoader = { // в итоге заменили на babel loader
        // ts-loader умеет работатьс JSX
        // Если б мы не использовали тайпскрипт: нужен был бы babel-loader
        test: /\.tsx?$/, // регулярка название тех файлов которые хотим обрабатывать, в нашем случае это будут ts и tsx файлы
        // use: 'ts-loader', // название лоадера
        exclude: /node_modules/, // исключаемые папки
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true, // отключает проверку типов при сборке, что уменьшает время сборки проекта, даже если есть ошибка в типах проект все равно запуститься
                    // для проверки можно написать отдельную команду и запускать проверку типов отдельно ->  "typecheck": "tsc" in package.json

                    getCustomTransformers: () => ({ // плагин для работы в реакт hot module replacement(HMR) - по дефолту, если мы натыкали в интерфейсе какие-то значения, вызвали модалки что-то накликали и
                        // нагенерировали какое-то текущее состояние, и затем мы написали какой-то код и сохранились, то страница перезагружается и настаканное состояние теряется
                        // а HMR позволяет обновлять код, без перезагрузки страницы
                        // на чистом js хватилобы добавления флага hot: true, но с фреймфорком, в нашем случае React, так просто сразу не заработает, необходим пдагин
                        // react-hot-loader, который в зависимости от среды выполнения (в нашем случае webpack) рекомендует что лучше использовать, смотреть в доке к плагину
                        // react-hot-loader => webpack - supports Fast Refresh (react-refresh-webpack-plugin) using a plugin.
                        // для типизации дополнительно устанавливаем npm install -D react-refresh-typescript
                        // before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                },
            },
        ],
    };

    // const assetsLoader = { // лоадер для работы с изображениями в папке assets  webpack assets loader
    //                         // по дефолту в этом лоадере есть работа и с svg - test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //                         // но от сюда мы его удаляем, что бы обработать svg в другом лоадере, он добавляет больше функионала по работе с svg
    //     test: /\.(png|jpg|jpeg|gif)$/i,
    //     type: 'asset/resource',
    // };

    const svgrLoader = { // лоадер для работы с svg, теперь импортируемые svg будут представлены в виде реакт компонентов
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        // use: [
        //   {
        //     loader: '@svgr/webpack',
        //     options: {
        //       icon: true,
        //       svgoConfig: { // благодаря этой настройке свг картинка будет наследовать цвета родительского компонента, не придется задавать свойства fill/stroke, достаточно будет color
        //         plugins: [
        //           {
        //             name: 'convertColors',
        //             params: {
        //               currentColor: true,
        //             }
        //           }
        //         ]
        //       }
        //     }
        //   }
        // ], // options: { icon: true } позволяет работать с svg как с иконками и размеры которые мы будем передавать
        // свг Компоненту будут срабатывать и на тег path внутри svg
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i, // добавим расширения шрифтов
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        // Порядок лоадеров очень важен!
        cssLoaderWithModules,
        tsLoader,
        // assetsLoader,
        fileLoader,
        // babelLoader,
        svgrLoader,
    ];
};
