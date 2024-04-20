//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import Config from "./config/config.js";
import Calls from "../calls";
import Uu5Elements from "uu5g05-elements";
import ScriptView from "./script-view";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ScriptProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ScriptProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    // Function to load data based on type
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
        return <ScriptView data={data} />;
    }
  },
});

//@@viewOn:exports
export { ScriptProvider };
export default ScriptProvider;
//@@viewOff:exports
