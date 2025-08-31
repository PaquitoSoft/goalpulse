import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AppLogo } from '@/components/layout/app-logo';
import { login } from '@/api/auth';

type TLoginProps = {
  onLogin: () => void;
};

export function LoginView({ onLogin }: TLoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);

    // Simulate social login delay
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await login(provider);

    setIsLoading(false);
    onLogin();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and App Name */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <AppLogo size={80} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">LiveScore</h1>
            <p className="text-muted-foreground">Stay updated with live football scores</p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold">Sign In to LiveScore</h2>
            <p className="text-sm text-muted-foreground">
              Choose your preferred way to sign in and start following your favorite teams
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12"
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {isLoading ? 'Signing in...' : 'Continue with Google'}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full h-12"
              onClick={() => handleSocialLogin('apple')}
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.803 11.126c-.028-3.137 2.55-4.644 2.665-4.72-1.452-2.122-3.71-2.414-4.515-2.445-1.922-.194-3.748 1.131-4.724 1.131-.976 0-2.482-1.104-4.08-1.072-2.099.032-4.032 1.22-5.107 3.103-2.178 3.777-.557 9.366 1.565 12.43 1.04 1.5 2.28 3.186 3.905 3.125 1.594-.062 2.195-1.031 4.12-1.031 1.925 0 2.494 1.031 4.21.998 1.738-.032 2.777-1.531 3.817-3.031 1.202-1.733 1.695-3.413 1.726-3.499-.037-.016-3.313-1.27-3.342-5.038z" />
                <path d="M11.282 6.375c.866-1.045 1.45-2.496 1.293-3.943-1.25.05-2.765.833-3.663 1.878-.806.938-1.512 2.438-1.323 3.876 1.4.109 2.827-.712 3.693-1.811z" />
              </svg>
              {isLoading ? 'Signing in...' : 'Continue with Apple'}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full h-12"
              onClick={() => handleSocialLogin('facebook')}
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {isLoading ? 'Signing in...' : 'Continue with Facebook'}
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-6">
            <p>New to LiveScore? An account will be created automatically when you sign in.</p>
          </div>
        </Card>

        <div className="text-center text-xs text-muted-foreground px-4">
          By continuing, you agree to our{' '}
          <button className="text-primary hover:underline">Terms of Service</button> and{' '}
          <button className="text-primary hover:underline">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
}
