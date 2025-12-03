import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";


const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/";

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(email + " " + password)
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (err) {
            toast.error(err?.data?.message || err.error.message);
        }
    }

    return (        

        <div><br/><br/><br/><br/><br/><br/><br/>
        <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">Login </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="login-register-area pt-50 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 ms-auto me-auto">
                        <div class="login-register-wrapper">
                            <div class="login-register-tab-list nav">
                                <a class="active" >
                                    <h4> login </h4>
                                </a>
                                <a >
                                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                                <h4> register </h4>
                                </Link>
                                </a>
                            </div>
                            <div class="tab-content">
                                <div id="lg1" class="tab-pane active">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <Form  onSubmit={submitHandler}>
                                                <input 
                                                    type="email" 
                                                    name="user-name" 
                                                    placeholder="Email Address" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <input 
                                                    type="password" 
                                                    name="user-password" 
                                                    placeholder="Password" 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <input type="checkbox" />&nbsp;
                                                        <label>Remember me</label>
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                    <Button type="submit">Login</Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );








};

export default LoginScreen;