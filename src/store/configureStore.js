import { createStore } from 'redux';
import shop from '../reducers/shop';




export default () => {
    const store = createStore(shop, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store;
}