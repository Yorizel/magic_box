import { useEffect, useState } from 'react'

export const useResponsive = () => {
    const [responsive, setResponsive] = useState(false)
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setResponsive(true)
                : setResponsive(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, [responsive])

    return {responsive, setResponsive}
}