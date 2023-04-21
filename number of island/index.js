const map = [[1, 1, 0, 0, 0],
[1, 1, 0, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 1, 1]];

const numberOfIsland = ({ map }) => {
    const rows = map.length;

    if (rows == 0)
        return 0;
    const columns = map[0].length;

    let numberOfIsland = 0;

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 1) {
                markCurrentIsland({ map, i, j, rows, columns });
                numberOfIsland += 1;
            }
        }
    }
    return numberOfIsland;
}

const markCurrentIsland = ({ map, i, j, rows, colums }) => {
    if (i < 0 || i >= rows || j < 0 || j >= colums ||
        map[i][j] != 1)
        return
    map[i][j] = 2;
    markCurrentIsland({ map, i: i - 1, j, rows, colums }); //LEFT
    markCurrentIsland({ map, i, j: j + 1, rows, colums }); //UP
    markCurrentIsland({ map, i: i + 1, j, rows, colums }); //RIGHT
    markCurrentIsland({ map, i, j: j - 1, rows, colums }); //DOWN
}

console.log(numberOfIsland({ map }));