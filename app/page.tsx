"use client";

import { useState } from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Header from "../src/components/Header/Header";
import MainContent from "../src/components/MainContent/MainContent";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("service");
  const [theme, setTheme] = useState<"night" | "day">("night");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MainContent activeTab={activeTab} searchQuery={searchQuery} />
      </div>
    </div>
  );
}
