# Guest List Manager 🎉

A modern, responsive React application for managing event guest lists with full CRUD functionality.

## Features

- ✅ **Create** - Add new guests with name, email, and phone number
- 📖 **Read** - View all guests in a beautiful, organized list
- ✏️ **Update** - Edit existing guest information
- 🗑️ **Delete** - Remove guests with confirmation
- 🔍 **Search** - Filter guests by name, email, or phone
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations

## Technology Stack

- **React** - Frontend framework
- **React Hooks** - State management (useState)
- **CSS3** - Modern styling with animations and gradients
- **JavaScript ES6+** - Modern JavaScript features

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd guest-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

### Adding a Guest
1. Fill in the guest's name, email, and phone number in the form
2. Click "Add Guest" button
3. The guest will appear in the guest list

### Editing a Guest
1. Click the ✏️ (edit) icon on a guest card
2. The form will populate with the guest's information
3. Make your changes
4. Click "Update Guest" to save

### Deleting a Guest
1. Click the 🗑️ (delete) icon on a guest card
2. Confirm the deletion in the popup dialog

### Searching Guests
- Use the search bar to filter guests by name, email, or phone number
- The list updates in real-time as you type

## Project Structure

```
guest-list-app/
├── public/
├── src/
│   ├── App.js          # Main component with CRUD logic
│   ├── App.css         # Styling and animations
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## CRUD Operations

### Create
- Form validation ensures all fields are filled
- Unique ID generated using timestamp
- Guest added to state array

### Read
- All guests displayed in cards
- Search functionality filters the display
- Guest count shown in header

### Update
- Click edit to populate form
- Form switches to "Update" mode
- Changes saved to state on submit

### Delete
- Confirmation dialog prevents accidental deletion
- Guest removed from state array

## Development Team

This project was developed as a collaborative effort. Each team member contributed to different aspects:

- **Frontend Development** - React components and state management
- **UI/UX Design** - Styling, animations, and responsive design
- **Git Management** - Version control and repository setup

All contributions are tracked via Git commit history with individual commit IDs and email addresses.

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## Future Enhancements

- 🔐 Add authentication
- 💾 Integrate with backend database
- 📧 Email invitation functionality
- 📊 Guest analytics and reporting
- 🎫 QR code generation for guests
- 📅 Event date and time management

## License

This project is open source and available for educational purposes.

## Contact

For questions or suggestions, please open an issue in the repository.

---

**Built with ❤️ using React**
