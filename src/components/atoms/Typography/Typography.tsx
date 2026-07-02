import { forwardRef } from 'react'
import { Typography as AntdTypography } from 'antd'

import type { TypographyProps } from './Typography.types'

export const ForwardedTypography = forwardRef<HTMLDivElement, TypographyProps>(
  (
    {
      variant = 'text',
      children,
      className = '',
      textProps = {},
      titleProps = {},
      paragraphProps = {},
      ...rest
    },
    ref
  ) => {
    const componentsMap = {
      text: AntdTypography.Text,
      title: AntdTypography.Title,
      paragraph: AntdTypography.Paragraph,
    }

    const Component = componentsMap[variant]

    const props = variant === 'text' ? textProps : variant === 'title' ? titleProps : paragraphProps

    return (
      <Component ref={ref} className={className} {...props} {...rest}>
        {children}
      </Component>
    )
  }
)

export const TypographyAtom = (props: TypographyProps) => <ForwardedTypography {...props} />
