import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
    const { paths } = options;
    return {
        extensions: ['.tsx', '.ts', '.js'], // при импорте файлов мы не указываем в конце файла расширение, а благодаря этой настройке файлы с таким расширением
        // будут обработаны
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: { // тут мы создаем алиасы, то есть какие-то басовые пути ссылаять на определенную папку в приложении
            // для работы необходимо добавить описание в ts.config "paths"
            // '@': paths.src, // папка src
            '*': paths.src, // папка src
        },
    };
};
