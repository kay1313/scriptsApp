//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import Config from "./config/config.js";
import Calls from "../calls";
import Uu5Elements from "uu5g05-elements";
import TokenView from "./token-view";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const TokenProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TokenProvider",
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
      return Calls.getToken(props.data);
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
        return <TokenView data={data} />;
    }
  },
});

//@@viewOn:exports
export { TokenProvider };
export default TokenProvider;
//@@viewOff:exports
