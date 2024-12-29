export const getURLParams = (paramKey: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get(paramKey);
    return paramValue;
}