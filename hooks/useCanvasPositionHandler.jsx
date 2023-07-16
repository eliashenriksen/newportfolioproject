import { useEffect, useState } from "react";

export function useCanvasPositionHandler() {

  const [canvas1Position, setCanvas1Position] = useState([-5.5, -0.6, -6]);
  const [canvas2Position, setCanvas2Position] = useState([]);
  const [canvasPositionReturn, setCanvasPositionReturn] = useState({});

  function responsiveCanvasPositionHandler(event) {
    const windowWidth = window.innerWidth;
    console.log("typeof check here:" ,typeof windowWidth);

    switch (true) {
      case (windowWidth >= 1850):
        setCanvas1Position([0, 2, 1]);
        break;
      
      case (windowWidth >= 1440 && windowWidth < 1850):
        setCanvas1Position([0, 0.5, 3]);
        break;

      case (windowWidth >= 992 && windowWidth < 1440):
        setCanvas1Position([0, 0, 4]);
        break;

      case (windowWidth >= 768 && windowWidth < 992):
        setCanvas1Position([0, 0, 5]);
        break;

      case (windowWidth >= 599 && windowWidth < 768):
        setCanvas1Position([0, 0, 6]);
        break;
      
      default:
        setCanvas1Position([0, -0.5, 8]);
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
    setCanvasPositionReturn({canvas1Position: canvas1Position, canvas2Position: canvas2Position});
  }, [canvas1Position, canvas2Position])

  return canvasPositionReturn;
}