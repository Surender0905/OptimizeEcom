import React from 'react';

const Filter = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  const handleSortChange = (e) => {
    props.sort(e.target.value);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex justify-between items-center">
        <div>
          <input
            value={props.query}
            placeholder="search"
            name="search"
            className="border p-1 border-cyan-300"
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="select"
            id="select"
            className="border p-1 border-cyan-300"
            onChange={handleSortChange}
          >
            <option value="default"> default</option>
            <option value="low">Price Low To High</option>
            <option value="high">Price High To Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filter;
