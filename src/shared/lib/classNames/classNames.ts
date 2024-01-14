type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string { // cls - основной класс, mods - объект с классами которые могут включаться и отключаться
    // добавочные классы которые не зависят от параметров additional

    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key),
    ].join(' ');
}

// console.log(classNames('remove-btn', {hovered: true, selectebel: true, read: false }, ['addStyle'])) //  => 'remove-btn hovered selectebel read addStyle'
