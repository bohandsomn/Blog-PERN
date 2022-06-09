import { Router } from 'express'
import { body } from 'express-validator'

import PATH from './path'
import controller from './controller'
import checkAccess from '../../middlewares/checkAccess'
import checkIsActivation from '../../middlewares/checkIsActivation'
import upload, { FIELD_NAME } from '../photo/service/multer/upload'

const router = Router()

router.post(
    PATH.CREATE, 
    body('name', 'Enter name of chat').notEmpty(), 
    checkAccess,
    checkIsActivation, 
    controller.create
)
router.get(PATH.GET_ONE, checkAccess,controller.getOne)
router.get(PATH.GET_PHOTO, controller.getPhoto)
router.get(PATH.GET_MANY, checkAccess, controller.getMany)
router.get(PATH.GET_MANY_BY_NAME, checkAccess, controller.getManyByName)
router.put(PATH.UPDATE, checkAccess, controller.update)
router.patch(PATH.UPDATE_LAST_MESSAGE, checkAccess, controller.updateLastMessage)
router.patch(PATH.SET_PHOTO, upload.single(FIELD_NAME), checkAccess, controller.setPhoto)
router.delete(PATH.DELETE, checkAccess, controller.delete)

export default router
