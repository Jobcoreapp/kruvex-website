# Kruvex Website - Static Files

## What's Included
- `index.html` - Main landing page
- `login.html` - Login page
- `css/styles.css` - All styling
- `js/login.js` - Login functionality
- `images/` - All images and assets

## How to Deploy to GoDaddy

### Step 1: Access File Manager
1. Log into GoDaddy at https://godaddy.com
2. Go to **My Products**
3. Find your domain and click **"Manage"**
4. Click **"File Manager"** or **cPanel**

### Step 2: Upload Files
1. Navigate to the `public_html` folder
2. **Delete all existing files** in that folder
3. **Upload all files** from this folder:
   - index.html
   - login.html
   - css/ (folder)
   - js/ (folder)
   - images/ (folder)

### Step 3: Make Sure DNS is Correct
1. Go to **Domain** → **DNS Settings**
2. Delete any "Parked" A records
3. Make sure there's an A record pointing to your GoDaddy hosting IP
4. Disable any Website Builder or Coming Soon pages

### Step 4: Test
1. Wait 5-10 minutes for DNS to propagate
2. Visit your domain: https://kruvex.com
3. Clear browser cache if needed (Ctrl + Shift + Delete)

## Files in This Project
```
kruvex-website-static/
├── index.html          (Landing page)
├── login.html          (Login page)
├── css/
│   └── styles.css      (All styling)
├── js/
│   └── login.js        (Login script)
└── images/             (All images)
```

## No Server Required
This is a pure static website - no Node.js, no database, no backend. Just upload to any web host and it works!
