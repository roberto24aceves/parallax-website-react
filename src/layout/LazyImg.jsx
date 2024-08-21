import { useInView } from 'react-intersection-observer';
const LazyImg = ({ className, src, alt }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <img
            className={className}
            ref={ref}
            src={inView ? src : ""}
            alt={alt}
        />
    );
}
export default LazyImg