/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { WebBTCProvider } from "./providers";
export namespace Components {
    interface ConnectModal {
        "callback": Function;
        "defaultProviders": WebBTCProvider[];
        "installedProviders": WebBTCProvider[];
        "persistSelection": boolean;
    }
}
declare global {
    interface HTMLConnectModalElement extends Components.ConnectModal, HTMLStencilElement {
    }
    var HTMLConnectModalElement: {
        prototype: HTMLConnectModalElement;
        new (): HTMLConnectModalElement;
    };
    interface HTMLElementTagNameMap {
        "connect-modal": HTMLConnectModalElement;
    }
}
declare namespace LocalJSX {
    interface ConnectModal {
        "callback"?: Function;
        "defaultProviders"?: WebBTCProvider[];
        "installedProviders"?: WebBTCProvider[];
        "persistSelection"?: boolean;
    }
    interface IntrinsicElements {
        "connect-modal": ConnectModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "connect-modal": LocalJSX.ConnectModal & JSXBase.HTMLAttributes<HTMLConnectModalElement>;
        }
    }
}
