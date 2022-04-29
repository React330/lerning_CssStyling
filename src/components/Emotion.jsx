/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px red;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: "blue"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion JSX -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: yellow;
  border: none;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
