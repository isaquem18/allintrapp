export function handleUpdateRange(rangeParam: string) {
  let range = '30m';
  switch (rangeParam) {
    case '1d':
      range = '30m';
      break;
    case '5d':
      range = '2h';
      break;
    case '1m':
      range = '12h';
      break;
    case '6m':
      range = '1d';
      break;
    default:
      range = '30m';
  }

  return range;
}
