const Box = (props) => {
  //  Write your code here.
  const { name, message } = props;
  return (
    <div className={`box ${name}`}>
      <p className="para">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="card">
      <Box name="box1" message="Small" />
      <Box name="box2" message="Medium" />
      <Box name="box3" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
