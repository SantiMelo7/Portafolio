import { Image as AntdImage } from 'antd'
import { type ComponentProps, type ImgHTMLAttributes } from 'react'

type NativeImageProps = { imgAntd?: false } & ImgHTMLAttributes<HTMLImageElement>

type AntdImageProps = { imgAntd: true } & ComponentProps<typeof AntdImage>

export type ImageProps = NativeImageProps | AntdImageProps
