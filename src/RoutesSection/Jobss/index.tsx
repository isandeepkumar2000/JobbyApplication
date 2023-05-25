import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AiOutlineSearch } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
import { Redirect } from "react-router-dom";
import Header from "../Header";
import JobItem from "../JobItem";
import {
  FilterHeading,
  FilterLabel,
  JobBgContainer,
  LineBrake,
  NameEl,
  ProfileContainer,
  ProfileFilterContainer,
  ProfileImg,
  SearchContainer,
  SearchEl,
  SearchIconContainer,
  ShorMargin,
  ShortBio,
  ShortMargin,
} from "./stylecomponents";
import { JobbyFindJobButton } from "../Homes/stylecomponents";

export type JobsType = {
  id: string;
  companyLogoUrl: string;
  employmentType: string;
  jobDescription: string;
  location: string;
  packagePerAnnum: string;
  rating: number;
  title: string;
  company_logo_url: string;
  employment_type: string;
  job_description: string;
  package_per_annum: string;
};

const jobDetailsLodingStatus = {
  success: "SUCCESS",
  loading: "LOADING",
  failure: "FAILURE",
};

const Jobs = () => {
  const [jobslist, setJobsList] = useState([]);
  const [userInfo, setUserInfo] = useState({
    profileImgUrl: "",
    name: "",
    shortBio: "",
    isProfileDetailsLoaded: false,
  });
  const [isJobDetailsLoaded, setJobDetailsLoadStatus] = useState(
    jobDetailsLodingStatus.loading
  );
  const [employmentType, setEmploymentType] = useState("");
  const [minimumPackage, setMinimumPackage] = useState("");
  const [titleSearchInput, setTitleSearchInput] = useState("");

  const OnFailure = () => {
    return (
      <div>
        <JobbyFindJobButton>Retry</JobbyFindJobButton>
      </div>
    );
  };

  useEffect(() => {
    async function fetchData() {
      setJobDetailsLoadStatus(jobDetailsLodingStatus.loading);

      const jwtToken = Cookies.get("jobby_app_jwt_token");
      const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minimumPackage}&search=${titleSearchInput}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok === true) {
        const updatedListData = data.jobs.map((eachJob: JobsType) => ({
          companyLogoUrl: eachJob.company_logo_url,
          employmentType: eachJob.employment_type,
          id: eachJob.id,
          jobDescription: eachJob.job_description,
          location: eachJob.location,
          packagePerAnnum: eachJob.package_per_annum,
          rating: eachJob.rating,
          title: eachJob.title,
        }));
        setJobsList(updatedListData);
        setJobDetailsLoadStatus(jobDetailsLodingStatus.success);
      } else {
        setJobDetailsLoadStatus(jobDetailsLodingStatus.failure);
      }

      const profileUrl = "https://apis.ccbp.in/profile";
      const profileRequestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const profileInfoResponse = await fetch(
        profileUrl,
        profileRequestOptions
      );
      const profileData = await profileInfoResponse.json();

      setUserInfo({
        profileImgUrl: profileData.profile_details.profile_image_url,
        name: profileData.profile_details.name,
        shortBio: profileData.profile_details.short_bio,
        isProfileDetailsLoaded: true,
      });
    }
    fetchData();
  }, [employmentType, minimumPackage, titleSearchInput]);

  const onChangeofEmploymentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    if (employmentType !== "") {
      let t = employmentType.concat(",", e.target.value);
      setEmploymentType(t);
    } else {
      setEmploymentType(e.target.value);
      // console.log(employmentType)
    }
  };

  const onChangeOfMinimumSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinimumPackage(e.target.value);
  };

  const onChangeOfSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    setTitleSearchInput(e.target.value);
  };

  const getDifferentFilters = () => {
    return (
      <>
        <LineBrake className="line-break" />
        <div className="TypeOfEmployment">
          <FilterHeading className="filter-heading">
            Type of Employment
          </FilterHeading>
        </div>
        <ShorMargin className="FullTime">
          <input
            type="checkbox"
            id="FULLTIME"
            name="fav_language"
            value="FULLTIME"
            onChange={onChangeofEmploymentType}
          />
          <FilterLabel htmlFor="FULLTIME" className="filter-label">
            Full Time
          </FilterLabel>
        </ShorMargin>
        <ShorMargin className="PartTime">
          <input
            type="checkbox"
            id="PARTTIME"
            name="fav_language"
            value="PARTTIME"
            onChange={onChangeofEmploymentType}
          />
          <FilterLabel htmlFor="PARTTIME" className="filter-label">
            Part Time
          </FilterLabel>
        </ShorMargin>
        <ShorMargin className="FreeLance">
          <input
            type="checkbox"
            id="FREELANCE"
            name="fav_language"
            value="FREELANCE"
            onChange={onChangeofEmploymentType}
          />
          <FilterLabel htmlFor="FREELANCE" className="filter-label">
            Freelance
          </FilterLabel>
        </ShorMargin>
        <ShorMargin className="Internship">
          <input
            type="checkbox"
            id="INTERNSHIP"
            name="fav_language"
            value="INTERNSHIP"
            onChange={onChangeofEmploymentType}
          />
          <FilterLabel htmlFor="INTERNSHIP" className="filter-label">
            Internship
          </FilterLabel>
        </ShorMargin>
        <LineBrake className="line-break" />
        <FilterHeading className="filter-heading">Salary Range</FilterHeading>
        <ShorMargin>
          <input
            type="radio"
            id="1000000"
            name="fav_language"
            value="1000000"
            onChange={onChangeOfMinimumSalary}
          />
          <FilterLabel htmlFor="1000000" className="filter-label">
            10 LPA and above
          </FilterLabel>
        </ShorMargin>
        <ShorMargin>
          <input
            type="radio"
            id="2000000"
            name="fav_language"
            value="2000000"
            onChange={onChangeOfMinimumSalary}
          />

          <FilterLabel htmlFor="2000000" className="filter-label">
            20 LPA and above
          </FilterLabel>
        </ShorMargin>
        <ShorMargin>
          <input
            type="radio"
            id="3000000"
            name="fav_language"
            value="3000000"
            onChange={onChangeOfMinimumSalary}
          />
          <FilterLabel htmlFor="3000000" className="filter-label">
            30 LPA and above
          </FilterLabel>
        </ShorMargin>
        <ShorMargin>
          <input
            type="radio"
            id="4000000"
            name="fav_language"
            value="4000000"
            onChange={onChangeOfMinimumSalary}
          />
          <FilterLabel htmlFor="4000000" className="filter-label">
            40 LPA and above
          </FilterLabel>
        </ShorMargin>
      </>
    );
  };

  const getListOfJobs = () => {
    switch (isJobDetailsLoaded) {
      case jobDetailsLodingStatus.loading:
        return <ThreeDots color="white" height={100} width={100} />;
      case jobDetailsLodingStatus.success:
        return (
          <ul>
            {jobslist.map((eachJob) => (
              <JobItem jobDetails={eachJob} />
            ))}
          </ul>
        );
      case jobDetailsLodingStatus.failure:
        return <Redirect to="/login" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <JobBgContainer className="jobs-bg-container" id="jobs-bg-container">
        <div></div>
        <ProfileFilterContainer className="profile-filters-container">
          {!userInfo.isProfileDetailsLoaded ? (
            <ThreeDots color="white" height={100} width={50} />
          ) : (
            <ProfileContainer className="profile-container">
              <ProfileImg
                src={`${userInfo.profileImgUrl}`}
                alt="Profile-Img-Url"
                className="profile-img"
              />
              <ShortMargin>
                <NameEl className="name-el">{userInfo.name}</NameEl>
              </ShortMargin>
              <ShortMargin>
                <ShortBio className="short-bio">{userInfo.shortBio}</ShortBio>
              </ShortMargin>
            </ProfileContainer>
          )}
          {getDifferentFilters()}
        </ProfileFilterContainer>
        <div>
          <SearchContainer className="search-container">
            <SearchEl
              type="search"
              className="search-el"
              placeholder="Search"
              onChange={onChangeOfSearchInput}
            />
            <SearchIconContainer className="search-icon-container">
              <AiOutlineSearch fill="white" />
            </SearchIconContainer>
          </SearchContainer>
          {getListOfJobs()}
        </div>
      </JobBgContainer>
    </>
  );
};

export default Jobs;
