import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NotFoundInfoContainer = styled.div`
  height: 100%;
  background-color: rgb(191, 206, 201);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorInfo = styled.span`
  font-size: 18px;
  text-align: center;
`;
export const TextDanger = styled.span`
  font-size: 28px;
  font-family: sans-serif;
  font-weight: 600;
  text-align: center;
  color: red;
`;

export const GoHomeBtn = styled.button`
  border-radius: 8px;
  background-color: #6366f1;
  margin-top: 20px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 15px 30px;
  margin-left: 19px;
`;

// .go-home-btn{
//     padding: 10px;
//     border-radius: 9px;
//     border-color: black;
//     font-size: 18px;
//     cursor: pointer;
// }
