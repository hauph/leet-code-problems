function capitalizeTitle(title: string): string {
    const arrStr = title.split(' ');
    let res = ''

    arrStr.forEach(word => {
        let length = word.length;

        if (length === 1 || length === 2) {
            res += word.toLowerCase() + ' ';
        } else {
            res += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
        }
    })

    return res.trim();
};