import { useEffect, useState } from "react";

export function useCanvasPositionHandler() {

  const [canvas1Position, setCanvas1Position] = useState([0, 2, 1]);
  const [canvas2Position, setCanvas2Position] = useState([0, 0, 2]);
  //Change "dpr" for performance boost on mobile, lower dpr = lower render quality. Device pixel ratio. > low quality 0.1 - 0.6 > high quality 1 - 2
  const [canvas1DPR, setCanvas1DPR] = useState([1, 2]);
  const [canvas2DPR, setCanvas2DPR] = useState([1, 2]);
  const [canvasPositionReturn, setCanvasPositionReturn] = useState({});

  function responsiveCanvasPositionHandler(event) {
    const windowWidth = window.innerWidth;

    switch (true) {
      case (windowWidth >= 1850):
        setCanvas1Position([0, 2, 1]);
        setCanvas2Position([0, 0, 2]);
        setCanvas2DPR([1, 2]);
        break;
      
      case (windowWidth >= 1400 && windowWidth < 1850):
        setCanvas1Position([0, 0.5, 3]);
        setCanvas2DPR([0.9, 1.9]);
        break;

      case (windowWidth >= 992 && windowWidth < 1400):
        setCanvas1Position([0, 0, 4]);
        setCanvas2Position([0, 0, 2.5]);
        setCanvas2DPR([0.1, 0.6]);
        break;

      case (windowWidth >= 768 && windowWidth < 992):
        setCanvas1Position([0, 0, 5]);
        setCanvas2Position([0, 0, 3]);
        setCanvas2DPR([0.1, 0.5]);
        break;

      case (windowWidth >= 599 && windowWidth < 768):
        setCanvas1Position([0, 0, 6]);
        setCanvas2Position([0, 0, 3.5]);
        setCanvas2DPR([0.1, 0.4]);
        break;
      
      default:
        setCanvas1Position([0, 0, 6]);
        setCanvas2Position([0, 0, 3.5]);
        setCanvas2DPR([0.1, 0.4]);
        break;
    }
  }

  useEffect(() => {
    responsiveCanvasPositionHandler();
    window.addEventListener("resize", responsiveCanvasPositionHandler);
    return () => {
      window.removeEventListener("resize", responsiveCanvasPositionHandler);
    }
  }, []);

  useEffect(() => {
    setCanvasPositionReturn({canvas1Position: canvas1Position, canvas1DPR: canvas1DPR, canvas2Position: canvas2Position, canvas2DPR: canvas2DPR});
  }, [canvas1Position, canvas1DPR, canvas2Position, canvas2DPR]);

  return canvasPositionReturn;
}