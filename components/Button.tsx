import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type buttonSize = 'regular' | 'large' | 'small'
type buttonVariant = 'regular' | 'outline' | 'ghost' | 'link'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant
  size?: buttonSize
  children: ReactNode
}

const Button = ({
  size = 'regular',
  variant = 'regular',
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        'h-fit w-fit rounded-lg text-xs font-medium transition-all',
        'disabled:cursor-not-allowed disabled:opacity-50',
        size === 'large' && 'px-5 py-3 text-base',
        size === 'regular' && 'px-4 py-2 text-sm',
        size === 'small' && 'px-2 py-2',
        variant === 'regular' &&
          'bg-brand text-white hover:bg-brand-dark disabled:hover:bg-brand',
        variant === 'outline' &&
          'border border-brand text-brand hover:border-brand-dark hover:bg-brand-light disabled:border-brand disabled:bg-transparent',
        variant === 'ghost' &&
          'text-brand hover:bg-brand-light disabled:hover:bg-transparent',
        variant === 'link' && 'text-brand hover:underline disabled:no-underline'
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
