import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'revealing'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setPhase('revealing');
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-800 ${
      phase === 'revealing' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      <div className="text-center">
        {/* SATO Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/eb3d11fc-8294-4b1b-b785-f08fac3557ec.png" 
            alt="SATO Logo" 
            className="h-24 mx-auto mb-6"
          />
          <p className="text-tactical text-muted-foreground mt-2">
            Solving Advanced Tactical Objectives
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <div className="mt-4 text-tactical text-muted-foreground">
          {progress < 100 ? `INITIALIZING ${progress}%` : 'DEPLOYING'}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;