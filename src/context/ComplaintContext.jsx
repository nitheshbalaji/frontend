import { createContext, useContext } from "react";
import { mockComplaints } from "../data/mockComplaints";

const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
  return (
    <ComplaintContext.Provider value={{ complaints: mockComplaints }}>
      {children}
    </ComplaintContext.Provider>
  );
}

export const useComplaints = () => useContext(ComplaintContext);
