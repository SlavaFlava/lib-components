import { useState } from 'react';
import { Tab, Tabs, TabsContent, TabsWrapper } from '../../../my-lib/blocks/tabs';


const Sections = () => {

  const [tabIndex, setTabIndex] = useState(0)

  const dataTabs = [
    {
      tab: 'tab 0',
      content: '   Lorem0000, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    },
    {
      tab: 'tab 1',
      content: '   Lorem1111, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    },
    {
      tab: 'tab 2',
      content: '   Lorem2222, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    },
    {
      tab: 'tab 3',
      content: '   Lorem3333, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    }
  ]



  return (
    <TabsWrapper mw='600px' m='auto' bg='orange' p='20px' mt='35px' color='white'>
      <Tabs p='10px' sx="border-bottom:2px solid white; text-transform:uppercase" mb='20px'>
        {
          dataTabs.map((tab, index) => (
            <Tab index={index} onClick={() => setTabIndex(index)}>{tab.tab}</Tab>
          ))
        }
      </Tabs>
      {
        dataTabs.map((content, index) => (
          tabIndex===index
          ?
          <TabsContent p='20px' index={index}>
            {content.content}
          </TabsContent>
          :
          false
        ))
      }
    </TabsWrapper>
  )
}
export default Sections 