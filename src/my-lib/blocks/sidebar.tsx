import styled from 'styled-components'
import { IDisplay, IGlobal } from '../models/global'



export interface ISidebar extends IGlobal, IDisplay {
  boxShadow?: string
  zindex?: string
  type?: 'gradient' | 'primary' | 'secondary' 
}


export const Sidebar = styled.div<ISidebar>`
position: relative;
height: 100% ;
box-shadow:${(p) => p.boxShadow ?? 'rgba(0, 0, 0, 0.15) 2px -1px 10px'};
z-index:${(p) => p.zindex ?? 1};

display: ${(p) => p.display};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};

color: ${(p) => p.color};
background: ${(p) => `
${p.type == 'gradient' 
? `linear-gradient(27deg, ${p.theme.bgSecondary} 0%, ${p.theme.bgPrimary} 100%)`
: p.type == 'primary'
? p.theme.bgPrimary
: p.type == 'secondary'
? p.theme.bgSecondary
: p.bg}
`};
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