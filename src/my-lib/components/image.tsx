import styled from 'styled-components'
import { IGlobal } from '../models/global'

interface IAvatar extends IGlobal {
  br?: string,
  shadow?: boolean,
  shadowColor?: string,
  size?:string,
  fs?:string
}

interface IImage {
  w?:string,
  h?:string,
  of?: 'contain'|'cover'|'fill'|'inherit'|'initial'|'none'|'revert'|'scale-down'|'unset',
  op?: 'center'|'top'|'bottom'|'right'|'left',
  filter?: string
}

export const Avatar = styled.div<IAvatar>`
 width: ${(p)=> p.size ?? 50};
 height: ${(p)=> p.size ?? 50};
 border-radius: ${(p)=> p.br ?? '50%'};
 font-size: ${(p)=> p.fs ?? '16px'};
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: ${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? 'grey' }` : false};
 color: ${(p) => p.color};
 background: ${(p) => p.bg};
 padding-top: ${(p) => p.pt};
 padding-bottom: ${(p) => p.pb};
 padding-left: ${(p) => p.pl};
 padding-right: ${(p) => p.pr};
 margin-top: ${(p) => p.mt};
 margin-bottom: ${(p) => p.mb};
 margin-left: ${(p) => p.ml};
 margin-right: ${(p) => p.mr};
`

export const Image = styled.img<IImage>`
 width: ${(p)=> p.w ?? '100%'};
 height: ${(p)=> p.h ?? '100%'};
 object-fit: ${(p)=> p.of ?? 'cover'};
 object-position: ${(p)=> p.op ?? 'center'};
 filter: ${(p) => p.filter};
`