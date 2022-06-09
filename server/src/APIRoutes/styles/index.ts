import { Router } from 'express'

import STYLES from './path'
import controller from './controller'

const router = Router()

router.get(STYLES.GET, controller.get)
router.patch(STYLES.UPDATE_GENERAL, controller.updateGeneral)
router.patch(STYLES.UPDATE_DARK, controller.updateDark)
router.patch(STYLES.UPDATE_LIGHT, controller.updateLight)

export default router