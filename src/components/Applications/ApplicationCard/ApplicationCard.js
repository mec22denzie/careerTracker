import "./ApplicationCard.scss";

function ApplicationCard(props) {
  const { application, onStatusChange, onApplicationRemove } = props;

  const statusOptions = [
    "Saved",
    "Applied",
    "Interview",
    "Assessment",
    "Offer",
    "Rejected"
  ];

  const handleStatusClick = () => {
    const currentIndex = statusOptions.indexOf(application.status);

    const nextIndex =
      currentIndex === -1 || currentIndex === statusOptions.length - 1
        ? 0
        : currentIndex + 1;

    const nextStatus = statusOptions[nextIndex];

    onStatusChange(application.id, nextStatus);
  };

  const handleRemoveClick = () => {
    onApplicationRemove(application.id);
  };

  return (
    <div className="application-card">
      <div className="application-card__header">
        <h3 className="application-card__title">{application.jobTitle}</h3>

        <span
          className={`application-card__badge application-card__badge--${application.status
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {application.status}
        </span>
      </div>

      <div className="application-card__company">
        {application.companyName}
      </div>

      <div className="application-card__detail">
        <strong>Location:</strong> {application.location || "Not specified"}
      </div>

      <div className="application-card__detail">
        <strong>Date Applied:</strong>{" "}
        {application.dateApplied || "Not specified"}
      </div>

      {application.interviewDate && (
        <div className="application-card__detail">
          <strong>Interview Date:</strong> {application.interviewDate}
        </div>
      )}

      {application.priority && (
        <div className="application-card__detail">
          <strong>Priority:</strong> {application.priority}
        </div>
      )}

      <div className="application-card__detail">
        <strong>Notes:</strong>{" "}
        {application.notes ? application.notes : "No notes added."}
      </div>

      {application.jobLink && (
        <div className="application-card__detail">
          <strong>Job Link:</strong>{" "}
          <a
            href={application.jobLink}
            target="_blank"
            rel="noreferrer"
            className="application-card__link"
          >
            View Posting
          </a>
        </div>
      )}

      <div className="application-card__actions">
        <button
          className="application-card__statusButton"
          onClick={handleStatusClick}
        >
          Change Status
        </button>

        <button
          className="application-card__removeButton"
          onClick={handleRemoveClick}
        >
          Remove Application
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;