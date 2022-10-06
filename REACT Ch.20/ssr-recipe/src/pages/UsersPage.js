import { Route, Routes } from "react-router-dom";
import UsersContainer from "../containers/UserContainer";
import UserPage from "./UserPage";

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route path=":id" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default UsersPage;
