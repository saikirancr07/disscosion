const Notification = (props) => {
  //  Write your code here.
  const { card, url, name, para, image } = props;
  return (
    <div className={`car ${card}`}>
      <img src={url} className={image} />
      <p className={para}>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="container">
      <Notification
        card="card1"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="Information message"
        para="para"
        image="logo"
      />

      <Notification
        card="card2"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Information message"
        para="para"
        image="logo"
      />

      <Notification
        card="card3"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Information message"
        para="para"
        image="logo"
      />

      <Notification
        card="card4"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Information message"
        para="para"
        image="logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
