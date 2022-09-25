import Joi from 'joi'

import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const createPostSchema = Joi.object({
  text: Joi.string().requerid().max(256)
})

export const deletePostSchema = Joi.object({
  text: Joi.objectId().requerid()
})

export const editPostSchema = Joi.object({
  id: Joi.objectId().requerid(),
  text: Joi.string().required().max(256)
})