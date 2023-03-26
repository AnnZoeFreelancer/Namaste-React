const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="restaurant-list">
        {Array(10)
          .fill("")
          .map((e, i) => (
            <div key={i} className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
