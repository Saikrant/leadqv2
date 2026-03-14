import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

// --- Helper Functions and Fallbacks ---
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Custom Placeholder using an interactive gradient/pattern rather than an external image request to prevent loading issues.
const PlaceholderBox = ({ text }) => (
  <div className="w-full h-full bg-bg-surface flex items-center justify-center border border-[rgba(196,192,232,0.12)] shadow-2xl overflow-hidden relative group">
     {/* Tech Grid Background */}
     <div className="absolute inset-0 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
     {/* Inner top glow line */}
     <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple to-transparent opacity-60"></div>
     <span className="text-steel font-medium tracking-widest uppercase text-sm z-10">{text}</span>
  </div>
);

// --- Constants ---
const TOTAL_STEPS = 5;

// The 5 LeadQ Agents replacing the default 4 steps
const steps = [
  {
    id: "1",
    name: "01",
    title: "Research Agent",
    description: "Crawls 40+ sources in real-time. Monitors hot leads for trigger events — funding rounds, job changes, news mentions.",
  },
  {
    id: "2",
    name: "02",
    title: "Scheduling Agent",
    description: "OAuth calendar access. Proposes times inline — no Calendly links. Autonomous back-and-forth until hold is secured.",
  },
  {
    id: "3",
    name: "03",
    title: "Voice Agent",
    description: "Sub-500ms latency. Real VOIP calls. Full-duplex audio handles barge-ins. Watch live transcripts in your dashboard.",
  },
  {
    id: "4",
    name: "04",
    title: "Email Agent",
    description: "No templates. Research summary + call notes synthesized into hyper-personalized outreach. Tone adapts to seniority.",
  },
  {
    id: "5",
    name: "05",
    title: "Meeting AI",
    description: "Joins Zoom, Teams, or Meet. Post-call: structured notes, pain points, next steps — all logged to CRM automatically.",
  },
];

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
};

// --- Hooks ---
function useNumberCycler(totalSteps = TOTAL_STEPS, interval = 7000) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);

    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);

  const setStep = useCallback((stepIndex) => {
    setCurrentNumber(stepIndex % totalSteps);
  }, [totalSteps]);

  return { currentNumber, setStep };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  return isMobile;
}

// --- Components ---
function IconCheck({ className, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={cn("h-4 w-4", className)} {...props}>
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

const stepVariants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
};

const StepImage = forwardRef(({ src, alt, className, style, ...props }, ref) => {
  return (
    <div className={cn("absolute overflow-hidden rounded-[24px]", className)} style={style} ref={ref} {...props}>
      <img
        alt={alt}
        className="w-full h-full object-cover rounded-[24px]"
        src={src || "fallback"}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling.style.display = 'block';
        }}
      />
      <div style={{display: 'none'}} className="w-full h-full">
         <PlaceholderBox text={alt} />
      </div>
    </div>
  );
});
StepImage.displayName = "StepImage";

const MotionStepImage = motion(StepImage);

const AnimatedStepImage = ({ preset = "fadeInScale", delay = 0, ...props }) => {
  const presetConfig = ANIMATION_PRESETS[preset];
  return <MotionStepImage {...props} {...presetConfig} transition={{ ...presetConfig.transition, delay }} />;
};

function FeatureCard({ children, step }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();
  
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="animated-cards group relative w-full rounded-[32px] p-[1px] bg-gradient-to-b from-[rgba(255,255,255,0.15)] via-transparent to-[rgba(255,255,255,0.02)] shadow-[0_0_80px_rgba(76,40,220,0.15)]"
      onMouseMove={handleMouseMove}
      style={{ "--x": useMotionTemplate`${mouseX}px`, "--y": useMotionTemplate`${mouseY}px` }}
    >
      <div className="relative w-full overflow-hidden rounded-[32px] bg-[#09090C] transition-colors duration-300">
        
        {/* Glow effect tracking mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[31px] opacity-0 transition duration-300 group-hover:opacity-100 hidden lg:block"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(76, 40, 220, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        <div className="m-8 lg:m-12 min-h-[500px] w-full flex flex-col md:flex-row relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full flex-col justify-center gap-6 md:w-[45%] lg:w-[40%] pr-8 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                 <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold text-[14px] bg-purple text-white shadow-[0_0_15px_rgba(76,40,220,0.5)]">
                    {steps[step].name}
                 </div>
                 <motion.div
                   className="text-[12px] font-semibold uppercase tracking-wider text-purple-light"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                 >
                     AGENT FLEET
                 </motion.div>
              </div>
             
              <motion.h2
                className="text-3xl lg:text-[40px] leading-[1.1] font-bold tracking-tight text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
              >
                <p className="text-[16px] leading-[1.7] text-steel max-w-[400px]">
                  {steps[step].description}
                </p>
              </motion.div>

              {/* Status Ticker Stub */}
              <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.3 }}
               className="mt-6 inline-flex items-center gap-2 bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)] rounded-full py-2 px-4 w-fit"
             >
               <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></div>
               <span className="text-[#22C55E] text-[12px] font-medium tracking-wide font-mono">STATUS: ACTIVE</span>
             </motion.div>

            </motion.div>
          </AnimatePresence>
          
          <div className="relative w-full h-[400px] md:h-auto md:w-[55%] lg:w-[60%] md:absolute md:right-0 md:top-0 md:-bottom-12 md:mr-12 mt-8 md:mt-0 z-10">
             {children}
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

