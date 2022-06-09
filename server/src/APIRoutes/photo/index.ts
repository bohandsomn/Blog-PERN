import { Router } from 'express'

import PHOTO from './path'
import controller from './controller'
import checkAccess from '../../middlewares/checkAccess'
import upload, { FIELD_NAME } from './service/multer/upload'

const router = Router()

router.get(PHOTO.GET_ORIGINAL, controller.getOriginal)
router.get(PHOTO.GET_POST, controller.getPost)
router.get(PHOTO.GET_PREVIEW, controller.getPreview)
router.get(PHOTO.GET_MESSAGE, controller.getMessage)
router.post(PHOTO.SET, upload.single(FIELD_NAME), checkAccess, controller.set)
router.put(PHOTO.UPDATE, upload.single(FIELD_NAME), checkAccess, controller.update)
router.get(PHOTO.GET_ONE, checkAccess, controller.getOne)
router.delete(PHOTO.DELETE, checkAccess, controller.delete)

export default router