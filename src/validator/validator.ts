import * as Yup from 'yup';
import { GenderStatus } from '../service/interfac/patient/patient.interfac';
import { AppointmentStatus } from '../service/interfac/appointment/appointment.interfac';
const validateUserRegisteration = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    email: Yup.string().email('Email must be provided').trim().required('Email must be provided'),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must have a minimum of six characters'),
    isAdmin: Yup.boolean().required('Admin must be provided').default(false),
});

const validateUserLogin = Yup.object().shape({
    email: Yup.string().email('Email must be provided').trim().required('Email must be provided'),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must have a minimum of six characters'),
});

const validateUpdatedUserAccount = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    email: Yup.string().email('Email must be provided').trim().required('Email must be provided'),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must have a minimum of six characters'),
    isAdmin: Yup.boolean().required('Admin must be provided').default(false),
});

const validateAddedPatientRequest = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    dateOfBirth: Yup.string().required('FirstName must be provided').trim(),
    gender: Yup.mixed().required('One valued must be provided').oneOf(Object.values(GenderStatus)),
    address: Yup.object().shape({
        street: Yup.string().required('Street must be provided').trim(),
        city: Yup.string().required('City must be provided').trim(),
        state: Yup.string().required('State must be provided').trim(),
        zipCode: Yup.string().required('Zip Code must be provided').trim(),
        country: Yup.string().required('Country must be provided').trim(),
    }),
    contact: Yup.object().shape({
        phone: Yup.number().required('Phone number must be provided').integer(),
        email: Yup.string().email('Email must be provided').trim().required('Email must be provided'),
    }),
    emergencyContact: Yup.object().shape({
        name: Yup.string().required('Name must be provided').trim(),
        relationship: Yup.string().required('Relationship must be provided').trim(),
        phone: Yup.string().required('Phone number must be provided').trim(),
    }),
    insurance: Yup.object().shape({
        provider: Yup.string().required('Provider must be provided').trim(),
        policyNumber: Yup.string().required('Policy number must be provided').trim(),
        coverageDetails: Yup.string().required('Coverage details must be provided').trim(),
    }),
    medicalHistory: Yup.object().shape({
        allergies: Yup.array().required('Allergies must be provided').of(Yup.string().trim()),
        medications: Yup.array().required('Medications must be provided').of(Yup.string().trim()),
        chronicConditions: Yup.array().required('Chronic conditions must be provided').of(Yup.string().trim()),
        surgeries: Yup.object().shape({
            date: Yup.date().optional(),
            type: Yup.string().required('Type must be provided').trim(),
        }),
        familyHistory: Yup.object().shape({
            relations: Yup.string().required('Relations must be provided').trim(),
            condtions: Yup.string().required('Conditions must be provided').trim(),
        }),
    }),
    date: Yup.date().optional(),
});

const validateUpdatedPatientRequest = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    dateOfBirth: Yup.string().required('FirstName must be provided').trim(),
    gender: Yup.mixed().required('One valued must be provided').oneOf(Object.values(GenderStatus)),
    address: Yup.object().shape({
        street: Yup.string().required('Street must be provided').trim(),
        city: Yup.string().required('City must be provided').trim(),
        state: Yup.string().required('State must be provided').trim(),
        zipCode: Yup.string().required('Zip Code must be provided').trim(),
        country: Yup.string().required('Country must be provided').trim(),
    }),
    contact: Yup.object().shape({
        phone: Yup.number().required('Phone number must be provided').integer(),
        email: Yup.string().email('Email must be provided').trim().required('Email must be provided'),
    }),
    emergencyContact: Yup.object().shape({
        name: Yup.string().required('Name must be provided').trim(),
        relationship: Yup.string().required('Relationship must be provided').trim(),
        phone: Yup.string().required('Phone number must be provided').trim(),
    }),
    insurance: Yup.object().shape({
        provider: Yup.string().required('Provider must be provided').trim(),
        policyNumber: Yup.string().required('Policy number must be provided').trim(),
        coverageDetails: Yup.string().required('Coverage details must be provided').trim(),
    }),
    medicalHistory: Yup.object().shape({
        allergies: Yup.array().required('Allergies must be provided').of(Yup.string().trim()),
        medications: Yup.array().required('Medications must be provided').of(Yup.string().trim()),
        chronicConditions: Yup.array().required('Chronic conditions must be provided').of(Yup.string().trim()),
        surgeries: Yup.object().shape({
            date: Yup.date().optional(),
            type: Yup.string().required('Type must be provided').trim(),
        }),
        familyHistory: Yup.object().shape({
            relations: Yup.string().required('Relations must be provided').trim(),
            condtions: Yup.string().required('Conditions must be provided').trim(),
        }),
    }),
    date: Yup.date().optional(),
});
const validateBookedAppointment = Yup.object().shape({
    appointmentDate: Yup.string().required('Appointment date must be provided').trim(),
    status: Yup.mixed().required('Appointment status is required').oneOf(Object.values(AppointmentStatus)),
    reason: Yup.string().required('Appointment raeson must be provided').trim(),
    notes: Yup.string().required('Appointment notes must be provided').trim(),
    date: Yup.date().optional(),
});
const validateUpdatedBookedAppointment = Yup.object().shape({
    appointmentDate: Yup.string().required('Appointment date must be provided').trim(),
    status: Yup.mixed().required('Appointment status is required').oneOf(Object.values(AppointmentStatus)),
    reason: Yup.string().required('Appointment raeson must be provided').trim(),
    notes: Yup.string().required('Appointment notes must be provided').trim(),
    date: Yup.date().optional(),
});
export {
    validateUserRegisteration,
    validateUserLogin,
    validateUpdatedUserAccount,
    validateAddedPatientRequest,
    validateUpdatedPatientRequest,
    validateBookedAppointment,
    validateUpdatedBookedAppointment
}