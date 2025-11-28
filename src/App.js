import React, { useState } from 'react';
import './App.css';

function App() {
  const [guests, setGuests] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
  ]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // CREATE - Add new guest
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }

    if (editingId) {
      // UPDATE - Edit existing guest
      setGuests(guests.map(guest => 
        guest.id === editingId 
          ? { ...guest, ...formData }
          : guest
      ));
      setEditingId(null);
    } else {
      // CREATE - Add new guest
      const newGuest = {
        id: Date.now(),
        ...formData
      };
      setGuests([...guests, newGuest]);
    }
    
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  // UPDATE - Populate form with guest data for editing
  const handleEdit = (guest) => {
    setFormData({
      name: guest.name,
      email: guest.email,
      phone: guest.phone
    });
    setEditingId(guest.id);
  };

  // DELETE - Remove guest
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this guest?')) {
      setGuests(guests.filter(guest => guest.id !== id));
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData({ name: '', email: '', phone: '' });
    setEditingId(null);
  };

  // Filter guests based on search term
  const filteredGuests = guests.filter(guest =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.phone.includes(searchTerm)
  );

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🎉 Guest List Manager</h1>
          <p>Manage your event guests with ease</p>
        </header>

        <div className="content">
          {/* Guest Form */}
          <div className="form-section">
            <h2>{editingId ? 'Edit Guest' : 'Add New Guest'}</h2>
            <form onSubmit={handleSubmit}>
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

              <div className="button-group">
                <button type="submit" className="btn btn-primary">
                  {editingId ? '✓ Update Guest' : '+ Add Guest'}
                </button>
                {editingId && (
                  <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Guest List */}
          <div className="list-section">
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

            {filteredGuests.length === 0 ? (
              <div className="empty-state">
                <p>No guests found. {searchTerm ? 'Try a different search.' : 'Add your first guest!'}</p>
              </div>
            ) : (
              <div className="guest-list">
                {filteredGuests.map(guest => (
                  <div key={guest.id} className="guest-card">
                    <div className="guest-info">
                      <h3>{guest.name}</h3>
                      <p>📧 {guest.email}</p>
                      <p>📱 {guest.phone}</p>
                    </div>
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
