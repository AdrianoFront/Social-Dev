import joi from 'joi'

export const createPostSchema = Joi.object({
  text: Joi.string().requerid().max(256)
})