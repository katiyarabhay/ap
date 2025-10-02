// Application Data with Enhanced Structure
const appData = {
  users: {
    admin: {"username": "admin", "password": "admin123", "role": "Admin", "name": "Dr. Sarah Johnson", "email": "admin@college.edu", "phone": "+91-9876543210"},
    faculty: {"username": "faculty", "password": "faculty123", "role": "Faculty", "name": "Prof. Michael Chen", "email": "mchen@college.edu", "department": "Computer Science", "phone": "+91-9876543211"},
    student: {"username": "student", "password": "student123", "role": "Student", "name": "Anchal Kanaujia", "email": "anchal.k@student.college.edu", "course": "BCA", "semester": 5, "rollNo": "BCA21045"}
  },
  allStudents: [
    {"id": "S001", "rollNo": "BCA21001", "name": "Anchal Kanaujia", "email": "anchal.kanaujia@college.edu", "phone": "+91-9876543001", "course": "BCA", "semester": 5, "gpa": 8.5, "attendance": 92, "credits": 85, "status": "Active", "admissionDate": "2021-08-15", "address": "123 Main St, Delhi", "emergencyContact": "+91-9876543101"},
    {"id": "S002", "rollNo": "BCA21002", "name": "Priya Sharma", "email": "priya.sharma@college.edu", "phone": "+91-9876543002", "course": "BCA", "semester": 5, "gpa": 9.2, "attendance": 95, "credits": 88, "status": "Active", "admissionDate": "2021-08-15", "address": "456 Park Ave, Mumbai", "emergencyContact": "+91-9876543102"},
    {"id": "S003", "rollNo": "BCA22001", "name": "Rahul Patel", "email": "rahul.patel@college.edu", "phone": "+91-9876543003", "course": "BCA", "semester": 3, "gpa": 7.8, "attendance": 88, "credits": 42, "status": "Active", "admissionDate": "2022-08-15", "address": "789 Oak St, Bangalore", "emergencyContact": "+91-9876543103"},
    {"id": "S004", "rollNo": "BCA23001", "name": "Sneha Agarwal", "email": "sneha.agarwal@college.edu", "phone": "+91-9876543004", "course": "BCA", "semester": 1, "gpa": 8.9, "attendance": 97, "credits": 18, "status": "Active", "admissionDate": "2023-08-15", "address": "321 Pine St, Chennai", "emergencyContact": "+91-9876543104"},
    {"id": "S005", "rollNo": "MCA21001", "name": "Vikash Singh", "email": "vikash.singh@college.edu", "phone": "+91-9876543005", "course": "MCA", "semester": 3, "gpa": 8.1, "attendance": 89, "credits": 45, "status": "Active", "admissionDate": "2021-08-15", "address": "654 Elm St, Pune", "emergencyContact": "+91-9876543105"},
    {"id": "S006", "rollNo": "BCA21003", "name": "Anjali Verma", "email": "anjali.verma@college.edu", "phone": "+91-9876543006", "course": "BCA", "semester": 5, "gpa": 7.6, "attendance": 85, "credits": 82, "status": "Active", "admissionDate": "2021-08-15", "address": "987 Maple St, Kolkata", "emergencyContact": "+91-9876543106"},
    {"id": "S007", "rollNo": "BCA22002", "name": "Rohit Gupta", "email": "rohit.gupta@college.edu", "phone": "+91-9876543007", "course": "BCA", "semester": 3, "gpa": 8.7, "attendance": 93, "credits": 44, "status": "Active", "admissionDate": "2022-08-15", "address": "147 Cedar St, Hyderabad", "emergencyContact": "+91-9876543107"},
    {"id": "S008", "rollNo": "BCA23002", "name": "Kavya Nair", "email": "kavya.nair@college.edu", "phone": "+91-9876543008", "course": "BCA", "semester": 1, "gpa": 9.1, "attendance": 98, "credits": 19, "status": "Active", "admissionDate": "2023-08-15", "address": "258 Birch St, Ahmedabad", "emergencyContact": "+91-9876543108"}
  ],
  allFaculty: [
    {"id": "F001", "name": "Prof. Michael Chen", "email": "mchen@college.edu", "phone": "+91-9876543211", "department": "Computer Science", "designation": "Professor", "qualification": "PhD Computer Science", "experience": 8, "joinDate": "2016-07-01", "subjects": ["CS301", "CS302"], "maxHours": 20, "currentHours": 18, "studentFeedback": 4.5, "address": "123 Faculty Lane, Delhi", "specialization": "Data Structures, Database Systems"},
    {"id": "F002", "name": "Dr. Priya Sharma", "email": "psharma@college.edu", "phone": "+91-9876543212", "department": "Mathematics", "designation": "Associate Professor", "qualification": "PhD Mathematics", "experience": 12, "joinDate": "2012-08-01", "subjects": ["MA201", "MA301"], "maxHours": 18, "currentHours": 16, "studentFeedback": 4.7, "address": "456 University Ave, Delhi", "specialization": "Discrete Mathematics, Linear Algebra"},
    {"id": "F003", "name": "Prof. John Smith", "email": "jsmith@college.edu", "phone": "+91-9876543213", "department": "English", "designation": "Professor", "qualification": "MA English Literature", "experience": 10, "joinDate": "2014-09-01", "subjects": ["EN101", "EN201"], "maxHours": 15, "currentHours": 14, "studentFeedback": 4.3, "address": "789 Academic Blvd, Delhi", "specialization": "Technical Communication, Professional Ethics"},
    {"id": "F004", "name": "Dr. Ravi Patel", "email": "rpatel@college.edu", "phone": "+91-9876543214", "department": "Computer Science", "designation": "Professor", "qualification": "PhD Computer Science", "experience": 15, "joinDate": "2009-06-01", "subjects": ["CS401", "CS501"], "maxHours": 22, "currentHours": 20, "studentFeedback": 4.8, "address": "321 Research Park, Delhi", "specialization": "Software Engineering, Artificial Intelligence"},
    {"id": "F005", "name": "Dr. Robert Wilson", "email": "rwilson@college.edu", "phone": "+91-9876543215", "department": "Physics", "designation": "Associate Professor", "qualification": "PhD Physics", "experience": 14, "joinDate": "2010-07-01", "subjects": ["PH201"], "maxHours": 18, "currentHours": 15, "studentFeedback": 4.4, "address": "654 Science Drive, Delhi", "specialization": "Applied Physics, Computational Physics"},
    {"id": "F006", "name": "Prof. Amanda Davis", "email": "adavis@college.edu", "phone": "+91-9876543216", "department": "Computer Science", "designation": "Assistant Professor", "qualification": "MTech Computer Networks", "experience": 6, "joinDate": "2018-08-01", "subjects": ["CS303"], "maxHours": 20, "currentHours": 18, "studentFeedback": 4.2, "address": "987 Tech Boulevard, Delhi", "specialization": "Computer Networks, Network Security"}
  ],
  departments: [
    {"id": "CS", "name": "Computer Science", "hod": "Dr. Sarah Johnson", "students": 180, "faculty": 8},
    {"id": "MA", "name": "Mathematics", "hod": "Dr. Priya Sharma", "students": 120, "faculty": 6},
    {"id": "PH", "name": "Physics", "hod": "Dr. Robert Wilson", "students": 95, "faculty": 5},
    {"id": "CH", "name": "Chemistry", "hod": "Dr. Lisa Anderson", "students": 87, "faculty": 4},
    {"id": "EN", "name": "English", "hod": "Prof. John Smith", "students": 200, "faculty": 7}
  ],
  subjects: [
    {"code": "CS301", "name": "Data Structures & Algorithms", "credits": 4, "department": "CS", "semester": 3},
    {"code": "CS302", "name": "Database Management Systems", "credits": 4, "department": "CS", "semester": 3},
    {"code": "CS303", "name": "Computer Networks", "credits": 3, "department": "CS", "semester": 3},
    {"code": "CS401", "name": "Software Engineering", "credits": 4, "department": "CS", "semester": 4},
    {"code": "CS501", "name": "Artificial Intelligence", "credits": 4, "department": "CS", "semester": 5},
    {"code": "MA201", "name": "Discrete Mathematics", "credits": 3, "department": "MA", "semester": 2},
    {"code": "MA301", "name": "Linear Algebra", "credits": 3, "department": "MA", "semester": 3},
    {"code": "PH201", "name": "Physics for Computing", "credits": 3, "department": "PH", "semester": 2},
    {"code": "EN101", "name": "Technical Communication", "credits": 2, "department": "EN", "semester": 1},
    {"code": "EN201", "name": "Professional Ethics", "credits": 2, "department": "EN", "semester": 2}
  ],
  classrooms: [
    {id: "CR101", capacity: 60, type: "Lecture Hall", equipment: ["Projector", "AC", "WiFi"]},
    {id: "CR102", capacity: 40, type: "Classroom", equipment: ["Whiteboard", "AC"]},
    {id: "LAB201", capacity: 30, type: "Computer Lab", equipment: ["30 PCs", "Projector", "AC"]},
    {id: "LAB202", capacity: 25, type: "Physics Lab", equipment: ["Equipment", "Safety Features"]},
    {id: "CR103", capacity: 50, type: "Seminar Hall", equipment: ["Audio System", "Projector"]}
  ],
  timeSlots: [
    {id: 1, time: "09:00-10:00", period: "1st Period"},
    {id: 2, time: "10:00-11:00", period: "2nd Period"},
    {id: 3, time: "11:15-12:15", period: "3rd Period"},
    {id: 4, time: "12:15-13:15", period: "4th Period"},
    {id: 5, time: "14:00-15:00", period: "5th Period"},
    {id: 6, time: "15:00-16:00", period: "6th Period"}
  ],
  batches: [
    {id: "BCA-SEM3-A", course: "BCA", semester: 3, section: "A", strength: 45},
    {id: "BCA-SEM3-B", course: "BCA", semester: 3, section: "B", strength: 42},
    {id: "BCA-SEM5-A", course: "BCA", semester: 5, section: "A", strength: 38}
  ],
  sampleTimetable: {
    Monday: [
      {time: "09:00-10:00", subject: "Data Structures", faculty: "Prof. Michael Chen", room: "CR101", batch: "BCA-SEM3-A"},
      {time: "10:00-11:00", subject: "Database Management", faculty: "Prof. Michael Chen", room: "LAB201", batch: "BCA-SEM3-A"},
      {time: "11:15-12:15", subject: "Discrete Mathematics", faculty: "Dr. Priya Sharma", room: "CR102", batch: "BCA-SEM3-A"}
    ],
    Tuesday: [
      {time: "09:00-10:00", subject: "Technical Communication", faculty: "Prof. John Smith", room: "CR103", batch: "BCA-SEM3-A"},
      {time: "10:00-11:00", subject: "Data Structures", faculty: "Prof. Michael Chen", room: "CR101", batch: "BCA-SEM3-A"}
    ],
    Wednesday: [
      {time: "09:00-10:00", subject: "Database Management", faculty: "Prof. Michael Chen", room: "LAB201", batch: "BCA-SEM3-A"},
      {time: "11:15-12:15", subject: "Data Structures", faculty: "Prof. Michael Chen", room: "CR101", batch: "BCA-SEM3-A"}
    ],
    Thursday: [
      {time: "10:00-11:00", subject: "Discrete Mathematics", faculty: "Dr. Priya Sharma", room: "CR102", batch: "BCA-SEM3-A"},
      {time: "12:15-13:15", subject: "Technical Communication", faculty: "Prof. John Smith", room: "CR103", batch: "BCA-SEM3-A"}
    ],
    Friday: [
      {time: "09:00-10:00", subject: "Software Engineering", faculty: "Dr. Ravi Patel", room: "CR101", batch: "BCA-SEM5-A"},
      {time: "10:00-11:00", subject: "Software Engineering", faculty: "Dr. Ravi Patel", room: "LAB201", batch: "BCA-SEM5-A"}
    ]
  }
};

