
export function dayRate(ratePerHour) {
    return 8*ratePerHour
   };
   
   export function daysInBudget(budget, ratePerHour) {
   return Math.floor(budget / (ratePerHour*8));
   }
   
   export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    return Math.ceil(
       numDays * dayRate(ratePerHour) -
         Math.floor(numDays / 22) * 22 * dayRate(ratePerHour) * discount
     ); 
   }