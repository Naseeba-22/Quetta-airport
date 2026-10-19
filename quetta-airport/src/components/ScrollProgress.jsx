import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        height > 0
          ? (scrollTop / height) * 100
          : 0;

      setProgress(percentage);
    }

    window.addEventListener(
      "scroll",
      updateProgress
    );

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;