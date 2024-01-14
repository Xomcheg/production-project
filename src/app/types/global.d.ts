declare module '*.module.scss' { // тс не понимает расширение .scss при импортах файлов с таким расширением, для решения этой проблемы необходима такая запись
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

declare module '*.png'; // необходимо для того что бы тайпскрипт не ругался на импорт файлов с таким расширением
declare module '*.jpeg'; // необходимо для того что бы тайпскрипт не ругался на импорт файлов с таким расширением
declare module '*.jpg'; // необходимо для того что бы тайпскрипт не ругался на импорт файлов с таким расширением
// declare module '*.svg'; // необходимо для того что бы тайпскрипт не ругался на импорт файлов с таким расширением

declare module '*.svg' { // для типизации svgr компонентов
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop'; // необходимо объявить какие-то глобальные переменные, которые мы будем использовать
declare const __ENV__: 'production' | 'development';
declare const __IS_DEV__: boolean;
