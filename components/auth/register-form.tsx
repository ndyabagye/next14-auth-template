"use client";

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";

import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/lib/formSchemas";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { InputError } from "../input-error";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { registerUser } from "@/actions/registerUser";
import { useState, useTransition } from "react";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      registerUser(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space y-4">
          <div className="form-control w-full">
            <div
              className={cn("label", errors.name && "text-error")}
              aria-invalid={errors.name ? "true" : "false"}
            >
              Name
            </div>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name")}
              disabled={isPending}
            />
            <InputError message={errors.name?.message} />

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
          Create an account
        </button>
      </form>
    </CardWrapper>
  );
};
