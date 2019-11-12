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
export interface APIConfig {
    protocol: string;
    host: string;
    port: number;
    basePath: string;
    baseURL: string;
}
export interface Config {
    firebase: FirebaseConfig;
    api: APIConfig;
}
export declare abstract class BaseConfig implements Config {
    constructor(firebaseConfig: FirebaseConfig, apiConfig: Omit<APIConfig, 'baseURL'>);
    readonly firebase: FirebaseConfig;
    readonly api: APIConfig;
    protected getAPIConfig(apiConfig: Omit<APIConfig, 'baseURL'>): APIConfig;
}
