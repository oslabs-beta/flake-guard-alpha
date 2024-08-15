import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import '../../styles/dashboard/sidebar.css';
import logo from '../../assets/logo.png';
import { useParams } from 'react-router-dom';
import { api } from '../../services';

const MenuSidebar: React.FC = () => {
  const { userId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const results = await api.get(`/userDash/${userId}`);
        const resultsArray = results.data;
        // add a yyyy-mm-dd date to each result
        for (const result of resultsArray) {
          const ts = result.created_at;
          result.date = ts.slice(0, ts.indexOf('T'));
        }
        setResults(resultsArray);
      } catch (error) {
        console.log('Error getting results: ', error);
      }
    };
    getResults();
  }, [userId]);
  

  return (
    <div className="sidebar-container">
      <Sidebar backgroundColor="#fdfdfd" className="sidebar">
        <Menu className="sidebar-menu">
          <div className="flakeguard-logo">
            <Link to='/'>
              <img src={logo} alt="flakeguard-logo" style={{ width: '180px' }} />
            </Link>
          </div>
          <Link to={`/dashboard/user/${userId}`}>
            <MenuItem>
              <span><HomeOutlinedIcon /></span>
              <span style={{ marginLeft: '5px' }}>Dashboard</span>
            </MenuItem>
          </Link>
          <Link to={`/codecoverage/user/${userId}`}>
            <MenuItem>
              <span><PercentOutlinedIcon /></span>
              <span style={{ marginLeft: '5px' }}>Code Coverage</span>
            </MenuItem>
          </Link>
          <Link to={`/flakytests/user/${userId}`}>
            <MenuItem>
              <span><BugReportOutlinedIcon /></span>
              <span style={{ marginLeft: '5px' }}>Flaky Tests</span>
            </MenuItem>
          </Link>
          <Link to={`/history/user/${userId}`} state={{results}}>
            <MenuItem>
              <span><HistoryOutlinedIcon /></span>
              <span style={{ marginLeft: '5px' }}>History</span>
            </MenuItem>
          </Link>
        </Menu>
        <div className="footer-sidebar">
          <p>
            <HelpOutlineOutlinedIcon fontSize="small" />
            <span style={{ marginLeft: '5px' }}>Support</span>
          </p>
          <p>
            <MenuBookOutlinedIcon fontSize="small" />
            <Link to='/docs'>
              <span style={{ marginLeft: '5px' }}>Documentation</span>
            </Link>
          </p>
        </div>
      </Sidebar>
    </div>
  );
};

export default MenuSidebar;
