const WelComeMessage = ({ getRequest }) => {
  return (
    <>
      <center>
        <h1 className="welcome-message">There are 0 post you entered</h1>
        <button onClick={getRequest} type="button" className="btn btn-primary">
          Get Post From Server
        </button>
      </center>
    </>
  );
};

export default WelComeMessage;
