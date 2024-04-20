//@@viewOn:imports
import { createVisualComponent, Utils, Content, useRoute } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  block: () => Config.Css.css({
    width: "36%",
    display: "inline-block",
    height: 150,
    background: "rgb(40, 170, 240)",
    margin: "7%",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.4)",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  }),
  blockContent: () => Config.Css.css({
    height: 110,
    display: "grid",
    placeItems: "center"
  }),
  edit: () => Config.Css.css({
    background: "grey",
    height: 40,
    borderRadius: "20px",
    display: "grid",
    placeItems: "center"
  }),
  detail: () => Config.Css.css({
    width: 50,
    height: 50,
    display: "inline-block",
    background: "white",
    textAlign: "center",
    borderRadius: "100%",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    position: "absolute",
    top: -15,
    right: -15,
    fontSize: 28,
    color: "black"
  })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const MenuView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MenuView",
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
    const [, setRoute] = useRoute();
    const { type } = props;
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    function generateItems(count) {
      if (type) {
        return [...new Array(count)].map((it, i) => (
          <div onClick={() => setRoute("token", { data: props.data.itemList[i].id })} className={Css.block()}>
            <div className={Css.blockContent()}>{props.data.itemList[i].name}</div>
            <div className={Css.edit()}>Edit</div>
          </div>
        ));
      }
      else {
        return [...new Array(count)].map((it, i) => (
          <div className={Css.block()}>
            <div onClick={() => setRoute("scriptExecute", { data: props.data.itemList[i].id })} className={Css.blockContent()}>{props.data.itemList[i].name}</div>
            <div onClick={() => setRoute("script", { data: props.data.itemList[i].id })} className={Css.edit()}>Edit</div>
          </div>
        ));
      }
    }


    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, MenuView);

    return currentNestingLevel ? (
      <div {...attrs}>
        <Content nestingLevel={currentNestingLevel}>{children}</Content>
        {generateItems(Object.keys(props.data.itemList).length)}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MenuView };
export default MenuView;
//@@viewOff:exports
