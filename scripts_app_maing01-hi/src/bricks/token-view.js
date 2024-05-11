//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
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

const TokenView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TokenView",
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

    function action(data) {
      if (props.data.name) {
        Calls.updateToken(props.data);
      }
      else {
        Calls.createToken(data).then(r => console.log(r));
      }
    }

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, TokenView);
    return currentNestingLevel ? (
      <div {...attrs}>
        <Content nestingLevel={currentNestingLevel}>{children}</Content>
        <div className={Css.block()}>
          <h1>Token</h1>
          <Uu5Forms.Form onSubmit={async (e) => action(e.data.value)}>
            <div>
              <Uu5Forms.FormText
                required
                name="name"
                label="Name"
                initialValue= { props.data.name ? props.data.name : "" }
              />
              <Uu5Forms.FormSelect
                name="groups"
                label="Groups"
              />
              <Uu5Forms.FormSelect
                name="type"
                label="Type"
              />
              <Uu5Forms.FormTextArea
                required
                name="token"
                label="Token"
                initialValue= { props.data.value ? props.data.value[0] : "" }
              />
              <Uu5Forms.SubmitButton className={Css.button()} colorScheme="primary">
                {props.data.name ? "Edit" : "Add"}
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
export { TokenView };
export default TokenView;
//@@viewOff:exports
