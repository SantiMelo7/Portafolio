import type { ReactNode } from 'react'
import type { ParagraphProps as AntdParagraphProps } from 'antd/lib/typography/Paragraph'
import type { TextProps as AntdTextProps } from 'antd/lib/typography/Text'
import type { TitleProps as AntdTitleProps } from 'antd/lib/typography/Title'

export type TypographyVariant = 'text' | 'title' | 'paragraph'

export interface BaseProps {
  children: ReactNode
  className?: string
}

export interface TypographyProps extends BaseProps {
  variant?: TypographyVariant
  textProps?: AntdTextProps
  titleProps?: AntdTitleProps
  paragraphProps?: AntdParagraphProps
}
