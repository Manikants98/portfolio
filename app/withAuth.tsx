import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const withAuth = (WrappedComponent: any) => {
    const AuthComponent = (props: any) => {
        const router = useRouter();
        const isAuthenticated = true;
        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/login');
            }
        }, [isAuthenticated, router]);

        if (!isAuthenticated) {
            return <div>Redirecting...</div>;
        }
        return <WrappedComponent {...props} />;
    };
    return AuthComponent;
};

export default withAuth;
