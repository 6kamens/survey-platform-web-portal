import { useSelector } from 'react-redux';

function DashBoard(props) {
  let params = new URLSearchParams(props.location.search);

  const {userInfo, isLogin}  = useSelector(state => state.login);

  return (
    <section>
      <div className="hero-body">
        <div className="container">
          {!isLogin && <span>Please login </span>}
          {isLogin && JSON.stringify(userInfo) }
        </div>
      </div>
    </section>
  );
}

export default DashBoard;
