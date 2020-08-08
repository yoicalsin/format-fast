interface More {
    [key: string]: any;
}
declare const formatFast: (source: string, replaces: More | string[] | string, iterateFn?: Function | string, brackets?: string) => string;
export default formatFast;
export { formatFast as f };
