import styled from 'styled-components'
import { IDisplay, IFonts, IGlobal } from '../models/global'


interface IMenu extends IDisplay, IFonts, IGlobal{

}

interface IMenuItem extends IFonts, IGlobal{

}

export const Menu = styled.ul<IMenu>`
 display: ${(props) => props.display ?? 'flex'};
 justify-content: ${(p) => p.justifycontent};
 align-items: ${(p) => p.alignitems ?? 'center'};
 flex-wrap: ${(p) => p.flexWrap};
 flex-direction: ${(p) => p.flexDirection};

 font-size: ${(p) => p.fs};
 font-weight: ${(p) => p.fw};
 letter-spacing: ${(p) => p.ls};
 line-height: ${(p) => p.lh};
 font-style: ${(p) => p.fontStyle};
 text-align: ${(p) => p.textAlign};
 text-transform: ${(p) => p.textTransform};

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
`
export const MenuItem = styled.li<IMenuItem>`
 font-size: ${(p) => p.fs};
 font-weight: ${(p) => p.fw};
 letter-spacing: ${(p) => p.ls};
 line-height: ${(p) => p.lh};
 font-style: ${(p) => p.fontStyle};
 text-align: ${(p) => p.textAlign};
 text-transform: ${(p) => p.textTransform};

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
 a{
  color: ${(p) => p.color};
  text-decoration: none;
  text-transform: ${(p) => p.textTransform};
 }
`