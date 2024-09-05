import { ComponentType, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

/*
  This is a private route. This component is used for other components that should
  be locked behind authentication. When we want to define a route as private, we
  do it in the App.jsx and define our route by calling this component and passsing
  the component that we want to show on the page. Once the user lands on the url,
  the code path will go through this component and check if the authentication is
  active.
*/

interface PrivateRouteProps {
  component: ComponentType;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    // Do authentication stuff here...
  }, []);

  if (isFetching) {
    return <></>;
  }

  return isAuthenticated ? <Component /> : <Navigate to="" />;
};

export default PrivateRoute;
