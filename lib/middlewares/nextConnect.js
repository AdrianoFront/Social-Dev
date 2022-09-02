import connect from 'next-connect'

import mongoose from './mongoose'

export default function createHandler () {
  return connect ().use(mongooseMiddleware)
}