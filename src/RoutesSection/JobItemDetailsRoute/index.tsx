import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import JobbyHeader from "../Header";
import {
  CompanyLifeImage,
  CompanyLogo,
  Descriptions,
  DescriptionContainer,
  DescriptionHeaderLinkContainer,
  DescriptionImageContainer,
  IconTextContainer,
  JobContainer,
  JobDetailsBGContainer,
  JobLogoImg,
  JobTitleRate,
  LifeAtCompanyContainer,
  ListOfSkills,
  LoaderContainer,
  LocationEmploymentTypePackageContainer,
  LogoTitleRatingContainer,
  RatingEl,
  SectionsDescription,
  SectionsHeader,
  SectionsText,
  SelectedJobContainer,
  SelectedJobSimilar,
  SimilarJobContainer,
  SimilarJobsSection,
  SkillImg,
  SkillNameContainer,
  SkillsContainer,
  SkillsHeading,
  TitleHeading,
  TitleImageContainer,
  TitleRatingContainer,
  Vista,
  VisitEl,
} from "./stylecomponets";
import { JobTypeEl, LocationEl } from "../JobItem/stylecomponets";

const isJobDetailsFetched = {
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

export type JobItemsDetailType = {
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

export type skillsType = {
  name: string;
  image_url: string;
  imageUrl: string;
};

const JobDetailsItem = (props: any) => {
  const { id } = useParams<{ id: string }>();

  const [jobDetailsFetchedStatus, setJobDetailsFetchedStatus] = useState(
    isJobDetailsFetched.loading
  );
  const [jobDetails, setJobDetails] = useState({
    companyLogoUrl: "",
    companyWebsiteUrl: "",
    employmentType: "",
    id: "",
    jobDescription: "",
    lifeAtCompany: { description: "", imageUrl: "" },
    location: "",
    packagePerAnnum: "",
    rating: "",
    skills: [],
    title: "",
    similarJobs: [],
  });

  const JobItemsDetails = async () => {
    const jwtToken = Cookies.get("jobby_app_jwt_token");
    const url = `https://apis.ccbp.in/jobs/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      setJobDetailsFetchedStatus("success");
      const updatedData = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          imageUrl: data.job_details.life_at_company.image_url,
        },
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        skills: data.job_details.skills.map((eachSkill: any) => ({
          name: eachSkill.name,
          imageUrl: eachSkill.image_url,
        })),
        title: data.job_details.title,
        similarJobs: data.similar_jobs.map((eachJob: any) => ({
          companyLogoUrl: eachJob.company_logo_url,
          employmentType: eachJob.employment_type,
          id: eachJob.id,
          jobDescription: eachJob.job_description,
          rating: eachJob.rating,
          title: eachJob.title,
          location: eachJob.location,
        })),
      };
      setJobDetails(updatedData);
    } else {
      setJobDetailsFetchedStatus("failure");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await JobItemsDetails();
    };
    fetchData();
  }, [JobItemsDetails]);

  const getDescriptionSection = () => {
    return (
      <DescriptionContainer
        className="description-container"
        id="description-container"
      >
        <DescriptionHeaderLinkContainer className="description-header-link-container">
          <SectionsDescription className="sections-Header">
            Description
          </SectionsDescription>
          <VisitEl className="visit-el">
            Visit{" "}
            <Vista
              href={`${jobDetails.companyWebsiteUrl}`}
              rel="noreferrer"
              target="_blank"
            >
              <BsFillArrowUpRightSquareFill fill="blue" />
            </Vista>
          </VisitEl>
        </DescriptionHeaderLinkContainer>
        <SectionsText className="sections-text">
          {jobDetails.jobDescription}
        </SectionsText>
      </DescriptionContainer>
    );
  };

  const getSkillsSection = () => {
    return (
      <SkillsContainer className="skills-container" id="skills-container">
        <SkillsHeading className="sections-Header">Skills</SkillsHeading>
        <ListOfSkills className="list-of-skills">
          {jobDetails.skills.map((eachSkill: skillsType) => (
            <SkillNameContainer className="skill-name-container">
              <SkillImg
                src={`${eachSkill.imageUrl}`}
                alt={`${eachSkill.name}`}
                className="skill-img"
              />
              <SectionsText className="sections-text">{`${eachSkill.name}`}</SectionsText>
            </SkillNameContainer>
          ))}
        </ListOfSkills>
      </SkillsContainer>
    );
  };

  const getLifeAtCompanySection = () => {
    return (
      <LifeAtCompanyContainer
        id="life-at-company-container"
        className="life-at-company-container"
      >
        <SectionsHeader className="sections-Header">
          Life At Company
        </SectionsHeader>
        <DescriptionImageContainer className="description-image-container">
          <SectionsText className="sections-text">
            {jobDetails.lifeAtCompany.description}
          </SectionsText>
          <CompanyLifeImage
            src={`${jobDetails.lifeAtCompany.imageUrl}`}
            alt="Company pic"
            className="company-life-img"
          />
        </DescriptionImageContainer>
      </LifeAtCompanyContainer>
    );
  };

  const getSimilarJobDetails = (eachJob: JobItemsDetailType) => {
    const {
      companyLogoUrl,
      employmentType,
      jobDescription,
      rating,
      title,
      location,
    } = eachJob;

    return (
      <JobContainer className="job-container">
        <TitleImageContainer className="title-img-container">
          <JobLogoImg
            src={`${companyLogoUrl}`}
            alt="Company logo"
            className="job-logo-img"
          />
          <JobTitleRate className="job-title-rate">
            <TitleHeading className="title-heading">{title}</TitleHeading>
            <RatingEl className="rating-el">
              <AiFillStar fill="yellow" />
              {rating}
            </RatingEl>
          </JobTitleRate>
        </TitleImageContainer>
        <Descriptions>
          <SectionsHeader className="sections-Header">
            Description
          </SectionsHeader>
        </Descriptions>
        <Descriptions>
          <SectionsText className="sections-text">
            {jobDescription}
          </SectionsText>
        </Descriptions>
        <Descriptions>
          <IconTextContainer className="icons-text-container">
            <MdLocationOn fill="white" />
            <LocationEl className="location-el">{location}</LocationEl>
            <BsBriefcaseFill fill="white" />

            <JobTypeEl className="job-type-el">{employmentType}</JobTypeEl>
          </IconTextContainer>
        </Descriptions>
      </JobContainer>
    );
  };

  const getJobDetailsFetchedSuccessView = () => {
    return (
      <JobDetailsBGContainer className="job-detail-item-bg-container">
        <JobbyHeader />
        <SelectedJobSimilar className="selected-job-and-similar-jobs-container">
          <SelectedJobContainer
            id="selected-job-container"
            className="selected-job-container"
          >
            <LogoTitleRatingContainer
              id="logo-title-rating-container"
              className="logo-title-rating-container"
            >
              <CompanyLogo
                src={`${jobDetails.companyLogoUrl}`}
                alt="Company Logo"
                className="company-logo"
              />
              <TitleRatingContainer className="title-rating-container">
                <TitleHeading className="title-heading">
                  {jobDetails.title}
                </TitleHeading>
                <RatingEl className="rating-el">
                  <AiFillStar fill="yellow" />
                  {jobDetails.rating}
                </RatingEl>
              </TitleRatingContainer>
            </LogoTitleRatingContainer>
            <LocationEmploymentTypePackageContainer className="location-employmenttype-package-container">
              <LocationEmploymentTypePackageContainer className="location-employment-type-container">
                <MdLocationOn fill="white" />
                <LocationEl className="location-el">
                  {jobDetails.location}
                </LocationEl>
                <BsBriefcaseFill fill="white" />
                <JobTypeEl className="job-type-el">
                  {jobDetails.employmentType}
                </JobTypeEl>
              </LocationEmploymentTypePackageContainer>
              <JobTypeEl className="job-type-el">
                {jobDetails.packagePerAnnum}
              </JobTypeEl>
            </LocationEmploymentTypePackageContainer>
            <hr />
            {getDescriptionSection()}
            {getSkillsSection()}
            {getLifeAtCompanySection()}
          </SelectedJobContainer>
          <SimilarJobsSection
            id="similar-jobs-section"
            className="similar-jobs-section"
          >
            <SectionsHeader className="sections-Header">
              Similar Jobs
            </SectionsHeader>
            <SimilarJobContainer className="similar-job-container">
              {jobDetails.similarJobs.map((eachJob: JobItemsDetailType) =>
                getSimilarJobDetails(eachJob)
              )}
            </SimilarJobContainer>
          </SimilarJobsSection>
        </SelectedJobSimilar>
      </JobDetailsBGContainer>
    );
  };

  const getJobDetails = () => {
    switch (jobDetailsFetchedStatus) {
      case isJobDetailsFetched.loading:
        return (
          <LoaderContainer className="loader-container">
            <ThreeDots
              color="black"
              height={150}
              width={100}
              // className=""
            />
          </LoaderContainer>
        );

      case isJobDetailsFetched.success:
        console.log("success");
        return getJobDetailsFetchedSuccessView();
      default:
        return null;
    }
  };

  return <>{getJobDetails()}</>;
};

export default JobDetailsItem;
