import { createElement } from "react";
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if ("function" == typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
const SvgVariable16 = (props)=>/*#__PURE__*/ createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M.294 8.205a.75.75 0 0 1 .175-.783.75.75 0 0 1 .468-.217c.214-.024.264-.085.289-.122.052-.075.131-.269.131-.714v-2.73c0-.665.166-1.301.634-1.764.466-.463 1.102-.625 1.765-.625h.428a.75.75 0 0 1 0 1.5h-.428c-.44 0-.626.107-.71.19-.08.08-.188.264-.188.698V6.37c0 .568-.092 1.124-.398 1.566l.013.018c.32.445.416 1.008.416 1.582v2.73c0 .43.109.61.194.692.09.087.292.197.751.197h.441a.75.75 0 1 1 0 1.5h-.44c-.673 0-1.32-.16-1.794-.617-.48-.463-.652-1.102-.652-1.771v-2.73c0-.443-.08-.634-.133-.707-.028-.038-.086-.105-.317-.13a.75.75 0 0 1-.645-.494m14.45-1.13c.028.038.085.105.317.13q.098.007.19.04a.752.752 0 0 1 .001 1.414.7.7 0 0 1-.189.04c-.214.024-.264.086-.289.122-.052.075-.131.269-.131.714v2.73c0 .665-.166 1.301-.634 1.765-.466.462-1.102.624-1.765.624h-.428a.75.75 0 0 1 0-1.5h.428c.44 0 .626-.107.71-.19.08-.08.188-.264.188-.698v-2.73c0-.569.092-1.125.398-1.567l-.013-.018c-.32-.445-.416-1.008-.416-1.582v-2.73c0-.43-.109-.61-.194-.692-.09-.087-.292-.197-.751-.197h-.441a.75.75 0 0 1 0-1.5h.44c.674 0 1.32.16 1.794.617.48.463.652 1.102.652 1.771V6.37c0 .442.08.633.133.706M7.98 11.43a.979.979 0 1 0 0-1.958.979.979 0 0 0 0 1.958m-2.022-.98a.979.979 0 1 1-1.957 0 .979.979 0 0 1 1.957 0m5.022.98a.979.979 0 1 0 0-1.958.979.979 0 0 0 0 1.958",
        clipRule: "evenodd"
    }));
const Variable_16 = SvgVariable16;
export { Variable_16 as default };
