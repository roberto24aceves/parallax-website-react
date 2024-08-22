import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
const LazyImg = ({ className, src, alt, baseColor = "#1e1e1e",highlightColor="#383838" }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (inView && src) {
            console.log(inView);
            const img = new Image();
            img.src = src;
            img.onload = () => setIsLoaded(true);
        }
    }, [inView,src]);
    console.log(inView);
    return (
        <div
            ref={ref}>
            {!isLoaded && <Skeleton baseColor={baseColor} highlightColor={highlightColor} className={className}/>}
            {inView && isLoaded && (
                <img
                    className={className}
                    src={inView ? src : ""}
                    alt={alt}
                />
            )}
        </div>
    );
}
export default LazyImg