const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function kata1() {
  // implemente o código do kata 1 aqui
  let sequence1 = [];
  let number = 1;
  while (number <= 25) {
    sequence1.push(number);
    number++;
  }
  return sequence1;
}

function kata2() {
  // implemente o código do kata 2 aqui
  let sequence2 = [];
  let number = 25;
  while (number >= 1) {
    sequence2.push(number);
    number--;
  }
  return sequence2;
}

function kata3() {
  // implemente o código do kata 3 aqui
  let sequence3 = [];
  let number = -1;
  while (number >= -25) {
    sequence3.push(number);
    number--;
  }
  return sequence3;
}

function kata4() {
  // implemente o código do kata 4 aqui
  let sequence4 = [];
  let number = 25;
  while (number >= -25) {
    sequence4.push(number);
    number = number - 2;
  }
  return sequence4;
}

function kata5() {
  // implemente o código do kata 5 aqui
  let sequence5 = [];
  let number = -25;
  while (number <= -1) {
    sequence5.push(number);
    number++;
  }
  return sequence5;
}

function kata6() {
  // implemente o código do kata 6 aqui
  let sequence6 = [];
  for (let count = 3; count <= 100; count = count + 3) {
    sequence6.push(count);
  }
  return sequence6;
}

function kata7() {
  // implemente o código do kata 7 aqui
  let sequence7 = [];
  for (let count = 7; count <= 100; count = count + 7) {
    sequence7.push(count);
  }
  return sequence7;
}

function kata8() {
  // implemente o código do kata 8 aqui
  let sequence8 = [];
  for (let count = 100; count >= 1; count--) {
    let numberOne = count % 3;
    let numberTwo = count % 7;
    if (numberOne / 1 === 0 || numberTwo / 1 === 0) {
      sequence8.push(count);
    }
  }
  return sequence8;
}

function kata9() {
  // implemente o código do kata 9 aqui
  let sequence9 = [];
  let onlyMultiplayFive = [];
  for (let count = 5; count <= 100; count = count + 5) {
    onlyMultiplayFive.push(count);
  }
  for (let impar = 0; impar < onlyMultiplayFive.length; impar++) {
    if (onlyMultiplayFive[impar] % 2 !== 0) {
      sequence9.push(onlyMultiplayFive[impar]);
    }
  }
  return sequence9;
}

function kata10() {
  // implemente o código do kata 10 aqui
  return sampleArray;
}

function kata11() {
  // implemente o código do kata 11 aqui
  let sequence11 = [];
  for (let par = 0; par < sampleArray.lenght; par++) {
    if (sampleArray[par] % 2 === 0) {
      sequence11.push(sampleArray[par]);
    }
  }
  return sequence11;
}

function kata12() {
  // implemente o código do kata 12 aqui
  let sequence12 = [];
  for (let impar = 0; impar < sampleArray.length; impar++) {
    if (sampleArray[impar] % 2 !== 0) {
      sequence12.push(sampleArray[impar]);
    }
  }
}

function kata13() {
  // implemente o código do kata 13 aqui
  let sequence13 = [];
  for (let count = 0; count < sampleArray.length; count++) {
    let rest = sampleArray[count] % 8;
    if (rest / 1 === 0) {
      sequence13.push(sampleArray[count]);
    }
  }
}

function kata14() {
  // implemente o código do kata 14 aqui
  let sequence14 = [];
  let square = 0;
  for (let count = 0; count < sampleArray.length; count++) {
    square = sampleArray[count] * sampleArray[count];
    sequence14.push(square);
  }
}

function kata15() {
  // implemente o código do kata 15 aqui
  let soma = 0;
  for (let count = 0; count <= 20; count++) {
    soma += count;
  }
}

function kata16() {
  // implemente o código do kata 16 aqui
  let sum = 0;
  for (let count = 0; count < sampleArray.length; count++) {
    sum += sampleArray[count];
  }
}

function kata17() {
  // implemente o código do kata 17 aqui
  let menorNumber = sampleArray[0];
  for (let count = 0; count < sampleArray.length; count++) {
    if (menorNumber > sampleArray[count]) {
      menorNumber = sampleArray[count];
    }
  }
}

function kata18() {
  // implemente o código do kata 18 aqui
  let maiorNumber = 0;
  for (let count = 0; count < sampleArray.length; count++) {
    maiorNumber < sampleArray[count]
      ? (maiorNumber = sampleArray[count])
      : maiorNumber;
  }
}
