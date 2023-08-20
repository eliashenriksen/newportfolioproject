import { useEffect, useState } from "react";

export function useCanvasPositionHandler() {

  const [camera1Position, setcamera1Position] = useState([0, 2, 1]);
  const [camera2Position, setcamera2Position] = useState([0, 0, 2]);
  //Change "dpr" for performance boost on mobile, lower dpr = lower render quality. Device pixel ratio. > low quality 0.1 - 0.6 > high quality 1 - 2
  const [canvas1DPR, setcanvas1DPR] = useState([1, 2]);
  const [canvasPositionReturn, setCanvasPositionReturn] = useState({});

  function responsiveCanvasPositionHandler() {
    const windowWidth = window.innerWidth;

    switch (true) {
      case (windowWidth >= 1850):
        setcamera1Position([0, 2, 1]);
        setcamera2Position([0, 0, 2]);
        setcanvas1DPR([1, 2]);
        break;
      
      case (windowWidth >= 1400 && windowWidth < 1850):
        setcamera1Position([0, 0.5, 3]);
        setcanvas1DPR([0.9, 1.9]);
        break;

      case (windowWidth >= 992 && windowWidth < 1400):
        setcamera1Position([0, 0, 4]);
        setcamera2Position([0, 0, 2.5]);
        setcanvas1DPR([0.7, 1.7]);
        break;

      case (windowWidth >= 768 && windowWidth < 992):
        setcamera1Position([0, 0, 5]);
        setcamera2Position([0, 0, 3]);
        setcanvas1DPR([0.5, 1.5]);
        break;

      case (windowWidth >= 599 && windowWidth < 768):
        setcamera1Position([0, 0, 6]);
        setcamera2Position([0, 0, 3.5]);
        setcanvas1DPR([0.3, 1.3]);
        break;

      case (windowWidth >= 200 && windowWidth < 599):
        setcamera1Position([0, 0, 8]);
        setcamera2Position([0, 0, 3.5]);
        setcanvas1DPR([0.3, 1.3]);
        break;
      
      default:
        setcamera1Position([0, 0, 8]);
        setcamera2Position([0, 0, 3.5]);
        setcanvas1DPR([0.3, 1.3]);
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
    setCanvasPositionReturn({camera1Position: camera1Position, camera2Position: camera2Position, canvas1DPR: canvas1DPR});
  }, [camera1Position, camera2Position, canvas1DPR]);

  return canvasPositionReturn;
}