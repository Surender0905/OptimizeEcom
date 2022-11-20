const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-cyan-200 rounded-full"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
