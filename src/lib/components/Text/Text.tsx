import { getClassName } from '@utils'
import React from 'react'
import './style.css'

export function Text({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`${className} ${getClassName('Text')}`}>{children}</p>
  )
}

