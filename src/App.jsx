import { useState } from "react";

import { Item } from "./Item";
//import { List } from "./List";
import { Form } from "./Form";
import Header from "./Header";
import { Container, Divider, List } from "@mui/material";


        

export default function App() {
              
               const [data,setData] = useState([]);

              const add = name => {
                    if (name == "") return false;
                    const id = data.length ? data[0].id + 1 : 1;
           setData([{id, name, done: false}, ...data]);
        }

              const toggle = id => {
               setData(data.map(data => {
                    if (data.id == id) data.done = !data.done;
                  return data;
               }));
              }

              const remove = id => {
                  setData(data.filter(data => data.id != id));
              }
     return <>
               <Header />

               <Container maxWidth="sm" sx={{mt:6,}} >
                    <Form add = {add}/>
                    <br /><br />
                      <div style={{ color:'#e11616ff', fontFamily:'JetBrains Mono', fontWeight:600, fontStyle: 'italic', fontSize: '1.2em',}} > Do - { data.filter(data => !data.done).length } </div>
                      <List>
                          { 
                           data.filter(data => !data.done).map(data => (
                               <Item 
                                   key = {data.id}
                                   data = {data}
                                   toggle = {toggle}
                                   remove = {remove}
                                 />
                           ) )
                           }
                      </List>
                    
                      <Divider sx={{ my: 3 }} />
                      

                      <div style={{ color:'#608000', fontFamily:'JetBrains Mono', fontWeight:600, fontStyle: 'italic', fontSize: '1.2em' }} > Done - { data.filter(data => data.done).length } </div>
                      <List>
                          { 
                           data.filter(data => data.done).map(data => (
                               <Item 
                                   key = {data.id}
                                   data = {data}
                                   toggle = {toggle}
                                   remove = {remove}
                                 />
                           ) )
                           }
                      </List>
               </Container>       

            </> 
}