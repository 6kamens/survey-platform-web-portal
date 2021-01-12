const DashBoard = (props) => {

  let params = new URLSearchParams(props.location.search);

  return (
    <section>
      <div className="hero-body">
        <div className="container">THIS IS MY DASH BOARD {params.get("code")} {params.get("state")}</div>
      </div>
    </section>
  );
};

export default DashBoard;
