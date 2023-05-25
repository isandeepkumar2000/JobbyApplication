import { Link } from "react-router-dom";
import styled from "styled-components";

export const JobDetailsItemContainer = styled.li`
  background-color: rgb(31, 30, 30);
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 98%;
  padding: 10px 20px;
  @media screen and (max-width: 767px) {
    width: 85vw;
  }
`;

export const LogoCompanyNAmeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CompanyLogoImg = styled.img`
  height: 90px;
  width: 80px;
  margin: 15px;
  @media screen and(min-width:768px) {
    height: 50px;
    width: 10px;
  }
`;
export const TitleJob = styled.span`
  color: #ffffff;
  font-family: initial, sans-serif;
  font-size: 25px;
  line-height: 55px;
`;

export const RatingEl = styled.div`
  color: white;
`;
export const LocationEmploymentTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LocationEl = styled.span`
  color: white;
  font-family: initial, sans-serif;
  font-size: 18px;
  margin-right: 15px;
  margin-left: 10px;
`;

export const JobTypeEl = styled.span`
  color: white;
  font-family: initial, sans-serif;
  font-size: 18px;
  margin-right: 15px;
  margin-left: 10px;
`;

export const LocationTypePackageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionHeading = styled.span`
  color: white;
  font-family: initial, sans-serif;
`;

export const Description = styled.div`
  color: white;
  margin-top: 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 15px;
  font-family: initial, sans-serif;
`;

export const Test = styled.div`
  text-decoration: none;
  color: white;
`;
export const Text = styled.span`
  color: white;
`;
export const MarginText = styled.div`
  margin-top: 20px;
  display: flex;
`;
export const MarginTextLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const MarginTextLeftRating = styled.div`
  margin-left: 5px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
