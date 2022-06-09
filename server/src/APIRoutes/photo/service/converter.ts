import resizeImg, { ResizeImgOptions  } from 'resize-img'
import config from 'config'

type Options = {
    encoding?: BufferEncoding
}

type ResizeOptions = {
    original: ResizeImgOptions 
    post: ResizeImgOptions 
    preview: ResizeImgOptions 
    message: ResizeImgOptions
}

const resizeOptions = config.get<ResizeOptions>('resize-options')

export default class PhotoConverter {
    public readonly buffer: Express.Multer.File['buffer']
    private readonly mimetype: Express.Multer.File['mimetype']
    private readonly options: Required<Options> = {
        encoding: config.get('encoding')
    }

    constructor(file: Express.Multer.File, options?: Options) {
        this.buffer = file.buffer
        this.mimetype = file.mimetype
        this.options = {...this.options, ...options}
    }

    private getResizeImg = async (resizeImgOptions: ResizeImgOptions) => {
        const encoding = this.options.encoding

        const buffer = await resizeImg(this.buffer, resizeImgOptions)
        const string = buffer.toString(encoding)

        return string
    }

    public getOriginal = async () => this.getResizeImg(resizeOptions.original)

    public getPost = async () => this.getResizeImg(resizeOptions.post)

    public getPreview = async () => this.getResizeImg(resizeOptions.preview)

    public getMessage = async () => this.getResizeImg(resizeOptions.message)
}