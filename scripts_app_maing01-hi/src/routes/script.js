//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import ScriptProvider from "../bricks/script-provider";
import ScriptView from "../bricks/script-view";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Script = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Script",
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
    return ( props.params ? <ScriptProvider data = {props.params.data}/> : <ScriptView data = {""} />);
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Script };
export default Script;
//@@viewOff:exports
