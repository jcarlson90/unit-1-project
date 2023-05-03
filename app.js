const colors = {
    '1': 'lime',
    '-1': 'pink',
    'null': 'white',
};

const waysToWin = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
];

let turn, canvas, winner

//FUNCTIONS//
function announceWinner() {
    for (let i = 0; i < waysToWin.length; i++) {
        if (Math.abs(canvas[waysToWin[i][0]] + canvas[waysToWin[i][1]] + canvas[waysToWin[i][2]]) === 3)
        return canvas[waysToWin[i][0]];
    }
}

function intialize(){
    canvas = [null, null, null, null, null, null, null, null, null];
    turn = 1
    winner = null;
    render();
}