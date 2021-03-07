import { Children } from 'react';
import { firestore } from './firebase';
//원장이 기관을 생성했을때 firebase에 기관 등록
export function handleAddInstitution(institutionId: string) {
  firestore
    .collection('institution')
    .doc(String(institutionId))
    .set({})
    .then(() => {
      alert('실시간 데이터 베이스에 기관 등록완료');
    })
    .catch((error) => {
      alert('오류가 발생했습니다.');
    });
}
//선생님이 미승인된 원아를 승인완료 했을경우 마다 실행됨
//추가될 원아의 아이디가 존재 할 경우 덮어씌워짐.
export function handleAddChild(institutionId: string, childId: string) {
  console.log(institutionId, ' fb 함수 에서 기관', childId, ' 아이');
  firestore
    .collection('institution')
    .doc(String(institutionId))
    .collection('children')
    .doc(String(childId))
    .set({
      Check: false,
      Eat: false,
      Ok: false,
      Please: false,
      Sleep: false,
    })
    .then(() => {
      alert('실시간 데이터에 원아를 등록했습니다.');
    })
    .catch((error) => {
      alert('오류가 발생했습니다.');
    });
}
//실시간 데이터 베이스에서 원아 삭제
export function handleDeleteChild(institutionId: string, childId: string) {
  firestore
    .collection('institution')
    .doc(institutionId)
    .collection('children')
    .doc(childId)
    .delete()
    .then(() => {
      alert('실시간 데이터에서 해당원아를 삭제 했습니다.');
    })
    .catch((error) => {
      alert('오류가 발생했습니다.');
    });
}
function handleCheckCollection(institutionId: string) {
  firestore
    .collection('institution')
    .doc(String(institutionId))
    .get()
    .then((doc) => {
      if (doc.data()) {
        // handleRealTimeState(institutionId);
        return;
      }
      //아이가 승인이 되지 않았을때
      alert('해당기관이 없습니다');
    });
}
