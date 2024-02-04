import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@radix-ui/react-tooltip'
import React from 'react'

export interface HintProps{
    label: string,
    children: React.ReactNode,
    side?: 'top'|'bottom'|'left'|'right',
    align?:'start'|'center'|'end',
    sideOffset?: number,
    alignOffset?: number
}


const Hint = ({children,label,align,alignOffset,side,sideOffset}: HintProps) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent className='text-white rounded-sm p-1 bg-black border-black' side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                <p className='text-xs capitalize'>{label}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default Hint