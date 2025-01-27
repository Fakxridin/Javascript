
function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

function birdsInWeek(birdsPerDay, weekNumber) {
  const startDay = (weekNumber - 1) * 7;
  const endDay = startDay + 7;
  
  let total = 0;
  for (let i = startDay; i < endDay; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}


module.exports = {
  totalBirdCount,
  birdsInWeek,
  fixBirdCountLog,
};
