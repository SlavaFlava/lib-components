import styled from 'styled-components'
import { IBox } from '../layout'

interface IFooter extends IBox{  
minHeight?: string
}


export const LFooter = styled.footer<IFooter>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items:${(p) => p.alignItems ?? 'center'};
background-color: ${(p) => p.bg};
box-shadow: ${(p) => p.shadow};
border-radius: ${(p) => p.br};
border: ${(p) => p.border};
padding: 
${(p) => p.pt ?? 0}
${(p) => p.pr ?? 0}
${(p) => p.pb ?? 0}
${(p) => p.pl ?? 0};
margin:
 ${(p) => p.mt ?? 0}
 ${(p) => p.mr ?? 0}
 ${(p) => p.mb ?? 0}
 ${(p) => p.ml ?? 0};
`