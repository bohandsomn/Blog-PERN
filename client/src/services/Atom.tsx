import React from 'react'
import styled, { 
    CSSObject, 
    InterpolationFunction, 
    StyledComponentPropsWithRef, 
    ThemedStyledFunction, 
    ThemedStyledProps
} from 'styled-components'

import { useAppSelector, useCheck } from '../hooks'
import { stylesSelector } from '../store/selector'

import type { TagName, Topics } from '../types/styles'

type Props<T extends TagName> = JSX.IntrinsicElements[T] & { 
    topic?: Topics[T]
}
        
type StyledProps<T extends TagName> = {
    fromServer: CSSObject | TemplateStringsArray | InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<T>, any>>
}

class Atom {
    static create = <T extends TagName>(tagName: T) => {
        const Component = this.styled(tagName) as any
        
        return React.forwardRef<unknown, Props<T>>(({ topic, ...props }, ref) => {
            const styles = useAppSelector(stylesSelector)
            const check = useCheck(styles)

            if (!check.boolean) {
                return <></>
            }

            const fromServer = check.data?.[tagName]?.[topic || '']
        
            return (
                <Component 
                    fromServer={fromServer} 
                    ref={ref} 
                    {...props} 
                />
            )
        }) 
    }

    static styled = <T extends TagName>(tagName: T) => {
        const themedStyledFunction = styled[tagName] as never as ThemedStyledFunction<T, any, {}, never>

        return themedStyledFunction<StyledProps<T>>(({ fromServer }) => fromServer) 
    }
}

export default Atom
