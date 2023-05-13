import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function UserPage() {
    const navigate = useNavigate();
  return (
    <Main>
      <ButtonsDiv>
        <Button onClick={() => navigate('/add-event')}>Add Event</Button>
        <Button>Subscription</Button>
      </ButtonsDiv>
      <div>
        <h1>My Events</h1>
        <Event>N/A</Event>
      </div>
    </Main>
  );
}

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 33px;
  margin-bottom: 35px;
`;

const Button = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #e0e0e0;
  background: #555454;
  border: none;
  width: 50%;
  padding: 34px 0;
`;

const Main = styled.div`
  width: 100%;
  padding: 0 19px;
`;

const Event = styled.div`
  background: #d9d9d9;
  border-radius: 8px;
  width: 100%;
  height: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 100px;
`;
