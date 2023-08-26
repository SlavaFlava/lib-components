import styled from 'styled-components'
import { IBorder, IFonts, IGlobal, IProportions } from '../models/global'

interface IAvatar extends IGlobal, IFonts, IBorder {
  size?:string
  shadowHover?: string
  type?: 'primary' | 'secondary'
}

interface IImage extends IProportions {
  of?: 'contain'|'cover'|'fill'|'inherit'|'initial'|'none'|'revert'|'scale-down'|'unset'
  op?: 'center'|'top'|'bottom'|'right'|'left'
  filter?: string
}

export const Avatar = styled.div<IAvatar>`
 transition: all 0.3s ease-in-out;
 cursor: pointer;
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;

 width: ${(p)=> p.size ?? '50px'};
 height: ${(p)=> p.size ?? '50px'};

 border:${(p) => p.border ?? `1px solid ${p.bg ?? p.theme.primary}`};
  border-radius: ${(p) => p.br ?? '50%'};
  box-shadow:${(p) => p.customShadow ? `0px 0px 9px ${p.shadowcolor ?? p.bg ?? p.theme.primary}` : false};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };

 font-size: ${(p)=> p.fs ?? '16px'};
 font-weight: ${(p) => p.fw};
 letter-spacing: ${(p) => p.ls};
 line-height: ${(p) => p.lh};
 font-style: ${(p) => p.fontStyle};
 text-align: ${(p) => p.textAlign};
 text-transform: ${(p) => p.textTransform};

 color: ${(p) => p.color};
 background: ${(p) => p.bg ?? p.theme.color};
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
  box-shadow: ${(p) => p.shadowHover ? `0px 0px 10px 8px ${p.shadowcolor ?? 'pink' }` : false};
 }
`

export const Image = styled.img<IImage>`
 width: ${(p)=> p.w ?? '100%'};
 height: ${(p)=> p.h ?? '100%'};
 min-height: ${(p) => p.minH};
 min-width: ${(p) => p.minW};
 max-height: ${(p) => p.maxH};
 max-width: ${(p) => p.maxW};
 
 object-fit: ${(p)=> p.of ?? 'cover'};
 object-position: ${(p)=> p.op ?? 'center'};
 filter: ${(p) => p.filter};
`