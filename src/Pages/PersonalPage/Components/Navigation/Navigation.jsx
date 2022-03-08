import "./Navigation.css";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import Tabs from "@mui/material/Tabs";
import { useRef, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Navigation() {
  const tabs = ["Bài viết", "Giới thiệu", "Bạn bè", "Ảnh", "Video", "Check"];
  const moreTabs = [
    "Xem thêm",
    "Thể thao",
    "Âm nhạc",
    "Phim",
    "Chương trình Tivi",
    "Sách",
    "Phim",
  ];
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = () => {
    console.info(`You clicked ${moreTabs[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = () => {
    const result = tabs.map((item) => {
      return <Tab value={item} label={item} />;
    });
    return result;
  };

  return (
    <div className="navigation-container">
      <Box className="navigation-box" sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs>{handleChange()}</Tabs>
        <React.Fragment>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button onClick={handleClick}>{moreTabs[selectedIndex]}</Button>
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {moreTabs.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>
      </Box>
      <button>
        <MoreVertIcon></MoreVertIcon>
      </button>
    </div>
  );
}

export default Navigation;
