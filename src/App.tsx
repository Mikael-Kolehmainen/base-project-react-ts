import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import PrivateRoute from "./routes/privateRoute.component";
import Error from "./routes/error/error.component";

/*
  This is the main file of the application, in here I have created a routing system.
  The routing system will determine based on the url which page should be shown.
  The pages are stored in separate files under the ./routes folder.
*/

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<Error title="404 Not Found" message="The page you're looking for doesn't exist." url="/" />}
      />

      {/* Example of private route */}
      <Route path="/private" element={<PrivateRoute component={() => <></>} />} />
    </Routes>
  );
};

export default App;
