# 📋 Product Requirements Document (PRD)
## CareerPath Advisor - Government Education Platform

**Version:** 1.0  
**Date:** December 2024  
**Project:** Udaan AI - CareerPath Advisor  
**Target:** Government Schools & Colleges Only  

---

## 🎯 Executive Summary

### Problem Statement
The decline in student enrollment in government degree colleges is not due to poor infrastructure or lack of teaching resources. The core issue is a **critical gap in awareness** where students and parents don't understand:
- The importance of graduation
- Career opportunities different degree courses unlock
- How to choose subject streams based on personal interest and future prospects
- Whether pursuing graduation is worth the effort vs. short-term job courses

### Solution Overview
A **web + mobile application** that acts as a **personalized AI career & education advisor** specifically for students in government schools and colleges. The platform helps students make informed academic decisions and increases enrollment in government institutions.

### Target Users
- **Primary:** Class 10 students (choosing streams: Arts, Science, Commerce, or vocational diplomas)
- **Secondary:** Class 12 students (choosing government degree courses: BA, BSc, BCom, BBA, BCA, etc.)
- **Scope:** Government schools, ITIs, Polytechnics, and degree colleges only (private institutions excluded)

---

## 🏗️ Technical Architecture

### Current Tech Stack
- **Frontend:** Next.js 15 with TypeScript, Tailwind CSS, shadcn/ui components
- **State Management:** React Query + local state
- **UI Framework:** Responsive design with mobile-first approach
- **Authentication:** JWT-based (to be implemented)

### Planned Tech Stack
- **Backend:** Node.js (NestJS) with Express
- **Database:** PostgreSQL with Prisma ORM
- **AI Layer:** OpenAI GPT-4 + Rule-based filtering system
- **Workflow Automation:** n8n for notifications and reminders
- **Multimodal:** Whisper (STT), ElevenLabs (TTS), Indic-Parler (regional languages)
- **OCR:** Document processing for marksheets
- **Hosting:** Vercel (frontend), Render/AWS (backend), Neon/Supabase (DB)

---

## 🔑 Core Features

### 1. User Onboarding & Profiles
**Priority:** High | **Status:** Not Started

#### User Profile Fields
- **Basic Info:** Age, gender, class (10/12), location, preferred language
- **Academic:** Current marks, subject interests, stream preferences
- **Socio-economic:** Financial condition, caste/reservation category
- **Accessibility:** Hostel needs, distance learning preferences, disability support requirements
- **Editable:** All fields can be updated after initial creation

#### Technical Requirements
- JWT-based authentication
- Profile data stored in PostgreSQL
- Form validation and data persistence
- Profile completion tracking

### 2. Adaptive Quiz Engine
**Priority:** High | **Status:** Basic Implementation (Needs Enhancement)

#### Current Implementation
- 10-question static quiz
- Maps answers to career streams (Science, Arts, Commerce, Vocational)
- Basic scoring algorithm

#### Required Enhancements
- **Branching Logic:** Dynamic question flow based on previous answers
- **Example Flow:** "Do you like Maths?" → If yes → "Do you like Calculus?" → If yes → "Do you enjoy coding?" → Suggest CS/Engineering track
- **Context Integration:** Quiz results combined with user profile data
- **Personalization:** Questions adapt based on user's academic background and interests

### 3. AI Recommendation Engine
**Priority:** High | **Status:** Not Started

#### Recommendation Types
The system should suggest **3 career options** for each user:

1. **Safe Option** (Achievable)
   - Based on current marks and financial condition
   - High probability of admission and completion
   - Minimal additional requirements

2. **Good Fit** (Aligned)
   - Matches user interests and profile
   - Balanced risk-reward ratio
   - Requires moderate effort/improvement

3. **High Potential** (Ambitious)
   - Stretch goals requiring significant effort
   - May need scholarships, entrance exam preparation
   - Long-term career growth potential

#### Filtering Criteria
- **Financial Constraints:** Only suggest affordable options
- **Caste/Reservation:** Consider reservation benefits
- **Accessibility:** Accommodate special needs
- **Geographic:** Prioritize nearby institutions
- **Academic Eligibility:** Match cut-off requirements

### 4. Course-to-Career Path Mapping
**Priority:** Medium | **Status:** Basic Implementation (Needs Enhancement)

