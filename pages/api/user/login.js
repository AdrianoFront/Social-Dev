import Joi from 'joi'
import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { login } from '../../../modules/user/user.service'

const loginSchema = Joi.object({
  userOrEmail: Joi.string().requered(),
  password: Joi.string().requered()
})

const handler = createHandler()

handler.post(validate({ body: loginSchema }), (req, res) => {
  try{
    const user = await login(req.body)
    res.send(user)
  } catch (err) {
    console.log(err)
    throw err
  }
})

export default handler
