export default class PhotoDTO {
    public readonly original: string
    public readonly post: string
    public readonly preview: string
    public readonly message: string

    constructor({ original, post, preview, message }: PhotoDTO) {
        this.original = original
        this.post = post
        this.preview = preview
        this.message = message
    }
}
