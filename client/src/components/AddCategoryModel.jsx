import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Modal,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ShopState } from "../context/contextAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const AddCategoryModel = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState();
  const [InputCat, setInputCat] = useState();
  const [checked, setChecked] = React.useState(false);
  const { fetchAgain, setfetchAgain } = ShopState();

  useEffect(() => {
    getFullCategory();
  }, [fetchAgain]);

  //    handle model open and close

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelect("");
    setInputCat("");
    setChecked(false);
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const handlecheck = (event) => {
    setChecked(event.target.checked);
  };

  const getFullCategory = () => {
    axios
      .get("http://localhost:5000/api/category/getfull")
      .then((res) => setCategory(res.data.category));
  };

  //   create a category
  const handleSave = async () => {
    await axios
      .post("http://localhost:5000/api/category/", {
        name: InputCat,
        parentId: select,
      })
      .then((data) => {
        console.log(data);
        setfetchAgain(!fetchAgain);
        handleClose();
      });
  };

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Add Category
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl sx={{ m: 1, minWidth: 120, gap: "30px" }} size="small">
            <Typography variant="h6" color="red">
              Add category
            </Typography>

            <TextField
              id="outlined-basic"
              label="Category"
              variant="outlined"
              onChange={(e) => setInputCat(e.target.value)}
            />

            <Box>
              <Checkbox checked={checked} onChange={handlecheck} />
              <Typography variant="P" color="red" sx={{ fontSize: "11px" }}>
                Add Category to Sub Category ,Optional:dropbox is optional only
                use if you want to make sub category
              </Typography>
            </Box>

            {checked ? (
              <NativeSelect id="select" value={select} onChange={handleChange}>
                {category.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </NativeSelect>
            ) : null}

            <Button variant="outlined" onClick={handleSave}>
              Create
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default AddCategoryModel;
