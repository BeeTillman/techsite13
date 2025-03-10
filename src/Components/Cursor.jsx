import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const delay = 18;
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);
  const requestRef = useRef(null);

  useEffect(() => {
    if (isDesktop()) {
      document.addEventListener("mousedown", mouseOverEvent);
      document.addEventListener("mouseup", mouseOutEvent);
      document.addEventListener("mouseenter", mouseEnterEvent);
      document.addEventListener("mouseleave", mouseLeaveEvent);
      document.addEventListener("mousemove", mouseMoveEvent);

      animateDotOutline();
    }

    return () => {
      if (isDesktop()) {
        document.removeEventListener("mousedown", mouseOverEvent);
        document.removeEventListener("mouseup", mouseOutEvent);
        document.removeEventListener("mouseenter", mouseEnterEvent);
        document.removeEventListener("mouseleave", mouseLeaveEvent);
        document.removeEventListener("mousemove", mouseMoveEvent);

        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const isDesktop = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    return !isMobile && window.innerWidth > 768;
  };

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.50)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(2)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
