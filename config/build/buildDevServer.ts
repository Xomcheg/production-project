import type { Configuration as DevServerConfiguraton } from 'webpack-dev-server'; // необходимо для того что бы типизировался наш dev-server
import { BuildOptions } from './types/types';
// без него, ts  будет кругаться на свойство devServer:{}
export function buildDedvServer(options: BuildOptions): DevServerConfiguraton {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true, // для роутинга, так как навигация происходит за счет history Api
        // historyApiFallback работает только для dev сервера
        // если делать статику, допустим через nginx,  то надо делать проксирование на Index.html
        // посмотреть видос про деплой фронтент приложения на Ulbi Tv

        hot: true, // hot module replacement(HMR) - по дефолту, если мы натыкали в интерфейсе какие-то значения, вызвали модалки что-то накликали и
        // нагенерировали какое-то текущее состояние, и затем мы написали какой-то код и сохранились, то страница перезагружается и настаканное состояние теряется
        // а HMR позволяет обновлять код, без перезагрузки страницы
        // на чистом js хватилобы добавления флага hot: true, но с фреймфорком, в нашем случае React, так просто сразу не заработает, необходим пдагин
        // react-hot-loader, который в зависимости от среды выполнения (в нашем случае webpack) рекомендует что лучше использовать, смотреть в доке к плагину
        // react-hot-loader => webpack - supports Fast Refresh (react-refresh-webpack-plugin) using a plugin.
        // для типизации дополнительно устанавливаем npm install -D react-refresh-typescript
    };
}
