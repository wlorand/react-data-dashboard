/**
 * File: dataService.ts
 * Desc: fetch data for the React app 
 *     HERE: fetching data from local files and setting a random setTimeout to
 *           simulate an async operation that takes a bit of time (clever!)
 */

// mock data imports
import { info } from "../data/info";
import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";

// TS interface imports
import { Allocation, Position } from "../data/models";

function getRandomDelay() {
  return 500 + (Math.random() * 2000);
}

export function getFundInfo(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, getRandomDelay());
  })
}

export function getFundAllocation(): Promise<Allocation[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allocation);
    }, getRandomDelay());
  });
}

export function getPerformance(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performance);
    }, getRandomDelay());
  })
}

export function getPositions(): Promise<Position[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(positions);
    }, getRandomDelay());
  });
}
