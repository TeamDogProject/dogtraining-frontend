import {
  Paper_default,
  init_Paper
} from "./chunk-GJXQW665.js";
import {
  init_base
} from "./chunk-NSJEDNE7.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  chainPropTypes,
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

// node_modules/@mui/material/Card/cardClasses.js
function getCardUtilityClass(slot) {
  return generateUtilityClass("MuiCard", slot);
}
var cardClasses, cardClasses_default;
var init_cardClasses = __esm({
  "node_modules/@mui/material/Card/cardClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    cardClasses = generateUtilityClasses("MuiCard", ["root"]);
    cardClasses_default = cardClasses;
  }
});

// node_modules/@mui/material/Card/Card.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, CardRoot, Card, Card_default;
var init_Card = __esm({
  "node_modules/@mui/material/Card/Card.js"() {
    init_extends();
    init_objectWithoutPropertiesLoose();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_esm();
    init_base();
    init_styled();
    init_useThemeProps();
    init_Paper();
    init_cardClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["className", "raised"];
    useUtilityClasses = (ownerState) => {
      const {
        classes
      } = ownerState;
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, getCardUtilityClass, classes);
    };
    CardRoot = styled_default(Paper_default, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    })(() => {
      return {
        overflow: "hidden"
      };
    });
    Card = React.forwardRef(function Card2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiCard"
      });
      const {
        className,
        raised = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        raised
      });
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsx)(CardRoot, _extends({
        className: clsx_m_default(classes.root, className),
        elevation: raised ? 8 : void 0,
        ref,
        ownerState
      }, other));
    });
    true ? Card.propTypes = {
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
       * If `true`, the card will use raised styling.
       * @default false
       */
      raised: chainPropTypes(import_prop_types.default.bool, (props) => {
        if (props.raised && props.variant === "outlined") {
          return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
        }
        return null;
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
    } : void 0;
    Card_default = Card;
  }
});

// node_modules/@mui/material/Card/index.js
var init_Card2 = __esm({
  "node_modules/@mui/material/Card/index.js"() {
    init_Card();
    init_cardClasses();
    init_cardClasses();
  }
});

export {
  getCardUtilityClass,
  cardClasses_default,
  Card_default,
  init_Card2 as init_Card
};
//# sourceMappingURL=chunk-SNRLCDH6.js.map
