const randomizeCase = (txt) => {
    return txt
        .split('')
        .map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase())
        .join('');
};

module.exports = (txt) => {
    return txt
        .map(randomizeCase)
        .join(' 👏 ')
        .concat(' 👏 ');
};