import React from "react";
import "./Widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { AccountBalanceWalletOutlined } from "@mui/icons-material";



const Widgets = ({type}) => {
    let data;

    // temporerey
    const amount=100;
    const diff=20;

    switch(type){
        case "user":
            data={
                tittle:"USERS",
                isMoney:false,
                link:"See All Users",
                icon: <PersonOutlineOutlinedIcon className="icons" style={{color:"goldenrod", backgroundColor:"rgba(255,0,0,0.2)"}}/>
              
            };
            break;
            case "order":
            data={
                tittle:"ORDERS",
                isMoney:false,
                link:"View All Order",
                icon: <CreditCardOutlined className="icons" style={{color:"crimson", backgroundColor:"rgba(0,128,0,0.2)"}}/>
            };
            break;

            case "earnings":
                data={
                    tittle:"EARNINGS",
                    isMoney:true,
                    link:"View Net Earnings",
                    icon: <MonetizationOnOutlinedIcon className="icons" style={{color:"green", backgroundColor:"rgba(255,0,0,0.2)"}}/>
                };
                break;

                case "balances":
                    data={
                        tittle:"BALANCE",
                        isMoney:true,
                        link:"See Details",
                        icon: <AccountBalanceWalletOutlined className="icons" style={{color:"purple", backgroundColor:"rgba(255,0,0,0.2)"}} />
                    };
                    break;
           
    }
  return (
    <>
      <div className="widgets">
        <div className="left">
          <span className="title">{data.tittle}</span>
          <span className="counter">{data.isMoney && "$"}{amount}</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
            {diff}
          </div>
          {data.icon}
        </div>  
      </div>
    </>
  );
};

export default Widgets;
