function countBallsTS(lowLimit: number, highLimit: number): number {
    const boxes: number[] = [];
    let max = 0;

    for (let i = lowLimit; i <= highLimit; i++) {
        let boxNumber = i;

        if (i >= 10) {
            boxNumber = 0;
            const arrayFromBallNumber: string[] = i.toString().split('');
            for (let j = 0; j < arrayFromBallNumber.length; j++) {
                boxNumber += +arrayFromBallNumber[j];
            }
        }

        if (!boxes[boxNumber]) {
            boxes[boxNumber] = 1;
        } else {
            boxes[boxNumber] += 1;
        };

        max = boxes[boxNumber] > max ? boxes[boxNumber] : max;
    }

    return max;
};