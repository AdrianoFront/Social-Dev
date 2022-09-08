import Joi from 'joi'

export const signupSchema = Joi.object({
  firstName: Joi.string().requerid().max(50),
  lastName: Joi.string().requerid().max(50),
  user: Joi.string().requerid().max(30),
  email: Joi.string().email({tlds: { allow: false} }).requerid().max(100),
  password: Joi.string().requerid().max(50).min(6),
})