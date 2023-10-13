import React, { useContext } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListIcon from "@mui/icons-material/List";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import { DarkModeContext } from "../../Pages/Context/DarkModeContext";
const Navbar = () => {
  const{dispatch}=useContext(DarkModeContext);
  return (
    <>
      <div className="navbar">
        <hr />

        <div className="wrapper">
          <div className="search">
            <input type="text" name="" id="" placeholder="Search" />
            <SearchOutlinedIcon  />
          </div>

          <div className="items">
            <div className="item">
              <LanguageIcon   className="icons" />
              English
            </div>

            <div className="item">
              <DarkModeOutlinedIcon   className="icons" onClick={()=>dispatch({type:"TOGGLE"})} />
             
            </div>

            <div className="item">
              <FullscreenExitOutlinedIcon   className="icons" />
             
            </div>

            <div className="item">
              <NotificationsNoneOutlinedIcon  className="icons"  />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon  className="icons" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListIcon />
            </div>

            <div className="item">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="avtar"  className="avtar"/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
