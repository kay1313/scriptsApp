//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import Config from "./config/config.js";
import MenuView from "./menu-view";
import ScriptExecuteView from "./script-execute-view";
import Calls from "../calls";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ScriptExecuteProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ScriptExecuteProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function loadData() {
      return Calls.getScript(props.data);
    }

    const callResult = useDataObject({
      handlerMap: {
        load: loadData,
      },
    });

    const { state, data, errorData } = callResult;
    switch (state) {
      case "pendingNoData":
      case "pending":
        return <Uu5Elements.Pending />;
      case "ready":
      case "readyNoData":
        return <ScriptExecuteView data={data} />;
    }
  },
});

//@@viewOn:exports
export { ScriptExecuteProvider };
export default ScriptExecuteProvider;
//@@viewOff:exports