#### Current Implementation
- Static cards showing BA, BSc, BCom, BBA paths
- Basic career options and exam information

#### Required Enhancements
- **Visual Roadmaps:** Interactive flowcharts (like roadmap.sh)
- **Path Visualization:** Class 10 → Stream/Diploma → Degree → Careers
- **Interactive Elements:** Clickable nodes with detailed information
- **Multiple Paths:** Show alternative routes to same career goals
- **Prerequisites:** Clear indication of requirements for each step

### 5. Government College Directory
**Priority:** High | **Status:** Basic Implementation (Needs Filtering)

#### Current Implementation
- 8 mock colleges with basic information
- Search and filter functionality
- Course and facility information

#### Required Enhancements
- **Government-Only Filter:** Remove all private institutions
- **Comprehensive Database:** Real government colleges, ITIs, Polytechnics
- **Enhanced Details:** Programs, cut-offs, medium of instruction, hostel availability
- **Map Integration:** Location-based search and visualization
- **Real-time Data:** Integration with government education APIs

#### Institution Types
- Government Schools (Class 10-12)
- ITI (Industrial Training Institutes)
- Polytechnics
- Government Degree Colleges
- State Universities
- Central Universities (government-funded)

### 6. Timeline & Notifications
**Priority:** Medium | **Status:** Basic Implementation (Needs Integration)

#### Current Implementation
- Static timeline with 6 events
- Basic progress tracking
- Year-based filtering

#### Required Enhancements
- **Dynamic Timeline:** AI-generated based on user profile and recommendations
- **Notification System:** Email, SMS, Push notifications via n8n
- **Event Types:** Exams, admissions, scholarship applications, counseling sessions
- **Reminder System:** Automated alerts for important dates
- **User Approval:** Allow users to add/remove timeline items

### 7. Multimodal Support
**Priority:** Low | **Status:** Not Started

#### Voice Input (Speech-to-Text)
- **English/Hinglish:** Whisper API integration
- **Regional Languages:** Indic-ASR for local languages
- **Natural Conversation:** Students can interact conversationally

#### Voice Output (Text-to-Speech)
- **English/Hinglish:** ElevenLabs integration
- **Regional Languages:** Indic-Parler for local languages
- **Accessibility:** Support for visually impaired students

### 8. OCR for Marksheets
**Priority:** Low | **Status:** Not Started

#### Functionality
- **Upload Support:** Accept marksheet images/documents
- **Data Extraction:** OCR to extract scores and grades
- **Profile Update:** Automatically update user academic profile
- **Recommendation Recalculation:** Trigger new recommendations based on updated marks

---

## 🎨 User Experience Design

### Design Principles
- **Accessibility-First:** Support for students with disabilities
- **Mobile-First:** Optimized for smartphone usage
- **Simple Navigation:** Easy to use for students with limited tech exposure
- **Multi-language:** Support for regional languages
- **Offline Capable:** Basic functionality without internet

### User Journey
1. **Onboarding:** Sign up → Complete profile → Take quiz
2. **Discovery:** Receive recommendations → Explore career paths
3. **Planning:** View college options → Set timeline goals
4. **Action:** Apply to colleges → Track progress
5. **Support:** Get notifications → Access resources

---

## 📊 Success Metrics

### User Engagement
- **Profile Completion Rate:** Target 80%+ complete profiles
- **Quiz Completion Rate:** Target 70%+ complete assessments
- **Return Usage:** Target 60%+ monthly active users

### Recommendation Quality
- **User Satisfaction:** Target 4.0+ rating for recommendations
- **Accuracy:** Target 70%+ users find recommendations relevant
- **Action Rate:** Target 30%+ users act on recommendations

### Impact Metrics
- **College Applications:** Track applications to recommended colleges
- **Enrollment Rate:** Measure actual college enrollments
- **User Feedback:** Regular surveys on platform usefulness

---

## 🚀 Implementation Roadmap

### Phase 1: Foundation (Weeks 1-3)
- [ ] Backend setup (NestJS + PostgreSQL + Prisma)
- [ ] Authentication system with JWT
- [ ] Comprehensive user profile creation
- [ ] Database schema design and implementation

