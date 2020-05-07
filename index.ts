import {
   isUndefined,
   isString,
   isObj,
   isFunction,
   isArray,
} from 'is-all-utils';

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
export const strReplace = (
   source: string,
   replaces: More | string[] | string,
   iterateFn?: Function | string,
   brackets?: string,
) => {
   if (isUndefined(replaces)) return source;

   // Get key
   let getKey = (v: any) =>
      isString(brackets) ? (brackets as any).replace(/%s/g, v) : `$${v}`;

   // If is of string type !
   !isObj(replaces) && (replaces = [replaces]);

   // Merge iterateFn and brackets
   if (isString(iterateFn)) {
      brackets = iterateFn as string;
      iterateFn = undefined;
   }

   for (let [key, value] of Object.entries<any>(replaces)) {
      // Data for bo sended
      let newKey = getKey(key);
      let newValue = value;

      // If is a function
      if (isFunction(iterateFn)) {
         const dataIterate = (iterateFn as Function)(value, key);
         if (isArray(dataIterate) && dataIterate.length === 2) {
            newKey = getKey(dataIterate[1]);
            newValue = dataIterate[0];
         } else {
            newValue = dataIterate;
         }
      }

      source = source.replace(newKey, newValue);
   }

   return source;
};
