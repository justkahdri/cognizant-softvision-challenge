import React, {createContext, useState, FC} from "react";

import useMobile from "../hooks/useMobile";

// TODO: Remove anys
const contextDefaultValues: SettingsContextT = {
  gridView: false,
  editMode: false,
  toggleGridView: () => {},
  toggleEditMode: () => {},
};

const settingsContext = createContext<SettingsContextT>(contextDefaultValues);

export const SettingsProvider: FC = ({children}) => {
  const isMobile = useMobile();
  const [gridView, setGridView] = useState(isMobile);
  const [editMode, setEditMode] = useState(false);

  return (
    <settingsContext.Provider
      value={{
        gridView,
        toggleGridView: () => setGridView((gw) => !gw),
        editMode,
        toggleEditMode: () => setEditMode((em) => !em),
      }}
    >
      {children}
    </settingsContext.Provider>
  );
};

export default settingsContext;
