import styled from "styled-components";

export const JobDetailsBGContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  overflow: auto;
`;

export const SelectedJobSimilar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectedJobContainer = styled.div`
  width: 90%;
  margin: 15px;
  background-color: rgb(31, 30, 30);
  padding: 5px;
  border-radius: 15px;
`;

export const LogoTitleRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const LocationEmploymentTypePackageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

export const SkillNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;
  align-items: center;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0px;
`;

export const SkillsHeading = styled.span`
  color: white;
  margin: 10px;
  font-weight: 600;
  font-family: inherit, sans-serif;
  font-size: 20px;
`;

export const ListOfSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0px;
`;
export const DescriptionHeaderLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LifeAtCompanyContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

export const DescriptionImageContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyLogo = styled.img`
  height: 80px;
  width: 80px;
  @media screen and (min-width: 768px) {
    height: 85px;
    width: 90px;
  }
`;

export const TitleHeading = styled.span`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  margin: 10px;
`;
export const RatingEl = styled.span`
  margin: 5px;
  font-size: 18px;
  color: white;
`;

export const VisitEl = styled.span`
  margin: 5px;
  font-size: 15px;
  color: white;
  font-weight: 600;
  font-family: initial, sans-serif;
`;
export const Vista = styled.a`
  background-color: white;
`;
export const SectionsHeader = styled.span`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 23px;
`;
export const SectionsDescription = styled.span`
  color: white;
  font-family: initial, sans-serif;
  font-size: 23px;
  font-weight: 600;
`;

export const Descriptions = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
`;

export const SectionsText = styled.span`
  color: white;
  font-size: 15px;
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
`;

export const CompanyLifeImage = styled.img`
  height: 150px;
  width: 180px;
  margin-left: 8px;

  @media screen and (max-width: 767px) {
    height: 230px;
    width: 250px;
    margin-top: 8px;
  }
`;
export const SkillImg = styled.img`
  height: 70px;
  width: 80px;
  margin-right: 8px;
`;

export const SimilarJobContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const JobContainer = styled.div`
  background-color: rgb(31, 30, 30);
  border-radius: 8px;
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: auto;
  margin-top: 15px;
  margin-left: 23px;
`;

export const TitleImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SimilarJobsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const JobLogoImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 8px;
`;
export const JobTitleRate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
