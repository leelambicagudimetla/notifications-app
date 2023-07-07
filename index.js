const Notification = (props) => {
  //  Write your code here.
  const { className, name, imageUrl, imgClass } = props;
  return (
    <div className={className}>
      <img className={imgClass} src={imageUrl} />
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-container">
    <h1 className="heading">Notifications</h1>
    <div className="mini-div">
      <Notification
        className="info-msg"
        name="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imgClass="img-page"
      />
      <Notification
        className="success-msg"
        name="Success Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        imgClass="img-page"
      />
      <Notification
        className="warning-msg"
        name="Warning Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        imgClass="img-page"
      />
      <Notification
        className="error-msg"
        name="Error Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        imgClass="img-page"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
