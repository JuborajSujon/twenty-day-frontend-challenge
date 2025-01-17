import "./Country.css";
import PropTypes from "prop-types";

const Country = ({ country }) => {
  const { name, capital, region, population, area, flags } = country;
  return (
    <div className="country">
      <div className="country-info">
        <h3>Country Name: {name?.common}</h3>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
      </div>
      <div className="country-img">
        <img src={flags?.png} alt={name?.common} />
      </div>
    </div>
  );
};

export default Country;

Country.propTypes = {
  country: PropTypes.object.isRequired,
};
