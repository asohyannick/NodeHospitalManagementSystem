import * as Yup from 'yup';
import { GenderStatus } from '../service/interfac/patient/patient.interfac';
import { AppointmentStatus } from '../service/interfac/appointment/appointment.interfac';
import { DoctorGender } from '../service/interfac/doctor/doctor.interfac';
import { BillingStatus } from '../service/interfac/paymentInvoice/paymentInvoice.interfac';
import { TestResultStatus } from '../service/interfac/laboratory/laboratory.interfac';
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

const validateAddADoctorRequest = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    dateOfBirth: Yup.string().required('FirstName must be provided').trim(),
    gender: Yup.mixed().required('One valued must be provided').oneOf(Object.values(DoctorGender)),
    specialization: Yup.string().required('Specialization must be provided').trim(),
    licenseNumber: Yup.string().required('License number must be provided').trim(),
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
    yearsOfExperience: Yup.number().required('Years of experience must be provided').integer(),
    languages: Yup.array().required('Languages must be provided').of(Yup.string().trim()),
    date: Yup.date().optional(),
});

const validateUpdatedDoctorRequest = Yup.object().shape({
    firstName: Yup.string().required('FirstName must be provided').trim().min(2, 'FirstName must have a minimum of two characters'),
    lastName: Yup.string().required('lastName must be provided').trim().min(2, 'lastName must have a minimum of two characters'),
    dateOfBirth: Yup.string().required('FirstName must be provided').trim(),
    gender: Yup.mixed().required('One valued must be provided').oneOf(Object.values(DoctorGender)),
    specialization: Yup.string().required('Specialization must be provided').trim(),
    licenseNumber: Yup.string().required('License number must be provided').trim(),
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
    yearsOfExperience: Yup.number().required('Years of experience must be provided').integer(),
    languages: Yup.array().required('Languages must be provided').of(Yup.string().trim()),
    date: Yup.date().optional(),
});

const validateMedicalRecord = Yup.object().shape({
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
    labResults: Yup.object().shape({
        testName: Yup.string().required('Relations must be provided').trim(),
        result: Yup.string().required('Results must be provided').trim(),
        date: Yup.string().required('Date  must be provided').trim(),
        notes: Yup.string().required('Notes must be provided').trim(),
    }),
    visitDate: Yup.string().required('Visit date must be provided').trim(),
});
const validateUpdatedMedicalRecord = Yup.object().shape({
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
    labResults: Yup.object().shape({
        testName: Yup.string().required('Relations must be provided').trim(),
        result: Yup.string().required('Results must be provided').trim(),
        date: Yup.string().required('Date  must be provided').trim(),
        notes: Yup.string().required('Notes must be provided').trim(),
    }),
    visitDate: Yup.string().required('Visit date must be provided').trim(),
});

const validatePaymentInvoice = Yup.object().shape({
    items: Yup.array()
        .of(Yup.object().shape({
            description: Yup.string().trim().required('Description is required'),
            amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
        }))
        .required('Items must be provided'),

    totalAmount: Yup.number()
        .required('The total amount must be provided')
        .positive('Total amount must be positive'),

    dueDate: Yup.string()
        .required('The due date must be provided')
        .trim()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Due date must be in YYYY-MM-DD format'),

    status: Yup.mixed()
        .required('One value must be provided')
        .oneOf(Object.values(BillingStatus)),

    payment: Yup.array()
        .of(Yup.object().shape({
            transactionId: Yup.string().trim().required('Transaction ID is required'),
            amount: Yup.number().required('Payment amount is required').positive('Amount must be positive'),
            method: Yup.string().trim().required('Payment method is required'),
            status: Yup.mixed().oneOf(Object.values(BillingStatus)).required('Payment status is required'),
        }))
        .required('Payment information must be provided'),
});
const validateUpdatedPaymentInvoice = Yup.object().shape({
    items: Yup.array()
        .of(Yup.object().shape({
            description: Yup.string().trim().required('Description is required'),
            amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
        }))
        .required('Items must be provided'),

    totalAmount: Yup.number()
        .required('The total amount must be provided')
        .positive('Total amount must be positive'),

    dueDate: Yup.string()
        .required('The due date must be provided')
        .trim()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Due date must be in YYYY-MM-DD format'),

    status: Yup.mixed()
        .required('One value must be provided')
        .oneOf(Object.values(BillingStatus)),

    payment: Yup.array()
        .of(Yup.object().shape({
            transactionId: Yup.string().trim().required('Transaction ID is required'),
            amount: Yup.number().required('Payment amount is required').positive('Amount must be positive'),
            method: Yup.string().trim().required('Payment method is required'),
            status: Yup.mixed().oneOf(Object.values(BillingStatus)).required('Payment status is required'),
        }))
        .required('Payment information must be provided'),
});

