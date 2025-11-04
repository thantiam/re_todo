

export function Item({data, toggle, remove}) {
     return <li style={{ color:'#608000', fontFamily:'JetBrains mono', fontStyle:'italic', fontSize:'1.2em', fontWeight:600, }} >
               { !data.done ?
                  <button style={{ marginRight: 6, }} onClick={() => toggle(data.id)} > c </button> :
                  <button style={{ marginRight: 6, }} onClick={() => toggle(data.id)} > u </button> 
               }
                {data.name}
               <button style={{ marginLeft: 6, }} onClick={() => remove(data.id)} > d </button> 
           </li>
}