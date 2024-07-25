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
import logo from '../../assets/advantage1.png';


const MenuSidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <Sidebar backgroundColor="#fdfdfd" className="sidebar">
        <Menu className="sidebar-menu">
          <MenuItem>
            <HomeOutlinedIcon />
            <Link to="/dashboard">
              <span style={{marginLeft: '5px'}}>Dashboard</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <AnalyticsOutlinedIcon />
            <Link to="/analytics">
              <span style={{marginLeft: '5px'}}>Analytics</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <PercentOutlinedIcon />
            <Link to="/analytics">
              <span style={{marginLeft: '5px'}}>Code Coverage</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <BugReportOutlinedIcon />
            <Link to="/analytics">
              <span style={{marginLeft: '5px'}}>Flaky Tests</span>
            </Link>
          </MenuItem>
          <Typography
            variant="body2"
            fontWeight={600}
            style={{
              opacity: 0.7,
              letterSpacing: '0.5px',
              marginLeft: '10px',
              marginTop: '8px',
            }}
          >
            Charts
          </Typography>{' '}
          <MenuItem>
            {' '}
            <PieChartOutlineOutlinedIcon />
            <Link to="/piechart">
              <span style={{marginLeft: '5px'}}>Pie Charts</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <ShowChartOutlinedIcon />
            <Link to="/linechart">
              <span style={{marginLeft: '5px'}}>Line Charts</span>
            </Link>
          </MenuItem>
          <MenuItem>
            {' '}
            <BarChartOutlinedIcon />
            <Link to="/analytics">
              <span style={{marginLeft: '5px'}}>Bar Charts</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <CalendarViewWeekOutlinedIcon />
            <Link to="/calendar">
              <span style={{marginLeft: '5px'}}>Calendar Charts</span>
            </Link>
          </MenuItem>
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
