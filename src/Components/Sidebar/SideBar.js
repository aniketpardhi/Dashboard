import React, { useContext } from "react";
import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Pages/Context/DarkModeContext";

const SideBar = () => {
  const{dispatch}=useContext(DarkModeContext);
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
           
            <span className="logo">RajAdmin</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">Main</p>
            <li>
              <DashboardIcon className="icons" />
              <span>DashBoard</span>
            </li>
            <p className="title">Lists</p>
            <Link to="/Users" style={{textDecoration:"none"}}>
            <li>
              <AccountCircleOutlinedIcon className="icons" />
              <span>User</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icons" />
              <span>Products</span>
            </li>
            </Link>
            <li>
              <CreditCardOutlinedIcon className="icons" />
              <span>Order</span>
            </li>
            <li>
              <AirportShuttleOutlinedIcon className="icons" />
              <span>Delivery</span>
            </li>
            <p className="title">UseFull</p>
            <li>
              <PollOutlinedIcon className="icons" />
              <span>Status</span>
            </li>
            <li>
              <NotificationsActiveOutlinedIcon className="icons" />
              <span>Notification</span>
            </li>
            <p className="title">Services</p>
            <li>
              <CloudOutlinedIcon className="icons" />
              <span>System Helth</span>
            </li>
            <li>
              <PsychologyAltOutlinedIcon className="icons" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsOutlinedIcon className="icons" />
              <span>Settings</span>
            </li>
            <p className="title">Users</p>
            <li>
              <SupervisedUserCircleOutlinedIcon className="icons"  />
              <span>Profiles</span>
            </li>
            <li>
              <LoginOutlinedIcon className="icons" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="coloroption" onClick={()=>dispatch({type:"LIGHT"})}></div>
          <div className="coloroption" onClick={()=>dispatch({type:"DARK"})}></div>
         
        </div>
      </div>
    </>
  );
};

export default SideBar;
