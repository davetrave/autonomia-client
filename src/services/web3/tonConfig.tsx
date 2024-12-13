import React, { ReactNode } from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl = 'https://63f7376c-3ddb-482b-bd0f-e17bda4e6e23.e1-us-east-azure.choreoapps.dev/tonconnect-manifest.json';

interface TonConfigProps {
    children: ReactNode; // This defines that 'children' can be any React node
}

export const TonConfig: React.FC<TonConfigProps> = ({ children }) => {
    return (
        <TonConnectUIProvider
            manifestUrl={manifestUrl}
            // uiPreferences={{
            //     theme: "THEME.DARK",
            //     borderRadius: 'm'
            // }}
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/AutonomiaCryptoBot/autonomia_crypto'
            }}
        >
            {children}
        </TonConnectUIProvider>
    );
};
