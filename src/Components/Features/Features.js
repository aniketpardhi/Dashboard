import React from "react";
import "./features.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featureschart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
          </div>
          <p className="title">Total sale made today</p>
          <p className="amount">$420</p>
          <p className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            minima eum culpa ducimus fugiat nulla voluptatum beatae quo sunt
            deleniti, eius alias quos rem omnis dignissimos dolore. Omnis,
            labore minima?
          </p>
          <div className="summary">
            <div className="item">
                <div className="itemtitle">Target</div>
                <div className="itemresult negative">
                    <KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultamount">$12.4k</div>
                </div>
            </div>

            <div className="item">
                <div className="itemtitle">Last Week</div>
                <div className="itemresult positive">
                    <KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultamount">$12.4k</div>
                </div>
            </div>

            <div className="item">
                <div className="itemtitle">Last Month</div>
                <div className="itemresult positive">
                    <KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultamount">$12.4k</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
