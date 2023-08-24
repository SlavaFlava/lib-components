import styled from 'styled-components'
import { IBorder, IDisplay, IGlobal, IProportions } from '../models/global'

export interface IRow extends IGlobal, IDisplay { 

}

export interface IBox extends IGlobal, IDisplay, IProportions {
  boxShadow?: string
  br?: string
  border?: string
}

export interface IContainer extends IBox {
  flex?: string
  fullwidth?: string
}

export interface ISection extends IBox {
  flex?: string
}

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spacing?: string
}

export interface IPaper extends IBox, IBorder {

}

export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'}; 
  flex-wrap: ${(p) => p.flexWrap ?? 'wrap'};
  flex-direction: ${(p) => p.flexDirection};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};

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
  ${(p) => p.sx};
`

export const Container = styled.div<IContainer>`
  margin: auto;


  height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.fullwidth === 'true' ? '100%' : '1300px'};

  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};
  flex-wrap: ${(p) => p.flexWrap};
  flex: ${(p) => p.flex};

  box-shadow:${(p) => p.boxShadow};
  border-radius: ${(p) => p.br};
  border:${(p) => p.border};

  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl ?? '15px'};
  padding-right: ${(p) => p.pr ?? '15px'};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};
`

export const Col = styled.div<ICol>`
display: ${(p) => p.display};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};

box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};

height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};

flex-basis: ${(p) => p.size == 1 ? `calc(8.33% - ${p.spacing ?? '7px'})` :
    p.size == 2 ? `calc(16.66% - ${p.spacing ?? '7px'})` :
      p.size == 3 ? `calc(25% - ${p.spacing ?? '7px'})` :
        p.size == 4 ? `calc(33.33% - ${p.spacing ?? '7px'})` :
          p.size == 5 ? `calc(41.66% - ${p.spacing ?? '7px'})` :
            p.size == 6 ? `calc(50% - ${p.spacing ?? '7px'})` :
              p.size == 7 ? `calc(58.33% - ${p.spacing ?? '7px'})` :
                p.size == 8 ? `calc(66.66% - ${p.spacing ?? '7px'})` :
                  p.size == 9 ? `calc(75% - ${p.spacing ?? '7px'})` :
                    p.size == 10 ? `calc(83.33% - ${p.spacing ?? '7px'})` :
                      p.size == 11 ? `calc(91.66% - ${p.spacing ?? '7px'})` :
                        p.size == 12 ? `calc(100% - ${p.spacing ?? '0px'})` :
                          'calc(100%)'
  };

 color: ${(p) => p.color};
 background: ${(p) => p.bg};
 padding: ${(p) => p.p};
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

export const Box = styled.div<IBox>`
display: ${(p) => p.display};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};

box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};

height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};

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
${(p) => p.sx};
`
export const Paper = styled.div<IPaper>`
display: ${(p) => p.display};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};

height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};

border:${(p) => p.border};
border-radius: ${(p) => p.br ?? p.theme.borderRadius};
box-shadow:
${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;`:
         p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;`:  
         p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;`:  
         p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;`:  
         p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;`:  
         p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px`: false  
};
box-shadow:${(p) => p.customShadow}; 

color: ${(p) => p.color};
background: ${(p) => p.bg ?? p.theme.paper};
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
export const Section = styled.section<ISection>`
flex: ${(p) => p.flex};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
display: ${(p) => p.display};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};

box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};

height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH}; 
max-width: ${(p) => p.maxW};

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
${(p) => p.sx};
`