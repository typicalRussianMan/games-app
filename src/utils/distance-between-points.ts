import { Address } from '../models/address';

/** Point. */
export type Point = Pick<Address, 'lat' | 'lng'>;

/**
 * Converts degrees to radiants.
 * @param deg Angle in degrees.
 */
function degreesToRad(deg: number): number {
  return deg * Math.PI / 180;
}

const EARTH_RADIUS = 6_371_000;

/**
 * Calculates distance (in meters) between two points.
 * @param p1 Point.
 * @param p2 Point.
 */
export function calculateDistanceBetweenPoints(p1: Point, p2: Point): number {
  const dLat = degreesToRad(p2.lat - p1.lat);
  const dLng = degreesToRad(p2.lng - p1.lng);

  const lat1 = degreesToRad(p1.lat);
  const lat2 = degreesToRad(p2.lat);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * c;
}
