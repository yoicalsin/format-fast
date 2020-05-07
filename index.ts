import { isUndefined, isString, isObj } from 'is-all-utils';

interface More {
   [key: string]: any;
}

/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param source string
 * @param replaces More | string[] | string
 * @param fnItem Function | undefined
 * @param brackets string | undefined
 */
export const strReplace = (
   source: string,
   replaces: More | string[] | string,
   fnItem?: Function,
   brackets?: string,
) => {
   if (isUndefined(replaces)) return source;

   // Get key
   let getKey = (v: any) =>
      isString(brackets) ? (brackets as any).replace(/%s/g, v) : `$${v}`;

   // If is of string type !
   !isObj(replaces) && (replaces = [replaces]);

   for (let [key, value] of Object.entries<any>(replaces)) {
      fnItem && (value = fnItem(value, key));
      source = source.replace(getKey(key), value);
   }

   return source;
};
