import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native'
import reducers from '../reducers';

const config = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['likedJobs']
};

const reducer = persistCombineReducers(config, reducers);
export default function configurationStore(initialState = {}){
    
    const store = createStore (
        reducer,
        initialState,
        applyMiddleware(thunk),
    );
    const persistor = persistStore(store);
    return { persistor, store };
}

// persistStore(store, { storage: AsyncStorage, whiteList: ['likedjobs'] });

// export default store;