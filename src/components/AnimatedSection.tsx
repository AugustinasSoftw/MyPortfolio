import { useInView } from "react-intersection-observer";

type AnimatedSectionProps = {
  children: React.ReactNode;
};

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className={`animated-section ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
