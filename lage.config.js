module.exports = {
  pipeline: {
    build: ["^build"],
    test: ["build"],
    lint: [],
    clean: [],
    dev: ["^start"],
  },
};
