//@@viewOn:imports
import { createVisualComponent, Utils, Content, Lsi, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
import Calls from "../calls";
import Uu5Elements from "uu5g05-elements";
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
    const [alertVisible, setAlertVisible] = useState(false);

    function generateItems() {
      if (props.data.dtoInSchema) {
        return [...new Array(props.data.dtoInSchema.length)].map((it, i) => (
        <Uu5Forms.FormText
          required
          name={props.data.dtoInSchema[i].split(":")[0]}
          label={props.data.dtoInSchema[i].split(":")[0]}
        />
        ));
      }
      return "";
    }

    function execute(data) {
      data.id = props.data.id
      if (Array.isArray(props.data.dtoInSchema)) {
        data.dtoInSchema = props.data.dtoInSchema.map(dto => {
          const dtoName = dto.split(":")[0];
          return dtoName + ":" + data[dtoName];
        });
      }
      console.log(data);
      return Calls.executeScript(data).then(
        r => {
          console.log(r);
          setAlertVisible(true);
        }
      );
    }

    const handleAlertClose = () => {
      setAlertVisible(false);
    };

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
        {alertVisible && (
          <Uu5Elements.Alert
            priority="success"
            message="Success."
            onClose={handleAlertClose}
            closeGlyphicon
          />
        )}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ScriptExecuteView };
export default ScriptExecuteView;
//@@viewOff:exports
