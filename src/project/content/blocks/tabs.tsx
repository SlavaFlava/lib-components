import React, { useState } from 'react';
import * as T from '../../../my-lib/blocks/tabs';

const BlocksTabs = () => {

  const [tabIndex, setTabIndex] = useState(0)

  const dataTabs = [
    {
      tab: 'tab 0',
      content: '0Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    },
    {
      tab: '1Lorem ipsum',
      content: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    },
    {
      tab: 'tab 2',
      content: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    },
    {
      tab: 'tab 3',
      content: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    }
  ]

  return (
    <T.TabsWrapper maxW='600px'  m='55px auto' >
    <T.Tabs>
      {
        dataTabs.map((tab, index) => (
          index === tabIndex
            ?
            <T.Tab active='default' tabs='classic' mb='-1px'
              onClick={() => setTabIndex(index)}
              key={index}
            >{tab.tab}</T.Tab>
            :
            <T.Tab tabs='classic'
              onClick={() => setTabIndex(index)}
              key={index}
            >{tab.tab}</T.Tab>
        ))
      }
    </T.Tabs>
    { 
      dataTabs.map((content, index) => (
        index === tabIndex
          ?
          <T.TabsContent bg='white' shadow='variant-1' p='20px' key={index}>
            {content.content}
          </T.TabsContent>
          :
          false
      ))
    }
  </T.TabsWrapper>
  )
}
export default BlocksTabs