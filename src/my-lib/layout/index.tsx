import styled from 'styled-components'
import { IGlobal } from '../models/global'

interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
}
interface IBox extends IRow {
 shadow?: string,
 br?: string,
 border?: string,
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
  justify-content: ${(p)=> p.justifyContent ?? 'space-between'};
  align-items:center;
  padding: 
  ${(p) => p.pt ?? 0}px
  ${(p) => p.pr ?? 0}px
  ${(p) => p.pb ?? 0}px
  ${(p) => p.pl ?? 0}px;
  margin:
     ${(p) => p.mt ?? 0}px
     ${(p) => p.mr ?? 0}px
     ${(p) => p.mb ?? 0}px
     ${(p) => p.ml ?? 0}px;
`

export const Box = styled.div<IBox>`
    display: ${(p) => p.display ?? 'block'};
    background-color: ${(p) => p.bg};
    box-shadow: ${(p)=> p.shadow };
    border-radius: ${(p)=> p.br};
    border: ${(p)=> p.border};
    padding: 
  ${(p) => p.pt ?? 0}px
  ${(p) => p.pr ?? 0}px
  ${(p) => p.pb ?? 0}px
  ${(p) => p.pl ?? 0}px;
    margin:
     ${(p) => p.mt ?? 0}px
     ${(p) => p.mr ?? 0}px
     ${(p) => p.mb ?? 0}px
     ${(p) => p.ml ?? 0}px;
`