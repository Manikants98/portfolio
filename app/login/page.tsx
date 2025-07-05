'use client';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, TextFieldProps, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormTextField = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  type = 'text',
  fullWidth = true,
  InputProps,
  className,
}: TextFieldProps) => (
  <TextField
    id={id}
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    error={error}
    helperText={helperText}
    required={required}
    type={type}
    fullWidth={fullWidth}
    variant="outlined"
    size="small"
    className={`w-full ${className || ''}`}
    InputProps={InputProps}
    autoComplete="off"
  />
);

function LoginContent() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const router = useRouter();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid email or password');
        return;
      }

      router.push('/admin');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center p-4 md:p-6 lg:flex-row"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/3"
      >
        <div
          className="flex flex-col gap-5 rounded-lg p-5 shadow-lg md:p-8"
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 text-center"
          >
            <p
              className="mb-2 !py-0 text-2xl font-bold md:text-3xl"
              style={{ color: theme.palette.text.primary }}
            >
              ManiKantSharma<span className="text-primary">.</span>
            </p>
            <p className="text-sm md:text-base" style={{ color: theme.palette.text.secondary }}>
              Access the admin dashboard
            </p>
          </motion.div>

          <form onSubmit={handleLogin} autoComplete="off">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>
              )}

              <div className="flex flex-col gap-8">
                <FormTextField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  required={true}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  error={!!error}
                  autoComplete="off"
                />

                <FormTextField
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  required={true}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  error={!!error}
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          size="small"
                          color="primary"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="cursor-pointer py-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer rounded-lg px-4 py-3 font-medium text-white shadow-md transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70"
                    style={{
                      background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    }}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default function Login() {
  return (
    <ThemeProvider>
      <LoginContent />
    </ThemeProvider>
  );
}
