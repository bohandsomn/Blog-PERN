import FileSystem from 'fs'
import path from 'path'
import { StylesData, TagName } from '../../types/entities/styles'

class Styles {
    public static readonly __dirname = path.resolve()

    public static path = (tagname: TagName) => {
        return path.join(this.__dirname, 'src', 'styles', tagname + '.json')
    }

    public static write = (tagname: TagName, data: StylesData): void => { 
        const tagPath = this.path(tagname)

        FileSystem.writeFile(tagPath, JSON.stringify(data, null, 4), (error) => { 
            console.log(error)
        })
    }

    public static read = <T extends TagName>(tagname: T): Pick<StylesData, T> => {  
        const tagPath = this.path(tagname)

        const data: string = FileSystem.readFileSync(tagPath, 'utf-8')

        return JSON.parse(data)
    }

    public static combine = (): StylesData => {
        return {
            ...this.read('button'), 
            ...this.read('div'), 
            ...this.read('form'), 
            ...this.read('h1'), 
            ...this.read('h3'), 
            ...this.read('header'), 
            ...this.read('img'), 
            ...this.read('input'), 
            ...this.read('label'), 
            ...this.read('li'), 
            ...this.read('nav'), 
            ...this.read('p'), 
            ...this.read('path'), 
            ...this.read('section'), 
            ...this.read('span'), 
            ...this.read('svg'), 
            ...this.read('textarea'), 
            ...this.read('ul'),
        }
    }
}

export default Styles
