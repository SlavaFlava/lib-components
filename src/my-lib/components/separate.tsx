import styled from 'styled-components'

export interface ISeparate {
  h?: string
  bg?: string
  mt?: string
  mb?: string
  sx?: string
}


export const Separate = styled.div<ISeparate>`
  width:100%;
  height:  ${(p) => p.h ?? '1px'};
  background: ${(p) => p.bg ?? 'black'};
  margin-top: ${(p) => p.mt ?? '15px'};
  margin-bottom: ${(p) => p.mb ?? '15px'};    
  ${(p) => p.sx};
`

