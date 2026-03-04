function SearchForm({ searchTerm, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Pikachu"
        value={searchTerm}
        onChange={onChange}
      />
    </form>
  );
}

export default SearchForm;
