//@@viewOn:imports
import { createVisualComponent, Utils, Content, Lsi } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  block: () => Config.Css.css({
    background: "#d7d9db",
    margin: "4%",
    padding: "4%",
    fontSize: 20,
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.4)",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  }),
  button: () => Config.Css.css({
    marginTop: "20px"
  })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ScriptExecuteView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ScriptExecuteView",
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
    //@@viewOn:interface
    //@@viewOff:interface

    function generateItems() {
      if (props.data.dtoInSchema) {
        return [...new Array(props.data.dtoInSchema.length)].map((it, i) => (
        <Uu5Forms.FormText
          required
          name={props.data.dtoInSchema[i]}
          label={props.data.dtoInSchema[i].split(":")[0]}
        />
        ));
      }
      return "";
    }

    function execute() {
      console.log("yeeees")
    }

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ScriptExecuteView);

    return currentNestingLevel ? (
      <div {...attrs}>
        <Content nestingLevel={currentNestingLevel}>{children}</Content>
        <div className={Css.block()}>
          <h1>{props.data.name}</h1>
          <Uu5Forms.Form onSubmit={async (e) => execute(e.data.value)}>
            {generateItems()}
            <div >
              <Uu5Forms.SubmitButton className={Css.button()} colorScheme="primary">
                Execute
              </Uu5Forms.SubmitButton>
            </div>
          </Uu5Forms.Form>
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ScriptExecuteView };
export default ScriptExecuteView;
//@@viewOff:exports
