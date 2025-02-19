import { useEffect, useState } from 'react';

const useUserStatus = () => {
    const [userStatus, setUserStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setUserStatus(true);
        const handleOffline = () => setUserStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return userStatus;
};

export default useUserStatus;
