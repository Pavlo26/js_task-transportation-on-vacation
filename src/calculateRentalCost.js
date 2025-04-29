/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const prise = days * 40;
  const SHORT__DAY = 3;
  const LONG__DAY = 7;
  const SHORT__DAY_DISCONT = 20;
  const LONG__DAY_DISCONT = 50;

  if (days >= LONG__DAY) {
    return prise - LONG__DAY_DISCONT;
  }

  if (days >= SHORT__DAY) {
    return prise - SHORT__DAY_DISCONT;
  }

  if (days < SHORT__DAY) {
    return prise;
  }
}

module.exports = calculateRentalCost;