// Application State
let currentUser = null;
let currentRole = null;
let filteredStudents = [...appData.allStudents];
let filteredFaculty = [...appData.allFaculty];
let selectedStudents = [];
let selectedFaculty = [];
let charts = {};

// DOM Elements
const pages = {
  landing: document.getElementById('landingPage'),
  login: document.getElementById('loginPage'),
  adminDashboard: document.getElementById('adminDashboard'),
  facultyDashboard: document.getElementById('facultyDashboard'),
  studentDashboard: document.getElementById('studentDashboard')
};

// Utility Functions
function showPage(pageId) {
  Object.values(pages).forEach(page => page.classList.remove('active'));
  pages[pageId].classList.add('active');
}

function showSection(sectionId, containerId) {
  const container = document.getElementById(containerId);
  const sections = container.querySelectorAll('.content-section');
  const navItems = container.querySelectorAll('.nav-item');
  
  sections.forEach(section => section.classList.remove('active'));
  navItems.forEach(item => item.classList.remove('active'));
  
  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

function showError(elementId, message) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.classList.remove('hidden');
  setTimeout(() => element.classList.add('hidden'), 5000);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function getPerformanceClass(gpa) {
  if (gpa >= 9.0) return 'performance-indicator--excellent';
  if (gpa >= 8.0) return 'performance-indicator--good';
  if (gpa >= 7.0) return 'performance-indicator--average';
  return 'performance-indicator--poor';
}

function getAttendanceClass(attendance) {
  if (attendance >= 90) return 'attendance-fill--high';
  if (attendance >= 75) return 'attendance-fill--medium';
  return 'attendance-fill--low';
}

// Authentication
function setupLogin() {
  const roleCards = document.querySelectorAll('.role-card');
  const backBtn = document.querySelector('.back-btn');
  const loginForm = document.getElementById('loginForm');

  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      const role = card.dataset.role;
      setupLoginForm(role);
      showPage('login');
    });
  });

  backBtn.addEventListener('click', () => showPage('landing'));

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleLogin();
  });
}

