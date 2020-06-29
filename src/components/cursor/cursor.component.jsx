import React, {useEffect} from "react";
import { CursorScript } from "../../utils/cursor"

const Cursor = () => {

  useEffect(() => {
    CursorScript();
  }, []);

  return (
    <div className="cursor" />
  );
};

export default Cursor;