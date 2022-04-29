export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px red",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    maring: 0,
    color: "blue"
  };
  const buttonStyle = {
    backgroundColor: "yellow",
    border: "none",
    padding: "10px",
    borderRadius: "10px"
  };

  return (
    <>
      <div style={containerStyle}>
        <p style={titleStyle}>- INline Styles -</p>
        <button style={buttonStyle}>FIGHT!!</button>
      </div>
    </>
  );
};