function setupLoginForm(role) {
  const roleConfig = {
    admin: { title: 'Admin Login', icon: '👨‍💼', name: 'Administrator', demo: 'Username: admin, Password: admin123' },
    faculty: { title: 'Faculty Login', icon: '👨‍🏫', name: 'Faculty Member', demo: 'Username: faculty, Password: faculty123' },
    student: { title: 'Student Login', icon: '👨‍🎓', name: 'Student', demo: 'Username: student, Password: student123' }
  };

  const config = roleConfig[role];
  currentRole = role;
  
  document.getElementById('loginTitle').textContent = config.title;
  document.getElementById('roleIcon').textContent = config.icon;
  document.getElementById('roleName').textContent = config.name;
  document.getElementById('demoInfo').textContent = config.demo;
}

function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const user = appData.users[username];
  
  if (!user || user.password !== password) {
    showError('loginError', 'Invalid username or password');
    return;
  }
  
  if (username !== currentRole) {
    showError('loginError', `Please use ${currentRole} credentials`);
    return;
  }
  
  currentUser = user;
  
  // Clear form
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  
  // Navigate to appropriate dashboard
  const dashboardMap = {
    admin: 'adminDashboard',
    faculty: 'facultyDashboard',
    student: 'studentDashboard'
  };
  
  showPage(dashboardMap[currentRole]);
  setupDashboard(currentRole);
}

