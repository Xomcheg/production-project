export interface BuildPaths {
    entry: string; // поля которые ожидаем на вход, до index.tsx
    html: string; // путь до html
    output: string; // путь туда где сборка будет происходить
    src: string; // путь к папке src
    public: string; // путь к папке public
}

export type BuildMode = 'development' | 'production'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
    port: number;
    paths: BuildPaths; // пути до разных файлов (html, до папки publick, до паопк с исходным кодом и т.д.)
    mode: BuildMode;
    analyzer?: boolean;
    platform: BuildPlatform;
}
