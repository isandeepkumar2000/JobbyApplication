import { Link, Redirect, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import { MdOutlineLogout } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import {
  HomeJobsIcon,
  JobbyHeaderButton,
  JobbyHeaderContainer,
  JobbyHeaderImage,
  JobbyHeaderJobs,
  MobileVersionIcon,
  NavContainer,
  NavLink,
} from "./stylecomponets";

const Header = () => {
  const history = useHistory();

  const logoutFromApp = () => {
    Cookies.remove("jobby_app_jwt_token");
    history.replace("/");
  };

  return (
    <>

      <JobbyHeaderContainer className="header-container">
        <Link to="/">
          <JobbyHeaderImage
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="logo img"
            className="header-logo-img"
          />
        </Link>
        <NavContainer className="home-jobs-lg-nav-items-container">
          <NavLink>
            <Link to="/" className="nav-link">
              <JobbyHeaderJobs>Home</JobbyHeaderJobs>
            </Link>
            <Link to="/jobs" className="nav-link">
              <JobbyHeaderJobs>Jobs</JobbyHeaderJobs>
            </Link>
          </NavLink>
        </NavContainer>
        <JobbyHeaderButton className="logout-btn" onClick={logoutFromApp}>
          Logout
        </JobbyHeaderButton>
        <HomeJobsIcon className="home-jobs-sm-nav-icons-container">
          <MobileVersionIcon>
            <Link to="/">
              <AiFillHome fill="white" className="sm-nav-icon" />
            </Link>
          </MobileVersionIcon>
          <MobileVersionIcon>
            <Link to="/jobs">
              <BsBriefcaseFill fill="white" className="sm-nav-icon" />
            </Link>
          </MobileVersionIcon>
          <MobileVersionIcon>
            <MdOutlineLogout
              fill="white"
              className="sm-nav-icon"
              onClick={logoutFromApp}
            />
          </MobileVersionIcon>
        </HomeJobsIcon>
      </JobbyHeaderContainer>
    </>
  );
};

export default withRouter(Header);
