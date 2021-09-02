function checkOnesSegmentTS(s: string): boolean {
    let match: string[] = s.match(/1+/g);

    return match.length === 1;
};