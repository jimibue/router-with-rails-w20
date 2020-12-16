export default (props) => {
  return (
    <div>
      <h1>Error occurred</h1>
      <h1>{props.err.status}</h1>
      {props.err.status == 404 && <div>404 page component here</div>}
    </div>
  );
};
