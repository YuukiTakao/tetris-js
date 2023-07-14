// Description: テトリスのゲームを作る

const FIELD_COL = 10
const FIELD_ROW = 20

const BLOCK_SIZE = 30
const TETRO_SIZE = 4
// 画面サイズ
const SCREEN_W = BLOCK_SIZE * FIELD_COL
const SCREEN_H = BLOCK_SIZE * FIELD_ROW

const c = document.getElementById('canvas')
const ctx = c.getContext('2d')

c.width = SCREEN_W
c.height = SCREEN_H
c.style.border = '4px solid #555'

// テトロミノ
let tetro = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
]
// 現在地
let tetro_x = 0
let tetro_y = 0

let field = []
function init() {
  for (let y = 0; y < FIELD_ROW; y++) {
    field[y] = []
    for (let x = 0; x < FIELD_COL; x++) {
      field[y][x] = 0
    }
  }
  console.log(field)
  field[5][8] = 1
  field[19][0] = 1
  field[19][9] = 1
}

init()
drawAll()



function drawBlock(x, y) {
  const px = x * BLOCK_SIZE
  const py = y * BLOCK_SIZE

  ctx.fillStyle = 'red'
  ctx.fillRect(px, py, BLOCK_SIZE, BLOCK_SIZE)
  ctx.strokeStyle = 'black'
  ctx.strokeRect(px, py, BLOCK_SIZE, BLOCK_SIZE)
}

function drawAll() {
  ctx.clearRect(0, 0, SCREEN_W, SCREEN_H)

  for (let y = 0; y < FIELD_ROW; y++) {
    for (let x=0; x < FIELD_COL; x++) {
      if (field[y][x] === 1) {
        drawBlock(x, y)
      }
    }
  }
  for (let y = 0; y < TETRO_SIZE; y++) {
    for (let x=0; x < TETRO_SIZE; x++) {
      if (tetro[y][x] === 1) {
        drawBlock(tetro_x+x, tetro_y+y)
      }
    }
  }
}

document.onkeydown = function(e) {
  console.log(e.code);

  switch (e.code) {
    case 'ArrowLeft':
      tetro_x--
      console.log('ArrowLeft pressed')
      break
    case 'ArrowRight':
      tetro_x++
      console.log('ArrowRight pressed')
      break
    case 'ArrowDown':
      tetro_y++
      console.log('ArrowDown pressed')
      break
    case 'ArrowUp':
      tetro_y--
      console.log('ArrowUp pressed')
      break
    case 'Space':
      console.log('Space pressed')
      break
  }
  console.log('tetro_x: ' + tetro_x + ' tetro_y: ' + tetro_y)
  drawAll()
}