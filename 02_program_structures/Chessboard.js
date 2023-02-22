let n = 20;

let evenRow = "", unevenRow = "";
let chessBoard = []

for (let i = 0; i < n; i++) {
    unevenRow = unevenRow + " #";
    evenRow = evenRow + "# ";
}


for (let i = 1; i <= n/2; i++) {
    chessBoard.push(unevenRow);
    chessBoard.push(evenRow);;
}

if (n % 2) {
    chessBoard.push(unevenRow);
};

console.log(chessBoard.join("\n"));
