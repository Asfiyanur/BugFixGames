import styled from "styled-components";

export const CardBody = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid rgb(0, 0, 0, 0.3);
  border-radius: 13px;
`;
export const CardLeft = styled.div`
  background-color: white;
`;
export const Img = styled.img`
  width: 500px;
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentTop = styled.div`
  margin-bottom: 2rem;
`;

export const ContentBottom = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
`;
export const P1 = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: rgba(45, 47, 48, 0.5);
`;
export const P = styled.span`
  color: #f16a22;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
export const H3 = styled.h3`
  font-family: "Hartwell";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #2d2f30;
`;
export const Span = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: #2d2f30; ;
`;
