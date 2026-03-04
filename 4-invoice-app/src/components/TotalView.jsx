import PropTypes from "prop-types";

export const TotalView = ({ total }) => {
  return (
    <>
      <div className="text-end">
        <span className="badge bg-success">{total}</span>
      </div>
    </>
  );
};

TotalView.propTypes = {
  total: PropTypes.number.isRequired,
};
