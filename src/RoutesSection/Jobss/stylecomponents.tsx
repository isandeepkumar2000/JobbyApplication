import styled from "styled-components";

export const JobBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  background-color: black;
  overflow: auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 40px;
    align-items: center;
  }
`;

export const ProfileContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/profile-bg.png");
  border-radius: 8px;
  padding: 10px;
  /* overflow: auto; */
  width: 200px;
  @media screen and (max-width: 767px) {
    width: 200px;
    margin: 10px;
  }
`;
export const ProfileFilterContainer = styled.div`
  width: 300px;
  margin-right: 50px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 10px;
  }
`;

export const FilterHeading = styled.span`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 18px;
`;
export const LineBrake = styled.hr`
  height: 0.5px;
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const FilterLabel = styled.label`
  color: white;
  margin-left: 20px;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 600;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  margin-left: 40px;
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchEl = styled.input`
  background-color: black;
  border: 0px;
  width: 90%;
  margin: 5px;
  color: white;
  outline: none;
  @media screen and (max-width: 768px) {
    background-color: black;
    border: 0px;
    width: 90%;
    margin: 0px;
  }
`;

export const SearchIconContainer = styled.div`
  background-color: rgb(31, 30, 30);
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const NameEl = styled.span`
  font-family: "roboto", sans-serif;
  color: #6366f1;
  font-weight: 600;
  font-size: 20px;
`;
export const ShortBio = styled.span`
  font-family: "roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
export const ShortMargin = styled.div`
  margin-top: 10px;
`;
export const ShorMargin = styled.div`
  margin-top: 15px;
`;
