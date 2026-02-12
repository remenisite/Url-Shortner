import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { authServices } from "../api";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handelLogin = async (data) => {
    try {
      const res = await authServices.login(data);
    } catch (error) {

      setError("apiError", {
        message: error?.response?.data?.message || "Server error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center pt-[150px]  ">
      <form
        onSubmit={handleSubmit(handelLogin)}
        className="w-[250px]"
        method="POST"
        action="#"
      >
        <div className="flex flex-col gap-[20px] mb-[30px]">
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
          <p className="text-base text-red-500">{errors.apiError.message}</p>
        )}

        <Button type="submit" variant="primary">
          submit
        </Button>

        <p>
          do not account? <Link to={"/registration"}>signup</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
