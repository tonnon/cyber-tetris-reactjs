export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '41, 93, 251',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: '244, 46, 241',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '233, 36, 88',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '255, 255, 130',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: '173, 92, 36',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T','T'],
            [0, 'T', 0],
        ],
        color: '129, 242, 196',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z','Z'],
            [0, 0, 0],
        ],
        color: '75, 222, 222',
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}
