import { Image } from "../../../my-lib/components/image"
import { List, ListItem } from "../../../my-lib/components/list"

const ComponentsList = () => {

  return (
  <>
   <List mt="30px" fs="20px" listStyle='circle'>
    <ListItem beforeStyle='circle'>
      Lorem, ipsum dolor.
    </ListItem>
    <ListItem beforeStyle='circle'>
      Lorem, ipsum dolor.
    </ListItem>
    <ListItem beforeStyle='circle'>
      Lorem, ipsum dolor.
    </ListItem>
    <ListItem beforeStyle='circle'>
      Lorem, ipsum dolor.
    </ListItem>
   </List>
  </>
  )
}
export default ComponentsList