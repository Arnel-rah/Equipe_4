export function getLastDelegation(delegation) {

    if (delegation == undefined || delegation == null ) {
        return [];
    }
    
    let delegationInfo = [];
    let lastCountry = "";
    let maxSpeed = 0;

    for (let i = 0; i < delegation.length; i++) {
        delegationInfo.push(delegation[i].split(' '));
    }

    for (let i = 0; i < delegationInfo.length; i++) {

        if (delegationInfo[i][2] == '' || delegationInfo[i][1] == '') {
            return Error('Error');
        }

        if (i == 0) {
            lastCountry = delegationInfo[i][0];
            maxSpeed = parseFloat(delegationInfo[i][1]) / parseFloat(delegationInfo[i][2]);
        } else {
            if (maxSpeed < parseFloat(delegationInfo[i][1]) / parseFloat(delegationInfo[i][2])) {
                lastCountry = delegationInfo[i][0];
                maxSpeed = parseFloat(delegationInfo[i][1]) / parseFloat(delegationInfo[i][2])
            }
        }
    }
      

    return lastCountry;
}

console.log(getLastDelegation(['Chilli 101 2', 'Madagascar 50 3', 'America 78 1']));
