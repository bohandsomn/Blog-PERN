import multer from 'multer'
import storage from './storage'

const upload = multer({ storage })

export const FIELD_NAME = 'photo'

export default upload