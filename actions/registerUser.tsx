"use server";

import * as z from "zod";

import { RegisterSchema } from "@/lib/formSchemas";

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields !" };
  }

  return { success: "Email sent!" };
};
