/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'feauteres/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                type="button"
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>

            {/* <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error nam sit alias nulla beatae, laboriosam cupiditate atque, nemo at provident ipsum totam voluptatem. Sapiente consequuntur ex quia saepe nostrum?
                Alias consecres reprehenderit odio soluta eos explicabo aperiam assumenda quod, repellat fugit vitae quibusdam dolorum. Eligendi, facilis velit pariatur rem excepturi delectus.
            </Modal> */}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
}
