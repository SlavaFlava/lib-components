import styled from 'styled-components'
import { IGlobal, IProportions } from '../models/global'

interface IAvatar extends IGlobal {
  br?: string,
  shadow?: boolean,
  shadowcolor?: string,
  size?: string,
  fs?: string,
  shadowHover?: string,
}

interface IImage extends IProportions {
  of?: 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'revert' | 'scale-down' | 'unset',
  op?: 'center' | 'top' | 'bottom' | 'right' | 'left',
  filter?: string
}

export const Avatar = styled.div<IAvatar>`
 transition: all 0.3s ease-in-out;
 cursor:pointer;
 width: ${(p) => p.size ?? 50};
 height: ${(p) => p.size ?? 50};
 border-radius: ${(p) => p.br ?? '50%'};
 font-size: ${(p) => p.fs ?? '16px'};
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: ${(p) => p.shadow ? `0px 0px 7px ${p.shadowcolor ?? 'grey'}` : false};
 box-shadow: ${(p) => p.shadowHover ? `0px 0px 0px 4px ${p.shadowcolor ?? 'pink'}` : false};
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
${(p) => p.sx};
&:hover{
  transition: all 0.3s ease-in-out;
  box-shadow: ${(p) => p.shadowHover ? `0px 0px 10px 8px ${p.shadowcolor ?? 'pink'}` : false};
}
`

export const Image = styled.img<IImage>`
 width: ${(p) => p.w ?? '100%'};
 height: ${(p) => p.h ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
 object-fit: ${(p) => p.of ?? 'cover'};
 object-position: ${(p) => p.op ?? 'center'};
 filter: ${(p) => p.filter};
`