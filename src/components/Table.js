// src/components/Table.js
import React, { useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import "./Table.css";

const Table = () => {
  const { data, filteredData, setFilteredData, loading, error } =
    useFetchUsers();
  const [search, setSearch] = useState("");

  console.log({ data, filteredData, setFilteredData, loading, error });

  const handleDelete = (id) => {
    const updatedData = filteredData.filter((user) => user.id !== id);
    setFilteredData(updatedData);
  };

  const handleReset = () => {
    setFilteredData(data);
    setSearch("");
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      setFilteredData(data);
    } else {
      const debouncedSearch = setTimeout(() => {
        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
      }, 300);

      return () => clearTimeout(debouncedSearch);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div style={{ padding: "5%", paddingTop: "1%" }}>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name"
        className="search-input"
      />
      <button onClick={handleReset} className="reset-button">
        Reset
      </button>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="delete-button"
                  style={{
                    background: "red",
                    color: "white",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
