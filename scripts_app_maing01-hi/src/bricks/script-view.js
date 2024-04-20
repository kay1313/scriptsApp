//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ScriptView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ScriptView",
  nestingLevel: ["areaCollection", "area"],
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

    function generateItems(count) {
      return [...new Array(count)].map((it, i) => (
        <div>{props.data.dtoInSchema[i]}</div>
      ));
    }

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ScriptView);

    return currentNestingLevel ? (
      <div {...attrs}>
        <Content nestingLevel={currentNestingLevel}>{children}</Content>
        {generateItems(props.data.dtoInSchema.length)}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ScriptView };
export default ScriptView;
//@@viewOff:exports
