module.exports = {
  displayName: 'libs-ctx-react-redux-aspect',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/libs/ctx-react-redux-aspect',
};
