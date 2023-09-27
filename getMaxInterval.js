/**
 * Получить длину самого длинного интервала из 1. Первый 0 встреченный в интеревале игнорируем. Второй 0 означает конец интервала
 * @param inputList{(1 | 0)[]}
 * @returns {number}
 */
export default function getMaxInterval(inputList = []) {
  let maxInterval = 0;
  let count = 0;
  let hasFirstNull = false;
  let i = 0;
  let j = 0;

  while (j < inputList.length) {
    const inputListElement = inputList[j];

    switch (inputListElement) {
      case 1:
        count += 1;

        if (j === inputList.length - 1 && maxInterval < count) {
          maxInterval = count;
        }

        break;
      case 0:
        // Первый ноль
        if (!hasFirstNull) {
          hasFirstNull = true;
          // Задаем начало следующего интервала
          i = j;

        } else {
          if (maxInterval < count) {
            maxInterval = count;
          }

          // Обнуляемся
          hasFirstNull = false;
          count = 0;
          // Перемещаем указатель
          j = i;
        }
        break;
    }

    j += 1;
  }

  return maxInterval;
}
