import styled from 'styled-components'
import { IBorder, IDisplay, IFonts, IGlobal, IProportions } from '../models/global'


interface ICard extends  IDisplay, IProportions, IBorder, IGlobal{
 
}

interface ICardInner extends IDisplay, IProportions, IFonts, IGlobal{
  border?: string
  flex?: string
}

export const Card = styled.article<ICard>`
display: ${(p) => p.display ?? 'flex'};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content: ${(p) => p.justifycontent ?? 'space-between'};
flex-wrap: ${(p) => p.flexWrap};
align-items: ${(p) => p.alignitems};

height: ${(p) => p.h ?? '100%'};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};

border:${(p) => p.border};
border-radius: ${(p) => p.br};
box-shadow:
${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;`:
         p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;`:  
         p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;`:  
         p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;`:  
         p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;`:  
         p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px`: false  
};
box-shadow:${(p) => p.customShadow}; 

color: ${(p) => p.color ?? p.theme.paperColor};
background: ${(p) => p.bg ?? p.theme.paperbg};
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
  justify-content: ${(p) => p.justifycontent};
  flex-wrap: ${(p) => p.flexWrap};
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignitems};
  text-transform: ${(p) => p.textTransform};

  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  border:${(p) => p.border};
  flex:${(p) => p.flex};

  background: ${(p) => p.bg};
  color: ${(p) => p.color};
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
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-wrap: ${(p) => p.flexWrap};
  flex-direction: ${(p) => p.flexDirection};

  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.textTransform};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  border:${(p) => p.border};
  flex: ${(p) => p.flex ?? '1'};

  background: ${(p) => p.bg};
  color: ${(p) => p.color};
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
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-wrap: ${(p) => p.flexWrap};
  flex-direction: ${(p) => p.flexDirection};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.textTransform};

  border:${(p) => p.border};
  flex: ${(p) => p.flex};

  background: ${(p) => p.bg};
  color: ${(p) => p.color};
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
