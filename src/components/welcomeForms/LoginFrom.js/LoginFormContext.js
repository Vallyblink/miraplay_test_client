import { ErrorMessage, useFormikContext } from 'formik';
import UI_MSGS from 'constants/authUi';
import {
  FormikForm,
  FormikInput,
  IconBtn,
  Wrap,
  Label,
} from '../RegisterForm/RegisterForm.styled';
import { Notify } from 'notiflix';
import { ButtonAuth } from 'components/buttons/button';

export const LoginFormContext = ({ showPassword, togglePassword }) => {
  const { values, dirty, isValid, touched, errors, handleSubmit } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <Label htmlFor="email">
        <FormikInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          title={UI_MSGS.INPUT_EMAIL_TITLE}
        />
        {touched.email && errors.email && dirty && (
          <ErrorMessage
            name="email"
            render={msg => {
              Notify.warning(` ${msg}`);
            }}
          />
        )}
      </Label>

      <Label htmlFor="password">
        <Wrap>
          <FormikInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm a password"
            value={values.password}
            title={UI_MSGS.INPUT_PWD_TITLE}
          />{' '}
          <IconBtn
            type="button"
            onClick={togglePassword}
            active={showPassword}
            className={showPassword ? 'active' : ''}
            aria-label="Toggle Password Visibility"
          >
          </IconBtn>
        </Wrap>
        {touched.password && errors.password && dirty && (
          <ErrorMessage
            name="password"
            render={msg => {
              Notify.warning(` ${msg}`);
            }}
          />
        )}
      </Label>
       <ButtonAuth
        title="Log In Now"
        type="submit"
        disabled={!dirty || !isValid}
      ></ButtonAuth>
          
    </FormikForm>
  );
};