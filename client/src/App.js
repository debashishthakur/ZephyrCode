import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.min.css";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import PostedJobs from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";
import AppliedJobs from "./pages/AppliedJobs";
import { getAllUsers } from "./redux/actions/userActions";
import UserInfo from "./pages/UserInfo";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <ClipLoader color={"#000"} />
        </div>
      )}

      <BrowserRouter>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/jobs/:id" exact component={JobInfo} />
        <ProtectedRoute path="/editjob/:id" exact component={EditJob} />
        <ProtectedRoute path="/postjob" exact component={PostJob} />
        <ProtectedRoute path="/profile" exact component={Profile} />
        <ProtectedRoute path="/posted" exact component={PostedJobs} />
        <ProtectedRoute path="/appliedjobs" exact component={AppliedJobs} />
        <ProtectedRoute path="/users/:id" exact component={UserInfo} />

        {/* Authentication routes */}
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}
