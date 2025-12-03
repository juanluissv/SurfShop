import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {

    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();
    
    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }  
    }, [navigate, userInfo, redirect]);

    const submitHandler = async (e) => {  
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
            const rest = await register({  email, password });
            console.log(rest)
            dispatch(setCredentials(rest.data));
            navigate(redirect);
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };



  return (
    <div><br/><br/><br/><br/><br/><br/><br/>
        <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">Register </li>
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
                                <a class="active"  >
                                    <h4> register </h4>
                                </a>
                                <a >
                                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                                    <h4>Login</h4>
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
                                                <input 
                                                    type="password" 
                                                    name="user-password" 
                                                    placeholder="Confirm Password" 
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <input type="checkbox" />&nbsp;
                                                        <label>Remember me</label>
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                    <Button type="submit">Register</Button>
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
  )
}

export default RegisterScreen
