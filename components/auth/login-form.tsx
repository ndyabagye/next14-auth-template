"use client";

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";

import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/lib/formSchemas";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { InputError } from "../input-error";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/register"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space y-4">
          <div className="form-control w-full">
            <div
              className={cn("label", errors.email && "text-error")}
              aria-invalid={errors.email ? "true" : "false"}
            >
              Email
            </div>
            <input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="input input-bordered w-full"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email")}
              disabled={isPending}
            />
            <InputError message={errors.email?.message} />

            <div className={cn("label", errors.password && "text-error")}>
              Password
            </div>
            <input
              id="password"
              type="password"
              placeholder="******"
              className="input input-bordered w-full"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password")}
              disabled={isPending}
            />
            <InputError message={errors.password?.message} />
          </div>
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <button className="btn btn-wide" type="submit" disabled={isPending}>
          Login
        </button>
      </form>
    </CardWrapper>
  );
};
