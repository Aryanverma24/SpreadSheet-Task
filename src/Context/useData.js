// src/Context/useData.js
import { useContext } from "react";
import { DataContext } from "./DataContext";

export const useData = () => useContext(DataContext);
