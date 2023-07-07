const Shimmer = () => {
  return (
    <div className="mt-48">
      <div
        data-testid="shimmer"
        className="flex flex-wrap justify-between pt-10 my-10 mx-20 rounded-md border border-solid ring-offset-1 ring-offset-purple-50"
      >
        {Array(10)
          .fill("")
          .map((e, i) => (
            <div key={i} className="h-40 m-5 w-64 bg-gray-50"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
