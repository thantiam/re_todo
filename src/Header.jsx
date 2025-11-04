  import {
    AppBar,
    Toolbar,
    Typography
  } from "@mui/material"
   
export default function Header(){
   return <AppBar position="static" style={{ background:"#000",}}  >
                <Toolbar>
                  <Typography style={{ fontFamily:'JetBrains Mono', fontWeight: 600, color: '#608000' , fontSize:'1.5em'}} >
                       ToDo List...
                  </Typography>
                </Toolbar>
          </AppBar>
}