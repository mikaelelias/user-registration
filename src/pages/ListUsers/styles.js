import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f26;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 200px;
`;

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 500px;

    h3 {
        color: #fff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
}

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 200px;
}
`;


export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;  
    margin: 40px 0;

    @media (max-width: 886px) {
       grid-template-columns: 1fr;
    }
`;

export const Title = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    padding: 30px;
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const AvatarUsers = styled.img`
    height: 80px;
`