const validateNewInventory = Yup.object().shape({
    name: Yup.string().required('Name must be provided').trim(),
    description: Yup.string().required('Description must be provided').trim(),
    quantity: Yup.number().required('Quantity value must be provided').integer(),
    unit: Yup.string().required('Yup must be provided').trim(),
    price: Yup.number().required('Price must be provided').integer(),
    category: Yup.string().required('Category must be provided').trim(),
    supplier: Yup.string().required('Name must be provided').trim(),
    expirationDate: Yup.date().required('Name must be provided'),
    reorderLevel: Yup.number().required('ReorderLevel must be provided').integer(),
});
const validateNewlyUpdatedInventory = Yup.object().shape({
    name: Yup.string().required('Name must be provided').trim(),
    description: Yup.string().required('Description must be provided').trim(),
    quantity: Yup.number().required('Quantity value must be provided').integer(),
    unit: Yup.string().required('Yup must be provided').trim(),
    price: Yup.number().required('Price must be provided').integer(),
    category: Yup.string().required('Category must be provided').trim(),
    supplier: Yup.string().required('Name must be provided').trim(),
    expirationDate: Yup.date().required('Name must be provided'),
    reorderLevel: Yup.number().required('ReorderLevel must be provided').integer(),
});

const validateNewPharmacy = Yup.object().shape({
    name: Yup.string().required('Name must be provided').trim(),
    location: Yup.string().required('Location must be provided').trim(),
    phoneNumber: Yup.string().required('Phone number must be provided').trim(),
    operatingHours: Yup.string().required('Operating hours must be provided').trim(),
});

const validateNewlyUpdatedPharmacy = Yup.object().shape({
    name: Yup.string().required('Name must be provided').trim(),
    location: Yup.string().required('Location must be provided').trim(),
    phoneNumber: Yup.string().required('Phone number must be provided').trim(),
    operatingHours: Yup.string().required('Operating hours must be provided').trim(),
});

const validateNewPharmacist = Yup.object().shape({
    name: Yup.string().required('Name must be provided').trim(),
    licenseNumber: Yup.string().required('License number must be provided').trim(),
    phoneNumber: Yup.string().required('Phone number must be provided').trim(),
    email: Yup.string().required('Email must be provided').trim(),
    zipCode: Yup.string().required('Zip code must be provided').trim(),
    street: Yup.string().required('Street name must be provided').trim(),
    city: Yup.string().required('City must be provided').trim(),
    state: Yup.string().required('State must be provided').trim(),
    salary: Yup.number().required('Phone number must be provided').integer(),
    country: Yup.string().required('Country must be provided').trim(),
})

const validateNewlyUpdatedPharmacist = Yup.object().shape({
    name: Yup.string().required('Name must be provided').trim(),
    licenseNumber: Yup.string().required('License number must be provided').trim(),
    phoneNumber: Yup.string().required('Phone number must be provided').trim(),
    email: Yup.string().required('Email must be provided').trim(),
    zipCode: Yup.string().required('Zip code must be provided').trim(),
    street: Yup.string().required('Street name must be provided').trim(),
    city: Yup.string().required('City must be provided').trim(),
    state: Yup.string().required('State must be provided').trim(),
    salary: Yup.number().required('Phone number must be provided').integer(),
    country: Yup.string().required('Country must be provided').trim(),
});
const validateLabTestCreation = Yup.object().shape({
    name: Yup.string().required('Lab technician\'s  name must be provided').trim(),
    location: Yup.string().required('Lab technician\'s location must be provided').trim(),
    phoneNumber: Yup.string().required('Lab technician\'s phone number must be provided').trim(),
    operatingHours: Yup.string().required('Operating hours must be provided').trim(),
    testResult: Yup.mixed().required('Test result must be provided').oneOf(Object.values(TestResultStatus)),
});

const validateUpdatedLabTestCreation = Yup.object().shape({
    name: Yup.string().required('Lab technician\'s  name must be provided').trim(),
    location: Yup.string().required('Lab technician\'s location must be provided').trim(),
    phoneNumber: Yup.string().required('Lab technician\'s phone number must be provided').trim(),
    operatingHours: Yup.string().required('Operating hours must be provided').trim(),
    testResult: Yup.mixed().required('Test result must be provided').oneOf(Object.values(TestResultStatus)),
});

export {
    validateUserRegisteration,
    validateUserLogin,
    validateUpdatedUserAccount,
    validateAddedPatientRequest,
    validateUpdatedPatientRequest,
    validateBookedAppointment,
    validateUpdatedBookedAppointment,
    validateAddADoctorRequest,
    validateUpdatedDoctorRequest,
    validateMedicalRecord,
    validateUpdatedMedicalRecord,
    validatePaymentInvoice,
    validateUpdatedPaymentInvoice,
    validateNewInventory,
    validateNewlyUpdatedInventory,
    validateNewPharmacy,
    validateNewlyUpdatedPharmacy,
    validateNewPharmacist,
    validateNewlyUpdatedPharmacist,
    validateLabTestCreation,
    validateUpdatedLabTestCreation
}