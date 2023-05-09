import {
  getOverlayAlpha_default,
  init_getOverlayAlpha
} from "./chunk-ZO3HESTS.js";
import {
  init_useTheme,
  useTheme
} from "./chunk-KHSS2FSM.js";
import {
  init_base
} from "./chunk-NSJEDNE7.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  alpha,
  chainPropTypes,
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx_m,
  init_esm,
  init_esm2,
  init_extends,
  init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  integerPropType_default,
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

// node_modules/@mui/material/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses, paperClasses_default;
var init_paperClasses = __esm({
  "node_modules/@mui/material/Paper/paperClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
    paperClasses_default = paperClasses;
  }
});

// node_modules/@mui/material/Paper/Paper.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, PaperRoot, Paper, Paper_default;
var init_Paper = __esm({
  "node_modules/@mui/material/Paper/Paper.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_esm();
    init_base();
    init_esm2();
    init_styled();
    init_getOverlayAlpha();
    init_useThemeProps();
    init_useTheme();
    init_paperClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["className", "component", "elevation", "square", "variant"];
    useUtilityClasses = (ownerState) => {
      const {
        square,
        elevation,
        variant,
        classes
      } = ownerState;
      const slots = {
        root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
      };
      return composeClasses(slots, getPaperUtilityClass, classes);
    };
    PaperRoot = styled_default("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]];
      }
    })(({
      theme,
      ownerState
    }) => {
      var _theme$vars$overlays;
      return _extends({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create("box-shadow")
      }, !ownerState.square && {
        borderRadius: theme.shape.borderRadius
      }, ownerState.variant === "outlined" && {
        border: `1px solid ${(theme.vars || theme).palette.divider}`
      }, ownerState.variant === "elevation" && _extends({
        boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
      }, !theme.vars && theme.palette.mode === "dark" && {
        backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))})`
      }, theme.vars && {
        backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
      }));
    });
    Paper = React.forwardRef(function Paper2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiPaper"
      });
      const {
        className,
        component = "div",
        elevation = 1,
        square = false,
        variant = "elevation"
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        component,
        elevation,
        square,
        variant
      });
      const classes = useUtilityClasses(ownerState);
      if (true) {
        const theme = useTheme();
        if (theme.shadows[elevation] === void 0) {
          console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
        }
      }
      return (0, import_jsx_runtime.jsx)(PaperRoot, _extends({
        as: component,
        ownerState,
        className: clsx_m_default(classes.root, className),
        ref
      }, other));
    });
    true ? Paper.propTypes = {
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
       * Shadow depth, corresponds to `dp` in the spec.
       * It accepts values between 0 and 24 inclusive.
       * @default 1
       */
      elevation: chainPropTypes(integerPropType_default, (props) => {
        const {
          elevation,
          variant
        } = props;
        if (elevation > 0 && variant === "outlined") {
          return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
        }
        return null;
      }),
      /**
       * If `true`, rounded corners are disabled.
       * @default false
       */
      square: import_prop_types.default.bool,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      /**
       * The variant to use.
       * @default 'elevation'
       */
      variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["elevation", "outlined"]), import_prop_types.default.string])
    } : void 0;
    Paper_default = Paper;
  }
});

// node_modules/@mui/material/Paper/index.js
var init_Paper2 = __esm({
  "node_modules/@mui/material/Paper/index.js"() {
    init_Paper();
    init_paperClasses();
    init_paperClasses();
  }
});

export {
  getPaperUtilityClass,
  paperClasses_default,
  Paper_default,
  init_Paper2 as init_Paper
};
//# sourceMappingURL=chunk-GJXQW665.js.map
