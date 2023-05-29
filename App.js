import React from 'react';
import {ToastProvider} from "react-native-fast-toast";
import Routes from "./src/routes";

export default function App() {
    return (
        <ToastProvider>
            <Routes />
        </ToastProvider>
    );
}

