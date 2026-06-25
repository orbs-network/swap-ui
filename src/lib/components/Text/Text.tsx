import { getClassName } from '@utils'
import type { HTMLAttributes, ReactNode } from 'react'
import './style.css'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Text({ children, className = '', ...rest }: TextProps) {
  return (
    <p {...rest} className={`${className} ${getClassName('Text')}`}>{children}</p>
  )
}
