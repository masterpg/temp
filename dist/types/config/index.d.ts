export declare let config: Config;
export declare function setConfig(value: BaseConfig): void;
export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId: string;
}
export interface Config {
    api: {
        protocol: string;
        host: string;
        port: number;
        basePath: string;
        baseURL: string;
    };
    firebase: FirebaseConfig;
}
export declare abstract class BaseConfig implements Config {
    constructor(firebaseConfig: FirebaseConfig);
    readonly firebase: FirebaseConfig;
    readonly api: {
        baseURL: string;
        protocol: string;
        host: string;
        port: number;
        basePath: string;
    };
}
