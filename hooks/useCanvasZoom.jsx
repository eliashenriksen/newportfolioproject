import { useEffect, useState } from "react";

export function useCanvasZoom() {

  const [canvas1Zoom, setCanvas1Zoom] = useState(0);
  const [canvas2Zoom, setCanvas2Zoom] = useState(0);
  const [canvasZoomReturn, setCanvasZoomReturn] = useState({});

  function responsiveCanvasZoomer(event) {
    const windowWidth = window.innerWidth;

    switch (true) {
      case (windowWidth >= 1850):
        setCanvas1Zoom(3);
        console.log("window width equal to or greater than 1850");
        break;
      
      case (windowWidth >= 1440 && windowWidth < 1850):
        console.log("window width equal to 1440");
        setCanvas1Zoom(0.6);
        break;
      
      default:
        console.log("default block");
        setCanvas1Zoom(2);
        break;
    }
  }

  useEffect(() => {
    responsiveCanvasZoomer();
    window.addEventListener("resize", responsiveCanvasZoomer);
    return () => {
      window.removeEventListener("resize", responsiveCanvasZoomer);
    }
  }, []);

  useEffect(() => {
    setCanvasZoomReturn({canvas1Zoom: canvas1Zoom, canvas2Zoom: canvas2Zoom});
  }, [canvas1Zoom, canvas2Zoom])

  return canvasZoomReturn;
}