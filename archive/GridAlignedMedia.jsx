import { useEffect, useRef, useState } from 'react';

// Custom hook to get grid cell dimensions
const useGridCellDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const measureCell = () => {
      const element = document.createElement("div");
      element.style.position = "fixed";
      element.style.height = "var(--line-height)";
      element.style.width = "1ch";
      document.body.appendChild(element);
      const rect = element.getBoundingClientRect();
      document.body.removeChild(element);
      setDimensions({ width: rect.width, height: rect.height });
    };

    measureCell();
    window.addEventListener("resize", measureCell);
    return () => window.removeEventListener("resize", measureCell);
  }, []);

  return dimensions;
};

// Media component that maintains grid alignment
export const GridAlignedMedia = ({ src, alt, type = "img" }) => {
  const ref = useRef(null);
  const { height: cellHeight } = useGridCellDimensions();
  const [padding, setPadding] = useState(0);

  useEffect(() => {
    if (!ref.current || !cellHeight) return;

    const setHeightFromRatio = (width, height) => {
      const ratio = width / height;
      const rect = ref.current.getBoundingClientRect();
      const realHeight = rect.width / ratio;
      const diff = cellHeight - (realHeight % cellHeight);
      setPadding(diff);
    };

    const setFallbackHeight = () => {
      const rect = ref.current.getBoundingClientRect();
      const height = Math.round((rect.width / 2) / cellHeight) * cellHeight;
      ref.current.style.height = `${height}px`;
    };

    const handleLoad = () => {
      if (type === "img") {
        setHeightFromRatio(ref.current.naturalWidth, ref.current.naturalHeight);
      } else if (type === "video") {
        setHeightFromRatio(ref.current.videoWidth, ref.current.videoHeight);
      }
    };

    const handleError = () => {
      setFallbackHeight();
    };

    if (type === "img") {
      if (ref.current.complete) {
        handleLoad();
      } else {
        ref.current.addEventListener("load", handleLoad);
        ref.current.addEventListener("error", handleError);
      }
    } else if (type === "video") {
      if (ref.current.readyState >= 2) {
        handleLoad();
      } else {
        ref.current.addEventListener("loadeddata", handleLoad);
        ref.current.addEventListener("error", handleError);
      }
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("load", handleLoad);
        ref.current.removeEventListener("error", handleError);
        ref.current.removeEventListener("loadeddata", handleLoad);
      }
    };
  }, [cellHeight, type]);

  const MediaComponent = type;
  return (
    <div style={{ paddingBottom: `${padding}px` }}>
      <MediaComponent ref={ref} src={src} alt={alt} className="w-full" />
    </div>
  );
};

// Debug grid component
export const DebugGrid = () => {
  const [isDebug, setIsDebug] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle('debug', isDebug);
  }, [isDebug]);

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      <input
        type="checkbox"
        checked={isDebug}
        onChange={(e) => setIsDebug(e.target.checked)}
        className="debug-toggle"
      />
      <label>Show Grid</label>
    </div>
  );
};

// GridAlignedOverlay component for handling image+overlay combinations
export const GridAlignedOverlay = ({ 
  imageSrc, 
  imageAlt, 
  children, 
  className = "" 
}) => {
  const { height: cellHeight } = useGridCellDimensions();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !cellHeight) return;

    const updateDimensions = () => {
      const rect = imageRef.current.getBoundingClientRect();
      if (imageRef.current.complete) {
        const ratio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
        const realHeight = rect.width / ratio;
        const diff = cellHeight - (realHeight % cellHeight);
        setDimensions({ 
          width: rect.width, 
          height: realHeight + diff 
        });
      }
    };

    updateDimensions();
    imageRef.current.addEventListener("load", updateDimensions);
    window.addEventListener("resize", updateDimensions);

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("load", updateDimensions);
      }
      window.removeEventListener("resize", updateDimensions);
    };
  }, [cellHeight]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: dimensions.width || "100%",
        height: dimensions.height || "auto"
      }}
    >
      <img
        ref={imageRef}
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

export default GridAlignedMedia;