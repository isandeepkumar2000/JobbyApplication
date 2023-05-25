import { MdLocationOn } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { JobsType } from "../Jobss";
import {
  CompanyLogoImg,
  CustomLink,
  Description,
  DescriptionHeading,
  JobDetailsItemContainer,
  JobTypeEl,
  LocationEl,
  LocationEmploymentTypeContainer,
  LocationTypePackageContainer,
  LogoCompanyNAmeContainer,
  MarginText,
  MarginTextLeft,
  MarginTextLeftRating,
  RatingEl,
  Test,
  TitleJob,
} from "./stylecomponents";
import { TitleRatingContainer } from "../JobItemDetailsRoute/stylecomponents";

interface JobTypePp {
  jobDetails: JobsType;
}

const JobItem: React.FC<JobTypePp> = (props) => {
  //  console.log(props)
  const { jobDetails } = props;
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails;
  return (
    <JobDetailsItemContainer className="job-detail-item-container">
      <Test>
        <CustomLink to={`/jobs/${id}`} className="test">
          <LogoCompanyNAmeContainer className="logo-company-name-container">
            <CompanyLogoImg
              src={`${companyLogoUrl}`}
              alt="company logo url"
              className="company-logo-img"
            />
            <TitleRatingContainer className="title-rating-container">
              <TitleJob className="title">{title}</TitleJob>
              <MarginText>
                <RatingEl className="rating-el">
                  <MarginTextLeft>
                    <div>
                      <AiFillStar fill="yellow" />
                    </div>
                    <MarginTextLeftRating>
                      <span>{rating}</span>
                    </MarginTextLeftRating>
                  </MarginTextLeft>
                </RatingEl>
              </MarginText>
            </TitleRatingContainer>
          </LogoCompanyNAmeContainer>
          <LocationTypePackageContainer className="location-type-package-container">
            <LocationEmploymentTypeContainer className="location-employment-type-container">
              <MdLocationOn fill="white" />
              <LocationEl className="location-el">{location}</LocationEl>
              <BsBriefcaseFill fill="white" />
              <JobTypeEl className="job-type-el">{employmentType}</JobTypeEl>
            </LocationEmploymentTypeContainer>
            <JobTypeEl className="job-type-el">{packagePerAnnum}</JobTypeEl>
          </LocationTypePackageContainer>
          <hr />
          <DescriptionHeading className="description-heading">
            Description
          </DescriptionHeading>
          <Description className="description">{jobDescription}</Description>
        </CustomLink>
      </Test>
    </JobDetailsItemContainer>
  );
};

export default JobItem;
