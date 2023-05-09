import {
  ListContext_default,
  init_ListContext
} from "./chunk-N5OBVSI6.js";
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

// node_modules/@mui/material/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses, listClasses_default;
var init_listClasses = __esm({
  "node_modules/@mui/material/List/listClasses.js"() {
    init_esm();
    init_generateUtilityClass();
    listClasses = generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
    listClasses_default = listClasses;
  }
});

// node_modules/@mui/material/List/List.js
var React, import_prop_types, import_jsx_runtime, import_jsx_runtime2, _excluded, useUtilityClasses, ListRoot, List, List_default;
var init_List = __esm({
  "node_modules/@mui/material/List/List.js"() {
    init_objectWithoutPropertiesLoose();
    init_extends();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx_m();
    init_base();
    init_styled();
    init_useThemeProps();
    init_ListContext();
    init_listClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    _excluded = ["children", "className", "component", "dense", "disablePadding", "subheader"];
    useUtilityClasses = (ownerState) => {
      const {
        classes,
        disablePadding,
        dense,
        subheader
      } = ownerState;
      const slots = {
        root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
      };
      return composeClasses(slots, getListUtilityClass, classes);
    };
    ListRoot = styled_default("ul", {
      name: "MuiList",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
      }
    })(({
      ownerState
    }) => _extends({
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative"
    }, !ownerState.disablePadding && {
      paddingTop: 8,
      paddingBottom: 8
    }, ownerState.subheader && {
      paddingTop: 0
    }));
    List = React.forwardRef(function List2(inProps, ref) {
      const props = useThemeProps({
        props: inProps,
        name: "MuiList"
      });
      const {
        children,
        className,
        component = "ul",
        dense = false,
        disablePadding = false,
        subheader
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const context = React.useMemo(() => ({
        dense
      }), [dense]);
      const ownerState = _extends({}, props, {
        component,
        dense,
        disablePadding
      });
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime2.jsx)(ListContext_default.Provider, {
        value: context,
        children: (0, import_jsx_runtime.jsxs)(ListRoot, _extends({
          as: component,
          className: clsx_m_default(classes.root, className),
          ref,
          ownerState
        }, other, {
          children: [subheader, children]
        }))
      });
    });
    true ? List.propTypes = {
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
       * If `true`, compact vertical padding designed for keyboard and mouse input is used for
       * the list and list items.
       * The prop is available to descendant components as the `dense` context.
       * @default false
       */
      dense: import_prop_types.default.bool,
      /**
       * If `true`, vertical padding is removed from the list.
       * @default false
       */
      disablePadding: import_prop_types.default.bool,
      /**
       * The content of the subheader, normally `ListSubheader`.
       */
      subheader: import_prop_types.default.node,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
    } : void 0;
    List_default = List;
  }
});

// node_modules/@mui/material/List/index.js
var init_List2 = __esm({
  "node_modules/@mui/material/List/index.js"() {
    init_List();
    init_listClasses();
    init_listClasses();
  }
});

export {
  getListUtilityClass,
  listClasses_default,
  List_default,
  init_List2 as init_List
};
//# sourceMappingURL=chunk-5HSXV6HF.js.map
