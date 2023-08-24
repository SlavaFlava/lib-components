import styled from 'styled-components'

export interface ISeparate {
  h?: string
  bg?: string
  mt?: string
  mb?: string
  sx?: string
}
export interface ISeparateCol {
  w?: string
  h?: string
  bg?: string
  ml?: string
  mr?: string
  sx?: string
}

export const Separate = styled.div<ISeparate>`
  width: 100%;
  height: ${(p) => p.h ?? "2px"};
  background: ${(p) => p.bg ?? p.theme.fontColor};
  margin-top: ${(p) => p.mt ?? "15px"};
  margin-bottom: ${(p) => p.mb ?? "15px"};
  ${(p) => p.sx};
`
export const SeparateCol = styled.div<ISeparateCol>`
  width: ${(p) => p.h ?? "2px"};
  height: ${(p) => p.h};
  background: ${(p) => p.bg ?? p.theme.fontColor};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};
`