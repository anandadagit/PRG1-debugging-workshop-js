function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + (rotation % 360);
  return newAngle < 0 ? newAngle + 360 : newAngle;

  return newAngle;
}

module.exports = { rotateAngleByDegrees };
