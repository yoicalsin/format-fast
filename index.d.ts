interface More {
    [key: string]: any;
}
declare const formatFast: (source: string, replaces: string | string[] | More, iterateFn?: TimerHandler, brackets?: string) => string;
export default formatFast;
export { formatFast as f };