### Phase 2: Core Features (Weeks 4-7)
- [ ] Enhanced adaptive quiz engine
- [ ] AI recommendation engine (rule-based + LLM)
- [ ] Government-only college filtering
- [ ] Profile-based recommendation system

### Phase 3: Advanced Features (Weeks 8-12)
- [ ] Visual roadmap system
- [ ] Timeline and notification integration (n8n)
- [ ] Multimodal support (voice input/output)
- [ ] Enhanced college directory with real data

### Phase 4: Polish & Launch (Weeks 13-15)
- [ ] OCR integration for marksheets
- [ ] Analytics and feedback system
- [ ] Performance optimization
- [ ] User testing and bug fixes

---

## 🔧 Technical Specifications

### Database Schema
```sql
-- Core user profiles
users (
  id, email, age, gender, class, location, language,
  financial_condition, caste_category, accessibility_needs,
  created_at, updated_at
)

-- Academic information
academic_profiles (
  user_id, marks, subject_interests, stream_preference,
  board, year_of_passing, marksheet_url
)

-- Quiz sessions and results
quiz_sessions (
  id, user_id, responses, recommendations, score,
  created_at, updated_at
)

-- Government institutions
institutions (
  id, name, type, location, state, programs, cutoffs,
  facilities, is_government, established_year, student_count
)

-- User recommendations
recommendations (
  id, user_id, type, title, description, confidence_score,
  created_at, is_accepted, feedback
)
```

### API Endpoints
```
POST /api/auth/register
POST /api/auth/login
GET /api/profile
PUT /api/profile
POST /api/quiz/submit
GET /api/recommendations
GET /api/colleges
GET /api/timeline
POST /api/timeline/events
```

### AI Integration
- **Rule-based System:** Government filtering, financial constraints, caste reservations
- **LLM Integration:** OpenAI GPT-4 for personalized recommendations
- **Hybrid Approach:** Combine structured data with AI insights

---

## 🎯 Current Implementation Status

### ✅ Completed Features
- Basic Next.js application with TypeScript
- Responsive UI with Tailwind CSS and shadcn/ui
- Static quiz system (10 questions)
- Basic college directory (8 mock colleges)
- Course-to-career mapping (4 degree types)
- Timeline system (6 static events)
- Authentication modal (UI only)
- Dashboard with progress tracking

### ❌ Missing Features
- Backend API and database
- Real user authentication
- Comprehensive user profiles
- AI recommendation engine
- Government-only filtering
- Adaptive quiz branching
- Notification system
- Multimodal support
- OCR functionality
- Real college data

---

## 🔍 Key Assumptions & Constraints

### Assumptions
- Students have access to smartphones or computers
- Basic internet connectivity is available
- Government education data is accessible via APIs
- Students are willing to share personal information for better recommendations

### Constraints
- **Scope Limitation:** Private institutions are explicitly excluded
- **Government Focus:** All recommendations must be for government institutions
- **Accessibility:** Must support students with disabilities
- **Multi-language:** Must support regional languages
- **Offline Capability:** Basic functionality should work without internet

### Risks
- **Data Privacy:** Handling sensitive information (caste, financial status)
- **Accuracy:** Ensuring recommendation quality and relevance
- **Adoption:** Getting students to use the platform regularly
- **Maintenance:** Keeping college data and cut-offs updated

---

## 📝 Notes for Future Development

### When Starting New Development Sessions
1. **Review this PRD** to understand the complete project scope
2. **Check current implementation status** in the codebase
3. **Follow the implementation roadmap** for logical development order
4. **Maintain government-only focus** in all features
5. **Prioritize accessibility and multi-language support**
6. **Test with real user scenarios** from government school students

### Key Files to Reference
- `frontend/app/dashboard/page.tsx` - Current dashboard implementation
- `frontend/app/quiz/page.tsx` - Current quiz system
- `frontend/app/colleges/page.tsx` - Current college directory
- `frontend/app/courses/page.tsx` - Current career mapping
- `frontend/package.json` - Current tech stack

### Development Guidelines
- **Mobile-first design** for all new features
- **Accessibility compliance** (WCAG 2.1 AA)
- **Performance optimization** for low-end devices
- **Security best practices** for handling sensitive data
- **Comprehensive testing** for all user scenarios

---

**Last Updated:** December 2024  
**Next Review:** After Phase 1 completion  
**Maintainer:** Development Team

