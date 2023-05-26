import Header from "../Header";
import { useHistory } from "react-router-dom";
import {
  JobbyAppInfoContainer,
  JobbyFindJobButton,
  JobbyInfoHeading,
  JobbyInfoPara,
  JobbyMeetingConferenceImage,
} from "./stylecomponets";

const Home = () => {
  const history = useHistory();
  const onClickOfFindJobs = () => {
    history.push("/jobs");
    // return <Redirect to="/jobs"/>
  };

  return (
    <>
      <JobbyMeetingConferenceImage className="home-bg-container">
        <Header />
        <JobbyAppInfoContainer className="app-info-container">
          <JobbyInfoHeading className="app-info-heading">
            Find The Job That Fits Your Life.
          </JobbyInfoHeading>
          <JobbyInfoPara className="app-info-para">
            Millions of People are searching for job,salary information, company
            reviews. Find the job that fits your abilities and potential.
          </JobbyInfoPara>
        </JobbyAppInfoContainer>
        <>
          <JobbyFindJobButton onClick={onClickOfFindJobs}>
            Find Jobs
          </JobbyFindJobButton>
        </>
      </JobbyMeetingConferenceImage>
    </>
  );
};

export default Home;
