import React, { useMemo } from 'react'
import { Path, Svg } from '../components/UI/atoms'
import { useAppSelector } from '../hooks'
import { themeSelector } from '../store/selector'

class Icon {
    public static readonly create = ({ fill, d, ...init }: Init) => {
        const Component: React.FC<Props> = (props) => {
            const theme = useAppSelector(themeSelector)

            const isArray = useMemo(() => Array.isArray(d), [])
            const color = useMemo(() => fill || (theme === 'dark' ? 'white' : 'black'), [theme])
            
            return (
                <Svg {...{...init, ...props}}>
                    {
                        isArray 
                            ? (d as string[]).map((string, index) => (
                                <Path 
                                    key={index}
                                    fill={color} 
                                    d={string} 
                                />
                            ))
                            : (
                                <Path 
                                    fill={color} 
                                    d={d as string} 
                                />
                            )
                    }
                </Svg>
            )
        }

        return Component
    }
}

type Init = Pick<JSX.IntrinsicElements['svg'], 'fill' | 'viewBox' | 'width' | 'height'> & {
    d: string | string[]
}

type Props = Omit<JSX.IntrinsicElements['svg'], 'ref' | 'd' | 'fill' | 'viewBox'>

export default Icon
