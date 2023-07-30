export interface IGlobal {
  p?:string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  m?:string,
  mt?: string,
  mb?: string,
  ml?: string,
  mr?: string,
  bg?: string,
  color?: string,
  sx?: string,
}

export interface IDisplay {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignitems?: 'center' | 'flex-end' | 'flex-start',
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset',
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
}

export interface IProportions {
  h?: string
  w?: string
  minH?: string
  minW?: string
  maxH?: string
  maxW?: string
}

