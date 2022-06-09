import { Photo } from '../../../database/models'
import PhotoDTO from '../../../DTOs/photo'
import PhotoConverter from './converter'
import HttpException from '../../../Exception/Http'

import type { ServiceType } from '../type'
import { GET_MESSAGE, GET_ORIGINAL, GET_POST, GET_PREVIEW } from '../path'

class Service {
    getBuffer: ServiceType.Get = async (userId, type) => {
        const photo = await Photo.findOne({
            where: {
                user_id: userId
            }
        })

        if (photo === null) {
            throw HttpException.NotFound('Photo not found')
        }

       return Buffer.from(photo[type], 'base64')
    }

    getOriginal: ServiceType.GetOriginal = async (userId) => this.getBuffer(userId, 'original')
    
    getPost: ServiceType.GetPost = async (userId) => this.getBuffer(userId, 'post')
    
    getPreview: ServiceType.GetPreview = async (userId) => this.getBuffer(userId, 'preview')
    
    getMessage: ServiceType.GetMessage = async (userId) => this.getBuffer(userId, 'message')

    convert: ServiceType.Convert = async (file) => {
        if (file === undefined) {
            throw HttpException.UnprocessableEntity('Photo not uploaded')
        }

        const photoConverter = new PhotoConverter(file)

        const original = await photoConverter.getOriginal()
        const post = await photoConverter.getPost()
        const preview = await photoConverter.getPreview()
        const message = await photoConverter.getMessage()

        const photoDTO = new PhotoDTO({ original, post, preview, message })

        return photoDTO
    }

    save: ServiceType.Save = async (userId, photoDTO) => {
        await Photo.findOne({
            where: {
                user_id: userId
            }
        })
            .then((photo) => {
                if (photo) {
                    return photo.update(photoDTO)
                }

                return Photo.create({
                    ...photoDTO,
                    user_id: userId
                })
            })

        return new PhotoDTO({
            original: GET_ORIGINAL + userId,
            post: GET_POST + userId,
            preview: GET_PREVIEW + userId,
            message: GET_MESSAGE + userId,
        })
    }

    getOne: ServiceType.GetOne = async (userId) => {
        const photo = await Photo.findOne({
            where: {
                user_id: userId
            } 
        })
        
        if (photo === null) {
            return null
        }
        
        return new PhotoDTO({
            original: GET_ORIGINAL + userId,
            post: GET_POST + userId,
            preview: GET_PREVIEW + userId,
            message: GET_MESSAGE + userId,
        })
    }

    delete: ServiceType.Delete = async (userId) => {
        await Photo.destroy({
            where: {
                user_id: userId
            }
        })
    }
}

export default new Service()