import styled from 'styled-components'
import { IGlobal } from '../models/global'




interface ITabsWrapper extends IGlobal {
  open?: boolean
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignitems?: 'center' | 'flex-end' | 'flex-start',
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset',
  w?: string,
  h?: string,
  mw?: string,
  mh?: string,
  shadowcolor?: string,
  shadow?: boolean,
  br?: string,
  border?: string,
}

interface ITabs extends ITabsWrapper {
  
}

interface ITab extends IGlobal {
  index: number,
}


interface ITabsContent extends ITabsWrapper {
  index: number,
}


export const TabsWrapper = styled.section<ITabsWrapper>`
    width: ${(p) => p.w};
    height: ${(p) => p.h};
    max-width: ${(p) => p.mw};
    max-height: ${(p) => p.mh};
    display: ${(p) => p.display};
    flex-wrap: ${(p) => p.flexWrap};
    justify-content: ${(p) => p.justifyContent};
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
export const Tabs = styled.ul<ITabs>`
  border-radius: ${(p) => p.br};
border:${(p) => p.border};
box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
    width: ${(p) => p.w};
    height: ${(p) => p.h};
    max-width: ${(p) => p.mw};
    max-height: ${(p) => p.mh};
    display: ${(p) => p.display ?? 'flex'};
    flex-wrap: ${(p) => p.flexWrap};
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
    ${(p) => p.sx};

`
export const Tab = styled.li<ITab>`
    cursor:pointer;
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


export const TabsContent = styled.div<ITabsContent>`
    width: ${(p) => p.w};
    height: ${(p) => p.h};
    max-width: ${(p) => p.mw};
    max-height: ${(p) => p.mh};
    display: ${(p) => p.display};
    flex-wrap: ${(p) => p.flexWrap};
    justify-content: ${(p) => p.justifyContent};
    align-items: ${(p) => p.alignitems};
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



