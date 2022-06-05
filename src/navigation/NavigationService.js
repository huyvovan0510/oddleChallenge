import {CommonActions} from '@react-navigation/native';

let _navigator;
let _backRoute;

function initNavigationRef(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, {params} = {}) {
  const action = CommonActions.navigate({
    name: routeName,
    params,
  });

  _navigator?.dispatch(action);
}

export default {
  navigate,
  initNavigationRef,
};
