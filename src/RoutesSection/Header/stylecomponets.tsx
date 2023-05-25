import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const HeaderGlobalStyle = createGlobalStyle`
 body {
  background-color: #202020;
}
`;

export const JobbyHeaderContainer = styled.div`
  background-color: rgb(31, 30, 30);
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const JobbyHeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const JobbyHeaderHomeJobContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const JobbyHeaderHome = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: initial, sans-serif;
  color: white;
  margin-right: 15px;
`;
export const JobbyHeaderJobs = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: initial, sans-serif;
  color: white;
  margin-left: 12px;
`;

export const JobbyHeaderImage = styled.img`
  width: 150px;
  height: 44px;
  margin-left: 20px;
`;

export const JobbyHeaderButton = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  background-color: #4f46e5;
  color: white;
  font-weight: 700;
  font-family: sans-serif, initial;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  font-size: 15px;
  text-decoration: none;
  color: white;
  font-family: "roboto";
  margin: 10px;
  a {
    text-decoration: none;
  }
`;

export const HomeJobsIcon = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const MobileVersionIcon = styled.div`
  margin-left: 20px;
`;
