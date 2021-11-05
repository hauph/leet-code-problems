function defangIPaddrTS(address: string): string {
    return address.replace(/\./g, '[.]');
};