export const currencyFormat = (value: any) => {
    if (isNaN(value)) {
        return 'Rs 0.00';
    }
    return `${Number(value)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};


export const removeLeadingZero = (numberString: string) => {
    const numericString = numberString.replace(/\D+/g, '');
    const withoutCountryCode = numericString.startsWith('94')
        ? numericString.slice(2)
        : numericString;

    const result = withoutCountryCode.replace(/^0+/, '');
    return result;
}

export const generateDynamicFont = (fontSize: number, lan: 'en') => {
    const adjustment = lan === 'en' ? 0 : -2;
    return {
        fontSize: fontSize + adjustment,
    };
    
}
