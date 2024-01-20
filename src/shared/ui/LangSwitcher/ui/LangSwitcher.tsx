import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../../Button';
import { ButtonTheme } from '../../Button/ui/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export function LangSwitcher(props: LangSwitcherProps) {
    const { className, short } = props;
    const [t, i18n] = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
}
