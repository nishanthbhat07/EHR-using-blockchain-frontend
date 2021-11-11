# EHR using Blockchain - UI

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

This is our final year project.  We propose to build an electronic health record system using the blockchain technology. 

## About EHR 
An EHR is a digital asset that consists of a patient's medical history. EHRs are a vital part of health IT as they automate and allow access to evidence-based tools that providers can make decisions about patient care. EHRs aim to share information with other healthcare providers and organizations – such as labs, veterans, medical imaging facilities, pharmacies, school, and workplace clinics – so they contain information from all clinicians required for the welfare of the patients.  The EHR includes observations, laboratory tests, diagnostic imaging reports, treatments, therapies, drugs administered, patient identifying information, legal permissions, and allergies.

##  User Interface
This repository contains the User Interface of the system. The UI is coded using Javascript library - React. For making the user state bullet-proof, we use Redux. Bootstrap 4 with custom SCSS styles were used to style the SPAs. 

The project consists of 2 faces: 
1. User Dashboard 
2. Admin Dashboard

Patients use the user dashboard to make an account and manage their EHR using this platform. The hospitals (which consists of one hospital admin and several doctors) make use of the admin dashboard to manage doctors, and patients in their hospitals.  

### Features of User Dashboard
- Patients can upload their medical records to this platform.
- Patients can manage these records hassle-free.
- Patients have full control of their records. They can allow certain doctors to view their records.
- Doctors will upload the new reports/prescriptions for the patients to view (this is done via admin dashboard).
- Patients can grant and revoke access of their records anytime.

### Features of Admin Dashboard
- Hospital Admin can add new doctors into the hospital network.
- Hospital Admin can view all the doctors and patients in the hospital network.
- Doctors can add their patients using the dashboard.
- Doctors can upload reports of the their patients.
- Doctors can view his/her patients assigned. 


This repository consists of 2 folders
1. `user-dashboard`
2. `admin-dashboard`

`user-dashboard` folder contains the User dashboard and `admin-dashboard` folder contains the Admin Dashboard. 