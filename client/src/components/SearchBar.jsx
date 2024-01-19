export default function SearchBar({ localState, setLocalState }) {
  const handleChange = (e) => {
    setLocalState({
      ...localState,
      search: e.target.value
    });
  };

  return (
    <form>
      <label for="search">Search</label>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        defaultValue={localState.search}
      />
    </form>
  );
}
