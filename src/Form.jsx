// import { useRef } from "react";



//    export function Form({add}) {
//             const inputRef = useRef();

//       return <form style={{ marginBottom: 12 }} onClick={ e => {
//            e.preventDefault();
//            add(inputRef.current.value);
//            e.currentTarget.reset();
//       } } > 

//                <input type="text" ref={inputRef} placeholder="Todo list..."/>
//                <button type="submit" >+</button>

//              </form>
//    }





import { useRef } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export function Form({ add }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) add(value);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        inputRef={inputRef}
        label="Todo list"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" color="#608000">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}