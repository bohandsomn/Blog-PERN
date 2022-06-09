import { Router } from 'express'
import { body } from 'express-validator'

import POST from './path'
import controller from './controller'
import checkAccess from '../../middlewares/checkAccess'
import checkIsActivation from '../../middlewares/checkIsActivation'

const router = Router()

router.post(
    POST.CREATE, 
    body('title', 'Enter title').notEmpty(), 
    body('content', 'Enter content').notEmpty(), 
    checkAccess, 
    checkIsActivation,
    controller.create
)
router.put(
    POST.UPDATE, 
    body('title', 'Enter title').notEmpty(), 
    body('content', 'Enter content').notEmpty(), 
    checkAccess, 
    controller.update
)
router.get(POST.GET_ONE, checkAccess, controller.getOne)
router.get(POST.GET_MANY, controller.getMany)
router.delete(POST.DELETE, checkAccess, controller.delete)
router.patch(POST.LIKE, checkAccess, checkIsActivation, controller.like)
router.patch(POST.DISLIKE, checkAccess, checkIsActivation, controller.dislike)

export default router
