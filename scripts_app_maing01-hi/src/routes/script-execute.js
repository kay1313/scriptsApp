//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import MenuProvider from "../bricks/menu-provider";
import ScriptExecuteProvider from "../bricks/script-execute-provider";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ScriptExecute = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ScriptExecute",
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
    return (
      <ScriptExecuteProvider data = {props.params.data}/>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ScriptExecute };
export default ScriptExecute;
//@@viewOff:exports
