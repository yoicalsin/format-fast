interface More {
    [key: string]: any;
}
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param source string
 * @param replaces More | string[] | string
 * @param iterateFn Function | string | undefined
 * @param brackets string | undefined
 */
declare const formatFast: (source: string, replaces: string | string[] | More, iterateFn?: TimerHandler, brackets?: string) => string;
export default formatFast;
export { formatFast as fmf };
