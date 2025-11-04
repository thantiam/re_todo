import { ListItem, ListItemText, IconButton } from "@mui/material";
import {  
  Delete as DeleteIcon,
  Check as CheckIcon, 
  Replay as UndoneIcon
} from "@mui/icons-material"

export function Item({data, toggle, remove}) {
     return <ListItem style={{ color:'#608000', fontFamily:'JetBrains mono', fontStyle:'italic', fontSize:'1.2em', fontWeight:600, }} >
            
                <IconButton>
                   {!data.done ?
                              <CheckIcon sx={{ color:"#608000" }} onClick={() => toggle(data.id)} /> :
                              <UndoneIcon sx={{ color:"#e15b26ff" }} onClick={() => toggle(data.id)} />
                              }
                 </IconButton>
                
                <ListItemText primary = {data.name} />

                 <IconButton onClick={() => remove(data.id)} >
                    <DeleteIcon sx={{color:"red"}} />
                 </IconButton>
           </ListItem>
}