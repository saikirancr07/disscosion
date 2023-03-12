const Button = (props) => {
  //  Write your code here.
  const { name, background } = props;
  return <button className={background}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">social Buttons</h1>
    <div>
      <Button name="Like" background="button1" />
      <Button name="Comment" background="button2" />
      <Button name="Share" background="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
