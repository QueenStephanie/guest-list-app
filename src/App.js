import React, { useState } from 'react';
import './App.css';

function App() {
  // ================================
  // STATES
  // ================================

  // List of guests
  const [guests, setGuests] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
  ]);

  // Form input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Tracks which guest is currently being edited (null = not editing)
  const [editingId, setEditingId] = useState(null);

  // Search bar state
  const [searchTerm, setSearchTerm] = useState('');


  // ================================
  // CREATE & UPDATE
  // ================================

  // Add a new guest OR update existing guest
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (all fields must be filled)
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }

    if (editingId) {
      // UPDATE guest
      setGuests(
        guests.map(guest =>
          guest.id === editingId
            ? { ...guest, ...formData } // update data
            : guest
        )
      );
      setEditingId(null); // exit editing mode

    } else {
      // CREATE new guest
      const newGuest = {
        id: Date.now(), // unique ID
        ...formData
      };
      setGuests([...guests, newGuest]);
    }

    // Reset form after submit
    setFormData({ name: '', email: '', phone: '' });
  };


  // ================================
  // EDIT GUEST
  // ================================
  const handleEdit = (guest) => {
    // Fill form with selected guest's data
    setFormData({
      name: guest.name,
      email: guest.email,
      phone: guest.phone
    });

    // Set editing mode
    setEditingId(guest.id);
  };


  // ================================
  // DELETE GUEST
  // ================================
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this guest?')) {
      setGuests(guests.filter(guest => guest.id !== id));
    }
  };


  // ================================
  // CANCEL EDIT MODE
  // ================================
  const handleCancel = () => {
    setFormData({ name: '', email: '', phone: '' });
    setEditingId(null);
  };


  // ================================
  // FILTER SYSTEM (SEARCH)
  // ================================
  const filteredGuests = guests.filter(guest =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.phone.includes(searchTerm)
  );


  // ================================
  // UI (RENDER)
  // ================================
  return (
    <div className="App">
      <div className="container">

        {/* HEADER */}
        <header className="header">
          <h1>🎉 Guest List Manager</h1>
          <p>Manage your event guests with ease</p>
        </header>

        <div className="content">

          {/* ===========================
              LEFT SECTION - FORM
          ============================ */}
          <div className="form-section">
            <h2>{editingId ? 'Edit Guest' : 'Add New Guest'}</h2>

            <form onSubmit={handleSubmit}>
              
              {/* Name field */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter guest name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Phone field */}
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Buttons */}
              <div className="button-group">
                <button type="submit" className="btn btn-primary">
                  {editingId ? '✓ Update Guest' : '+ Add Guest'}
                </button>

                {/* Show Cancel only while editing */}
                {editingId && (
                  <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>


          {/* ===========================
               RIGHT SECTION – GUEST LIST
          ============================ */}
          <div className="list-section">

            {/* Search bar & count */}
            <div className="list-header">
              <h2>Guest List ({filteredGuests.length})</h2>

              <input
                type="text"
                className="search-input"
                placeholder="🔍 Search guests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* When no results */}
            {filteredGuests.length === 0 ? (
              <div className="empty-state">
                <p>
                  No guests found. {searchTerm ? 'Try a different search.' : 'Add your first guest!'}
                </p>
              </div>
            ) : (

              // Guest Cards
              <div className="guest-list">
                {filteredGuests.map(guest => (
                  <div key={guest.id} className="guest-card">

                    <div className="guest-info">
                      <h3>{guest.name}</h3>
                      <p>📧 {guest.email}</p>
                      <p>📱 {guest.phone}</p>
                    </div>

                    {/* Edit & Delete buttons */}
                    <div className="guest-actions">
                      <button
                        className="btn-icon btn-edit"
                        onClick={() => handleEdit(guest)}
                        title="Edit guest"
                      >
                        ✏️
                      </button>

                      <button
                        className="btn-icon btn-delete"
                        onClick={() => handleDelete(guest.id)}
                        title="Delete guest"
                      >
                        🗑️
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
