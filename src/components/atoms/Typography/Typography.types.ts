import type { ReactNode } from 'react'

export type TypographyVariant = 'text' | 'title' | 'paragraph'

export interface BaseProps {
  children: ReactNode
  className?: string
}

export interface TypographyProps extends BaseProps {
  variant?: TypographyVariant
  textProps?: React.ComponentProps<import('antd').Typography.Text>
  titleProps?: React.ComponentProps<import('antd').Typography.Title>
  paragraphProps?: React.ComponentProps<import('antd').Typography.Paragraph>
}
