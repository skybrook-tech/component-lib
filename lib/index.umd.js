(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@emotion/core'), require('semantic-ui-react/dist/commonjs/elements/Button')) :
  typeof define === 'function' && define.amd ? define(['exports', '@emotion/core', 'semantic-ui-react/dist/commonjs/elements/Button'], factory) :
  (global = global || self, factory(global.reactSampleComponentsLibrary = {}, global.core, global.ButtonSUI));
}(this, (function (exports, core, ButtonSUI) { 'use strict';

  ButtonSUI = ButtonSUI && ButtonSUI.hasOwnProperty('default') ? ButtonSUI['default'] : ButtonSUI;

  /** @jsx jsx */

  var baseStyles = function baseStyles(theme) {
    return (
      /*#__PURE__*/
      core.css("&&&{& input{background:var(--main-primary-dark);}&:hover{background-color:var(--main-primary-dark);}color:var(--main-white);border:0;box-shadow:1px 1px 10px rgba(0,0,0,0.2);transition:all ease-in-out 0.2s;font-weight:bold;background-color:", theme.colors.primary, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgQnV0dG9uU1VJIGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdC9kaXN0L2NvbW1vbmpzL2VsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gdGhlbWUgPT4gY3NzYFxuICAmJiYge1xuICAgICYgaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1wcmltYXJ5LWRhcmspO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uU1VJIG9uQ2xpY2s9e29uQ2xpY2t9IGNzcz17YmFzZVN0eWxlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uU1VJPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"))
    );
  };

  var Button = function Button(props) {
    var children = props.children,
        onClick = props.onClick,
        className = props.className;
    return core.jsx(ButtonSUI, {
      onClick: onClick,
      css: baseStyles,
      className: className
    }, children);
  };

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
