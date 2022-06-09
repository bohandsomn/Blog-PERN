import { Router } from 'express'
import { body } from 'express-validator'

import AUTHORIZATION from './path'
import controller from './controller'
import checkAccess from '../../middlewares/checkAccess'

const router = Router()

router.post(
    AUTHORIZATION.REGISTRATION, 
    body('email', 'This is not an email').isEmail(), 
    body('email', 'Enter email').notEmpty(), 
    body('email', 'Email must be in lowercase').isLowercase(), 
    body('login', 'Login must be in lowercase').isLowercase(), 
    body('login', 'Enter login').notEmpty(), 
    body('password', 'Password length must be between 8 and 12 characters').isLength({ min: 8, max: 12 }),
    controller.registration
)
router.post(
    AUTHORIZATION.LOGIN, 
    body('email', 'This is not an email').isEmail(), 
    body('email', 'Enter email').notEmpty(), 
    body('email', 'Email must be in lowercase').isLowercase(), 
    body('password', 'Password length must be between 8 and 12 characters').isLength({ min: 8, max: 12 }),
    controller.login
)
router.put(
    AUTHORIZATION.UPDATE, 
    body('email', 'This is not an email').isEmail(), 
    body('email', 'Enter email').notEmpty(), 
    body('email', 'Email must be in lowercase').isLowercase(), 
    body('login', 'Login must be in lowercase').isLowercase(), 
    body('login', 'Enter login').notEmpty(), 
    body('password', 'Password length must be between 8 and 12 characters').isLength({ min: 8, max: 12 }),
    checkAccess,
    controller.update
)
router.get(AUTHORIZATION.AUTO_LOGIN, checkAccess, controller.autoLogin)
router.post(AUTHORIZATION.LOGOUT, controller.logout)
router.get(AUTHORIZATION.ACTIVATION, controller.activation)
router.get(AUTHORIZATION.REFRESH, controller.refresh)

export default router
