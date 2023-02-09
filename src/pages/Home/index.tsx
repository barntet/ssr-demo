const Home = () => {
  return (
    <div>
      <h1>hello-ssr</h1>
      <button
        onClick={(): void => {
          alert('hello');
        }}
      >
        alert
      </button>
    </div>
  );
};

export default Home;
