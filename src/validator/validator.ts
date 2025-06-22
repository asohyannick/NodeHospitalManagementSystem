import * as Yup from 'yup';
const validateUserRegisteration = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    email: Yup.string().email('Email must be provided').trim(),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must have a minimum of six characters'),
    isAdmin: Yup.boolean().required('Admin must be provided').default(false),
});

export {
    validateUserRegisteration
}