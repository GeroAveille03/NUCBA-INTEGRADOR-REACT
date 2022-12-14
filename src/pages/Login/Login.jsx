import React from "react";
import Submit from "../../components/UI/Submit/Submit";
import { Field, ErrorMessage } from "formik";
import {
  signInUser,
  signInWithGoogle,
  createUserProfileDocument,
} from "../../firebase/firebase-utils";
import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  Form,
  LoginPasswordStyled,
  InputContainerStyled,
  ErrorMessageStyled,
  LoginInputStyled,
} from "./LoginSty";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { loginInitialValues, loginValidationSchema } from "../../formik/index";
import useRedirect from "../../hooks/useRedirect";

const Login = () => {
  useRedirect("/");

  const LoginInput = ({ name, type, placeholder }) => {
    return (
      <Field name={name}>
        {({ field, form: { errors, touched } }) => (
          <InputContainerStyled>
            <LoginInputStyled
              type={type}
              placeholder={placeholder}
              {...field}
              isError={errors[field.name] && touched[field.name]}
            />
            <ErrorMessage name={field.name}>
              {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
            </ErrorMessage>
          </InputContainerStyled>
        )}
      </Field>
    );
  };

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch (error) {
            if (error.code === "auth/wrong-password") {
              alert("Contraseña incorrecta");
            }
            if (error.code === "auth/user-not-found") {
              alert("Usuario no encontrado");
            }
          }
        }}
      >
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Submit>Ingresar</Submit>
          <Link to="/forgot-password">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled type="button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
