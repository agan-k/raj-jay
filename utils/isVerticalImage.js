export default function isVerticalImage({height, width}) {
  if (height > width) return true;
  return false;
}