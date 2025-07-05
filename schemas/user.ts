import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(1, 'Name is required'),
  role: z.enum(['USER', 'ADMIN'], {
    required_error: 'Role is required',
    invalid_type_error: 'Invalid role value',
  }),
});

export default userSchema;
export type UserSchema = z.infer<typeof userSchema>;
