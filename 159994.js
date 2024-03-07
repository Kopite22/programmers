const solution = (cards1, cards2, goal) => {
  if (goal[0] === cards1[0]) {
    cards1.shift();
    goal.shift();
    return !goal.length ? 'Yes' : solution(cards1, cards2, goal);
  }
  if (goal[0] === cards2[0]) {
    cards2.shift();
    goal.shift();
    return !goal.length ? 'Yes' : solution(cards1, cards2, goal);
  }
  return 'No';
};

function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
