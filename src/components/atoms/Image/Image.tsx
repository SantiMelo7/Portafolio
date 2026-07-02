import { Image, type ImageProps as AntdImageProps } from 'antd'

import type { ImageProps } from './Image.types'

export const ImageAtom = (props: ImageProps) => {
  const { imgAntd, ...rest } = props

  if (imgAntd) return <Image {...(rest as AntdImageProps)} />

  return <img {...rest} />
}
