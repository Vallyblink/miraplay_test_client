import { ErrorMessage, useFormikContext } from 'formik';
import UI_MSGS from 'constants/authUi';
import { Notify } from 'notiflix';
import {
  FormikForm,
  FormikInput,
  IconBtn,
  Wrap,
  Label,
} from './RegisterForm.styled';
import { ButtonAuth } from 'components/buttons/button';
export const RegisterFormContext = ({ showPassword, togglePassword }) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    handleSubmit,
  } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        <FormikInput
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          title={UI_MSGS.INPUT_NAME_TITLE}
        />
        {touched.name && errors.name && dirty && (
          <ErrorMessage
            name="name"
            render={msg => {
              Notify.warning(` ${msg}`, "fgh");
            }}
          />
        )}
      </Label>

      <Label htmlFor="email">
        <FormikInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          title={UI_MSGS.INPUT_EMAIL_TITLE}
        />
        {touched.email && errors.email && dirty && (
          <ErrorMessage
            name="email"
            render={msg => {
              Notify.warning(` ${msg}`, "fgh");
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
            placeholder="Create a password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            title={UI_MSGS.INPUT_PWD_TITLE}
          />
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
              Notify.warning(` ${msg}`, "fgh");
            }}
          />
        )}
      </Label>
      <ButtonAuth
        title="Register"
        type="submit"
        disabled={!dirty || !isValid}
      ></ButtonAuth>

      {/* <Button type="submit" disabled={!dirty || !isValid} aria-label="Submit">
        Register Now
      </Button> */}
    </FormikForm>
  );
};