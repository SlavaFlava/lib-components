import styled from 'styled-components'
import { IGlobal } from '../models/global'

export interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignitems?: 'center' | 'flex-end' | 'flex-start',
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset',
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
}
export interface IBox extends IRow {
  boxShadow?: string,
  br?: string,
  border?: string,

}

export interface IContainer extends IBox {
  flex?: string,
  fullwidth?: string,
  stretch?: string
}

export interface ISection extends IBox {
  flex?: string
}

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  spacing?: string 
}

export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'};
  flex-wrap: ${(p)=> p.flexWrap ?? 'wrap'};
  flex-direction :${(p)=> p.flexDirection};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
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
${(p)=> p.sx};
`

export const Container = styled.div<IContainer>`
  max-width: ${(p) => p.fullwidth === 'true' ? '100%' : '1300px'};
  flex: ${(p) => p.flex};
  flex-wrap: ${(p)=> p.flexWrap ?? 'wrap'};
  flex-direction: ${(p)=> p.flexDirection};
  width: 100%;
  margin: auto;
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent };
  align-items: ${(p) => p.alignitems };
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
${(p)=> p.sx};
`

export const Col = styled.div<ICol>`
display: ${(p) => p.display ?? 'block'};
flex-wrap: ${(p)=> p.flexWrap};
flex-direction: ${(p)=> p.flexDirection};
justify-content: ${(p) => p.justifyContent };
align-items: ${(p) => p.alignitems };
box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
flex-wrap: wrap;
flex-basis: ${(p) => p.size == 1 ? `calc(8.3% - ${p.spacing ?? '15px'})` :
    p.size == 2 ? `calc(16.6% - ${p.spacing ?? '15px'})` :
      p.size == 3 ? `calc(25% - ${p.spacing ?? '15px'})` :
        p.size == 4 ? `calc(33.3% - ${p.spacing ?? '15px'})` :
          p.size == 5 ? `calc(41.6% - ${p.spacing ?? '15px'})` :
            p.size == 6 ? `calc(50% - ${p.spacing ?? '15px'})` :
              p.size == 7 ? `calc(58.3% - ${p.spacing ?? '15px'})` :
                p.size == 8 ? `calc(66.6% - ${p.spacing ?? '15px'})` :
                  p.size == 9 ? `calc(75% - ${p.spacing ?? '15px'})` :
                    p.size == 10 ? `calc(83.3% - ${p.spacing ?? '15px'})` :
                      p.size == 11 ? `calc(91.6% - ${p.spacing ?? '15px'})` :
                        p.size == 12 ? `calc(100% - ${p.spacing ?? '0'})` :
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
${(p)=> p.sx};
`

export const Box = styled.div<IBox>`
display: ${(p) => p.display ?? 'block'};
flex-wrap: ${(p)=> p.flexWrap ?? 'wrap'};
flex-direction: ${(p)=> p.flexDirection};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items: ${(p) => p.alignitems ?? 'center'};
box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
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
export const Section = styled.section<ISection>`
flex-wrap: ${(p)=> p.flexWrap ?? 'wrap'};
flex: ${(p) => p.flex};
flex-direction: ${(p)=> p.flexDirection};
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent};
align-items: ${(p) => p.alignitems};
box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
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