import {
  init_base
} from "./chunk-NSJEDNE7.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx_m,
  init_esm,
  init_extends,
  init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  require_jsx_runtime,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-RYYRRFFG.js";
import {
  require_prop_types
} from "./chunk-FJ2DDJHN.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __esm,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/CardContent/cardContentClasses.js
function getCardContentUtilityClass(slot) {
  return generateUtilityClass("MuiCardContent", slot);
}
var cardContentClasses, cardContentClasses_default;
var init_cardContentClasses = __esm({
  "node_modules/@mui/material/CardContent/cardContentClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    cardContentClasses = generateUtilityClasses("MuiCardContent", ["root"]);
    cardContentClasses_default = cardContentClasses;
  }
});

// node_modules/@mui/material/CardContent/CardContent.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, CardContentRoot, CardContent, CardContent_default;
var init_CardContent = __esm({
  "node_modules/@mui/material/CardContent/CardContent.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_styled();
    init_useThemeProps();
    init_cardContentClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["className", "component"];
    useUtilityClasses = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getCardContentUtilityClass, classes);
    };
    CardContentRoot = styled_default("div", {
      name: "MuiCardContent",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    })(() => {
      return {
        padding: 16,
        "&:last-child": {
          paddingBottom: 24
        }
      };
    });
    CardContent = React.forwardRef(function CardContent2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiCardContent"
      });
      const {
        className,
        component = "div"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        component
      });
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsx)(CardContentRoot, _extends({
        as: component,
        className: clsx_m_default(classes.root, className),
        ownerState,
        ref
      }, other));
    });
    true ? CardContent.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * The content of the component.
       */
      children: import_prop_types.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types.default.object,
      /**
       * @ignore
       */
      className: import_prop_types.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types.default.elementType,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
    } : void 0;
    CardContent_default = CardContent;
  }
});

// node_modules/@mui/material/CardContent/index.js
var init_CardContent2 = __esm({
  "node_modules/@mui/material/CardContent/index.js"() {
    init_CardContent();
    init_cardContentClasses();
    init_cardContentClasses();
  }
});

export {
  getCardContentUtilityClass,
  cardContentClasses_default,
  CardContent_default,
  init_CardContent2 as init_CardContent
};
//# sourceMappingURL=chunk-6FLBBJ35.js.map
