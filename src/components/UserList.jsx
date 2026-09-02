import UserCard from "./UserCard";
import "../style/UserList.css"

function UserList({users}) {

  if(users.length === 0){
    return <p>404 No Users Found 404</p>
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard 
        key={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        phone={user.phone}
        website={user.website}
        street={user.address.street}
        suite={user.address.suite}
        city={user.address.city}
        zipcode={user.company.zipcode}
        company={user.company.name}
        catchPhrase={user.company.catchPhrase}
        business={user.company.bs}
        />
      ))}
    </div>
  );
}

export default UserList;
