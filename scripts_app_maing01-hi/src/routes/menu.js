//@@viewOn:imports
import { createComponent, useRoute, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import MenuProvider from "../bricks/menu-provider";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants
const Css = {
  main: () => Config.Css.css({}),
  dropdown: () => Config.Css.css({
    margin: "5%",
    marginTop: 40,
    width: "90%"
  }),
  button: () => Config.Css.css({
    margin: "5%",
    width: "90%",
    backgroundColor: "#8cd48e",
    color: "white",
    fontSize: 32
  }),
  dropdownItem: () => Config.Css.css({
    width: "100%",
    textAlign: "center"
  })
};
//@@viewOn:helpers
//@@viewOff:helpers

const Menu = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Menu",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    const [, setRoute] = useRoute();
    const [mainDropdownValue, setMainDropdownValue] = useState(false);

    const mainList = [
      {
        children: (
          <div className={Css.dropdownItem()} onClick={() => setMainDropdownValue(false)}>
            Scripts
          </div>
        )
      },
      {
        children: (
          <div className={Css.dropdownItem()} onClick={() => setMainDropdownValue(true)}>
            Tokens
          </div>
        )
      },
    ];


    //@@viewOn:render
    return (
      <div>
        <Uu5Elements.Dropdown
          label={mainDropdownValue ? "Tokens" : "Scripts"}
          itemList={mainList}
          className={Css.dropdown()}
        />
        <Uu5Elements.Button
          className={Css.button()}
          onClick={() => mainDropdownValue ? setRoute("token") : setRoute("script")} >
          +</Uu5Elements.Button>
        <div>
          <MenuProvider key={mainDropdownValue ? "tokens" : "scripts"} type={mainDropdownValue} />
        </div>
      </div>
    );
    //@@viewOff:render
  },
});



//@@viewOn:exports
export { Menu };
export default Menu;
//@@viewOff:exports
