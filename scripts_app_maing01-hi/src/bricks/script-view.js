//@@viewOn:imports
import { Content, createVisualComponent, useState, Utils } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
import Uu5Elements from "uu5g05-elements";
import Calls from "../calls";
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

    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    let tokensInitialValue = []

    if (props.data.tokens) {
      props.tokenList.itemList.forEach(token => {
        if (props.data.tokens.includes(token.id)){
          tokensInitialValue.push(token.name);
        }
      });
    }

    const action = async (data) => {
      if (!data.dtoInSchema)
        data.dtoInSchema = ""
      data.dtoInSchema = data.dtoInSchema.split("\n")
      data.tokens = props.tokenList.itemList.reduce((matchingIds, item) => {
        if (data.tokens.includes(item.name)) {
          matchingIds.push(item.id);
        }
        return matchingIds;
      }, [])
      if (props.data.id) {
        data.id = props.data.id
        Calls.updateScript(data).then(r =>
          r.id ? setAlertVisible(true) : setErrorAlertVisible(true
          ));
      } else {
        Calls.createScript(data).then(r =>
          r.id ? setAlertVisible(true) : setErrorAlertVisible(true
          ));
      }
    };

    const handleAlertClose = () => {
      setAlertVisible(false);
    };

    const handleErrorAlertClose = () => {
      setErrorAlertVisible(false);
    };

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ScriptView);

    return currentNestingLevel ? (
      <div {...attrs}>
        <Content nestingLevel={currentNestingLevel}>{children}</Content>
        <div className={Css.block()}>
          <h1>Script</h1>
          <Uu5Forms.Form onSubmit={async (e) => action(e.data.value)}>
            <div>
              <Uu5Forms.FormText
                required
                name="name"
                label="Name"
                initialValue= { props.data.name ? props.data.name : "" }
              />
              <Uu5Forms.FormSelect
                name="tokens"
                label="Tokens"
                itemList={props.tokenList.itemList.map(item => ({ value: item.name }))}
                initialValue={tokensInitialValue}
                multiple={true}
              />
              <Uu5Forms.FormTextArea
                name="dtoInSchema"
                label="DtoInSchema"
                initialValue= { props.data.dtoInSchema ? props.data.dtoInSchema : "" }
              />
              <Uu5Forms.FormTextArea
                required
                name="body"
                label="Body"
                initialValue= { props.data.body ? props.data.body : "" }
              />
              <Uu5Forms.SubmitButton className={Css.button()} colorScheme="primary">
                {props.data.name ? "Edit" : "Add"}
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
        {errorAlertVisible && (
          <Uu5Elements.Alert
            priority="error"
            message="Something went wrong."
            onClose={handleErrorAlertClose}
            closeGlyphicon
          />
        )}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ScriptView };
export default ScriptView;
//@@viewOff:exports
