import styled from 'styled-components'
import { IDisplay, IGlobal, IProportions } from '../models/global'


interface ICard extends IGlobal, IDisplay, IProportions {
  shadowcolor?: string,
  shadow?: boolean,
  br?: string,
  border?: string,
}

interface ICardInner extends IGlobal, IDisplay, IProportions {
  textAlign?: 'left' | 'right' | 'center',
  border?: string,
  sx?: string,
  flex?: string,
}

export const Card = styled.article<ICard>`
height: ${(p) => p.h ?? '100%'};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
display: ${(p) => p.display ?? 'flex'};
align-items: ${(p) => p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content:${(p) => p.justifyContent ?? 'space-between'};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
color: ${(p) => p.color};
box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
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
${(p) => p.sx};
`
export const CardHeader = styled.div<ICardInner>`
display: ${(p) => p.display};
flex:${(p) => p.flex};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content: ${(p) => p.justifyContent};
align-items: ${(p) => p.alignitems};
text-align: ${(p) => p.textAlign};
height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
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
${(p) => p.sx};
`
export const CardContent = styled.div<ICardInner>`
display: ${(p) => p.display};
flex: ${(p) => p.flex ?? '1'};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content: ${(p) => p.justifyContent};
align-items: ${(p) => p.alignitems};
text-align: ${(p) => p.textAlign};
height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
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
${(p) => p.sx};
`
export const CardFooter = styled.div<ICardInner>`

display: ${(p) => p.display};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content: ${(p) => p.justifyContent};
align-items: ${(p) => p.alignitems};

flex:${(p) => p.flex};
text-align: ${(p) => p.textAlign};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

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



