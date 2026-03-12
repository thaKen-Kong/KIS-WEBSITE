
import { AboutPage } from "../pages/about/About";
import { MissionVisionPage } from "../pages/about/MissionVision";
import { HistoryPage } from "../pages/about/History";
import { AdministrationPage } from "../pages/about/Administration";
import { FacultyAndStaffsPage } from "../pages/about/FacultyAndStaffs";
import { HymnPage } from "../pages/about/Hymn";
import { NewsEventsPage } from "../pages/news/NewsEvents";
import { NewsPage } from "../pages/news/News";
import { UpcomingEventsPage } from "../pages/news/UpcomingEvents";
import { AnnouncementsPage } from "../pages/news/Announcements";
import { PhotoGalleryPage } from "../pages/news/PhotoGallery";
import { LifePage } from "../pages/life/Life";
import { ProgramsOfferedPage } from "../pages/life/ProgramsOffered";
import { JhsPage } from "../pages/life/Jhs";
import { ShsPage } from "../pages/life/Shs";
import { FacilitiesPage } from "../pages/life/Facilities";
import { AdmissionPage } from "../pages/admission/Admission";
import { WhyChooseUsPage } from "../pages/admission/WhyChooseUs";
import { EnrollmentProcessPage } from "../pages/admission/EnrollmentProcess";
import { RequirementsPage } from "../pages/admission/Requirements";
import { ContactPage } from "../pages/contact/Contact";
import { InquiryFormPage } from "../pages/contact/InquiryForm";
import { ContactPlaceholder1Page } from "../pages/contact/ContactPlaceholder1";
import { ContactPlaceholder2Page } from "../pages/contact/ContactPlaceholder2";
import { ContactPlaceholder3Page } from "../pages/contact/ContactPlaceholder3";

export const navigationItems = [
    {
        ABOUT : {
            path : "/about",
            label : "About",
            element : AboutPage,
            children : [
                {label : "Mission and Vision", path : "/about/mission-vision", element : MissionVisionPage},
                {label : "History", path : "/about/history", element : HistoryPage},
                {label : "Administration", path : "/about/administration", element : AdministrationPage},
                {label : "Faculty and Staffs", path : "/about/faculty-staff", element : FacultyAndStaffsPage},
                {label : "Hymn", path : "/about/hymn", element : HymnPage},
            ]
        }
    },
    {
        NEWS_EVENTS : {
            path : "/news",
            label : "What's New?",
            element : NewsEventsPage,
            children : [
                {label : "News", path : "/news/news", element : NewsPage},
                {label : "Upcoming Events", path : "/news/events", element : UpcomingEventsPage},
                {label : "Announcements", path : "/news/announcements", element : AnnouncementsPage},
                {label : "Photo Gallery", path : "/news/gallery", element : PhotoGalleryPage},
            ]
        }
    },
    {
        LIFE_KIS : {
            path : "/life",
            label : "Life@Kis",
            element : LifePage,
            children : [
                {label : "JHS", path : "/life/jhs", element : JhsPage},
                {label : "SHS", path : "/life/shs", element : ShsPage},
                {label : "Facilities", path : "/life/facilities", element : FacilitiesPage},
            ]
        }
    },
    {
        ADMISSION : {
            path : "/admission",
            label : "Admission",
            element : AdmissionPage,
            children : [
                {label : "Why Choose Us?", path : "/admission/why-choose-us", element : WhyChooseUsPage},
                {label : "Enrollment Process", path : "/admission/enrollment-process", element : EnrollmentProcessPage},
                {label : "Requirements", path : "/admission/requirements", element : RequirementsPage},
            ]
        }
    },
    {
        CONTACT : {
            path : "/contact",
            label : "Contact",
            element : ContactPage,
            children : [
                {label : "Inquiry Form", path : "/contact/inquiry-form", element : InquiryFormPage},
                {label : "", path : "/contact/placeholder-1", element : ContactPlaceholder1Page},
                {label : "", path : "/contact/placeholder-2", element : ContactPlaceholder2Page},
                {label : "", path : "/contact/placeholder-3", element : ContactPlaceholder3Page},
            ]
        }
    }
]
