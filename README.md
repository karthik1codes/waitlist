# Join Waitlist Website

A modern, responsive waitlist signup website built with React.js, HTML, CSS, and JavaScript.

## Features

- ✅ Beautiful, modern UI with gradient backgrounds
- ✅ Responsive design for all devices
- ✅ Integrated with LaunchList service
- ✅ Form validation
- ✅ Success/error status messages
- ✅ Smooth animations and transitions

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Integration Details

### LaunchList Integration
- Form action endpoint: `https://getlaunchlist.com/s/0wj3ED`
- Form class: `launchlist-form`
- Method: `POST`
- Required field: `email`
- Tracking script in `<head>`: `https://getlaunchlist.com/js/widget-diy.js`

### Supabase Integration
- **Database**: Supabase PostgreSQL
- **REST Endpoint**: `https://ttnywlhqbiqzofaduefk.supabase.co`
- **Table**: `waitlist` (stores username and email)
- **Setup**: See `SUPABASE_SETUP.md` for detailed instructions

When a user submits the form:
1. Data is saved to Supabase `waitlist` table
2. Data is also sent to LaunchList (optional, for tracking)
3. Duplicate email prevention is handled automatically

## Technologies Used

- React.js 18.2.0
- HTML5
- CSS3 (with animations and gradients)
- JavaScript (ES6+)

