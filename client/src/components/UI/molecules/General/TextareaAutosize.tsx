import React, { useCallback, useState } from 'react'
import { Textarea } from '../../atoms'

const TextareaAutosize: React.FC<Props> = ({ onChange, ...props }) => {
    const [state, setState] = useState({
        rows: 2,
        minRows: 2,
    })

    const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        (onChange as React.ChangeEventHandler<HTMLTextAreaElement>)(event)

		const LINE_HEIGHT = 24
		const { minRows } = state
		
		const previousRows = event.target.rows
  	    event.target.rows = minRows 
        
		const currentRows = ~~(event.target.scrollHeight / LINE_HEIGHT)
    
        if (currentRows === previousRows) {
            event.target.rows = currentRows
        }
    
        setState((previousState) => ({
            ...previousState,
            rows: currentRows,
        }))
	}, [])

    return (
        <Textarea 
            onChange={handleChange} 
            rows={state.rows}
            {...props}
        />
    )
}

type Props = typeof Textarea.defaultProps

export default React.memo(TextareaAutosize)