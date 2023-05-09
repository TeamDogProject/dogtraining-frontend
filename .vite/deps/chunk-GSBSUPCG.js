import {
  capitalize_default,
  init_capitalize
} from "./chunk-3TL5SEOA.js";
import {
  init_base
} from "./chunk-NSJEDNE7.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  extendSxProp,
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

// node_modules/@mui/material/Typography/typographyClasses.js
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses, typographyClasses_default;
var init_typographyClasses = __esm({
  "node_modules/@mui/material/Typography/typographyClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
    typographyClasses_default = typographyClasses;
  }
});

// node_modules/@mui/material/Typography/Typography.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, TypographyRoot, defaultVariantMapping, colorTransformations, transformDeprecatedColors, Typography, Typography_default;
var init_Typography = __esm({
  "node_modules/@mui/material/Typography/Typography.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_esm2();
    init_base();
    init_styled();
    init_useThemeProps();
    init_capitalize();
    init_typographyClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
    useUtilityClasses = (ownerState) => {
      const {
        align,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        classes
      } = ownerState;
      const slots = {
        root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
      };
      return composeClasses(slots, getTypographyUtilityClass, classes);
    };
    TypographyRoot = styled_default("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
      }
    })(({
      theme,
      ownerState
    }) => _extends({
      margin: 0
    }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
      textAlign: ownerState.align
    }, ownerState.noWrap && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }, ownerState.gutterBottom && {
      marginBottom: "0.35em"
    }, ownerState.paragraph && {
      marginBottom: 16
    }));
    defaultVariantMapping = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p"
    };
    colorTransformations = {
      primary: "primary.main",
      textPrimary: "text.primary",
      secondary: "secondary.main",
      textSecondary: "text.secondary",
      error: "error.main"
    };
    transformDeprecatedColors = (color) => {
      return colorTransformations[color] || color;
    };
    Typography = React.forwardRef(function Typography2(inProps, ref) {
      const themeProps = useThemeProps({
        props: inProps,
        name: "MuiTypography"
      });
      const color = transformDeprecatedColors(themeProps.color);
      const props = extendSxProp(_extends({}, themeProps, {
        color
      }));
      const {
        align = "inherit",
        className,
        component,
        gutterBottom = false,
        noWrap = false,
        paragraph = false,
        variant = "body1",
        variantMapping = defaultVariantMapping
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const ownerState = _extends({}, props, {
        align,
        color,
        className,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        variantMapping
      });
      const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsx)(TypographyRoot, _extends({
        as: Component,
        ref,
        ownerState,
        className: clsx_m_default(classes.root, className)
      }, other));
    });
    true ? Typography.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * Set the text-align on the component.
       * @default 'inherit'
       */
      align: import_prop_types.default.oneOf(["center", "inherit", "justify", "left", "right"]),
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
       * If `true`, the text will have a bottom margin.
       * @default false
       */
      gutterBottom: import_prop_types.default.bool,
      /**
       * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
       *
       * Note that text overflow can only happen with block or inline-block level elements
       * (the element needs to have a width in order to overflow).
       * @default false
       */
      noWrap: import_prop_types.default.bool,
      /**
       * If `true`, the element will be a paragraph element.
       * @default false
       */
      paragraph: import_prop_types.default.bool,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      /**
       * Applies the theme typography styles.
       * @default 'body1'
       */
      variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types.default.string]),
      /**
       * The component maps the variant prop to a range of different HTML element types.
       * For instance, subtitle1 to `<h6>`.
       * If you wish to change that mapping, you can provide your own.
       * Alternatively, you can use the `component` prop.
       * @default {
       *   h1: 'h1',
       *   h2: 'h2',
       *   h3: 'h3',
       *   h4: 'h4',
       *   h5: 'h5',
       *   h6: 'h6',
       *   subtitle1: 'h6',
       *   subtitle2: 'h6',
       *   body1: 'p',
       *   body2: 'p',
       *   inherit: 'p',
       * }
       */
      variantMapping: import_prop_types.default.object
    } : void 0;
    Typography_default = Typography;
  }
});

// node_modules/@mui/material/Typography/index.js
var init_Typography2 = __esm({
  "node_modules/@mui/material/Typography/index.js"() {
    init_Typography();
    init_typographyClasses();
    init_typographyClasses();
  }
});

export {
  getTypographyUtilityClass,
  typographyClasses_default,
  Typography_default,
  init_Typography2 as init_Typography
};
//# sourceMappingURL=chunk-GSBSUPCG.js.map
