const COLORS = ["yellow", "pink", "green", "light-blue", "dark-blue", "violet"];

const generateAnswerCode = () => {
  const array = Array.from({ length: 6 }, (v, k) => k * 1);
  const shuffled = array.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4);
  return selected;
};

const getAnswer = (answerCode) => {
  const answer = [];
  for (let i = 0; i < answerCode.length; i++) {
    answer.push(COLORS[answerCode[i]]);
  }
  return answer;
};

const answerCode = generateAnswerCode();
const answer = getAnswer(answerCode);

export default answer;
