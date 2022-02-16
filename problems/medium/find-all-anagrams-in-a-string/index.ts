function findAnagrams(s: string, p: string): number[] {
    // isAnagram function is modified from https://stackoverflow.com/a/45561547/9511330
    function isAnagram(str) {

        if (str === p) {
            return true;
        }

        let srt1Length = str.length;
        let srt2Length = p.length;

        if (srt1Length !== srt2Length) {
            return false;
        }

        var counts = {};

        for (let i = 0; i < srt1Length; i++) {
            let index = str.charCodeAt(i) - 97;
            counts[index] = (counts[index] || 0) + 1;
        }

        for (let j = 0; j < srt2Length; j++) {
            let index = p.charCodeAt(j) - 97;
            if (!counts[index]) {
                return false;
            }
            counts[index]--;
        }

        return true;
    }

    const arr = [];

    for (let i = 0; i < s.length; i++) {
        const subS = s.substr(i, p.length);

        if (isAnagram(subS)) {
            arr.push(i);
        }
    }

    return arr;
};