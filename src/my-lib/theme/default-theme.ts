
export interface ITheme {
  primary?: string,
  fontPrimary?: string,

  secondary?: string,
  fontSecondary?: string,

  mainbg?: string
  mainColor?: string,

  paperbg?: string,
  paperColor?: string

  fontColorBg?: string,
  bgPrimary?: string,
  bgSecondary?: string,
  bgAccent?: string
} 



export const defaultTheme:ITheme = {
  primary: '#6A7578',
  fontPrimary: '#FAF8F7',

  secondary: '#556170',
  fontSecondary: '#FAF8F7',
  
  mainbg: '#F3F6F9',
  mainColor: 'black',

  paperbg: '#FAF8F7',
  paperColor: '#465D76',

  fontColorBg: '#FAF8F7',
  bgPrimary: '#8CA5B5',
  bgSecondary: '#2D3C4A',
  bgAccent: '#587682'
}
export const purpleTheme:ITheme = { 
  primary: '#9D4C4C',
  fontPrimary: '#FAF8F7',

  secondary: '#8E4254',
  fontSecondary: '#FAF8F7',

  paperbg: '#FAF8F7',
  paperColor: '#465D76',
  mainColor: '#503852',

  fontColorBg: '#FAF8F7',
  bgPrimary: '#BE6C9F',
  bgSecondary: '#7B577F',
  bgAccent: '#AF6EA1'
}


