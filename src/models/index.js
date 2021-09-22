export default {
  namespace: 'app',

  state: {
    link: 'https://github.com/Supertis/umi-react-app-template',
    projectName: 'Umi-React-App-Template',
  },

  subscriptions: {},

  effects: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
