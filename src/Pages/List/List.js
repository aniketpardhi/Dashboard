import React from 'react'
import SideBar from '../../Components/Sidebar/SideBar';
import Navbar from '../../Components/Navbar/Navbar';
import "./List.scss"
import DataTable from '../../Components/Datatable/DataTable';

document.title="React"

const List = () => {
  return (
    <div className='list'>
    <SideBar/>
      <div className="listcontainer">
        <Navbar/>
        <DataTable/>
        datatable
      </div>
    </div>
  )
}

export default List