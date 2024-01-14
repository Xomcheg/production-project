import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light-icon.svg';
import DarkIcon from 'shared/assets/icons/theme-dark-icon.svg';
import cls from './ThemeSwitcher.module.scss';

import { Button } from '../../Button';
import { ThemeButton } from '../../Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK
                    ? <DarkIcon width="30px" height="30px" />
                    // eslint-disable-next-line i18next/no-literal-string
                    : <LightIcon fill="white" width="30px" height="30px" />
            }
        </Button>
    );
}
