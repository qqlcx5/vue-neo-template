type CallBackFuntion = (...arg: any[]) => any;
type NOOP = () => void;

export type TRouterMethods =
  | "push"
  | "replace"
  | "replaceAll"
  | "pushTab"
  | "back";
export type variableTag =
  | "Array"
  | "Number"
  | "Object"
  | "Boolean"
  | "String"
  | "Undefined"
  | "Function"
  | "Null";

export interface CommonConfig {
  /**
   * @description 返回上一页
   */
  $back: NOOP;
  /**
   * @description 跳转函数
   */
  $backRef: <T extends {} = {}>(
    params: T,
    extraQuery: T,
    replace: boolean
  ) => void;
  /**
   * @description 跳转函数
   */
  $jump: (
    name: string,
    params = {},
    method: TRouterMethods,
    errFn: CallBackFuntion
  ) => void;
  /**
   * @description 克隆
   */
  $deepClone: <T extends {} = {}>(obj: T) => T;
  /**
   * @description 获取对象tag类型
   */
  $typeOf: () => variableTag;
  /**
   * @description 隐藏loading框
   */
  $hideLoading: NOOP;
  /**
   * @description 判断微信浏览器还是h5
   */
  $isWechatBrowser: () => boolean;

  $session: {
    clear: () => void;
    remove: (key: string) => void;
    get: (key: string) => void;
    set: (key: string, val: any) => void;
  };

  $loading: (msg: string, mask: boolean) => void;

  $showModal: (
    title: string,
    content: string,
    showCancel: boolean,
    cancelText: string,
    cancelColor: string,
    confirmText: string,
    success: Function,
    fail: Function,
    complete: Function
  ) => void;

  $toast: (
    msg: string,
    icon: number,
    duration: number,
    mask: boolean,
    image: boolean
  ) => void;

  $jumpDetail: (
    name: string,
    id: number,
    params = {},
    method: TRouterMethods
  ) => void;

  /**
   * @description 数据 按照 拼音首字母 排序 并分组
   */
  $data_letter_sort: (
    data: Record<string, any>,
    field: string
  ) => {
    [k: string]: Array<any>;
  };

  /**
   * @description 是否为空
   */
  $isEmpty: (val: boolean) => boolean;
}
