import React from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CalendarViewWeekOutlinedIcon from '@mui/icons-material/CalendarViewWeekOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import '../../../styles/dashboard/sidebar.css'
import logo from '../../assets/logo.png';


const MenuSidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <Sidebar backgroundColor="#fdfdfd" className="sidebar">
        <Menu className="sidebar-menu">
        <div className="flakeguard-logo">
          <Link to='/'>
          <img src={logo} alt="flakeguard-logo" style={{width:'140px'}} />
          </Link>
        </div>
            <Link to="/dashboard">
              <MenuItem>
                <span><HomeOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>Dashboard</span>
              </MenuItem>
            </Link>
            <Link to="/analytics">
            <MenuItem>
              <span><AnalyticsOutlinedIcon /></span>
              <span style={{marginLeft: '5px'}}>Analytics</span>
              </MenuItem>
            </Link>
            <Link to="/analytics">
              <MenuItem>
                <span><PercentOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>Code Coverage</span>
              </MenuItem>
            </Link>
            <Link to="/analytics">
              <MenuItem>
                <span><BugReportOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>Flaky Tests</span>
              </MenuItem>
            </Link>         
        </Menu>
        <div className="footer-sidebar">
          <p>
            <HelpOutlineOutlinedIcon fontSize="small" />
            <span style={{marginLeft: '5px'}}>Support</span>
          </p>
          <p>
            <MenuBookOutlinedIcon fontSize="small" />
            <span style={{marginLeft: '5px'}}>Documentation</span>
          </p>
        </div>
      </Sidebar>
    </div>
  );
};

export default MenuSidebar;
