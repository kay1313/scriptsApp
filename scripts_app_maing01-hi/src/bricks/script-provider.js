//@@viewOn:imports
import { createComponent, useEffect, useState } from "uu5g05";
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

    const [scriptData, setScriptData] = useState(null);
    const [tokenData, setTokenData] = useState(null);

    useEffect(() => {
      async function loadData() {
        try {
          const scriptData = await Calls.getScript(props.data);
          setScriptData(scriptData);
        } catch (error) {
          console.error("Error loading script data:", error);
        }
      }

      async function loadTokenData() {
        try {
          const tokenData = await Calls.listTokens();
          setTokenData(tokenData);
        } catch (error) {
          console.error("Error loading token data:", error);
        }
      }
      if (props.data) {
        Promise.all([loadData(), loadTokenData()]).catch(error => {
          console.error("Error loading data:", error);
        });
      }
      else {
        Promise.all([loadTokenData()]).then(setScriptData("")).catch(error => {
          console.error("Error loading data:", error);
        });
      }

    }, [props.data]);

    if (scriptData === null || tokenData === null) {
      return <Uu5Elements.Pending/>;
    }

    return <ScriptView data={scriptData} tokenList={tokenData}/>;

  },
});

//@@viewOn:exports
export { ScriptProvider };
export default ScriptProvider;
//@@viewOff:exports
