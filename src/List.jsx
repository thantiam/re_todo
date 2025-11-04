

export function List({children}) {
    return <ul style={{ listStyle:'none', background: '#2a2a2a', borderRadius: 6, padding:21 }} >
                {children}
           </ul>
}