import connect from 'next-connect'
import Joi from 'joi'

import validate from '../../../lib/middlewares/validation'

import { signupUser } from '../../../modules/user/user.service'

const postSchema = Joi.object({
  firstName: Joi.string().requerid().max(50),
  lastName: Joi.string().requerid().max(50),
  user: Joi.string().requerid().max(30),
  email: Joi.string().email().requerid().max(100),
  password: Joi.string().requerid().max(50).min(6),

})

const signup = connnect()
  .post( validate({body: postSchema}), (req, res) => {
    signupUser()
  res.status(200).json({ teste:"ok" })
  })

export default signup