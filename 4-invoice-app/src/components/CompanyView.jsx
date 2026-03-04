import PropTypes from "prop-types";

export const CompanyView = ({ title, company }) => {
  // En este caso no se aplico desestructuracion

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">{company.name}</li>
        <li className="list-group-item">{company.fiscalNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};
