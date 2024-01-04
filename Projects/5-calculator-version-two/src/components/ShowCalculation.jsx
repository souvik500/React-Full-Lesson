import css from "./ShowCalculation.module.css";

const ShowCalculation = ({ inputNo }) => {
  return (
    <>
      <input type="text" value={inputNo} className={css.showBox} readOnly />
    </>
  );
};

export default ShowCalculation;
