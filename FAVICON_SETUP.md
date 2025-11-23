# Favicon Setup Guide

This guide explains how to set up your favicon (website icon) for this portfolio template.

## Quick Setup

### Option 1: Use Your Avatar (Easiest)

1. **Place your avatar image** in the `public/` directory:
   - Name it `avatar.JPG`, `avatar.jpg`, or `avatar.png`
   - Update `avatarUrl` in `content/personal-info.ts`

2. **For a circular favicon** (recommended):
   - Create a circular version with transparent background
   - Save it as `avatar-removed-bg.png` in `public/`
   - Update `faviconUrl` in `content/personal-info.ts` to `"/avatar-removed-bg.png"`

3. **Done!** The favicon will automatically use your avatar.

### Option 2: Use a Custom Favicon

1. **Create or find your favicon image**:
   - Recommended: 512x512px PNG with transparent background
   - Formats supported: PNG, JPG, ICO

2. **Place it in `public/` directory**:
   - Name it `favicon.png` (or any name you prefer)

3. **Update `content/personal-info.ts`**:
   ```typescript
   faviconUrl: "/favicon.png",
   ```

## Creating a Circular Favicon from Your Avatar

### Method 1: Online Tools (Easiest)

1. Go to [Favicon.io](https://favicon.io/favicon-converter/)
2. Upload your avatar image
3. Download the generated favicon
4. Save as `avatar-removed-bg.png` in `public/`

### Method 2: Image Editor

1. Open your avatar in Photoshop, GIMP, Figma, or Canva
2. Create a circular crop (512x512px recommended)
3. Add transparent background
4. Export as PNG
5. Save as `avatar-removed-bg.png` in `public/`

### Method 3: Command Line (if ImageMagick is installed)

```bash
# Convert avatar to circular PNG with transparent background
convert public/avatar.JPG -resize 512x512 \
  \( +clone -threshold 101% -fill white -draw 'circle %[fx:int(w/2)],%[fx:int(h/2)] %[fx:int(w/2)],%[fx:int(h/2-1)]' \) \
  -alpha off -compose copy_opacity -composite \
  public/avatar-removed-bg.png
```

## Configuration

The favicon is configured in two places:

### 1. Content Configuration (`content/personal-info.ts`)

```typescript
export const personalInfo = {
  // ... other fields
  avatarUrl: "/avatar.JPG",           // For navigation avatar
  faviconUrl: "/avatar-removed-bg.png", // For website favicon (optional)
};
```

### 2. Metadata Configuration (`app/layout.tsx`)

The layout automatically uses `faviconUrl` if provided, otherwise falls back to `avatarUrl`.

## File Structure

```
public/
├── avatar.JPG              # Your avatar (for navigation)
├── avatar-removed-bg.png   # Circular favicon (optional, recommended)
└── favicon.png             # Alternative custom favicon (optional)
```

## Recommended Specifications

- **Size**: 512x512px (or larger, square)
- **Format**: PNG with transparency (best for circular favicons)
- **Shape**: Circular with transparent corners
- **File Size**: Under 100KB for optimal performance

## Testing

After setting up your favicon:

1. **Restart your dev server**: `npm run dev`
2. **Hard refresh your browser**: 
   - Mac: `Cmd + Shift + R`
   - Windows/Linux: `Ctrl + Shift + R`
3. **Check the browser tab** - you should see your favicon

## Troubleshooting

### Favicon not showing?

1. **Clear browser cache** or use incognito mode
2. **Check file path** - must be in `public/` directory
3. **Verify file name** matches what's in `personal-info.ts`
4. **Restart dev server** after adding/changing favicon
5. **Check browser console** for any errors

### Favicon looks pixelated?

- Use a higher resolution image (512x512px or larger)
- Ensure the image is square before creating circular version

### Want different favicon for different devices?

You can add multiple icon sizes in `app/layout.tsx`:

```typescript
icons: {
  icon: [
    { url: faviconPath, sizes: '32x32', type: faviconType },
    { url: faviconPath, sizes: '192x192', type: faviconType },
  ],
  apple: [
    { url: faviconPath, sizes: '180x180', type: faviconType },
  ],
},
```

## Template Usage

For template users:
1. Replace `avatar.JPG` with your own avatar
2. Optionally create `avatar-removed-bg.png` for a circular favicon
3. Update `avatarUrl` and `faviconUrl` in `content/personal-info.ts`
4. That's it! The favicon will automatically update.

