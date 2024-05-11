//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import TokenProvider from "../bricks/token-provider";
import TokenView from "../bricks/token-view";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Token = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Token",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return ( props.params ? <TokenProvider data = {props.params.data}/> : <TokenView data = {""}/>);
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Token };
export default Token;
//@@viewOff:exports
