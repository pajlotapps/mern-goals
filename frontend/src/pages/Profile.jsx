import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
      <h1>Witaj {user && user.name}</h1>
      <p>email: {user && user.email}</p>
      <p>password: {user && user.password} ***</p>
      </section>
    </>
  );
}

export default Profile