function StepsNav({ steps: stepItems, current, onChange }) {
  return (
      <nav aria-label="Progress" className="flex justify-center px-4 mt-12 w-full">
          <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
              {stepItems.map((step, stepIdx) => {
                  const isCompleted = current > stepIdx;
                  const isCurrent = current === stepIdx;
                  return (
                      <motion.li key={step.name} initial="inactive" animate={isCurrent ? "active" : "inactive"} variants={stepVariants} transition={{ duration: 0.3 }} className="relative" >
                          <button
                              type="button"
                              className={cn(
                                  "group flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                                  isCurrent 
                                      ? "bg-[rgba(76,40,220,0.15)] border border-[rgba(76,40,220,0.3)] text-white shadow-[0_0_20px_rgba(76,40,220,0.2)]" 
                                      : "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-steel hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                              )}
                              onClick={() => onChange(stepIdx)}
                          >
                              <span className={cn(
                                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 text-[11px]",
                                  isCompleted 
                                      ? "bg-purple text-white" 
                                      : isCurrent 
                                          ? "bg-purple text-white shadow-[0_0_10px_rgba(76,40,220,0.5)]" 
                                          : "bg-bg-surface border border-border text-steel group-hover:border-purple/50"
                              )}>
                                  {isCompleted ? (
                                      <IconCheck className="h-3 w-3" />
                                  ) : (
                                      <span>{stepIdx + 1}</span>
                                  )}
                              </span>
                              <span className="hidden sm:inline-block">{step.title.replace(' Agent', '')}</span>
                          </button>
                      </motion.li>
                  );
              })}
          </ol>
      </nav>
  );
}

const defaultClasses = {
  img: "rounded-[24px] border border-[rgba(255,255,255,0.05)] shadow-2xl bg-bg-surface",
  // Step 1: Research
  step1img1: "w-[55%] left-0 top-[10%]",
  step1img2: "w-[60%] left-[40%] top-[40%]",
  // Step 2: Scheduling
  step2img1: "w-[65%] left-[5%] top-[15%]",
  step2img2: "w-[45%] left-[50%] top-[55%]",
  // Step 3: Voice
  step3img: "w-[90%] left-[5%] top-[15%]",
  // Step 4: Email
  step4img1: "w-[50%] left-[0%] top-[20%]",
  step4img2: "w-[55%] left-[45%] top-[45%]",
  // Step 5: Meeting AI
  step5img: "w-[95%] left-[2%] top-[20%]",
};

export default function AnimatedFeatureCarousel({ image }) {
  const { currentNumber: step, setStep } = useNumberCycler();
  
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt="Data enrichment visual" className={cn(defaultClasses.img, defaultClasses.step1img1, "h-[220px]")} src={image.step1img1} preset="slideInLeft" />
            <AnimatedStepImage alt="Profile scanning list" className={cn(defaultClasses.img, defaultClasses.step1img2, "h-[180px]")} src={image.step1img2} preset="slideInRight" delay={0.1} />
          </div>
        );
      case 1:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt="Calendar Sync" className={cn(defaultClasses.img, defaultClasses.step2img1, "h-[240px]")} src={image.step2img1} preset="fadeInScale" />
            <AnimatedStepImage alt="Meeting Blockers" className={cn(defaultClasses.img, defaultClasses.step2img2, "h-[160px]")} src={image.step2img2} preset="fadeInScale" delay={0.1} />
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full flex items-center">
            <AnimatedStepImage alt="Live Audio Transcript" className={cn(defaultClasses.img, defaultClasses.step3img, "h-[280px]")} src={image.step3img} preset="fadeInScale" />
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt="Email Outline Generator" className={cn(defaultClasses.img, defaultClasses.step4img1, "h-[200px]")} src={image.step4img1} preset="slideInLeft" />
            <AnimatedStepImage alt="Personalized Email Output" className={cn(defaultClasses.img, defaultClasses.step4img2, "h-[220px]")} src={image.step4img2} preset="slideInRight" delay={0.1} />
          </div>
        );
      case 4:
         return (
          <div className="relative w-full h-full flex items-center">
             <AnimatedStepImage alt="Meeting Notes Summaries CRM" className={cn(defaultClasses.img, defaultClasses.step5img, "h-[260px]")} src={image.step5img} preset="fadeInScale" />
          </div>
         );
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[1280px] mx-auto relative z-10 px-4 md:px-6">
        <FeatureCard step={step}>
            <AnimatePresence mode="wait">
                <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="w-full h-full absolute inset-0">
                    {renderStepContent()}
                </motion.div>
            </AnimatePresence>
        </FeatureCard>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <StepsNav current={step} onChange={setStep} steps={steps} />
        </motion.div>
    </div>
  );
}
