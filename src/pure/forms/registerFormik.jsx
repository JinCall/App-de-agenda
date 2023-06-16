import React  from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { User } from '../../models/user.class';
import { ROLES } from '../../models/roles.enum';

const RegisterFormik = () => {

    const submit = (values) => {
        alert("Create user")
    }

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "", // Confirms password
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, "Username is too short")
                .max(12, "Username is too long")
                .required("Username is required"),
            email: Yup.string()
                .email("Email format is not valid")
                .required("Email is required"),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN, ROLES.BLOCKING], "You must select a role")
                .required("Roles is required"),
            password: Yup.string()
                .min(8, "Password is too short")
                .required("Password is required"),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Password does not match"
                    )
                }).required("Password must be confirmed")
        }
    )

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 1000));
                        alert(JSON.stringify(values, null, 2));
                    }
                }
            >

                {({     values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit }) => (
                            <Form>
                                <label htmlFor='username'>Username</label>
                                    <Field 
                                    id="username" 
                                    name="username" 
                                    placeholder="User"
                                    type="username"/>
                                {/* username error */}
                                {
                                    errors.username && touched.username && 
                                    (   
                                            <ErrorMessage name="username" component="div"></ErrorMessage>
                                    )
                                }
                                
                                <label htmlFor='email'>Email</label>
                                    <Field 
                                    id="email" 
                                    name="email" 
                                    placeholder="Example@gmail.com"
                                    type="email"/>
                                {/* email errors */}
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
                                    placeholder="Password"
                                    type="password"/>
                                {/* password error */}
                                {
                                    errors.password && touched.password && 
                                    (
                                            <ErrorMessage name='password' component="div"></ErrorMessage>
                                    )
                                }

                                <label htmlFor='confirm'>Confirm</label>
                                    <Field 
                                    id="confirm" 
                                    name="confirm" 
                                    placeholder="Confirm password"
                                    type="confirm"/>
                                {/* confirm password error  */}
                                {
                                    errors.confirm && touched.confirm && 
                                    (
                                            <ErrorMessage name='confirm' component="div"></ErrorMessage>
                                    )
                                }

                                <button type='submit'>Register account</button>
                                {isSubmitting ? (<p>Login your credentials...</p>) : null}   
                            </Form>
                        )
                }

            </Formik>
        </div>
    );
}

export default RegisterFormik;