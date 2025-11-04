import { useRef } from "react";





   export function Form({add}) {
            const inputRef = useRef();

      return <form onClick={ e => {
           e.preventDefault();
           add(inputRef.current.value);
           e.currentTarget.reset();
      } } > 

               <input type="text" ref={inputRef} placeholder="Todo list..."/>
               <button type="submit" >+</button>

             </form>
   }