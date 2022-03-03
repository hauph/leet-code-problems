function interpretTS(command: string): string {
    let c = command.replace(/(\(\))/g, 'o');
    c = c.replace(/(\(al\))/g, 'al');

    return c;
};