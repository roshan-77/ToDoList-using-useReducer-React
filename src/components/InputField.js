import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function InputField(props) {
  const [input, setInput] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        style={{ paddingRight: "20px" }}
      >
        <TextField
          fullWidth
          label="Write your to-do item"
          id="fullWidth"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </Box>
      {input !== "" ? (
        <Button
          onClick={() => props.addItem(input)}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      ) : (
        <Button variant="outlined" startIcon={<AddIcon />}>
          Add
        </Button>
      )}
    </div>
  );
}

export default InputField;
