import { isConstructorDeclaration } from 'typescript';
//시간표의 시간과 현재 시간을 비교
export const findStepEducation = (
  currentTime: string,
  totalTimetable: Array<any>,
) => {
  let currentStep = 0;
  console.log(currentTime, '전달받은 현재시간');
  const calculatedCurrentTime = Number(currentTime);

  for (const element of totalTimetable) {
    const fristTime = element.time.split('~')[0];
    const secondTime = element.time.split('~')[1];
    const startTime = Number(fristTime.replace(':', ''));
    const endTime = Number(secondTime.replace(':', ''));
    // console.log(
    //   startTime,
    //   '  시작',
    //   endTime,
    //   ' 끝',
    //   calculatedCurrentTime,
    //   '현재',
    // );
    if (
      calculatedCurrentTime >= startTime &&
      calculatedCurrentTime <= endTime
    ) {
      currentStep = element.step;
      // console.log(currentStep, '반환되는 스텝');
      return {
        step: element.step,
        timetable: element.time,
        currentEducation: element.contents,
      };
    }
  }
  return;
};
