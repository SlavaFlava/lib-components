import styled from 'styled-components'
import { IGlobal } from '../models/global'


interface IMenu extends IGlobal{
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
}

interface IMenuItem extends IGlobal{
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  fs?: string,
  ls?: string,
}

export const Menu = styled.ul<IMenu>`
 display: ${(props) => props.display ?? 'flex'};
 align-items: center;
 background: ${(p) => p.bg};
 padding-top: ${(p) => p.pt};
 padding-bottom: ${(p) => p.pb};
 padding-left: ${(p) => p.pl};
 padding-right: ${(p) => p.pr};
 margin-top: ${(p) => p.mt};
 margin-bottom: ${(p) => p.mb};
 margin-left: ${(p) => p.ml};
 margin-right: ${(p) => p.mr};
${(p)=> p.sx};
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
${(p)=> p.sx};
 a{
  color: ${(p) => p.color};
  text-decoration: none;
  text-transform: ${(p) => p.textTransform};
 }
`