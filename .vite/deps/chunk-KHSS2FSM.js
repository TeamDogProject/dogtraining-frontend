import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_identifier,
  useTheme_default
} from "./chunk-RYYRRFFG.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __esm,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/styles/useTheme.js
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}
var React;
var init_useTheme = __esm({
  "node_modules/@mui/material/styles/useTheme.js"() {
    React = __toESM(require_react());
    init_esm();
    init_defaultTheme();
    init_identifier();
  }
});

export {
  useTheme,
  init_useTheme
};
//# sourceMappingURL=chunk-KHSS2FSM.js.map
