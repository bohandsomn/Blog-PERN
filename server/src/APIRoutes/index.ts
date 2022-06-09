import { Router } from 'express'

import user from './user'
import photo from './photo'
import post from './post'
import comment from './comment'
import authorization from './authorization'
import styles from './styles'
import chat from './chat'

const router = Router()

const pathParams = '/api'

router.use(pathParams, user)
router.use(pathParams, photo)
router.use(pathParams, post)
router.use(pathParams, comment)
router.use(pathParams, authorization)
router.use(pathParams, styles)
router.use(pathParams, chat)

export default router
