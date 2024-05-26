import React, { useReducer } from "react";
import InputDisplay from "./components/InputDisplay";
import InputField from "./components/InputField";
import { v4 as uuidv4 } from "uuid";

function reduced(state, action) {
  if (action.type === "added") {
    return [...state, { id: action.id, item: action.newItem }];
  } else if (action.type === "deleted") {
    return state.filter((item) => item.id !== action.deleteId);
  } else if (action.type === "edited") {
    // return [
    //   ...state.filter((item) => item.id !== action.refId),
    //   { id: action.refId, item: action.updatedItem },
    // ];
    const index = state.findIndex((item) => item.id === action.refId);

    state[index] = { ...state[index], item: action.updatedItem };
    return [...state];
  }
}

function App() {
  const [state, dispatch] = useReducer(reduced, []);

  function addItem(item) {
    dispatch({
      type: "added",
      newItem: item,
      id: uuidv4(),
    });
  }

  function deleteItem(id) {
    dispatch({
      type: "deleted",
      deleteId: id,
    });
  }

  function editItem(editedValue, id) {
    dispatch({
      type: "edited",
      updatedItem: editedValue,
      refId: id,
    });
  }

  return (
    <>
      <InputField addItem={addItem} />
      {state.map((val, key) => (
        <InputDisplay
          key={key}
          no={key + 1}
          displayItem={val}
          removeItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </>
  );
}

export default App;
