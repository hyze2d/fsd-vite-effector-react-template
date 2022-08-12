const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  env: {
    test:{
      plugins: [['effector/babel-plugin',{reactSsr: true}]]
    }
  },
  plugins: [['effector/babel-plugin',{reactSsr: isTest}]]
};
