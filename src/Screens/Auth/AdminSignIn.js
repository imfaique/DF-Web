import * as React from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { css } from 'glamor'
import hero_image from '../../Assets/civic.png'
import hero_image_back from '../../Assets/hero_image_back.png';
import { motion } from 'framer-motion'
import motionImg from '../../Assets/kia.png'



// import { validateEmail } from "../../shared/utils";

const API = process.env.REACT_APP_API_KEY


class SignInAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                username: "",
                password: "",
            },
            errors: {
                username: "",
                password: "",
            },
        };
    }

    transition = { type: 'spring', duration: 3 }
    mobile = window.innerWidth <= 768 ? true : false;

    handleUserNameChange = (e) => {
        this.setState({ login: { ...this.state.login, username: e.target.value } });
    };

    handlePasswordChange = (e) => {
        this.setState({ login: { ...this.state.login, password: e.target.value } });
    };

    loginAdmin = (details) => {
        console.log(details.name);
        localStorage.setItem("@admin", JSON.stringify(details));
        this.props.history.push("/home");
        toast(`  👍🏻    Successfully Logged In By ${details.name}`)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state.login;
        let errors = {};
        let error_ = false;

        if (username === "" || username === undefined) {
            errors.username = "UserName is required";
            error_ = true;
        }


        if (password === "" || password === undefined) {
            errors.password = "Password is required";
            error_ = true;
        }

        if (error_) {
            this.setState({ errors: { ...errors } });

            return;
        }

        this.setState({ errors: {} });

        try {
            const { login } = this.state;
            console.log(API);
            let url = `${API}admin/login`;
            console.log(url);
            console.log(username)
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const requestOptions = {

                method: "POST",
                headers: myHeaders,
                // redirect: "follow",
                body: JSON.stringify({ username: login.username, password: login.password }),
            };
            // console.log(body)

            fetch(url, requestOptions)
                .then((response) => response.json())

                .then((result) => {
                    console.log(result);

                    if (result.role === 'admin') {

                        if (!(result.code < 200 || result.code >= 400)) {

                            this.loginAdmin(result);
                        }
                        else {
                            toast.error(`${result.message}`);
                        }
                    }
                })
                .catch((error) => {
                    this.setState({ error: error.message })
                });
        } catch (e) { }
    };

    render() {
        return (
            <div className='App'>
                <div className='blur hero-blur'></div>
                <div className='left-h'>
                    {/* <Header /> */}
                    <div className='the-best-ad'>

                        <motion.img
                            initial={{ left: this.mobile ? '165px' : '190px' }}
                            whileInView={{ left: '-258px' }}
                            transition={{ ...this.transition, type: 'tween' }}
                            src={motionImg}
                        >


                        </motion.img>
                        <span>The Best Rental App in the Town</span>
                    </div>




                    <div className='hero-text'>
                        <div><span className='stroke-text'>Drive </span><span>Flory</span>
                        </div>
                        <div className='hero-text'>
                            <span>Rental App</span>
                        </div>



                        <div className='hero-text'>
                            <span>Drive Flory gives best service across the city to provide the best rental cars</span>

                        </div>

                    </div>
                    <>
                        <div className='input-group mt-3'>
                            <input
                                type='text'
                                className='rounded-pill w-27 me-3 p-2 form-control-text'
                                placeholder='Username'
                                value={this.state.login.username}
                                onChange={this.handleUserNameChange}
                            />

                        </div>
                        <br />
                        <div className='input-group mt-3'>
                            <input
                                type='password'
                                className='rounded-pill w-27 me-3 p-2 form-control-text'
                                placeholder='Password'
                                value={this.state.login.password}
                                onChange={this.handlePasswordChange}
                            />

                        </div>
                        <br />
                    </>
                    <div className='hero-buttons'>
                        {/* <buttons className="btn">Login</buttons> */}
                        <button className="btn" onClick={this.handleSubmit}>Login</button>

                    </div>
                </div>
                <div className='right-h'>
                    {/* <motion.div
                        initial={{ right: '-1rem' }}
                        whileInView={{ right: '4rem' }}
                        transition={transition} className="heart-rate">
                        <img src={Heart} alt="" />
                        <span>Rental Service</span><span>#DriveFlory</span>
                    </motion.div> */}
                    <motion.img src={hero_image} alt="" className='hero-image' initial={{ right: '-11rem' }}
                        whileInView={{ right: '5rem' }}
                        transition={{ ...this.transition }} />
                    <motion.img
                        initial={{ right: '11rem' }}
                        whileInView={{ right: '10rem' }}
                        transition={{ ...this.transition }}
                        src={hero_image_back} alt="" className='hero-image-back' />
                </div>

            </div>
        );
    }
}

export default withRouter(SignInAdmin);