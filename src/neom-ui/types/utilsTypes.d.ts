import Vue from "vue";

export interface ColorUtils {
    /**
     * @example 求两个颜色之间的渐变值
     */
    colorGradient: (startColor: string, endColor: string, step: number) => string;
    /**
     * @example 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
     */
    hexToRgb: (sColor: string, str: boolean) => Array<string>;

    /**
     * @example 将rgb表示方式转换为hex表示方式
     */
    rgbToHex: (rgb: string) => string;

    /**
     * @example  JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
     */
    colorToRgba: (color: string, alpha: number) => string
}

export interface FunctionalUtils {
    /**
     * @example 一维数组转多维数组
     */
    setArrData: (arr?: any[], num?: number) => any[][];

    isArrayEqual: (a: any, b: any, has?: boolean) => boolean;

    /**
     * @example 价格、库存格式化
     */
    numFormat: (num: string | number, type?: string) => boolean;

    /**
     * @example 是否是图片
     */
    isImg: (src: any) => boolean;

    /**
     * @example 对象参数转为url参数
     */
    parse: (query?: {}) => string;

    /**
     * @example 拆解url地址成为路由跳转参数
     */
    getUrlQuery: (page: string) => {
        path: string;
        query: {};
    };
    downLoadFile<T>(file:T):Promise<any>;
    saveImageToPhotosAlbum<T>(file:T):Promise<any>;
    /**
     * @example 防抖
     */
    debounce: (func: Function, wait?: number, ...args: any[]) => void;

    /**
     * @example 节流
     */
    throttle: (func: Function, wait: any, ...args: any[]) => void;

    /**
     * @example  复制到粘贴板
     */
    copyText: (opt: { content: any, success?: Function, error?: Function }) => void;

    /**
     * @example 判断对象是否相等
     */
    diffByObj: (obj1: any, obj2: any) => boolean;

    rpx2px: (rpxVal: any) => any;


    /**
     * @example 获取节点的相关信息。
     */
    getRect: (selecter: any, pro?: {}) => Promise<any>;


    /**
     * @example 获取父级
     */
    getParent: (name?: any) => Vue | false;

    /**
     * @example  生成随机uid
     */
    guid: (len?: number, firstU?: boolean, radix?: any) => string;


    /**
     * @example 添加单位
     */
    addUnit: (value?: string, unit?: string) => string;


    /**
     * @example 柯里化
     */
    curring: <T1, R>(func: (t1: T1) => R) => CurriedFunction1<T1, R>;
    curring: <T1, T2, R>(func: (t1: T1, t2: T2) => R) => CurriedFunction2<T1, T2, R>;
    curring: <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R) => CurriedFunction3<T1, T2, T3, R>;


    isType: <T>(type: T, content: any) => `[object ${T extends number ? 'number' :
        T extends boolean ? 'boolean' :
        T extends Array<any> ? 'Array' :
        T extends object ? 'object' :
        T extends Function ? 'Function' :
        T extends string ? 'string' : any
        }]`;


    /**
     * 四则运算（加减乘除）
     * add 加
     * sub 减
     * mul 乘
     * div 除
     * */
    calcFn: {
        add(...args: number[]): number;
        sub(...args: number[]): number;
        mul(...args: number[]): number;
        divide(...args: number[]): number;
    };


    formatUnit: (val: any, unit?: string, deault?: number) => any;
}


interface CurriedFunction1<T1, R> {
    (): CurriedFunction1<T1, R>;
    (t1: T1): R;
}

interface CurriedFunction2<T1, T2, R> {
    (): CurriedFunction2<T1, T2, R>;
    (t1: T1): CurriedFunction1<T2, R>;
    (t1: T1, t2: T2): R;
}
interface CurriedFunction3<T1, T2, T3, R> {
    (): CurriedFunction3<T1, T2, T3, R>;
    (t1: T1): CurriedFunction2<T2, T3, R>;
    (t1: T1, t2: T2): CurriedFunction1<T3, R>;
    (t1: T1, t2: T2, t3: T3): R;
}