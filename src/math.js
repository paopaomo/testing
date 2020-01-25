module.exports = {
    add: (...args) => {
        return args.reduce((previous, current) => {
            return previous + current;
        })
    },
    multiple: (...args) => {
        return args.reduce((previous, current) => {
            return previous * current;
        })
    }
};
