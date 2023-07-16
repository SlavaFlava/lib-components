import styled from 'styled-components'
import { IGlobal } from '../models/global'
import { Avatar } from '../components/image'



interface IPopupContent extends IGlobal {
  open?: boolean
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignitems?: 'center' | 'flex-end' | 'flex-start',
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset',
  w?: string,
  h?: string,
  mw?: string,
  mh?: string,

}

interface IPopupEclips {
  eclipseColor?: string,
  eclipseOpacity?: string,
}

export interface IPopup extends IPopupContent, IPopupEclips {
  children: React.ReactNode
  openPopup?: any
}

export const PopupContent = styled.div<IPopupContent>`
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50% );
    width: ${(p) => p.w};
    height: ${(p) => p.h};
    max-width: ${(p) => p.mw};
    max-height: ${(p) => p.mh};
    
    display: ${(p) => p.display};
    flex-wrap: ${(p) => p.flexWrap};
    justify-content: ${(p) => p.justifyContent};
    align-items: ${(p) => p.alignitems};
    color: ${(p) => p.color};
    background: ${(p) => p.bg ?? 'white'};
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

export const PopupEclipse = styled.div<IPopupEclips>`
      position: fixed;
      background-color: ${(p) => p.eclipseColor ?? 'black'};
      opacity: ${(p) => p.eclipseOpacity ?? '0.8'};
      width:100vw;
      height:100vh;
      left:0;
      top:0;
`



export const Popup = (props: IPopup) => {


  return (

    props.open ?
      <>

        <PopupEclipse onClick={() => props.openPopup(false)}

          eclipseColor={props.eclipseColor} eclipseOpacity={props.eclipseOpacity} >
        </PopupEclipse>

        <PopupContent {...props}></PopupContent>

        <Avatar onClick={() => props.openPopup(false)}
          sx={'position:fixed; right:30px; top:30px; transform: rotate(45deg);cursor:pointer'}
           bg='white' fs='40px' size='50px'>
          +
        </Avatar>
      </>
      :
      <></>
  )
}