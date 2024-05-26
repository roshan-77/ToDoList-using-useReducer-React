import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function InputDisplay({ displayItem, no, removeItem, editItem }) {
  const [editStatus, setEditStatus] = useState("false");
  const [editedVal, setEditedVal] = useState(displayItem.item);

  function handleEdit(e) {
    setEditedVal(e.target.value);
  }

  function itemEdited() {
    setEditStatus("false");
    editItem(editedVal, displayItem.id);
  }

  return (
    <div style={{ paddingTop: "20px" }}>
      {editStatus === "false" ? (
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "20px", margin: "auto 0" }}>
            {no}. {displayItem.item}
          </div>
          <Button
            onClick={() => removeItem(displayItem.id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={() => setEditStatus("true")}
            variant="outlined"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "50%",
            }}
            style={{ paddingRight: "20px" }}
          >
            <TextField
              contentediable={editStatus}
              value={editedVal}
              onChange={handleEdit}
              suppressContentEditableWarning={true}
              size="small"
            />
          </Box>

          <Button
            onClick={() => removeItem(displayItem.id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={itemEdited}
            variant="outlined"
            startIcon={<DoneIcon />}
          >
            Done
          </Button>
        </div>
      )}
    </div>
  );
}
export default InputDisplay;
