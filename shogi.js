//Pieces

const king =
  "<div class='piece' id='king'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z'/></svg></div>";
const rook =
  "<div class='piece' id='rook'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z'/></svg></div>";
const bishop =
  "<div class='piece' id='bishop'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512'><path d='M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z'/></svg></div>";
const gold =
  "<div class='piece' id='gold'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'><path d='M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z'/></svg></div>";
const silver =
  "<div class='piece' id='silver'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'><path d='M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-95.2-8c-18.1 0-31.3 12.8-35.6 26.9c-8 26.2-32.4 45.2-61.2 45.2c-10 0-19.4-2.3-27.7-6.3c-7.6-3.7-16.7-3.3-24 1.2C.7 162.1-3.1 177.1 3.7 188.9L97.6 352H153l-83-144.1c40.5-2.2 75.3-25.9 93.1-59.8c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c17.8 34 52.6 57.7 93.1 59.8L359 352h55.4l93.9-163.1c6.8-11.7 3-26.7-8.6-33.8c-7.3-4.5-16.4-4.9-24-1.2c-8.4 4-17.7 6.3-27.7 6.3c-28.8 0-53.2-19-61.2-45.2C382.5 100.8 369.3 88 351.2 88c-14.5 0-26.3 8.5-32.4 19.3c-12.4 22-35.9 36.7-62.8 36.7s-50.4-14.8-62.8-36.7C187.1 96.5 175.4 88 160.8 88zM133.2 432H378.8l16.6 32H116.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3L68.6 452.5c-3 5.8-4.6 12.2-4.6 18.7c0 22.5 18.2 40.8 40.8 40.8H407.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z'/></svg></div>";
const knights =
  "<div class='piece' id='knights'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z'/></svg></div>";
const lances =
  "<div class='piece' id='lances'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z'/></svg></div>";
const pawns =
  "<div class='piece' id='pawns'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512'><path d='M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z'/></svg></div>";
const dragon =
  "<div class='piece' id='dragon'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'><path d='M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z'/></svg></div>";
const horsedragon =
  "<div class='piece' id='horsedragon'><svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512'><path d='M448 238.1V160h16l9.8 19.6c12.5 25.1 42.2 36.4 68.3 26c20.5-8.2 33.9-28 33.9-50.1V80c0-19.1-8.4-36.3-21.7-48H560c8.8 0 16-7.2 16-16s-7.2-16-16-16H480 448C377.3 0 320 57.3 320 128H224 203.2 148.8c-30.7 0-57.6 16.3-72.5 40.8C33.2 174.5 0 211.4 0 256v56c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-13.4 6.6-25.2 16.7-32.5c1.6 13 6.3 25.4 13.6 36.4l28.2 42.4c8.3 12.4 6.4 28.7-1.2 41.6c-16.5 28-20.6 62.2-10 93.9l17.5 52.4c4.4 13.1 16.6 21.9 30.4 21.9h33.7c21.8 0 37.3-21.4 30.4-42.1l-20.8-62.5c-2.1-6.4-.5-13.4 4.3-18.2l12.7-12.7c13.2-13.2 20.6-31.1 20.6-49.7c0-2.3-.1-4.6-.3-6.9l84 24c4.1 1.2 8.2 2.1 12.3 2.8V480c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V315.7c19.2-19.2 31.5-45.7 32-75.7h0v-1.9zM496 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z'/></svg></div>";

const playerDisplay = document.querySelector("#player");
const board = document.querySelector("#board");

let player = "white";
playerDisplay.textContent = "white";

const width = 9;

const startPieces = [
  lances,
  knights,
  silver,
  gold,
  king,
  gold,
  silver,
  knights,
  lances,
  "",
  bishop,
  "",
  "",
  "",
  "",
  "",
  rook,
  "",
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  pawns,
  "",
  bishop,
  "",
  "",
  "",
  "",
  "",
  rook,
  "",
  lances,
  knights,
  silver,
  gold,
  king,
  gold,
  silver,
  knights,
  lances,
];

function createBoard() {
  startPieces.forEach((startPiece, i) => {
    const square = document.createElement("div");
    square.innerHTML = startPiece;
    square.classList.add("square");
    square.setAttribute("square-id", i);
    const row = Math.floor((80 - i) / 9) + 1;
    square.firstChild?.setAttribute("draggable", true);
    square.classList.add(i % 2 === 0 ? "color1" : "color2");

    if (i <= 8 || i === 10 || i === 16 || (i >= 18 && i <= 26)) {
      square.firstChild.firstChild.classList.add("white");
    }
    if (i >= 72 || i === 70 || i === 64 || (i >= 54 && i <= 61)) {
      square.firstChild.firstChild.classList.add("black");
    }

    board.append(square);
  });
}

createBoard();

const allSquares = document.querySelectorAll("#board .square");

allSquares.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});

let startPositionId;
let draggedElement;

