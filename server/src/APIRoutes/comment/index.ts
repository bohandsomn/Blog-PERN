import { Router } from 'express'
import { body } from 'express-validator'

import POST_COMMENT from './path'
import controller from './controller'
import checkAccess from '../../middlewares/checkAccess'
import checkIsActivation from '../../middlewares/checkIsActivation'

const router = Router()

router.post(
    POST_COMMENT.CREATE,
    body('content', 'Enter comment'), 
    checkAccess, 
    checkIsActivation,
    controller.create
)
router.put(
    POST_COMMENT.UPDATE, 
    checkAccess, 
    body('content', 'Enter comment'), 
    controller.update
)
router.delete(POST_COMMENT.DELETE, checkAccess, controller.delete)
router.patch(POST_COMMENT.LIKE, checkAccess, checkIsActivation, controller.like)
router.patch(POST_COMMENT.DISLIKE, checkAccess, checkIsActivation, controller.dislike)

export default router
