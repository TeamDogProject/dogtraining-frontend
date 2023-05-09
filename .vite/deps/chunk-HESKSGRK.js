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

// node_modules/@mui/material/CardActions/cardActionsClasses.js
function getCardActionsUtilityClass(slot) {
  return generateUtilityClass("MuiCardActions", slot);
}
var cardActionsClasses, cardActionsClasses_default;
var init_cardActionsClasses = __esm({
  "node_modules/@mui/material/CardActions/cardActionsClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    cardActionsClasses = generateUtilityClasses("MuiCardActions", ["root", "spacing"]);
    cardActionsClasses_default = cardActionsClasses;
  }
});

// node_modules/@mui/material/CardActions/CardActions.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, CardActionsRoot, CardActions, CardActions_default;
var init_CardActions = __esm({
  "node_modules/@mui/material/CardActions/CardActions.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_styled();
    init_useThemeProps();
    init_cardActionsClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["disableSpacing", "className"];
    useUtilityClasses = (ownerState) => {
      const {
        classes,
        disableSpacing
      } = ownerState;
      const slots = {
        root: ["root", !disableSpacing && "spacing"]
      };
      return composeClasses(slots, getCardActionsUtilityClass, classes);
    };
    CardActionsRoot = styled_default("div", {
      name: "MuiCardActions",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, !ownerState.disableSpacing && styles.spacing];
      }
    })(({
      ownerState
    }) => _extends({
      display: "flex",
      alignItems: "center",
      padding: 8
    }, !ownerState.disableSpacing && {
      "& > :not(:first-of-type)": {
        marginLeft: 8
      }
    }));
    CardActions = React.forwardRef(function CardActions2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiCardActions"
      });
      const {
        disableSpacing = false,
        className
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        disableSpacing
      });
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsx)(CardActionsRoot, _extends({
        className: clsx_m_default(classes.root, className),
        ownerState,
        ref
      }, other));
    });
    true ? CardActions.propTypes = {
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
       * If `true`, the actions do not have additional margin.
       * @default false
       */
      disableSpacing: import_prop_types.default.bool,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
    } : void 0;
    CardActions_default = CardActions;
  }
});

// node_modules/@mui/material/CardActions/index.js
var init_CardActions2 = __esm({
  "node_modules/@mui/material/CardActions/index.js"() {
    init_CardActions();
    init_cardActionsClasses();
    init_cardActionsClasses();
  }
});

export {
  getCardActionsUtilityClass,
  cardActionsClasses_default,
  CardActions_default,
  init_CardActions2 as init_CardActions
};
//# sourceMappingURL=chunk-HESKSGRK.js.map
