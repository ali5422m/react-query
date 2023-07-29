import useAuthStore from "./store.ts";

const LoginStatus = () => {
  // const {user, dispatch} = useAuth();
  const {user, login, logout} = useAuthStore();


    if (user)
        return (
            <>
                <div>
                    <span className="mx-2">{user}</span>
                    {/*<a onClick={() => dispatch({ type: 'LOGOUT'})} href="#">*/}
                    {/*    Logout*/}
                    {/*</a>*/}
                    <a onClick={() => logout()} href="#">
                        Logout
                    </a>
                </div>
            </>
        );
    return (
        <div>
            {/*<a onClick={() => dispatch({ type: 'LOGIN', username: "ALi Mohammadinia"})} href="#">*/}
            {/*    Login*/}
            {/*</a>*/}
            <a onClick={() => login("Ali Mohammadinia")} href="#">
                Login
            </a>

        </div>
    );
};

export default LoginStatus;