// Dashboard Setup
function setupDashboard(role) {
  if (role === 'admin') {
    setupAdminDashboard();
  } else if (role === 'faculty') {
    setupFacultyDashboard();
  } else if (role === 'student') {
    setupStudentDashboard();
  }
}

function setupAdminDashboard() {
  document.getElementById('adminUserName').textContent = currentUser.name;
  
  // Navigation
  const navItems = document.querySelectorAll('#adminDashboard .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      showSection(section, 'adminDashboard');
      
      // Load section-specific content
      switch (section) {
        case 'overview':
          renderOverview();
          break;
        case 'student-management':
          renderStudentManagement();
          break;
        case 'faculty-management':
          renderFacultyManagement();
          break;
        case 'timetable':
          renderAdminTimetable();
          break;
        case 'users':
          renderUsersTable();
          break;
        case 'classrooms':
          renderClassrooms();
          break;
        case 'subjects':
          renderSubjects();
          break;
        case 'analytics':
          renderAnalytics();
          break;
      }
    });
  });
  
  // Logout
  document.getElementById('adminLogout').addEventListener('click', logout);
  
  // Modal setup
  setupModals();
  
  // Initial render
  renderOverview();
  setupStudentManagementEvents();
  setupFacultyManagementEvents();
}

function renderOverview() {
  // Update stats
  document.getElementById('totalStudents').textContent = appData.allStudents.length;
  document.getElementById('totalFaculty').textContent = appData.allFaculty.length;
  document.getElementById('totalDepartments').textContent = appData.departments.length;
  document.getElementById('totalSubjects').textContent = appData.subjects.length;

  // Render charts
  renderOverviewCharts();
}

function renderOverviewCharts() {
  // Student Distribution Chart
  const ctx = document.getElementById('studentDistributionChart');
  if (ctx && !charts.studentDistribution) {
    const courseData = appData.allStudents.reduce((acc, student) => {
      acc[student.course] = (acc[student.course] || 0) + 1;
      return acc;
    }, {});

    charts.studentDistribution = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(courseData),
        datasets: [{
          data: Object.values(courseData),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

function setupStudentManagementEvents() {
  // Search functionality
  const searchInput = document.getElementById('studentSearch');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterStudents, 300));
  }

  // Filter events
  const filters = ['courseFilter', 'semesterFilter', 'studentSort'];
  filters.forEach(filterId => {
    const element = document.getElementById(filterId);
    if (element) {
      element.addEventListener('change', filterStudents);
    }
  });

  // Bulk selection
  const selectAll = document.getElementById('selectAllStudents');
  if (selectAll) {
    selectAll.addEventListener('change', (e) => {
      const checkboxes = document.querySelectorAll('.student-checkbox');
      checkboxes.forEach(cb => cb.checked = e.target.checked);
      updateBulkActions();
    });
  }

  // Export functionality
  const exportBtn = document.getElementById('exportStudents');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportStudentData);
  }
}

function setupFacultyManagementEvents() {
  // Search functionality
  const searchInput = document.getElementById('facultySearch');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterFaculty, 300));
  }

  // Filter events
  const filters = ['departmentFilter', 'facultySort'];
  filters.forEach(filterId => {
    const element = document.getElementById(filterId);
    if (element) {
      element.addEventListener('change', filterFaculty);
    }
  });

  // Export functionality
  const exportBtn = document.getElementById('exportFaculty');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportFacultyData);
  }
}

function renderStudentManagement() {
  filterStudents(); // This will render the filtered students
}

