import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../components/Services/Firebase";
import "./ApplicationForm.scss";
import { FaPlus } from "react-icons/fa";

function ApplicationForm({ onAddApplication }) {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    if (
      companyName.trim() === "" ||
      jobTitle.trim() === "" ||
      location.trim() === "" ||
      dateApplied.trim() === ""
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const newApplication = {
        companyName,
        jobTitle,
        location,
        dateApplied,
        status,
        notes,
        jobLink,
        interviewDate,
        priority,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "applications"), newApplication);

      onAddApplication({
        id: docRef.id,
        ...newApplication,
      });

      setCompanyName("");
      setJobTitle("");
      setLocation("");
      setDateApplied("");
      setStatus("Applied");
      setNotes("");
      setJobLink("");
      setInterviewDate("");
      setPriority("Medium");
      setErrorMessage("");
    } catch (error) {
      console.error("Error adding application:", error);
      setErrorMessage("Failed to add application. Please try again.");
    }
  };

  return (
    <form className="form" onSubmit={handleFormSubmission}>
      <h2 className="form__title">Add a Job Application</h2>

      {errorMessage && <div className="form__error">{errorMessage}</div>}

      <label className="form__label">
        Company Name:
        <input
          className="form__input"
          type="text"
          maxLength={100}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>

      <label className="form__label">
        Job Title:
        <input
          className="form__input"
          type="text"
          maxLength={100}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </label>

      <label className="form__label">
        Location:
        <input
          className="form__input"
          type="text"
          maxLength={100}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>

      <label className="form__label">
        Date Applied:
        <input
          className="form__input"
          type="date"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
        />
      </label>

      <label className="form__label">
        Status:
        <select
          className="form__select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Saved">Saved</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Assessment">Assessment</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      <label className="form__label">
        Notes:
        <textarea
          className="form__input"
          rows="4"
          maxLength={250}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>

      <label className="form__label">
        Job Link:
        <input
          className="form__input"
          type="url"
          maxLength={300}
          value={jobLink}
          onChange={(e) => setJobLink(e.target.value)}
          placeholder="https://example.com/job-posting"
        />
      </label>

      <label className="form__label">
        Interview Date:
        <input
          className="form__input"
          type="date"
          value={interviewDate}
          onChange={(e) => setInterviewDate(e.target.value)}
        />
      </label>

      <label className="form__label">
        Priority:
        <select
          className="form__select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>

      <button className="form__button" type="submit">
        <FaPlus /> Add Application
      </button>
    </form>
  );
}

export default ApplicationForm;