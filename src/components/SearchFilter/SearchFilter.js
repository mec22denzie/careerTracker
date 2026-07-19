import "./SearchFilter.scss";

function SearchFilter({
  searchTerm,
  selectedStatus,
  onSearchChange,
  onStatusChange,
  onClearFilters
}) {
  return (
    <div className="search-filter">
      <div className="search-filter__group">
        <label className="search-filter__label" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          className="search-filter__input"
          type="text"
          placeholder="Search by company or job title"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="search-filter__group">
        <label className="search-filter__label" htmlFor="status">
          Filter by Status
        </label>
        <select
          id="status"
          className="search-filter__select"
          value={selectedStatus}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Saved">Saved</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Assessment">Assessment</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="search-filter__actions">
        <button
          type="button"
          className="search-filter__button"
          onClick={onClearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;