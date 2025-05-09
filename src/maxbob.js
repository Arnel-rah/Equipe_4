
export function countMaxBobsleigh(N, map) {
    let MaxBobsleigh = 0;

    for (let i = 0; i < N; i++) {
        let countDot = 0;
        for (let j = 0; j < N; j++) {
            if ((map[i][j]) == ".") {
                countDot++
                if (countDot == 4) {
                    MaxBobsleigh++;
                    countDot = 0;
                }
            }
            else if ((map[i][j]) == "X" || map[i][j] == "x") {
                if (countDot == 4) {
                    MaxBobsleigh++;
                    countDot = 0;
                } else {
                    countDot = 0;
                }
            }
        }
    }
    return MaxBobsleigh
}
console.log(countMaxBobsleigh(6, ["....xx", "..xxxx", "..x...", "x.....", "x....x", ".....x"]));
