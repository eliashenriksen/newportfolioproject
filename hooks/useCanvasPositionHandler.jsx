import { useEffect, useState } from "react";

export function useCanvasPositionHandler() {

  const [camera1Position, setcamera1Position] = useState([0, 2, 1]);
  const [camera2Position, setcamera2Position] = useState([0, 0, 2]);
  //Change "dpr" for performance boost on mobile, lower dpr = lower render quality. Device pixel ratio. > low quality 0.1 - 0.6 > high quality 1 - 2
  const [canvas1DPR, setCanvas1DPR] = useState([1, 2]);
  const [canvas2DPR, setCanvas2DPR] = useState([1, 2]);
  const [canvasPositionReturn, setCanvasPositionReturn] = useState({});

  function responsiveCanvasPositionHandler(event) {
    const windowWidth = window.innerWidth;

    switch (true) {
      case (windowWidth >= 1850):
        setcamera1Position([0, 2, 1]);
        setcamera2Position([0, 0, 2]);
        setCanvas2DPR([1, 2]);
        break;
      
      case (windowWidth >= 1400 && windowWidth < 1850):
        setcamera1Position([0, 0.5, 3]);
        setCanvas2DPR([0.9, 1.9]);
        break;

      case (windowWidth >= 992 && windowWidth < 1400):
        setcamera1Position([0, 0, 4]);
        setcamera2Position([0, 0, 2.5]);
        setCanvas2DPR([0.1, 0.6]);
        break;

      case (windowWidth >= 768 && windowWidth < 992):
        setcamera1Position([0, 0, 5]);
        setcamera2Position([0, 0, 3]);
        setCanvas2DPR([0.1, 0.5]);
        break;

      case (windowWidth >= 599 && windowWidth < 768):
        setcamera1Position([0, 0, 6]);
        setcamera2Position([0, 0, 3.5]);
        setCanvas2DPR([0.1, 0.4]);
        break;
      
      default:
        setcamera1Position([0, 0, 6]);
        setcamera2Position([0, 0, 3.5]);
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
    setCanvasPositionReturn({camera1Position: camera1Position, canvas1DPR: canvas1DPR, camera2Position: camera2Position, canvas2DPR: canvas2DPR});
  }, [camera1Position, canvas1DPR, camera2Position, canvas2DPR]);

  return canvasPositionReturn;
}