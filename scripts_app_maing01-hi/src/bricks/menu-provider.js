//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import MenuView from "./menu-view";
import Calls from "../calls";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const MenuProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MenuProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { type } = props;

    // Function to load data based on type
    function loadData() {
      console.log(type)
      if (type === false) {
        return Calls.listScripts();
      } else {
        return Calls.listTokens();
      }
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
        return <MenuView data={data} type={type} />;
    }
  },
});

//@@viewOn:exports
export { MenuProvider };
export default MenuProvider;
//@@viewOff:exports
