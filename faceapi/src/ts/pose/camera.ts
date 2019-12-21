import { CV } from "../opencv";
import { Mat } from "../opencv/Mat";
declare var cv: CV;

export const generateCameraMatrix = (): Mat => {
  // const focal_length = dims.width;
  // const center = [dims.width / 2, dims.height / 2];
  const focal_length = 1;
  const center = [0.5, 0.5];
  const cameraMatrix = cv.matFromArray(3, 3, cv.CV_64F, [
    focal_length,
    0,
    center[0],
    0,
    focal_length,
    center[1],
    0,
    0,
    1,
  ]);
  return cameraMatrix;
};
