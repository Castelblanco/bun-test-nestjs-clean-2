export type TMappers<TDom, TApi> = {
    apiToDom: (item: TApi) => TDom;
    domToApi: (item: TDom) => TApi;
};

export type TWrappers<TDom, TApi> = {
    dalToDom: (item: TApi) => TDom;
    domToDal: (item: TDom) => TApi;
};
