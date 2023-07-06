import styled from 'styled-components'
import { IGlobal } from '../models/global'

export interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignItems?: 'center' | 'flex-end' | 'flex-start',
}
export interface IBox extends IRow {
  shadow?: string,
  br?: string,
  border?: string,
}

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  spacing?: string
}


export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`

export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'};
  background-color: ${(p) => p.bg};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items:${(p) => p.alignItems ?? 'center'};
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

export const Col = styled.div<ICol>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items:${(p) => p.alignItems ?? 'center'};
background-color: ${(p) => p.bg};
box-shadow: ${(p) => p.shadow};
border-radius: ${(p) => p.br};
border: ${(p) => p.border};
flex-wrap: wrap;
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
 flex-basis: ${
     (p) => p.size == 1 ? `calc(8.3%  - ${p.spacing ?? '15px'})` :
            p.size == 2 ? `calc(16.6%  - ${p.spacing ?? '15px'})` :
            p.size == 3 ? `calc(25%  - ${p.spacing ?? '15px'})` :
            p.size == 4 ? `calc(33.3%  - ${p.spacing ?? '15px'})` :
            p.size == 5 ? `calc(41.6%  - ${p.spacing ?? '15px'})` :
            p.size == 6 ? `calc(50%  - ${p.spacing ?? '15px'})` :
            p.size == 7 ? `calc(58.3%  - ${p.spacing ?? '15px'})` :
            p.size == 8 ? `calc(66.6%  - ${p.spacing ?? '15px'})` :
            p.size == 9 ? `calc(75%  - ${p.spacing ?? '15px'})` :
            p.size == 10 ? `calc(83.3%  - ${p.spacing ?? '15px'})` :
            p.size == 11 ? `calc(91.6%  - ${p.spacing ?? '15px'})` :
            p.size == 12 ? `calc(100%  - ${p.spacing ?? '15px'})` :
      'calc(100%)'
  }
 
`

export const Box = styled.div<IBox>`
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