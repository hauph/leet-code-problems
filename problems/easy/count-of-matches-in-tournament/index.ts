function numberOfMatchesTS(n: number): number {
    if (n === 1) {
        return 0;
    }
    
    let isEven: boolean = n % 2 === 0;
    let totalMatches: number = 0;
    let totalTeams: number = n;
    
    while (totalTeams > 1) {
        if (isEven) {
            totalMatches += totalTeams / 2;
            totalTeams = totalTeams / 2;
        } else {
            totalMatches += (totalTeams - 1) / 2;
            totalTeams = (totalTeams - 1) / 2 + 1;
        }
    }
    
    return totalMatches;
};