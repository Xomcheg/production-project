import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            // style-lloader добавляет сss код в js,
            // но лучше его вынести в отдельные файлы при помощи лоадера MiniCssExtractPlugin.loader
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader",
            { // этот лоадер необходим что бы работать с модулями
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // принимает путь до файла, определяет для какого файла модули применять а для какого нет
                        // теперь файлы которые не являются модулями будут восприниматься как обычные css файлы, иначе простые css файлы не будут работать
                        // '[path][name]__[local]--[hash:base64:5]' -- пока уеру сложно читать
                        localIdentName: isDev ? '[local]---[hash:base64:2]' : '[hash:base64:8]', // эта настройка необходима что бы контролировать формирование названия класса, так как в dom названия отображаются в виде хэшей
                        // и дебажить такой код становится очень сложно, но можно настроить сборку для дева так что бы отображались нормальные имена классов
                        // hash: base64:8] :8 - означает взять первые 8 символов хэша - это типо золотая середина, больше не надо

                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}
