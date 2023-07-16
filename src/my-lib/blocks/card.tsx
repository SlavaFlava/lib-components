import styled from 'styled-components'
import { IGlobal } from '../models/global'


interface ICard extends IGlobal {
    shadowcolor?: string,
    shadow?: boolean,
    br?: string,
    border?: string,
    display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
    alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
    flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse',
}

interface ICardInner extends IGlobal {
    textAlign?: 'left' | 'right' | 'center',
    minH?: string,
    height?: string,
    display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
    alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
    sx?: string,
    flex?:string,
}

export const Card = styled.article<ICard>`
display: ${(p) => p.display ?? 'flex'};
height: 100%;
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content:${(p) => p.justifyContent ?? 'space-between'};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
color: ${(p) => p.color};
box-shadow: ${(p) => p.shadow ? `0px 0px 15px 3px ${p.shadowcolor ?? 'grey' }` : false};
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
export const CardHeader = styled.div<ICardInner>`
display: ${(p) => p.display};
flex:${(p)=> p.flex};
justify-content: ${(p) => p.justifyContent };
align-items: ${(p) => p.alignitems};
text-align: ${(p) => p.textAlign};
  min-height: ${(p) => p.minH};
  height: ${(p) => p.height};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '15px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p)=> p.sx};
`
export const CardContent = styled.div<ICardInner>`
display: ${(p) => p.display };
flex: ${(p)=> p.flex ?? '1'};
justify-content: ${(p) => p.justifyContent };
align-items: ${(p) => p.alignitems };
text-align: ${(p) => p.textAlign};
  min-height: ${(p) => p.minH};
  height: ${(p) => p.height};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '15px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p)=> p.sx};
`
export const CardFooter = styled.div<ICardInner>`
display: ${(p) => p.display };
justify-content: ${(p) => p.justifyContent };
align-items: ${(p) => p.alignitems };
text-align: ${(p) => p.textAlign};
  min-height: ${(p) => p.minH};
  height: ${(p) => p.height};
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



