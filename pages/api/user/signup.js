import Joi from 'joi'

import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { signupUser } from '../../../modules/user/user.service'

const postSchema = Joi.object({
  firstName: Joi.string().requerid().max(50),
  lastName: Joi.string().requerid().max(50),
  user: Joi.string().requerid().max(30),
  email: Joi.string().email().requerid().max(100),
  password: Joi.string().requerid().max(50).min(6),

})

const signup = createHandler()


signup.post( validate({body: postSchema}), async (req, res) => {
  try{
    const user = await signupUser(req.body)
    res.status(201).json(user)
  } catch (err) {
    throw err
  }
  
})

export default signup