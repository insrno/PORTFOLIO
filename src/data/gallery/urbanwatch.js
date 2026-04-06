// UrbanWatch Web Dashboard (BCCMO)
import uwWebDashboard from '/assets/urbanwatch/UW-WEB/636713120_2020051158600914_7419771907211481828_n.png';
import uwWebIncidents from '/assets/urbanwatch/UW-WEB/3e756bcf69ec1ffd15798dc4474a0300.jpeg';
import uwWebBarangayUpdates from '/assets/urbanwatch/UW-WEB/1e5e2f5df4085bcc143ff205e604de3d.jpeg';
import uwWebDevicesEdit from '/assets/urbanwatch/UW-WEB/09029e1f276f4801f456c97e2e31afec.jpeg';
import uwWebContactsCards from '/assets/urbanwatch/UW-WEB/3effadd3e36c516effe10fec66b88210.jpeg';
import uwWebContactDetail from '/assets/urbanwatch/UW-WEB/8d6f06d10351686c7bd1ac70cdb90b19.jpeg';
import uwWebAddCCTV from '/assets/urbanwatch/UW-WEB/65150bfc91cafb5e526e6a8f4219b588.jpeg';
import uwWebArchiveContact from '/assets/urbanwatch/UW-WEB/f06aca2aa45905cc6fb44f0f2d52cd29.jpeg';
import uwWebArchiveDevice from '/assets/urbanwatch/UW-WEB/aea084e6b4ad9d1038ea0c27f7998cf4.jpeg';
import uwWebContactsTable from '/assets/urbanwatch/UW-WEB/1a38f69f205f153d4391a22cbd9f0701.jpeg';
import uwWebEditContact from '/assets/urbanwatch/UW-WEB/0e96e4724d9441b233184f1f0baa3176.jpeg';
import uwWebAddUser from '/assets/urbanwatch/UW-WEB/9ed810f13cd5d98a7effe884c58f5d8c.jpeg';
import uwWebDevicesCards from '/assets/urbanwatch/UW-WEB/c39bf7c4573bd92266bae140647b6bda.jpeg';
import uwWebAddContact from '/assets/urbanwatch/UW-WEB/1169417337f5447951e59ef15e522e61.jpeg';

// UrbanWatch Citizen Mobile App
import uwCitizenOnboarding from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2253.PNG';
import uwCitizenReport from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2254.PNG';
import uwCitizenConcerns from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2255.PNG';
import uwCitizenReportForm from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2256.PNG';
import uwCitizenReportCategories from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2257.PNG';
import uwCitizenMap from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2260.PNG';
import uwCitizenBarangayUpdate from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2261.PNG';
import uwCitizenConcernDetail from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2271.PNG';
import uwCitizenNotifications from '/assets/urbanwatch/UW-APP-CITIZEN/IMG_2272.PNG';

// UrbanWatch Purok Leader Mobile App
import uwPurokMap from '/assets/urbanwatch/UW-APP-PUROK/aefad8f8-3323-4449-901f-2ad8ad9774d8.jpg';
import uwPurokFeed from '/assets/urbanwatch/UW-APP-PUROK/e96933fb-d39d-46c5-83dc-e903ed8f4912.jpg';
import uwPurokDetail from '/assets/urbanwatch/UW-APP-PUROK/242cc96eae03fbf245bf0c3f0af7328b.jpeg';
import uwPurokValidation from '/assets/urbanwatch/UW-APP-PUROK/c2845440ecc18812d9486c4273e8ec05.jpeg';
import uwPurokIMG from '/assets/urbanwatch/UW-APP-PUROK/IMG_2262.PNG';
import uwPurokSafetyNews from '/assets/urbanwatch/UW-APP-PUROK/8f0c50e67e70d9fa8f0c86930bee3a07.jpeg';

// Export as categorized galleries
export const urbanwatchCategories = [
  {
    title: '🖥️ WEB DASHBOARD (BCCMO)',
    subtitle: 'Barangay Command and Control Management Office',
    images: [
      { src: uwWebDashboard, alt: 'Dashboard — Geographic Concern Overview' },
      { src: uwWebIncidents, alt: 'Incidents — AI-Detected Accident Reports' },
      { src: uwWebBarangayUpdates, alt: 'Barangay Updates — Create Public Post' },
      { src: uwWebDevicesCards, alt: 'Devices — CCTV Management (Cards View)' },
      { src: uwWebDevicesEdit, alt: 'Devices — Edit CCTV Configuration' },
      { src: uwWebAddCCTV, alt: 'Devices — Add New CCTV Device' },
      { src: uwWebArchiveDevice, alt: 'Devices — Archive CCTV Confirmation' },
      { src: uwWebContactsCards, alt: 'Contacts — Responder Directory (Cards View)' },
      { src: uwWebContactsTable, alt: 'Contacts — Responder Directory (Table View)' },
      { src: uwWebContactDetail, alt: 'Contacts — Contact Person Details' },
      { src: uwWebAddContact, alt: 'Contacts — Add New Contact' },
      { src: uwWebEditContact, alt: 'Contacts — Edit Contact Information' },
      { src: uwWebArchiveContact, alt: 'Contacts — Archive Contact Confirmation' },
      { src: uwWebAddUser, alt: 'Users — Create New User Account' },
    ]
  },
  {
    title: '📱 CITIZEN MOBILE APP',
    subtitle: 'Community Incident Reporting for Residents',
    images: [
      { src: uwCitizenOnboarding, alt: 'Report Concerns Onboarding' },
      { src: uwCitizenConcerns, alt: 'Report a Concern (Manual & Voice)' },
      { src: uwCitizenReportForm, alt: 'Report Form with Photo Upload' },
      { src: uwCitizenReportCategories, alt: 'Concern Type Categories' },
      { src: uwCitizenReport, alt: 'Barangay Updates Feed' },
      { src: uwCitizenMap, alt: 'Barangay 176-E Incident Map' },
      { src: uwCitizenBarangayUpdate, alt: 'Barangay News Detail' },
      { src: uwCitizenConcernDetail, alt: 'Concern Status Tracking' },
      { src: uwCitizenNotifications, alt: 'Live Notifications' },
    ]
  },
  {
    title: '🛡️ PUROK LEADER APP',
    subtitle: 'Territory-Based Incident Verification & Response',
    images: [
      { src: uwPurokMap, alt: 'Territory Map with Purok Boundaries' },
      { src: uwPurokFeed, alt: 'Incident Feed & Verification' },
      { src: uwPurokDetail, alt: 'Anomaly Detail View' },
      { src: uwPurokValidation, alt: 'Incident Validation & Response' },
      { src: uwPurokIMG, alt: 'Purok Leader Concern Details' },
      { src: uwPurokSafetyNews, alt: 'Safety News & Alerts Feed' },
    ]
  }
];

// Default flat export for backwards compat
export default [
  ...urbanwatchCategories[0].images,
  ...urbanwatchCategories[1].images,
  ...urbanwatchCategories[2].images,
];
