import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Email format is not valid")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
    }
)

const LoginFormik = () => {

    const initialCredentials = [
        {
            email: "",
            password: ""
        }
    ]

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem("credentials", values)
                }}
            >

            {({     values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit }) => (
                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field 
                            id="email" 
                            name="email" 
                            placeholder="Example@email.com"
                            type="email"
                        />

                        {
                            errors.email && touched.email && 
                            (   
                                    <ErrorMessage name="email" component="div"></ErrorMessage>
                            )
                        }

                        <label htmlFor='password'>Password</label>
                        <Field 
                            id="password" 
                            name="password" 
                            placeholder="password"
                            type="password"
                        />

                        {
                            errors.password && touched.password && 
                            (
                                    <ErrorMessage name='password' component="div"></ErrorMessage>
                            )
                        }
                        
                        <button type='submit'>Submit</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )
            }
            </Formik>
        </div>
    );
}

export default LoginFormik;
