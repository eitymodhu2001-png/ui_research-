# 📁 Assets Folder Guide

This folder is where you put ALL your custom images!

## 📂 Folder Structure

```
assets/
├── app-icons/          → Put your app logo images here
├── category-icons/     → Put your data category icons here
├── screenshots/        → Put app screenshot images here
└── ui-images/          → Any other UI images you want to use
```

## 🖼️ Image Requirements

### App Icons (`app-icons/`)
- **What**: App logo images (like WhatsApp logo, LinkedIn logo, etc.)
- **Format**: PNG (with transparent background preferred) or JPG
- **Size**: 512x512px recommended
- **Naming**: Use lowercase, no spaces (e.g., `whatsapp.png`, `linkedin.png`)

**Examples:**
```
app-icons/
├── whatsapp.png
├── linkedin.png
├── discord.png
├── chess.png
└── gregmat.png
```

### Category Icons (`category-icons/`)
- **What**: Icons for data categories (Personal Info, Location, Device, etc.)
- **Format**: PNG (transparent) or SVG
- **Size**: 48x48px or 64x64px
- **Naming**: Match the category type (e.g., `personal-info.png`, `location.png`)

**Common category icons you'll need:**
```
category-icons/
├── personal-info.png    (👤 alternative)
├── financial-info.png   (💳 alternative)
├── location.png         (📍 alternative)
├── device.png           (📱 alternative)
├── photos.png           (📷 alternative)
├── messages.png         (💬 alternative)
├── app-activity.png     (⚡ alternative)
├── health-fitness.png   (❤️ alternative)
└── audio.png            (🎤 alternative)
```

### Screenshots (`screenshots/`)
- **What**: App screenshot images from your phone
- **Format**: PNG or JPG
- **Size**: 1080x1920px (mobile portrait) or 1920x1080px (landscape)
- **Naming**: Use app name prefix (e.g., `whatsapp-1.png`, `whatsapp-2.png`)

**Examples:**
```
screenshots/
├── whatsapp-1.png
├── whatsapp-2.png
├── whatsapp-3.png
├── linkedin-1.png
├── linkedin-2.png
└── discord-1.png
```

### UI Images (`ui-images/`)
- **What**: Any other images you want to use in the UI
- **Format**: PNG, JPG, or SVG
- **Naming**: Descriptive names

**Examples:**
```
ui-images/
├── logo.png
├── background.jpg
└── banner.png
```

## 🎨 Where to Get Images

### App Icons
1. **Official sources**: Google Play Store, App Store, official websites
2. **Icon databases**: iconarchive.com, iconscout.com
3. **Make your own**: Use Figma, Canva, or Photoshop

### Category Icons
1. **Free icon packs**: 
   - Heroicons (heroicons.com)
   - Phosphor Icons (phosphoricons.com)
   - Lucide Icons (lucide.dev)
2. **Download as PNG/SVG**: Choose 48x48 or 64x64 size

### Screenshots
1. **Take from your phone**: Screenshot the actual apps
2. **From Play Store**: Download screenshots from the store page
3. **Create mockups**: Use tools like Mockuphone.com

## 📝 How to Use Your Images

### Step 1: Save Images
Save all your images in the correct folders above.

### Step 2: Update my-data.js
Open `my-data.js` and add the image paths:

```javascript
{
    id: 'whatsapp',
    name: 'WhatsApp Messenger',
    icon: '💬',  // Emoji fallback
    iconUrl: 'assets/app-icons/whatsapp.png',  // ← YOUR IMAGE
    
    screenshots: [  // ← YOUR SCREENSHOTS
        'assets/screenshots/whatsapp-1.png',
        'assets/screenshots/whatsapp-2.png'
    ],
    
    data: {
        categories: [
            {
                id: 'personal-info',
                name: 'Personal Info',
                icon: '👤',  // Emoji fallback
                iconUrl: 'assets/category-icons/personal-info.png'  // ← YOUR ICON
            }
        ]
    }
}
```

### Step 3: Test
Open `index.html` in your browser and check if images load!

## ⚠️ Important Notes

1. **File paths are case-sensitive**: `WhatsApp.png` ≠ `whatsapp.png`
2. **Use forward slashes**: `assets/app-icons/whatsapp.png` ✅
3. **No spaces in filenames**: Use `whats-app.png` or `whatsapp.png`
4. **Keep images optimized**: Compress large images to reduce load time
5. **Test after adding**: Always check if images appear correctly

## 🔧 Troubleshooting

**Image not showing?**
- ✓ Check the file path is correct
- ✓ Check the filename spelling matches exactly
- ✓ Make sure the image file exists in the folder
- ✓ Open browser console (F12) to see any errors

**Image looks blurry?**
- ✓ Use higher resolution images
- ✓ Make sure image size is at least the recommended size

**Wrong image showing?**
- ✓ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- ✓ Check you're referencing the correct filename

## 💡 Pro Tips

1. **Organize by app**: Create subfolders for each app's screenshots
   ```
   screenshots/
   ├── whatsapp/
   │   ├── 1.png
   │   └── 2.png
   └── linkedin/
       ├── 1.png
       └── 2.png
   ```

2. **Use consistent naming**: Stick to one naming convention
   - Good: `whatsapp-1.png`, `whatsapp-2.png`
   - Bad: `WhatsApp1.PNG`, `wa_screen2.jpg`

3. **Compress images**: Use tinypng.com or similar tools

4. **Backup originals**: Keep a copy of original high-res images

## 🎯 Quick Start Checklist

- [ ] Create `assets/` folder
- [ ] Create subfolders: `app-icons`, `category-icons`, `screenshots`, `ui-images`
- [ ] Download/save your app icons
- [ ] Download/save category icons
- [ ] Save app screenshots
- [ ] Update `my-data.js` with image paths
- [ ] Test in browser
- [ ] Done! 🎉

---

**Need help?** Check the examples in `my-data.js` file!
