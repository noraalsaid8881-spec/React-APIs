import { useState } from "react";
import "../style/UserCard.css";

function UserCard({
  name,
  username,
  email,
  phone,
  website,
  street,
  suite,
  city,
  zipcode,
  company,
  catchPhrase,
  business,
}) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>@{username}</p>

      <hr />

      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>🌐:{website}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <hr />

          <h3>Location</h3>
          <p>{street}</p>
          <p>{suite}</p>
          <p>
            {city} - {zipcode}
          </p>

          <hr />

          <h3>Company</h3>
          <p>{company}</p>
          <p>{catchPhrase}</p>
          <p>{business}</p>
        </div>
      )}
    </div>
  );
}

export default UserCard;
