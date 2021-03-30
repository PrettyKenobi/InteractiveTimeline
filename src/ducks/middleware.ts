const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = 'next state', store.getState());
  console.groupEnd();
  return result;
}

export default loggerMiddleware;