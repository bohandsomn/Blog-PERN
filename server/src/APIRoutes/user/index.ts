import { Router } from 'express'

import USER from './path'
import controller from './controller'
import checkAccess from '../../middlewares/checkAccess'
import checkIsActivation from '../../middlewares/checkIsActivation'

const router = Router()

router.get(USER.GET_SUBSCRIBERS, checkAccess, controller.getSubscribers)
router.get(USER.GET_SUBSCRIPTIONS, checkAccess, controller.getSubscriptions)
router.get(USER.GET_PREVIEW, checkAccess, controller.getPreview)
router.get(USER.GET_ONE, checkAccess, controller.getOne)
router.patch(USER.SUBSCRIBE, checkAccess, checkIsActivation, controller.subscribe)
router.patch(USER.UNSUBSCRIBE, checkAccess, checkIsActivation, controller.unsubscribe)

export default router