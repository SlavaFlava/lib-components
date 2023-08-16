import styled from 'styled-components'
import { IDisplay, IGlobal } from '../models/global'

interface IFooter extends IGlobal, IDisplay{
  minH?:string
}

export const LFooter = styled.footer<IFooter>`
min-height: ${(p) => p.minH};

display: ${(p) => p.display ?? 'block'};
justify-content: ${(p)=> p.justifycontent};
align-items: ${(p)=> p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};

color: ${(p) => p.color ?? p.theme.fontColorBg};
background: ${(p) => p.bg ?? p.theme.bgSecondary};
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
${(p) => p.sx};
`