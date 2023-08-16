import styled from 'styled-components'
import { IBorder, IFonts, IGlobal, IProportions } from '../models/global'

interface IList extends IProportions, IBorder, IFonts, IGlobal {
  listStyle?: 'none' | 'decimal' | 'circle' | 'disc' | 'square'
}
interface IListItem extends IFonts, IGlobal {
  beforeStyle?: 'circle' | 'square' | 'LineX' | 'LineY'
  beforeContent?: string
  beforeColor?: string
  beforeSize?: string
  beforeLeft?: string
  beforeTop?: string
  beforeRadius?: string
  styledLink?: 'true'
  br?:string
}

export const List = styled.ul<IList>`
 list-style: ${(p) => p.listStyle};
 ${(p) => p.listStyle ? `
  & li{
    display:list-item;
    &:before{
      display:none;
    }
  }
 `: false}
 height: ${(p) => p.h};
 width: ${(p) => p.w};
 min-height: ${(p) => p.minH};
 min-width: ${(p) => p.minW};
 max-height: ${(p) => p.maxH};
 max-width: ${(p) => p.maxW};

 border:${(p) => p.border};
 border-radius: ${(p) => p.br};
 box-shadow:
 ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };
 box-shadow:${(p) => p.customShadow}; 

 font-size: ${(p) => p.fs};
 font-weight: ${(p) => p.fw};
 letter-spacing: ${(p) => p.ls};
 line-height: ${(p) => p.lh};
 font-style: ${(p) => p.fontStyle};
 text-align: ${(p) => p.textAlign};
 text-transform: ${(p) => p.textTransform};

 color: ${(p) => p.color};
 background: ${(p) => p.bg};
 padding: ${(p) => p.p};
 padding-top: ${(p) => p.pt};
 padding-bottom: ${(p) => p.pb};
 padding-left: ${(p) => p.pl ?? '30px'};
 padding-right: ${(p) => p.pr};
 margin: ${(p) => p.m};
 margin-top: ${(p) => p.mt};
 margin-bottom: ${(p) => p.mb};
 margin-left: ${(p) => p.ml};
 margin-right: ${(p) => p.mr};
 ${(p) => p.sx};
 & li{
  color: ${(p) => p.color};
  a{
    color: ${(p) => p.color};
    text-decoration: none;
  }
 }
`
export const ListItem = styled.li<IListItem>`
 position: relative;
 display: flex;
 align-items: center;
 border-radius: ${(p) => p.br};

 &:before{
  content: '${(p) => p.beforeContent}';
  position: absolute;
  background-color: ${(p) => p.beforeColor ?? '#8696FE'} ;
  left: ${(p) => p.beforeLeft ?? '-15px'};
  top: ${(p) => p.beforeTop};
  ${(p) => p.beforeStyle == 'circle' ? `
  width: ${p.beforeSize ?? '7px'};
  height: ${p.beforeSize ?? '7px'};
  border-radius: ${p.beforeRadius ?? '50%'};`
    : p.beforeStyle == 'square' ? `
  width: ${p.beforeSize ?? '7px'};
  height: ${p.beforeSize ?? '7px'};
  border-radius: ${p.beforeRadius};`
      : p.beforeStyle == 'LineX' ? `
  width: ${p.beforeSize ?? '7px'};
  height: 2px;
  border-radius: ${p.beforeRadius};`
        : p.beforeStyle == 'LineY' ? `
  width: 2px;
  height: ${p.beforeSize ?? '7px'};
  border-radius: ${p.beforeRadius};`
          : false
  }
 }
${(p) => p.styledLink ?
    `
  & a{
    ${p.fs ? `font-size: ${p.fs};` : false};
    ${p.fw ? `font-weight: ${p.fw};` : false} ;
    ${p.ls ? `letter-spacing: ${p.ls};` : false} ;
    ${p.lh ? `line-height: ${p.lh};` : false} ;
    ${p.fontStyle ? `font-style: ${p.fontStyle};` : false} ;
    ${p.textAlign ? `text-align: ${p.textAlign};` : false} ;
    ${p.textTransform ? `text-transform: ${p.textTransform};` : false}  ;
    ${p.color ? `color: ${p.color};` : false} ;
    ${p.bg ? `background: ${p.bg};` : false} ;
    ${p.p ? `padding: ${p.p};` : false} ;
    ${p.pt ? `padding-top: ${p.pt};` : false} ;
    ${p.pb ? `padding-bottom: ${p.pb};` : false} ;
    ${p.pl ? `padding-left: ${p.pl};` : false} ;
    ${p.pr ? `padding-right: ${p.pr};` : false} ;
     width:100%;
   }
  `
    :

    `
    ${p.fs ? `font-size: ${p.fs};` : false};
    ${p.fw ? `font-weight: ${p.fw};` : false} ;
    ${p.ls ? `letter-spacing: ${p.ls};` : false} ;
    ${p.lh ? `line-height: ${p.lh};` : false} ;
    ${p.fontStyle ? `font-style: ${p.fontStyle};` : false} ;
    ${p.textAlign ? `text-align: ${p.textAlign};` : false} ;
    ${p.textTransform ? `text-transform: ${p.textTransform};` : false}  ;
    ${p.color ? `color: ${p.color};` : false} ;
    ${p.bg ? `background: ${p.bg};` : false} ;
    ${p.p ? `padding: ${p.p};` : false} ;
    ${p.pt ? `padding-top: ${p.pt};` : false} ;
    ${p.pb ? `padding-bottom: ${p.pb};` : false} ;
    ${p.pl ? `padding-left: ${p.pl};` : false} ;
    ${p.pr ? `padding-right: ${p.pr};` : false} ;
  `
  }
 margin: ${(p) => p.m};
 margin-top: ${(p) => p.mt ?? '8px'};
 margin-bottom: ${(p) => p.mb};
 margin-left: ${(p) => p.ml};
 margin-right: ${(p) => p.mr};
 ${(p) => p.sx};
 & a{
    color: ${(p) => p.color};
  }
`