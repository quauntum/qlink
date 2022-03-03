import { BotAchievement } from '../../types/models';

const getBadgesDivisibleByN = (
  badgePerRow: number,
  arr: BotAchievement[]
): Array<BotAchievement | '?'> => {
  // number of users' badges
  const l = arr.length;

  if (l < badgePerRow) {
    const r = badgePerRow - l;
    return [...arr, ...Array(r).fill('?')];
  } else {
    if (l % badgePerRow === 0) {
      return arr;
    } else {
      // number of badge slots to fill the row
      const r = badgePerRow - (l % badgePerRow);

      // concat items to create l % n === 0 length, fill with '?'
      return [...arr, ...Array(r).fill('?')];
    }
  }
};

export default getBadgesDivisibleByN;
