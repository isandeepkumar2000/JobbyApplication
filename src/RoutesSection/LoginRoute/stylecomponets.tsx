import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 40px 15px;
  justify-content: center;
  align-items: center;
`;

export const LoginFormItems = styled.div`
  display: flex;
  padding: 40px 105px;

  align-items: center;
  /* width: 500px; */
  flex-direction: column;
  background-color: #2c364c;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const GlobalStyle = createGlobalStyle`
 body {
  background-color: #202020;
}
`;

export const JobbyLogoImage = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;

export const UserNameHeading = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: white;
  line-height: 10px;
  font-family: initial, sans-serif;
`;

export const PasswordHeading = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: white;
  line-height: 10px;
  font-family: initial, sans-serif;
`;

export const UserNameInputSection = styled.input`
  height: 35px;
  width: 250px;
  margin-top: 5px;
  color: white;
  font-weight: 700;
  background-color: #2c364c;
  margin-bottom: 10px;
  ::placeholder {
    padding: 10px;
    color: gray;
    font-weight: 700;
  }
  border: 1px #b6c5ff solid;
`;
export const PasswordInputSection = styled.input`
  height: 35px;
  width: 250px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
  background-color: #2c364c;
  ::placeholder {
    padding: 10px;
    color: gray;
    font-weight: 700;
  }
  border: 1px #b6c5ff solid;
`;

export const JobbyButton = styled.button`
  padding: 10px 108px;
  background-color: #4f46e5;
  color: white;
  font-weight: 700;
  margin-top: 10px;
  font-family: initial, sans-serif;
  font-size: 15px;
  border: none;
  border-radius: 8px;
`;

export const ErrorMsg = styled.span`
  color: red;
  font-weight: 600;
  font-size: 16px;
  font-family: initial, sans-serif;
`;
