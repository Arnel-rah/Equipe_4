export function reduceDirections (directions) {
    let result = [];
    let nord = 0;
    let sud = 0;
    let est = 0;
    let ouest = 0;

    for (let i = 0; i < directions.length; i++) {
        switch (directions[i]) {
            case "NORD":
                nord++;
                break;
            case "SUD":
                sud++;
                break;
            case "EST":
                est++;
                break;
            case "OUEST":
                ouest++;
                break;
            default:
                throw new Error("It is not a position");
        }
    }

    if (nord > sud ) {
        result.push("NORD")
    } else if (nord < sud) {
        result.push("SUD")
    }

    if (ouest > est) {
        result.push("OUEST")
    } else if (ouest < est) {
        result.push("EST")
    }

    return result;

}

console.log(reduceDirections(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"]));
console.log(reduceDirections(["NORD", "SUD", "EST", "OUEST"]));