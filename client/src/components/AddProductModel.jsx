import React from "react";
import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
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
  height: 500,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, newCategory, theme) {
  return {
    fontWeight:
      newCategory.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddProductModel = () => {
  const [open, setOpen] = React.useState(false);

  const [category, setCategory] = useState([]);
  const theme = useTheme();
  const [newCategory, setNewCategory] = React.useState([]);
  const [title, settitle] = useState();
  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [link, setLink] = useState();
  const { fetchAgain, setfetchAgain } = ShopState();

  //   *open and close model
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    settitle("");
    setDescription("");
    setCost("");
    setLink("");
    setNewCategory([]);
  };

  useEffect(() => {
    getFullCategory();
  }, [fetchAgain]);

  const getFullCategory = () => {
    axios
      .get("http://localhost:5000/api/category/getfull")
      .then((res) => setCategory(res.data.category));
  };

  //*   select component data

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = () => {
    if (!title || !description || !cost || !newCategory) {
      // toast something(tostify eg)
      alert("please fill all the filleds");
    }
    axios
      .post("http://localhost:5000/api/products", {
        name: title,
        desc: description,
        price: cost,
        picture: link,
        categories: newCategory,
      })
      .then((res) => {
        console.log(res);
        handleClose();
        setfetchAgain(!fetchAgain);
      });
  };

  return (
    <>
      <Button variant="outlined" color="info" onClick={handleOpen}>
        Add Products
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl sx={{ m: 1, width: 300, gap: "20px" }} size="small">
            <TextField
              id="Title"
              label="Title"
              variant="filled"
              onChange={(e) => settitle(e.target.value)}
              required={true}
            />
            <TextField
              multiline
              rows={4}
              id="Desc"
              label="Description"
              variant="filled"
              onChange={(e) => setDescription(e.target.value)}
              required={true}
            />
            <TextField
              id="Cost"
              label="Cost"
              variant="filled"
              onChange={(e) => setCost(e.target.value)}
              required={true}
            />
            <FormLabel id="select">
              All category(multi)
              <p style={{ fontSize: "10px" }}>Select all category it belongs</p>
            </FormLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={newCategory}
              onChange={handleSelectChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              required={true}
            >
              {category.map((cat) => (
                <MenuItem
                  key={cat._id}
                  value={cat.name}
                  style={getStyles(cat.name, cat.name, theme)}
                >
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              onChange={(e) => setLink(e.target.value)}
              id="picture"
              label="Picture(link)"
              variant="filled"
            />
            <Button onClick={handleSubmit} variant="outlined">
              Create
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default AddProductModel;
