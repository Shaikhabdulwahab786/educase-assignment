import { useRouteError } from "react-router-dom";
 
 const ErrorPage = () => {
  const error = useRouteError() as Error;
  return (
    <div style={{ color: "red" }}>
      <h2>Oops! Something went wrong</h2>
      <p>{error.message || "Unknown error"}</p>
    </div>
  );
 }
 
 export default ErrorPage
