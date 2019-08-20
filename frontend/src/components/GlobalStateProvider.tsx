import React, {useEffect, useState} from 'react';
import API from "../utils/API";

interface Props {

}

interface IGlobalState {
    logo: string;
    logoWhite: string;
    motto: string;
    footerLeftColumnText: string;
    footerLeftColumnTextBottom: string;
    phoneNumber: string;
    address: string;
}

const defaultValue: IGlobalState = {
    logo: '',
    logoWhite: '',
    motto: '',
    footerLeftColumnText: '',
    footerLeftColumnTextBottom: '',
    phoneNumber: '',
    address: '',
};

export const GlobalStateContext = React.createContext(defaultValue);

const GlobalStateProvider: React.FunctionComponent<Props> = ({children}) => {
    const [globalState, setGlobalState] = useState(defaultValue);
    const updateGlobalState = async () => {
        const commonResources = await API.getCommonResources();
        setGlobalState({
            ...commonResources,
        })
    };

    useEffect( () => {
        updateGlobalState();
    }, []);

    return (
        <GlobalStateContext.Provider value={globalState}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalStateProvider;