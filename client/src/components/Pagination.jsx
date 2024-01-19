export default function Pagination({ localState, setLocalState, page, limit }) {
  const handleClick1 = (e) => {
    e.preventDefault();
    setLocalState({
      ...localState,
      pagination: {
        ...localState.pagination,
        current_page: page + 1
      }
    });
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    let minusButton = document.getElementById("-button");
    if (page > 1) {
      setLocalState({
        ...localState,
        pagination: {
          ...localState.pagination,
          current_page: page - 1
        }
      });
    } else {
      minusButton.disabled = true;
    }
  };

  const handleChange = (e) => {
    setLocalState({
      ...localState,
      pagination: {
        ...localState.pagination,
        limit: e.target.value
      }
    });
  };

  return (
    <form>
      <label for="page">Page</label>
      <button onClick={handleClick2} id="-button">
        -
      </button>
      <input type="text" name="page" defaultValue={page} />
      <button onClick={handleClick1} id="+button">
        +
      </button>
      <label for="limit">Limit</label>
      <input
        type="text"
        name="limit"
        defaultValue={limit}
        onChange={handleChange}
      ></input>
    </form>
  );
}