function filterStudents() {
  const searchTerm = document.getElementById('studentSearch')?.value.toLowerCase() || '';
  const courseFilter = document.getElementById('courseFilter')?.value || '';
  const semesterFilter = document.getElementById('semesterFilter')?.value || '';
  const sortBy = document.getElementById('studentSort')?.value || 'name';

  filteredStudents = appData.allStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm) ||
                         student.email.toLowerCase().includes(searchTerm) ||
                         student.rollNo.toLowerCase().includes(searchTerm);
    const matchesCourse = !courseFilter || student.course === courseFilter;
    const matchesSemester = !semesterFilter || student.semester.toString() === semesterFilter;
    
    return matchesSearch && matchesCourse && matchesSemester;
  });

  // Sort students
  filteredStudents.sort((a, b) => {
    switch (sortBy) {
      case 'rollNo':
        return a.rollNo.localeCompare(b.rollNo);
      case 'gpa':
        return b.gpa - a.gpa;
      case 'attendance':
        return b.attendance - a.attendance;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  renderStudentsTable();
}

function renderStudentsTable() {
  const tbody = document.getElementById('studentsTableBody');
  if (!tbody) return;

  tbody.innerHTML = filteredStudents.map(student => `
    <tr>
      <td><input type="checkbox" class="student-checkbox" data-id="${student.id}" onchange="updateBulkActions()"></td>
      <td>${student.rollNo}</td>
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>${student.semester}</td>
      <td><span class="performance-indicator ${getPerformanceClass(student.gpa)}">${student.gpa}</span></td>
      <td>
        <div class="attendance-indicator">
          <div class="attendance-bar">
            <div class="attendance-fill ${getAttendanceClass(student.attendance)}" style="width: ${student.attendance}%"></div>
          </div>
          <span>${student.attendance}%</span>
        </div>
      </td>
      <td><span class="status status--success">${student.status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="action-btn action-btn--view" onclick="viewStudentDetails('${student.id}')">View</button>
          <button class="action-btn action-btn--edit" onclick="editStudent('${student.id}')">Edit</button>
          <button class="action-btn action-btn--delete" onclick="deleteStudent('${student.id}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');

  // Update pagination info
  const paginationInfo = document.getElementById('studentsPaginationInfo');
  if (paginationInfo) {
    paginationInfo.textContent = `Showing 1-${filteredStudents.length} of ${filteredStudents.length} students`;
  }
}

function renderFacultyManagement() {
  filterFaculty(); // This will render the filtered faculty
}

function filterFaculty() {
  const searchTerm = document.getElementById('facultySearch')?.value.toLowerCase() || '';
  const departmentFilter = document.getElementById('departmentFilter')?.value || '';
  const sortBy = document.getElementById('facultySort')?.value || 'name';

  filteredFaculty = appData.allFaculty.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm) ||
                         faculty.email.toLowerCase().includes(searchTerm) ||
                         faculty.department.toLowerCase().includes(searchTerm);
    const matchesDepartment = !departmentFilter || faculty.department === departmentFilter;
    
    return matchesSearch && matchesDepartment;
  });

  // Sort faculty
  filteredFaculty.sort((a, b) => {
    switch (sortBy) {
      case 'experience':
        return b.experience - a.experience;
      case 'feedback':
        return b.studentFeedback - a.studentFeedback;
      case 'workload':
        return b.currentHours - a.currentHours;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  renderFacultyTable();
}

function renderFacultyTable() {
  const tbody = document.getElementById('facultyTableBody');
  if (!tbody) return;

  tbody.innerHTML = filteredFaculty.map(faculty => `
    <tr>
      <td><input type="checkbox" class="faculty-checkbox" data-id="${faculty.id}" onchange="updateFacultyBulkActions()"></td>
      <td>${faculty.name}</td>
      <td>${faculty.department}</td>
      <td>${faculty.designation}</td>
      <td>${faculty.experience} years</td>
      <td>
        <div class="workload-indicator">
          <span>${faculty.currentHours}/${faculty.maxHours}</span>
          <div class="progress-bar" style="width: 60px; height: 4px; margin-left: 8px;">
            <div class="progress-fill" style="width: ${(faculty.currentHours / faculty.maxHours) * 100}%"></div>
          </div>
        </div>
      </td>
      <td>
        <div class="feedback-rating">
          ${'⭐'.repeat(Math.floor(faculty.studentFeedback))} ${faculty.studentFeedback}/5
        </div>
      </td>
      <td>
        <div class="action-buttons">
          <button class="action-btn action-btn--view" onclick="viewFacultyDetails('${faculty.id}')">View</button>
          <button class="action-btn action-btn--edit" onclick="editFaculty('${faculty.id}')">Edit</button>
          <button class="action-btn action-btn--delete" onclick="deleteFaculty('${faculty.id}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');

  // Update pagination info
  const paginationInfo = document.getElementById('facultyPaginationInfo');
  if (paginationInfo) {
    paginationInfo.textContent = `Showing 1-${filteredFaculty.length} of ${filteredFaculty.length} faculty`;
  }
}

function renderAnalytics() {
  renderWorkloadChart();
  renderPerformanceChart();
  setupReportGeneration();
}

function renderWorkloadChart() {
  const ctx = document.getElementById('workloadChart');
  if (ctx && !charts.workload) {
    const facultyNames = appData.allFaculty.map(f => f.name.split(' ').slice(-1)[0]);
    const workloadData = appData.allFaculty.map(f => f.currentHours);
    const maxHoursData = appData.allFaculty.map(f => f.maxHours);

    charts.workload = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: facultyNames,
        datasets: [
          {
            label: 'Current Hours',
            data: workloadData,
            backgroundColor: '#1FB8CD',
            borderWidth: 1
          },
          {
            label: 'Max Hours',
            data: maxHoursData,
            backgroundColor: '#FFC185',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

function renderPerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (ctx && !charts.performance) {
    const gpaRanges = { 'Excellent (9+)': 0, 'Good (8-9)': 0, 'Average (7-8)': 0, 'Below Average (<7)': 0 };
    
    appData.allStudents.forEach(student => {
      if (student.gpa >= 9) gpaRanges['Excellent (9+)']++;
      else if (student.gpa >= 8) gpaRanges['Good (8-9)']++;
      else if (student.gpa >= 7) gpaRanges['Average (7-8)']++;
      else gpaRanges['Below Average (<7)']++;
    });

    charts.performance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(gpaRanges),
        datasets: [{
          data: Object.values(gpaRanges),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

// Modal Functions
function viewStudentDetails(studentId) {
  const student = appData.allStudents.find(s => s.id === studentId);
  if (!student) return;

  const modal = document.getElementById('studentDetailModal');
  const title = document.getElementById('studentModalTitle');
  const content = document.getElementById('studentModalContent');

  title.textContent = `${student.name} - ${student.rollNo}`;
  
  content.innerHTML = `
    <div class="detail-tabs">
      <button class="detail-tab active" onclick="showDetailTab(event, 'personal')">Personal Info</button>
      <button class="detail-tab" onclick="showDetailTab(event, 'academic')">Academic Records</button>
      <button class="detail-tab" onclick="showDetailTab(event, 'attendance')">Attendance</button>
    </div>
    
    <div id="personal" class="detail-content active">
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Full Name</div>
          <div class="detail-value">${student.name}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Roll Number</div>
          <div class="detail-value">${student.rollNo}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Email</div>
          <div class="detail-value">${student.email}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Phone</div>
          <div class="detail-value">${student.phone}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Address</div>
          <div class="detail-value">${student.address}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Emergency Contact</div>
          <div class="detail-value">${student.emergencyContact}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Admission Date</div>
          <div class="detail-value">${formatDate(student.admissionDate)}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Status</div>
          <div class="detail-value"><span class="status status--success">${student.status}</span></div>
        </div>
      </div>
    </div>
    
    <div id="academic" class="detail-content">
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Course</div>
          <div class="detail-value">${student.course}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Current Semester</div>
          <div class="detail-value">${student.semester}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Current GPA</div>
          <div class="detail-value"><span class="performance-indicator ${getPerformanceClass(student.gpa)}">${student.gpa}</span></div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Credits Completed</div>
          <div class="detail-value">${student.credits}</div>
        </div>
      </div>
    </div>
    
    <div id="attendance" class="detail-content">
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Overall Attendance</div>
          <div class="detail-value">
            <div class="attendance-indicator">
              <div class="attendance-bar">
                <div class="attendance-fill ${getAttendanceClass(student.attendance)}" style="width: ${student.attendance}%"></div>
              </div>
              <span>${student.attendance}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function viewFacultyDetails(facultyId) {
  const faculty = appData.allFaculty.find(f => f.id === facultyId);
  if (!faculty) return;

  const modal = document.getElementById('facultyDetailModal');
  const title = document.getElementById('facultyModalTitle');
  const content = document.getElementById('facultyModalContent');

  title.textContent = `${faculty.name} - ${faculty.designation}`;
  
  content.innerHTML = `
    <div class="detail-tabs">
      <button class="detail-tab active" onclick="showDetailTab(event, 'personal-faculty')">Personal Info</button>
      <button class="detail-tab" onclick="showDetailTab(event, 'professional')">Professional</button>
      <button class="detail-tab" onclick="showDetailTab(event, 'workload')">Workload</button>
    </div>
    
    <div id="personal-faculty" class="detail-content active">
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Full Name</div>
          <div class="detail-value">${faculty.name}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Email</div>
          <div class="detail-value">${faculty.email}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Phone</div>
          <div class="detail-value">${faculty.phone}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Address</div>
          <div class="detail-value">${faculty.address}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Join Date</div>
          <div class="detail-value">${formatDate(faculty.joinDate)}</div>
        </div>
      </div>
    </div>
    
    <div id="professional" class="detail-content">
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Department</div>
          <div class="detail-value">${faculty.department}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Designation</div>
          <div class="detail-value">${faculty.designation}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Qualification</div>
          <div class="detail-value">${faculty.qualification}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Experience</div>
          <div class="detail-value">${faculty.experience} years</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Specialization</div>
          <div class="detail-value">${faculty.specialization}</div>
        </div>
      </div>
    </div>
    
    <div id="workload" class="detail-content">
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Current Hours</div>
          <div class="detail-value">${faculty.currentHours}/${faculty.maxHours}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Student Feedback</div>
          <div class="detail-value">${'⭐'.repeat(Math.floor(faculty.studentFeedback))} ${faculty.studentFeedback}/5</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Subjects Teaching</div>
          <div class="detail-value">${faculty.subjects.join(', ')}</div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

// Utility functions for modal tabs
function showDetailTab(event, tabId) {
  const tabs = event.target.parentElement.querySelectorAll('.detail-tab');
  const contents = event.target.parentElement.parentElement.querySelectorAll('.detail-content');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// Bulk Actions and Export Functions
function updateBulkActions() {
  const checkboxes = document.querySelectorAll('.student-checkbox:checked');
  const bulkButtons = document.querySelectorAll('#bulkEmailStudents, #bulkUpdateStudents');
  
  bulkButtons.forEach(btn => {
    btn.disabled = checkboxes.length === 0;
  });

  selectedStudents = Array.from(checkboxes).map(cb => cb.dataset.id);
}

function updateFacultyBulkActions() {
  const checkboxes = document.querySelectorAll('.faculty-checkbox:checked');
  const bulkButtons = document.querySelectorAll('#bulkAssignFaculty, #generateWorkloadReport');
  
  bulkButtons.forEach(btn => {
    btn.disabled = checkboxes.length === 0;
  });

  selectedFaculty = Array.from(checkboxes).map(cb => cb.dataset.id);
}

function exportStudentData() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "Roll No,Name,Email,Course,Semester,GPA,Attendance,Status\n" +
    filteredStudents.map(s => 
      `${s.rollNo},${s.name},${s.email},${s.course},${s.semester},${s.gpa},${s.attendance}%,${s.status}`
    ).join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "students_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportFacultyData() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "Name,Department,Designation,Experience,Current Hours,Max Hours,Student Feedback\n" +
    filteredFaculty.map(f => 
      `${f.name},${f.department},${f.designation},${f.experience},${f.currentHours},${f.maxHours},${f.studentFeedback}`
    ).join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "faculty_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// CRUD Functions (Placeholders)
function editStudent(studentId) {
  alert(`Edit student functionality would open a form for student ID: ${studentId}`);
}

function deleteStudent(studentId) {
  if (confirm('Are you sure you want to delete this student?')) {
    alert(`Student ${studentId} would be deleted`);
  }
}

function editFaculty(facultyId) {
  alert(`Edit faculty functionality would open a form for faculty ID: ${facultyId}`);
}

function deleteFaculty(facultyId) {
  if (confirm('Are you sure you want to delete this faculty member?')) {
    alert(`Faculty ${facultyId} would be deleted`);
  }
}

// Report Generation
function setupReportGeneration() {
  const reportBtns = document.querySelectorAll('.report-btn');
  reportBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const reportType = e.target.dataset.report;
      generateReport(reportType);
    });
  });
}

function generateReport(reportType) {
  const reports = {
    'student-report': 'Student Performance Report generated successfully!',
    'faculty-report': 'Faculty Workload Report generated successfully!',
    'attendance-report': 'Attendance Summary generated successfully!',
    'department-report': 'Department Analytics generated successfully!'
  };
  
  alert(reports[reportType] || 'Report generated successfully!');
}

// Faculty Dashboard
function setupFacultyDashboard() {
  document.getElementById('facultyUserName').textContent = currentUser.name;
  
  const navItems = document.querySelectorAll('#facultyDashboard .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      showSection(section, 'facultyDashboard');
      
      if (section === 'schedule') {
        renderFacultyTimetable();
      }
    });
  });
  
  document.getElementById('facultyLogout').addEventListener('click', logout);
  renderFacultyTimetable();
}

// Student Dashboard
function setupStudentDashboard() {
  document.getElementById('studentUserName').textContent = currentUser.name;
  
  const navItems = document.querySelectorAll('#studentDashboard .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      showSection(section, 'studentDashboard');
      
      if (section === 'timetable') {
        renderStudentTimetable();
      }
    });
  });
  
  document.getElementById('studentLogout').addEventListener('click', logout);
  
  const downloadBtn = document.getElementById('downloadTimetable');
  const exportBtn = document.getElementById('exportCSV');
  
  if (downloadBtn) downloadBtn.addEventListener('click', () => alert('PDF download would be implemented here'));
  if (exportBtn) exportBtn.addEventListener('click', () => alert('CSV export would be implemented here'));
  
  renderStudentTimetable();
}

// Timetable Rendering Functions
function renderAdminTimetable() {
  const container = document.getElementById('adminTimetableGrid');
  if (container) renderTimetableGrid(container, appData.sampleTimetable);
}

function renderFacultyTimetable() {
  const container = document.getElementById('facultyTimetableGrid');
  if (container) {
    const facultySchedule = filterScheduleByFaculty(appData.sampleTimetable, currentUser.name);
    renderTimetableGrid(container, facultySchedule);
  }
}

function renderStudentTimetable() {
  const container = document.getElementById('studentTimetableGrid');
  if (container) {
    const studentSchedule = filterScheduleBySemester(appData.sampleTimetable, currentUser.semester);
    renderTimetableGrid(container, studentSchedule);
  }
}

function renderTimetableGrid(container, scheduleData) {
  const days = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = appData.timeSlots.map(slot => slot.time);
  
  let html = '';
  
  days.forEach(day => {
    html += `<div class="grid-cell grid-header">${day}</div>`;
  });
  
  times.forEach(time => {
    html += `<div class="grid-cell grid-time">${time}</div>`;
    
    days.slice(1).forEach(day => {
      const daySchedule = scheduleData[day] || [];
      const classAtTime = daySchedule.find(cls => cls.time === time);
      
      if (classAtTime) {
        html += `
          <div class="grid-cell grid-class" title="Room: ${classAtTime.room}">
            <div>${classAtTime.subject}</div>
            <small>${classAtTime.faculty}</small>
          </div>
        `;
      } else {
        html += `<div class="grid-cell grid-empty">Free</div>`;
      }
    });
  });
  
  container.innerHTML = html;
}

function filterScheduleByFaculty(schedule, facultyName) {
  const filtered = {};
  Object.keys(schedule).forEach(day => {
    filtered[day] = schedule[day].filter(cls => cls.faculty === facultyName);
  });
  return filtered;
}

function filterScheduleBySemester(schedule, semester) {
  const filtered = {};
  Object.keys(schedule).forEach(day => {
    filtered[day] = schedule[day].filter(cls => {
      const batch = appData.batches.find(b => b.id === cls.batch);
      return batch && batch.semester === semester;
    });
  });
  return filtered;
}

// Additional Rendering Functions
function renderUsersTable() {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;

  const allUsers = [
    { name: "Dr. Sarah Johnson", role: "Admin", email: "admin@college.edu", department: "Administration" },
    { name: "Prof. Michael Chen", role: "Faculty", email: "mchen@college.edu", department: "Computer Science" },
    { name: "Dr. Priya Sharma", role: "Faculty", email: "psharma@college.edu", department: "Mathematics" },
    { name: "Prof. John Smith", role: "Faculty", email: "jsmith@college.edu", department: "English" },
    { name: "Dr. Ravi Patel", role: "Faculty", email: "rpatel@college.edu", department: "Computer Science" },
    { name: "Anchal Kanaujia", role: "Student", email: "anchal.k@student.college.edu", department: "BCA" }
  ];
  
  tbody.innerHTML = allUsers.map(user => `
    <tr>
      <td>${user.name}</td>
      <td><span class="status status--info">${user.role}</span></td>
      <td>${user.email}</td>
      <td>${user.department}</td>
      <td>
        <button class="btn btn--outline btn--sm">Edit</button>
        <button class="btn btn--outline btn--sm">Delete</button>
      </td>
    </tr>
  `).join('');
}

function renderClassrooms() {
  const container = document.getElementById('classroomsContainer');
  if (!container) return;

  container.innerHTML = appData.classrooms.map(room => `
    <div class="classroom-card">
      <div class="card-header">
        <h4>${room.id} - ${room.type}</h4>
      </div>
      <div class="card-info">
        <p><strong>Capacity:</strong> ${room.capacity} students</p>
        <p><strong>Equipment:</strong></p>
        <div class="equipment-list">
          ${room.equipment.map(eq => `<span class="equipment-item">${eq}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderSubjects() {
  const container = document.getElementById('subjectsContainer');
  if (!container) return;

  container.innerHTML = appData.subjects.map(subject => `
    <div class="subject-card">
      <div class="card-header">
        <h4>${subject.code} - ${subject.name}</h4>
      </div>
      <div class="card-info">
        <p><strong>Credits:</strong> ${subject.credits}</p>
        <p><strong>Department:</strong> ${subject.department}</p>
        <p><strong>Semester:</strong> ${subject.semester}</p>
      </div>
    </div>
  `).join('');
}

function setupModals() {
  const modals = ['timetableModal', 'studentDetailModal', 'facultyDetailModal'];
  
  modals.forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');
    
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    if (backdrop) backdrop.addEventListener('click', () => modal.classList.add('hidden'));
  });

  const generateBtn = document.getElementById('generateTimetable');
  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      document.getElementById('timetableModal').classList.remove('hidden');
    });
  }

  const form = document.getElementById('timetableGenerationForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      setTimeout(() => {
        alert('New timetable generated successfully!');
        document.getElementById('timetableModal').classList.add('hidden');
        renderAdminTimetable();
      }, 1000);
    });
  }
}

function logout() {
  currentUser = null;
  currentRole = null;
  
  // Clear any charts
  Object.values(charts).forEach(chart => {
    if (chart) chart.destroy();
  });
  charts = {};
  
  showPage('landing');
}

// Utility function for debouncing search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize Application
function initApp() {
  setupLogin();
  showPage('landing');
}

document.addEventListener('DOMContentLoaded', initApp);