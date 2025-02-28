
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export function preparationTimeInMinutes(numberOfLayers) {
  const PREPARATION_MINUTES_PER_LAYER = 2;
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}