// src/Context/DataProvider.jsx
import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

const defaultSheet = {
  columns: [
    "Request", "Submitted", "Status", "Submitter", "URL",
    "Assigned", "Priority", "Due Date", "Est. Value"
  ],
  rows: [
    ["Launch campaign", "15-11-2024", "In process", "Asha Patel", "www.example.com", "Sophie", "Medium", "20-11-2024", "6,00,000 ₹"],
    ["Update press file", "28-09-2024", "Need to start", "Irfan Khan", "www.example.com", "Rachel", "High", "13-10-2024", "3,00,000 ₹"],
    ["User feedback", "05-12-2024", "In process", "Mark J.", "www.example.com", "Rachel", "Medium", "19-10-2024", "4,75,000 ₹"],
    ["Finalize Q4 roadmap", "02-10-2024", "Completed", "Sneha Roy", "www.example.com", "Sophie", "Low", "08-10-2024", "1,25,000 ₹"],
    ["Research competitors", "11-11-2024", "In review", "Ali Khan", "www.example.com", "Rachel", "Medium", "25-11-2024", "5,50,000 ₹"],
    ["Legal compliance update", "19-08-2024", "Need to start", "Dev Mehta", "www.example.com", "Sophie", "High", "30-08-2024", "2,00,000 ₹"],
    ["Create marketing deck", "07-10-2024", "In process", "Megha Sharma", "www.example.com", "Rachel", "High", "15-10-2024", "4,20,000 ₹"],
    ["Product prototype test", "24-07-2024", "Completed", "Ravi Iyer", "www.example.com", "Sophie", "Low", "01-08-2024", "3,50,000 ₹"]
  ]
};

export const DataProvider = ({ children }) => {
  const [sheetData, setSheetData] = useState(() => {
    const local = localStorage.getItem("spreadsheet");
    return local ? JSON.parse(local) : defaultSheet;
  });

  const [activeTab, setActiveTab] = useState("All Orders");

  useEffect(() => {
    localStorage.setItem("spreadsheet", JSON.stringify(sheetData));
  }, [sheetData]);

  return (
    <DataContext.Provider value={{ sheetData, setSheetData, activeTab, setActiveTab }}>
      {children}
    </DataContext.Provider>
  );
};
