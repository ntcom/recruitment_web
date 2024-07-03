"use client";
import React from "react";
import onboarding from "../../../../public/assets/images/onboarding.png";
import findJob from "../../../../public/assets/images/search-employee.png";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupLogin } from "./utils/validator";
import { ControllerTextField } from "@/core/components/form";
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css"
function Login() {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>({
        mode: "onChange",
        resolver: yupResolver(yupLogin),
    });

    const onSubmit = () => { };
    return (
        <div className="my-42">
            <div className="container">
                <h2 className="app-heading text-center">Login Your Account</h2>
                <div className="app-card p-[40px] mb-[30px]">
                    <div className="grid lg:grid-cols-2 gap-[30px]">
                        <div className="bg-primary-linear p-[45px_35px]">
                            <div className="flex text-white gap-3">
                                <div className="w-[60px]">
                                    <Image
                                        src={findJob}
                                        className="brightness-0 invert"
                                        alt="icon"
                                        width={42}
                                        height={42}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p>Candidate</p>
                                    <p className="font-semibold text-[19px] leading-[1.4]">
                                        Login as a Candidate
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center hover:text-black cursor-pointer transition-all w-[120px]">
                                    <p>Get Started</p>
                                    <ArrowForwardIcon className="more-icon text-inherit" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary-linear p-[45px_35px]">
                            <div className="flex text-white gap-3">
                                <div className="w-[60px]">
                                    <Image
                                        src={onboarding}
                                        className="brightness-0 invert"
                                        alt="icon"
                                        width={42}
                                        height={42}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p>Candidate</p>
                                    <p className="font-semibold text-[19px] leading-[1.4]">
                                        Login as a Candidate
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-all w-[120px]">
                                    <p>Get Started</p>
                                    <ArrowForwardIcon className="more-icon text-inherit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-[30px]">
                        <ControllerTextField
                            size="small"
                            placeholder="Username, Phone Number or Email"
                            control={control}
                            name="username"
                        />
                    </div>
                    <div className="mb-[50px]">
                        <ControllerTextField
                            size="small"
                            placeholder="Password"
                            control={control}
                            name="password"
                        />
                    </div>
                    <div className="mb-[20px]">
                        <div className="flex justify-center mb-[20px]">
                            <p className="text-primary-main hover:tracking-[1px] transition-all cursor-pointer ">
                                Forgot Password?
                            </p>
                        </div>
                        <div className="flex gap-10 justify-center mb-[20px]">
                            <p className="text-[16px] text-[#333333] font-medium cursor-pointer">
                                Don’t Have Account ?
                            </p>
                            <p className="text-primary-main cursor-pointer">
                                Sign Up Here
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-[40px]">
                        <button className="app-button-main p-[16px_140px]">Sign In</button>
                    </div>
                    <div className="wrap-login md:flex gap-2">
                        <button type="button" className="fb-button"><FontAwesomeIcon icon={faFacebookF} /> <span>Login With Facebook</span></button>
                        <button type="button" className="google-button"> <FontAwesomeIcon icon={faGooglePlusG} /><span>Login With Google</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
