import styled from 'styled-components'
import { IBox } from '../layout'

interface IFooter extends IBox{
  minHeight?:string
}

export const LFooter = styled.footer<IFooter>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p)=> p.justifyContent};
align-items: ${(p)=> p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
box-shadow:${(p)=> p.boxShadow}; 
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