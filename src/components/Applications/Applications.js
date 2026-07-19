import { useState } from "react";
import ApplicationCard from "./ApplicationCard/ApplicationCard.js";
import SearchFilter from "../SearchFilter/SearchFilter";
import "./Applications.scss";
import { FaBroom } from "react-icons/fa";

function Applications({
  applications,
  loading,
  onStatusChange,
  onApplicationRemove,
  onClearApplications
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredApplications = applications.filter((application) => {
  const matchesSearch =
    (application.companyName || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    (application.jobTitle || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedStatus("All");
  };

  if (loading) {
    return (
      <section className="applications">
        <h2 className="applications__title">Job Applications</h2>
        <p className="applications__message">Loading applications...</p>
      </section>
    );
  }

  return (
    <section className="applications">
      <div className="applications__header">
        <h2 className="applications__title">Job Applications</h2>

        <button
          className="applications__clear"
          onClick={onClearApplications}
          disabled={applications.length === 0}
        >
          <FaBroom /> Clear Applications
        </button>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        selectedStatus={selectedStatus}
        onSearchChange={setSearchTerm}
        onStatusChange={setSelectedStatus}
        onClearFilters={handleClearFilters}
      />

      <div className="applications__list">
        {filteredApplications.length === 0 ? (
          <p className="applications__message">
            No matching job applications found.
          </p>
        ) : (
          filteredApplications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
              onStatusChange={onStatusChange}
              onApplicationRemove={onApplicationRemove}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Applications;