function isAnagramTS(s: string, t: string): boolean {
    const arr1: string[] = s.split('').sort();
    const arr2: string[] = t.split('').sort();
    return arr1.join('') === arr2.join('');
};