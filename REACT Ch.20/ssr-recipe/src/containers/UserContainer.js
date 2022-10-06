import { useEffect } from "react";
import User from "../components/Users";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고, id가 일치한다면 요청하지 않음
    dispatch(getUser(id));
  }, [dispatch, id, user]);

  // 컨테이너 유효성 검사 후 return null을 해야 하는 경우에
  // null 대신 Preloader 반환
  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
