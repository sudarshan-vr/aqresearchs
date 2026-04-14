# Assets Setup Guide

Place your images in the `public/assets/` directory as shown below.
These paths match what the components expect. If a local file is missing, 
the site automatically falls back to the live aqresearchs.com URLs.

## Portfolio Section (`public/assets/`)
```
public/assets/
├── picture.jpg          ← About section main image
├── mkt.webp             ← Market Research portfolio card
├── digital-mkt.webp     ← Digital Marketing portfolio card
├── political-research.jpg  ← Political Research portfolio card
├── mob-application.webp ← App Development portfolio card
├── social-campaign.jpg  ← Social Media Campaign portfolio card
└── mar.webp             ← Services page Digital Marketing feature image
```

## Team Photos (`public/assets/team/`)
```
public/assets/team/
├── manju.jpg            ← Manjunath Sathya
├── jagdish.jpg          ← Jagadish R
├── hemath.png           ← Hemath Kumar
├── jemsy.jpeg           ← Jemsy N K
├── dhanush.jpg          ← Dhanush S
├── chandana.jpeg        ← Chandana CL
├── greeshma.jpeg        ← Greeshma S
├── sunil.jpg            ← Sunil U
├── vamshi.jpg           ← Vamshikrishna CH
├── aneesh.png           ← Aneesh B
├── sudarshan.jpg        ← Sudarshan VR
├── sarah.jpg            ← Sarah Bi Bi R
├── alfa.jpg             ← Alfa Bi
└── Avinash.png          ← D. Avinash
```

## Formspree Setup
1. Go to https://formspree.io and create a free account
2. Create a new form and get your Form ID (looks like `xabcdefg`)
3. Open these two files and replace `YOUR_FORM_ID` with your actual ID:
   - `src/components/Contact.jsx`
   - `src/pages/ContactPage.jsx`

Example: `const FORMSPREE_ID = 'xabcdefg';`
