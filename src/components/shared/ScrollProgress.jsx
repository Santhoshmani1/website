import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculateScrollProgress = () => {
        if (typeof window === 'undefined') return 0;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if (scrollHeight === 0) return 0;
        const progress = (scrollTop / scrollHeight) * 100;
        return Math.min(progress, 100);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollProgress(calculateScrollProgress());
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-1 bg-gray-200 dark:bg-gray-700">
            <div
                className="h-full transition-all duration-150 ease-out bg-sky-500 bg-gradient-to-r from-indigo-600 to-sky-500 "
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;