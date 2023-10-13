import React from "react";
import "./Home.scss";
import SideBar from "../../Components/Sidebar/SideBar";
import Navbar from "../../Components/Navbar/Navbar";
import Widgets from "../../Components/Widgets/Widgets";
import Features from "../../Components/Features/Features";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar />
        <div className="homecontainer">
          <Navbar />
          <div className="widget">
            <Widgets type="user" />
            <Widgets type="order" />
            <Widgets type="earnings" />
            <Widgets type="balances" />
          </div>
          <div className="charts">
            <Features />
            <Chart title="Last 6 Months (Revenue)" aspect={2/1} />
          </div>
          <div className="listcontainer">
            <div className="listtitle">
              Latest Transactions
            </div>
            <Table/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
