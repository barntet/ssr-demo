module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'revert']], // type-enum是指commit正文的前缀， 通常用到 feat新功能，fix一次修复之前已有问题的修复， revert一次回滚
    'subject-max-length': [1, 'always', 30], // commit长度，不包含前缀
  },
};
