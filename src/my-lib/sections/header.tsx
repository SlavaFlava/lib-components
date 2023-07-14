import styled from 'styled-components'
import { IBox } from '../layout'

interface IHeader extends IBox{
  minHeight?:string
}

export const LHeader = styled.header<IHeader>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p)=> p.justifyContent ?? 'space-between'};
align-items: ${(p)=> p.alignItems ?? 'center'};
box-shadow:${(p)=> p.shadow};
border-radius: ${(p)=> p.br};
border:${(p)=> p.border};
color: ${(p) => p.color};
background: ${(p) => p.bg};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p)=> p.sx};
`