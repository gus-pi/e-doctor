'use client';

import { syncUser } from '@/lib/actions/users';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

const UserSync = () => {
    const { isSignedIn, isLoaded } = useUser();

    useEffect(() => {
        const handleUSerSync = async () => {
            if (isLoaded && isSignedIn) {
                try {
                    await syncUser();
                } catch (error) {
                    console.log('Failed to sync user');
                }
            }
        };

        handleUSerSync();
    }, [isLoaded, isSignedIn]);

    return null;
};
export default UserSync;
