import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./components/Services/Firebase";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Applications from "./components/Applications/Applications";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import Help from "./components/Help/Help";
import HelpOverview from "./components/Help/HelpOverview";
import HelpAddApplication from "./components/Help/HelpAddApplication";
import HelpFilterApplication from "./components/Help/HelpFilterApplication";
import HelpRemoveApplication from "./components/Help/HelpRemoveApplication";
import HelpManageStatus from "./components/Help/HelpManageStatus";
import NotFound from "./components/NotFound/NotFound";

import "./App.scss";

function App() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const querySnapshot = await getDocs(collection(db, "applications"));

        const loadedApplications = querySnapshot.docs.map((docItem) => ({
          id: docItem.id,
          companyName: docItem.data().companyName || "",
          jobTitle: docItem.data().jobTitle || "",
          location: docItem.data().location || "",
          dateApplied: docItem.data().dateApplied || "",
          status: docItem.data().status || "Applied",
          notes: docItem.data().notes || "",
          jobLink: docItem.data().jobLink || "",
          interviewDate: docItem.data().interviewDate || "",
          priority: docItem.data().priority || "Medium",
        }));

        setApplications(loadedApplications);
      } catch (error) {
        console.error("Error loading applications:", error);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  const handleAddApplication = (newApplication) => {
    setApplications((prevApplications) => [...prevApplications, newApplication]);
  };

  const handleClearApplications = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "applications"));

      const deletePromises = querySnapshot.docs.map((applicationDoc) =>
        deleteDoc(doc(db, "applications", applicationDoc.id))
      );

      await Promise.all(deletePromises);
      setApplications([]);
    } catch (error) {
      console.error("Error clearing applications:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const applicationRef = doc(db, "applications", id);

      await updateDoc(applicationRef, {
        status: newStatus,
      });

      const updatedApplications = applications.map((application) =>
        application.id === id
          ? { ...application, status: newStatus }
          : application
      );

      setApplications(updatedApplications);
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  const handleApplicationRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "applications", id));

      const filteredApplications = applications.filter(
        (application) => application.id !== id
      );

      setApplications(filteredApplications);
    } catch (error) {
      console.error("Error removing application:", error);
    }
  };

  return (
    <div className="page-container">
      <Header />

      <main className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Applications
                applications={applications}
                loading={loading}
                onStatusChange={handleStatusChange}
                onApplicationRemove={handleApplicationRemove}
                onClearApplications={handleClearApplications}
              />
            }
          />

          <Route
            path="/add"
            element={<ApplicationForm onAddApplication={handleAddApplication} />}
          />

          <Route path="/help" element={<Help />}>
            <Route index element={<HelpOverview />} />
            <Route path="add" element={<HelpAddApplication />} />
            <Route path="filter" element={<HelpFilterApplication />} />
            <Route path="change" element={<HelpManageStatus />} />
            <Route path="remove" element={<HelpRemoveApplication />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;