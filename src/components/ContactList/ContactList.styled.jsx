import styled from '@emotion/styled';

export const ContactListEl = styled.ul`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
   gap: 10px;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  gap: 10px;
  // flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  width: 420px;
  // height: 90px;
  border: 1px solid #39bb96;
  padding: 12px;
  text-align: center;
  border-radius: 5px;

  // background-color: #ccf9ef;
   background-color: #64b5f6
   ;
`;

export const ContactItemHeader = styled.h2`
  // margin: 0;
  margin-bottom: auto;
`;

export const ContactItemText = styled.p`
  // margin: 0;
  // font-weight: 600;
  // color: #0b5e18;
  color: white;
  font-size: 20px;
  // margin-bottom:8px
`;

export const ContactItemButton = styled.button`
  width: 100px;
  background-color: #39bb96;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  padding: 5px;
`;
