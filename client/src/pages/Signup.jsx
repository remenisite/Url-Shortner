import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link,  } from "react-router";

import { authServices } from "../api";
import { useForm } from "react-hook-form";



const Signup = () => {

    // const navigate = useNavigate()
  const { register, handleSubmit, setError, formState: { errors }, } = useForm();


    const onSubmit = async (data) => {

      try {
      const res = await authServices.registration(data)
      } catch (error) {
      if (
        error.response.data.message === "User already axixt"
      ) {
        return setError("email", {
          message: error.response.data.message,
        });
      }
      setError("apiError", {
        message: error.response.data.message,
      });
    }
  };

  return (
    <div className="flex justify-center items-center pt-[150px]  ">
      <form  onSubmit={handleSubmit(onSubmit)} className="w-[250px]" method="POST" action="#">
        <div className="flex flex-col gap-[20px] mb-[30px]">
       <Input
                {...register("fullName", { required: "Full Name is required" })}
                label="Full Name"
                placeholder="Enter your full name"
                error={errors?.fullName?.message}
              />
              <Input
                {...register("email", { required: "Email is required" })}
                label="Email"
                type="email"
                placeholder="Enter your Email address"
                error={errors?.email?.message}
              />
              <Input
                {...register("password", { required: "Passwird is required" })}
                label="Password"
                type="password"
                placeholder="Enter your Password"
                error={errors?.password?.message}
              />
        </div>
                {errors?.apiError?.message && (
                <p className="text-base text-red-500">
                  {errors.apiError.message}
                </p>
              )}
        <Button type="submit" variant="primary">submit </Button>
        <p>
          already account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
