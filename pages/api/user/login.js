import Joi from 'joi'
import { withIronSessionApiRoute } from 'iron-session/next'
import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { login } from '../../../modules/user/user.service'

import { ironConfig } from '../../../lib/middlewares/ironSession'

const loginSchema = Joi.object({
  userOrEmail: Joi.string().requered(),
  password: Joi.string().requered()
})

const handler = createHandler()

handler.post(validate({ body: loginSchema }), (req, res) => {
  try{
    const user = await login(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.send({ ok: true })
  } catch (err) {
    console.log(err)
    throw err
  }
})

export default withIronSessionApiRoute(handler, ironConfig)
