import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import logoheader from "../../../../assets/images/3.png";
function SideBar() {
  let Navigate = useNavigate();
  const [IsCollapsing , setIsCollapsing]= useState(false)

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };

  function Collapse(){
setIsCollapsing(!IsCollapsing)
  }
  return (
    <>
   <div className="sidebar-container p-2">
   <Sidebar collapsed={IsCollapsing}>
        <Menu className=" py-3 text-white ">
          <MenuItem 
           onClick={Collapse}
            className="d-flex justify-content-center align-items-center my-4 px-4 logo-container"
            icon={<img src={logoheader} className="logo-item px-4" />}
            component={<Link to="/Dashboard" />}
          ></MenuItem>
          <MenuItem className='fs-3'
            icon={<i className="fa-solid fa-house fa-lg "></i>}
            component={<Link to="/Dashboard" />}
          >
            Home
          </MenuItem>
          <MenuItem className='fs-1'
            icon={<i className="fa-solid fa-user-group fa-lg"></i>}
            component={<Link to="/Dashboard/User" />}
          >
            
            Users
          </MenuItem>
          <MenuItem className='fs-1'
            icon={<i className="fa-solid fa-grip-vertical fa-lg"></i>}
            component={<Link to="/Dashboard/Recipes" />}
          >
            
            Recipes
          </MenuItem>
          <MenuItem className='fs-1'
            icon={<i className="fa-regular fa-calendar-days fa-lg"></i>}
            component={<Link to="/Dashboard/Categories" />}
          >
            
            Categories
          </MenuItem>
          <MenuItem className='fs-1' icon={<i className="fa-solid fa-lock fa-lg"></i>}>
            
            Change password
          </MenuItem>
          <MenuItem className='fs-1'
            icon={<i className="fa-solid fa-right-from-bracket fa-lg"></i>}
            onClick={logout}
          >
            
            logout
          </MenuItem>
        </Menu>
      </Sidebar>
   </div>
      ;
    </>
  );
}

export default SideBar;
