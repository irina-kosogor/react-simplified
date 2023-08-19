export const Card = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { address, age, name, phoneNumber } = data;

  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age: </div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
};
