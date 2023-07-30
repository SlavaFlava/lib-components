import styled from 'styled-components'
import { IDisplay, IGlobal } from '../models/global'


interface IMenu extends IGlobal, IDisplay {

}

interface IMenuItem extends IGlobal {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  fs?: string,
  ls?: string,
}

export const Menu = styled.ul<IMenu>`
 display: ${(props) => props.display ?? 'flex'};
 display: ${(p) => p.display};
 flex-wrap: ${(p) => p.flexWrap ?? 'wrap'};
 flex-direction: ${(p) => p.flexDirection};
  justify-content: ${(p) => p.justifyContent};
align-items: ${(p) => p.alignitems ?? 'center'};
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
 letter-spacing: ${(p) => p.ls};
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