# Brightwords Waitlist Website

A modern, accessible waitlist signup website for Brightwords.in - an AI Assistive Learning Platform for Disabled Students. Built with React.js, featuring a clean two-column Gibson-style layout.

## Features

- ✅ **Modern Two-Column Layout** - Clean, professional design inspired by Gibson waitlist
- ✅ **Accessibility-Focused** - Designed with accessibility and inclusion in mind
- ✅ **Responsive Design** - Works seamlessly on all devices
- ✅ **Supabase Integration** - Secure database storage for waitlist submissions
- ✅ **Form Validation** - Comprehensive validation with helpful error messages
- ✅ **Conditional Fields** - Dynamic form fields based on user selections
- ✅ **Success/Error Status Messages** - Clear feedback for users
- ✅ **Terms & Content Policy Modals** - Transparent policies accessible to users
- ✅ **Instagram Integration** - Social media link in footer
- ✅ **Smooth Animations** - Polished user experience with transitions

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure Supabase:
   - Run the SQL migrations in `supabase/migrations/` in your Supabase SQL Editor
   - Update `src/services/supabase.js` with your Supabase anon key
   - See `SUPABASE_SETUP.md` for detailed instructions

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Form Fields

The waitlist form collects the following information:

### Required Fields
- **Name** - User's full name
- **Email** - User's email address (validated, unique)
- **Personal or school use?** - Dropdown: "Personal use" or "School use"
- **Disability** - Dropdown with options:
  - Hard of hearing
  - Blind
  - Dumb
  - Cognitive issues

### Conditional Fields
- **Cognitive Issue Description** - Textarea (required if "Cognitive issues" selected)
- **School Name** - Text input (required if "School use" selected)
- **School Address** - Textarea (required if "School use" selected)

## Database Schema

The `waitlist` table in Supabase includes:

- `id` - Primary key (auto-increment)
- `username` - User's name
- `email` - User's email (required, unique)
- `usage_type` - 'personal' or 'school'
- `disability` - Disability type selected
- `cognitive_issue` - Details if cognitive issues selected
- `school_name` - School name (if school use)
- `school_address` - School address (if school use)
- `created_at` - Timestamp
- `updated_at` - Timestamp

## Integration Details

### Supabase Integration
- **Database**: Supabase PostgreSQL
- **REST Endpoint**: `https://ttnywlhqbiqzofaduefk.supabase.co`
- **Table**: `waitlist`
- **Setup**: See `SUPABASE_SETUP.md` for detailed instructions

### Database Migrations
Run these migrations in order in your Supabase SQL Editor:
1. `001_create_waitlist_table.sql` - Creates the base table
2. `002_add_extended_fields.sql` - Adds extended fields (usage_type, disability, etc.)
3. `003_remove_user_role.sql` - Removes unused user_role field

### LaunchList Integration (Optional)
- Form also submits to LaunchList for tracking (optional, won't fail if it errors)
- Tracking script: `https://getlaunchlist.com/js/widget-diy.js`

## Project Structure

```
waitlist/
├── public/
│   └── index.html          # HTML template with LaunchList script
├── src/
│   ├── components/
│   │   ├── GibsonLayout.js      # Main two-column layout
│   │   ├── GibsonLayout.css     # Layout styles
│   │   ├── WaitlistForm.js      # Main form component
│   │   ├── WaitlistForm.css     # Form styles
│   │   ├── LogoIcon.js          # Star icon logo component
│   │   ├── TermsModal.js        # Terms of Service modal
│   │   ├── ContentPolicyModal.js # Content Policy modal
│   │   └── TermsModal.css       # Modal styles
│   ├── services/
│   │   └── supabase.js          # Supabase API service
│   ├── App.js                   # Main app component
│   ├── App.css                  # App styles
│   └── index.js                 # Entry point
├── supabase/
│   └── migrations/              # Database migration files
└── package.json
```

## Technologies Used

- **React.js 18.2.0** - UI framework
- **HTML5** - Markup
- **CSS3** - Styling with animations and gradients
- **JavaScript (ES6+)** - Modern JavaScript features
- **Supabase** - Backend database and API
- **React Hooks** - useState, useCallback, useEffect

## Key Features Explained

### Two-Column Layout
- **Left Column**: Branding, headline "Where Accessibility Meets Ability", description, footer links
- **Right Column**: Waitlist form in a clean white card

### Conditional Form Logic
- School fields appear when "School use" is selected
- Cognitive issue textarea appears when "Cognitive issues" is selected
- All conditional fields are properly validated

### Accessibility
- Form designed with accessibility in mind
- Clear labels and error messages
- Keyboard navigation support
- Screen reader friendly

## Social Media

- **Instagram**: [@brightwords.in](https://www.instagram.com/brightwords.in/)
- Link available in footer: "Follow and Stay Tuned"

## Legal

- **Terms of Service** - Accessible via modal from footer
- **Content Policy** - Accessible via modal from footer

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Troubleshooting

### Database Issues
- Ensure all migrations have been run
- Verify Supabase API key is correct
- Check Row Level Security (RLS) policies allow inserts

### Form Submission Issues
- Check browser console for errors
- Verify Supabase endpoint is accessible
- Ensure email validation passes

## License

Private project for Brightwords.in
