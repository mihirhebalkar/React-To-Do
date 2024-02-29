import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Create from "@mui/icons-material/Create"
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";


export default function TodoForm() {

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    return (
        <ListItem>
            <form>
            <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                onChange={handleChange} 
                value={ text }
                InputProps= {{
                    endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="create todo" edge="end" >
                            <Create />
                          </IconButton>
                        </InputAdornment>
                    ), 
                }}
            />
            </form>
        </ListItem>
    );
}
