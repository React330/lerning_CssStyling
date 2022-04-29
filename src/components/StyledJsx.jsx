export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px red;
          border-radius: 20px;
          padding: 10px;
          margin: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: blue;
        }

        .button {
          background-color: yellow;
          border: none;
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};
