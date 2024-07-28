import React from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import '../../styles/dashboard/sidebar.css'
import logo from '../../assets/logo.png';
import {useParams} from 'react-router-dom';


const MenuSidebar: React.FC = () => {
  const {userId} = useParams();

  return (
    <div className="sidebar-container">
      <Sidebar backgroundColor="#fdfdfd" className="sidebar">
        <Menu className="sidebar-menu">
        <div className="flakeguard-logo">
          <Link to='/'>
          <img src={logo} alt="flakeguard-logo" style={{width:'140px'}} />
          </Link>
        </div>
            <Link to={`/dashboard/user/${userId}`}>
              <MenuItem>
                <span><HomeOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>Dashboard</span>
              </MenuItem>
            </Link>
            <Link to={`/codecoverage/user/${userId}`}>
              <MenuItem>
                <span><PercentOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>Code Coverage</span>
              </MenuItem>
            </Link>
            <Link to={`/flakytests/user/${userId}`}>
              <MenuItem>
                <span><BugReportOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>Flaky Tests</span>
              </MenuItem>
            </Link>
            <Link to={`/history/user/${userId}`}>
              <MenuItem>
                <span><HistoryOutlinedIcon /></span>
                <span style={{marginLeft: '5px'}}>History</span>
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
