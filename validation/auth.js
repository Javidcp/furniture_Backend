import Joi from 'joi';

export const registerSchema = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Name should have at least 2 characters',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be valid',
        'string.empty': 'Email is required'
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Password must be at least 6 characters',
        'string.empty': 'Password is required'
    })
});


export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be valid',
        'string.empty': 'Email is required'
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': 'Password is required'
    })
});
