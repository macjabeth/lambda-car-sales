import { useDispatch } from "react-redux";

const useActionCreator = (action, args) => {
  const dispatch = useDispatch();
  return () => dispatch(action(args));
};

export default useActionCreator;
