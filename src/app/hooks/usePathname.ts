// hooks/usePathname.ts
import { useRouter } from 'next/router';

const usePathname = () => {
    const router = useRouter();
    return {
        pathname: router.pathname,
        query: router.query
    };
};

export default usePathname;
