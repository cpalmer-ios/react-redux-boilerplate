import { buyCake } from '../redux/cake/cakeActions';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore()
const store = mockStore({})
describe('action creators test to check the actions are matching the snapshots', () => {
    it('creates "BUY_CAKE" type when buyCake is dispatched', () => {
store.dispatch(buyCake());
expect(store.getActions()).toMatchSnapshot();
  });
});