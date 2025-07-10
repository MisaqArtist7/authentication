import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email('please enter valid email'),
    password: z.string().min(8, 'password must be 8 characters')
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

// type SignUpSchemaType = {
//   email: string;
//   password: string;
// }


