import Joi from 'joi'

export const signupSchema = Joi.object({
  firstName: Joi.string().requerid().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres.'),
  lastName: Joi.string().requerid().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres.'),
  user: Joi.string().requerid().max(30).message('O campo "usuário" pode ter no máximo {{#limit}} caracteres.'),
  email: Joi.string().email({tlds: { allow: false} }).requerid().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteres.'),
  password: Joi.string().requerid()
  .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres.')
  .min(6).message('O campo "senha" precisa ter no mínimo {{#limit}} caracteres.'),
})