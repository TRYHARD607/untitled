import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onUsernameChange = useCallback(
    (val: string) => {
      dispatch(loginActions.setUsername(val));
    },
    [dispatch]
  );

  const onPasswordChange = useCallback(
    (val: string) => {
      dispatch(loginActions.setPassword(val));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    void dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && (
        <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />
      )}
      <Input
        type='text'
        placeholder={t('Username')}
        autofocus
        onChange={onUsernameChange}
        value={username}
      />
      <Input
        type='text'
        placeholder={t('Password')}
        onChange={onPasswordChange}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';
