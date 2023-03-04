import "./common.css";
export const SidePart = ({ heading, details, desc }) => {
  return (
    <>
      <h6 className="headingText">{heading}</h6>
      <h1 className="headingDetails">{details}</h1>
      <p className="headingDesc">{desc}</p>
    </>

  );
};

// Resuable Component used at side of images track bar values passed as props
 