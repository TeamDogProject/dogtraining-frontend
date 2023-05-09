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

// node_modules/@mui/material/CardMedia/cardMediaClasses.js
function getCardMediaUtilityClass(slot) {
  return generateUtilityClass("MuiCardMedia", slot);
}
var cardMediaClasses, cardMediaClasses_default;
var init_cardMediaClasses = __esm({
  "node_modules/@mui/material/CardMedia/cardMediaClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    cardMediaClasses = generateUtilityClasses("MuiCardMedia", ["root", "media", "img"]);
    cardMediaClasses_default = cardMediaClasses;
  }
});

// node_modules/@mui/material/CardMedia/CardMedia.js
var React, import_prop_types, import_jsx_runtime, _excluded, useUtilityClasses, CardMediaRoot, MEDIA_COMPONENTS, IMAGE_COMPONENTS, CardMedia, CardMedia_default;
var init_CardMedia = __esm({
  "node_modules/@mui/material/CardMedia/CardMedia.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_esm();
    init_base();
    init_useThemeProps();
    init_styled();
    init_cardMediaClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    _excluded = ["children", "className", "component", "image", "src", "style"];
    useUtilityClasses = (ownerState) => {
      const {
        classes,
        isMediaComponent,
        isImageComponent
      } = ownerState;
      const slots = {
        root: ["root", isMediaComponent && "media", isImageComponent && "img"]
      };
      return composeClasses(slots, getCardMediaUtilityClass, classes);
    };
    CardMediaRoot = styled_default("div", {
      name: "MuiCardMedia",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        const {
          isMediaComponent,
          isImageComponent
        } = ownerState;
        return [styles.root, isMediaComponent && styles.media, isImageComponent && styles.img];
      }
    })(({
      ownerState
    }) => _extends({
      display: "block",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }, ownerState.isMediaComponent && {
      width: "100%"
    }, ownerState.isImageComponent && {
      // ⚠️ object-fit is not supported by IE11.
      objectFit: "cover"
    }));
    MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
    IMAGE_COMPONENTS = ["picture", "img"];
    CardMedia = React.forwardRef(function CardMedia2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiCardMedia"
      });
      const {
        children,
        className,
        component = "div",
        image,
        src,
        style
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
      const composedStyle = !isMediaComponent && image ? _extends({
        backgroundImage: `url("${image}")`
      }, style) : style;
      const ownerState = _extends({}, props, {
        component,
        isMediaComponent,
        isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
      });
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsx)(CardMediaRoot, _extends({
        className: clsx_m_default(classes.root, className),
        as: component,
        role: !isMediaComponent && image ? "img" : void 0,
        ref,
        style: composedStyle,
        ownerState,
        src: isMediaComponent ? image || src : void 0
      }, other, {
        children
      }));
    });
    true ? CardMedia.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------
      /**
       * The content of the component.
       */
      children: chainPropTypes(import_prop_types.default.node, (props) => {
        if (!props.children && !props.image && !props.src && !props.component) {
          return new Error("MUI: Either `children`, `image`, `src` or `component` prop must be specified.");
        }
        return null;
      }),
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
       * Image to be displayed as a background image.
       * Either `image` or `src` prop must be specified.
       * Note that caller must specify height otherwise the image will not be visible.
       */
      image: import_prop_types.default.string,
      /**
       * An alias for `image` property.
       * Available only with media components.
       * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
       */
      src: import_prop_types.default.string,
      /**
       * @ignore
       */
      style: import_prop_types.default.object,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
    } : void 0;
    CardMedia_default = CardMedia;
  }
});

// node_modules/@mui/material/CardMedia/index.js
var init_CardMedia2 = __esm({
  "node_modules/@mui/material/CardMedia/index.js"() {
    init_CardMedia();
    init_cardMediaClasses();
    init_cardMediaClasses();
  }
});

export {
  getCardMediaUtilityClass,
  cardMediaClasses_default,
  CardMedia_default,
  init_CardMedia2 as init_CardMedia
};
//# sourceMappingURL=chunk-ISEW4ZZD.js.map
