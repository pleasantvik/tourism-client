export const PageNotFound = (props) => {
  return (
    <div className="error">
      <div className="error__title">
        <h2 className="heading-secondary heading-secondary--error">
          Uh oh! Something went wrong
        </h2>
      </div>
      <div className="error__msg">
        {props.msg ? props.msg : "Page not found"}
      </div>
    </div>
  );
};
