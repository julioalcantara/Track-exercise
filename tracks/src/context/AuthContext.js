import CreateDataConxtext from './createDataContext';

const authReducer = ( state, action ) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export const { Provider, Context } = CreateDataConxtext(
    authReducer,
    {},
    { isSignedIn: false }
);