
import Vue, { VueConstructor } from "vue";
import { ConfigTyps } from "./configTypes";
import { CommonConfig } from "./commonTypes";
import {
    ColorUtils,
    FunctionalUtils
} from "./utilsTypes";

interface NoCareMergeType {
    [k: string]: any;
}

type MegerNoCareTypes<T> = T & NoCareMergeType;

export interface OptionConfig {
    useRouter: boolean;
    config: MegerNoCareTypes<ConfigTyps>;
    utils: NoCareMergeType;
    common: MegerNoCareTypes<CommonConfig>;
    filter: {
        [k: string]: (value: any, ...arg: any[]) => any;
    };
    http: {
        config: NoCareMergeType;
        apiConfig: NoCareMergeType;
        apiList: Array<any>;
    };
    router: NoCareMergeType;
}

type PluginFunction<T = OptionConfig> = (
    vue: VueConstructor,
    options: T,
    _: any
) => void;

declare module "vue/types/vue" {
    interface Vue extends CommonConfig {
        $c: ColorUtils & FunctionalUtils;
        $http: (serverName: string, data: any) => Promise<any>;
        $config: ConfigTyps;
    }

    interface VueConstructor<V extends Vue> {
        use<T>(plugin: PluginFunction<T>, options: T): VueConstructor<V>;
    }
}

declare const install: PluginFunction;

export default install;
