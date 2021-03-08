import { handleCheckData, InsertChildStat } from './firebaseFunction';

export async function addState(childrenList: any) {
  const childrenArray = childrenList.approved;
  for (const element of childrenArray) {
    element.state = await InsertChildStat(
      String(element.institutionId),
      String(element.childId),
    );

    await handleCheckData(
      String(element.institutionId),
      String(element.childId),
    );
  }
  console.log(childrenArray, '교체된 배열');
  return childrenArray;
}