function dragStart(e) {
  startPositionId = e.target.parentNode.getAttribute("square-id");
  draggedElement = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.stopPropagation();
  const correctGo = draggedElement.firstChild.classList.contains(player);
  const opponentGo = player === "white" ? "black" : "white"; //remover?
  const taken = e.target.classList.contains("piece");
  const valid = checkIfValid(e.target);
  const beTaken = e.target.firstChild?.classList.contains(opponentGo);
  const targetId =
    Number(e.target.getAttribute("square-id")) ||
    Number(e.target.parentNode.getAttribute("square-id"));

  if (correctGo) {
    if (beTaken && valid) {
      e.target.parentNode.append(draggedElement);
      e.target.remove();

      changePlayer();
      return;
    }
    if (valid) {
      e.target.append(draggedElement);
      changePlayer();
      return;
    }
    if (targetId <= 80 && targetId >= 54) {
      if (
        draggedElement.id == "pawns" ||
        draggedElement.id == "lances" ||
        draggedElement.id == "knights" ||
        draggedElement.id == "silver"
      )
        draggedElement.id = "gold";
      if (draggedElement.id == "rook") draggedElement.id = "dragon";
      if (draggedElement.id == "bishop") draggedElement.id = "horsedragon";
    }
    console.log(draggedElement.id);
    if (taken && beTaken) return;
  }
}

function checkIfValid(target) {
  const targetId =
    Number(target.getAttribute("square-id")) ||
    Number(target.parentNode.getAttribute("square-id"));
  const startId = Number(startPositionId);
  const piece = draggedElement.id;

  switch (piece) {
    case "pawns":
      if (startId + width === targetId && !(startId === targetId)) {
        if (targetId <= 80 && targetId >= 54) {
        }
        return true;
      }
      break;

    case "bishop":
      // if (startId + (targetId - startId) === targetId || startId - (startId - targetId) === targetId || startId + 1 === targetId || startId - 1 === targetId|| startId + width === targetId ||
      //   startId - width === targetId && !(startId === targetId))

      if (
        startId + (targetId - startId) === targetId ||
        (startId - (startId - targetId) === targetId && !(startId === targetId))
      ) {
        return true;
        if (targetId <= 80 && targetId >= 54)
          piece.firstChild.classList.add("prom");
      }
      break;

    case "rook":
      if (
        targetId % 9 === startId ||
        (targetId - (startId % 9) + (startId % 9) === targetId &&
          !(startId === targetId))
      ) {
        return true;
      }
      break;

    case "lances":
      if (
        targetId % 9 === startId &&
        !(startId === targetId) &&
        startId < targetId
      ) {
        return true;
        if (targetId <= 80 && targetId >= 54)
          piece.firstChild.classList.add("prom");
      }
      break;

    case "knights":
      if (
        startId + width * 2 + 1 === targetId ||
        (startId + width * 2 - 1 === targetId && !(startId === targetId))
      ) {
        return true;
        if (targetId <= 80 && targetId >= 54)
          piece.firstChild.classList.add("prom");
      }
      break;

    case "silver":
      if (
        startId + width === targetId ||
        startId + width + 1 === targetId ||
        startId + width - 1 === targetId ||
        startId - width + 1 === targetId ||
        (startId - width - 1 === targetId && !(startId === targetId))
      ) {
        return true;
        if (targetId <= 80 && targetId >= 54)
          piece.firstChild.classList.add("prom");
      }
      break;

    case "gold":
      if (
        startId + 1 === targetId ||
        startId - 1 === targetId ||
        startId + width === targetId ||
        startId - width === targetId ||
        startId + width + 1 === targetId ||
        (startId + width - 1 === targetId && !(startId === targetId))
      ) {
        return true;
      }
      break;

    case "king":
      if (
        startId + 1 === targetId ||
        startId - 1 === targetId ||
        startId + width === targetId ||
        startId - width === targetId ||
        startId + width + 1 === targetId ||
        startId + width - 1 === targetId ||
        startId - width + 1 === targetId ||
        (startId - width - 1 === targetId && !(startId === targetId))
      ) {
        return true;
      }
      break;

    case "dragon":
      if (
        targetId % 9 === startId ||
        targetId - (startId % 9) + (startId % 9) === targetId ||
        startId + width + 1 === targetId ||
        startId + width - 1 === targetId ||
        startId - width + 1 === targetId ||
        (startId - width - 1 === targetId && !(startId === targetId))
      )
        return true;
      break;
    case "horsedragon":
      if (
        startId + (targetId - startId) === targetId ||
        startId - (startId - targetId) === targetId ||
        startId + 1 === targetId ||
        startId - 1 === targetId ||
        startId + width === targetId ||
        (startId - width === targetId && !(startId === targetId))
      )
        return true;
      break;
  }
}

// if (targetId <= 80 && targetId >= 54)
//     piece.firstChild.classList.add('prom')

function changePlayer() {
  if (player === "white") {
    reverseIds();
    player = "black";
    playerDisplay.textContent = "black";
  } else {
    revertIds();
    player = "white";
    playerDisplay.textContent = "white";
  }
}

function reverseIds() {
  const allSquares = document.querySelectorAll("#board .square");
  allSquares.forEach((square, i) =>
    square.setAttribute("square-id", width * width - 1 - i)
  );
}

function revertIds() {
  const allSquares = document.querySelectorAll("#board .square");
  allSquares.forEach((square, i) => square.setAttribute("square-id", i));
}
