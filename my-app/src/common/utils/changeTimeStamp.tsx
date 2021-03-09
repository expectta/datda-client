// time stamp 변환 함수
//2021-03-07T04:14:44.000Z -> 2021-03-07
export function changeTimeStamp(date: string) {
  const refinedDate = date.substring(0, 10);
  return refinedDate;
}
