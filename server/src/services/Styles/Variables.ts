import FileSystem from 'fs'
import path from 'path'

import type { IVariables, Theme, Variable } from '../../types/entities/styles'

class Variables {
    public static readonly __dirname = path.resolve()

    public static path = <V extends Variable>(variable: V) => {
        return path.join(this.__dirname, 'src', 'styles', 'variables', variable + '.json')
    }

    public static read = <V extends Variable>(variable: V): Theme<V> => {
        const path = this.path(variable)

        const string = FileSystem.readFileSync(path, 'utf-8')
        
        return {
            [variable]: JSON.parse(string)
        } as Theme<V>
    }

    public static getAll = (): IVariables => {
        const general = this.read('general')
        const light = this.read('light')
        const dark = this.read('dark')

        return {
            ...general,
            ...light,
            ...dark,
        }
    }

    public static write = <V extends Variable>(variable: V, newData: object): void => { 
        const path = this.path(variable)

        const data = this.read(variable)

        const [key] = Object.keys(data[variable])

        FileSystem.writeFileSync(path, JSON.stringify({
            [key]: {
                ...data[variable][key], 
                ...newData
            }
        }, null, 4))
    }

    public static update = (newData: object, variable: Variable) => {
        this.write(variable, newData)

        return this.read(variable)
    }
}

export default Variables
