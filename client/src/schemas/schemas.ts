import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });


export const contactUsSchema = z.object({
  name: z.string().min(2, "Review must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Rating is required"),
  message: z.string().min(5, "Review must be at least 5 characters"),
});

export const createAccountSchema = z
    .object({
      name: z.string().min(2, "You need add full name"),
      country: z.string().min(2, "You need add your country"),
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

export const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  rating: z.number().min(1, "Please give a rating"),
  review: z.string().min(4, "Review must be at least 4 characters long"),
});
