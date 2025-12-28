// ===========================
// DATA: Department Directory (Anonymized)
// ===========================
const deptDirectory = {
    "MECE": { 
        name: "Departmental Staff", 
        email: "mece-advising@university.edu",
        fullName: "Mechanical Engineering"
    },
    "APAM": { 
        name: "Departmental Staff", 
        email: "apam-advising@university.edu",
        fullName: "Applied Physics and Applied Mathematics"
    },
    "ELEN": { 
        name: "Departmental Staff", 
        email: "elen-advising@university.edu",
        fullName: "Electrical Engineering"
    },
    "IEOR": { 
        name: "Academic Coordinator", 
        email: "ieor-advising@university.edu",
        fullName: "Industrial Engineering and Operations Research"
    },
    "COMS": { 
        name: "Advising Team", 
        email: "cs-advising@university.edu",
        fullName: "Computer Science"
    },
    "CHEM": { 
        name: "Department Office", 
        email: "chem-advising@university.edu",
        fullName: "Chemistry"
    },
    "SEAS": { 
        name: "Engineering Advising", 
        email: "seas-advising@university.edu",
        fullName: "School of Engineering and Applied Science"
    }
};

// ===========================
// DATA: Policy Templates (Real Workflow)
// ===========================
const policyTemplates = {
    raf: {
        title: "RAF Processing",
        base: "In order to register for the course, please work on completing a registration adjustment form (RAF).",
        requiresDept: true,
        conditions: {
            missingCallNumber: {
                label: "RAF is missing call number",
                text: "The RAF is missing a call number for the noted course. Please add this information to the RAF and send it back to us for review and processing."
            },
            needsDeptApproval: {
                label: "RAF needs department approval first",
                text: "Please note that this form should be sent to your departmental staff for their review. If/when they approve, they will send it directly to our team for processing."
            },
            financialHold: {
                label: "Financial hold prevents processing",
                text: "Please note that the Registrar's Office does not process registration for any student with a financial hold on their record, even if it is in the process of being resolved. If/when the hold has been resolved, please let us know if you still need us to process the RAF."
            },
            waitlistClarification: {
                label: "Student asking about waitlist via RAF",
                text: "Please note that RAFs override class enrollment caps and add the student directly into the course, even if it is full. We will hold off on processing the RAF unless we hear otherwise from you."
            },
            instructorPermission: {
                label: "Instructor permission email should be shared",
                text: "You mentioned the instructor granted permission via email, which should be shared with them as well."
            },
            retroactiveChange: {
                label: "Retroactive change approved",
                text: "We can make this change retroactively, given you confirmed that the delay was due to staffing changes."
            }
        },
        closing: "You should share the completed RAF with your departmental staff for their review."
    },
    
    opt: {
        title: "OPT Inquiry",
        base: "Thank you for your inquiry about Optional Practical Training.",
        requiresDept: true,
        conditions: {},
        closing: "For the best assistance with this matter, please consult your departmental staff."
    },
    
    letter: {
        title: "Letter Request",
        base: "To facilitate your request, please complete the appropriate form (Letter Request) on our webpage.",
        requiresDept: false,
        conditions: {},
        closing: "Once the form is submitted, we will process your request accordingly."
    },
    
    return: {
        title: "Return/Readmission",
        base: "Thank you for your inquiry regarding your return from leave.",
        requiresDept: false,
        conditions: {
            processed: {
                label: "Return request has been processed",
                text: "We can confirm that the return from leave request has now been fully processed. The registration hold will be lifted tomorrow, once the system refreshes overnight.",
                type: "status"
            },
            awaitingApproval: {
                label: "Awaiting approval email",
                text: "Yes, please wait for the approval email that confirms your request is being processed, at which point your registration hold will be lifted.",
                type: "status"
            },
            underReview: {
                label: "Under standard review",
                text: "Please note that your request has to go through the standard review workflow before it can be officially approved. This process will take multiple business days.",
                type: "status"
            },
            deptReview: {
                label: "Under department review",
                text: "Please note that your request is currently undergoing the typical review process. At present, it is under review with your academic department. Please allow additional business days for the typical review process to be completed.",
                type: "status"
            }
        },
        closing: "We will notify you once the process is complete."
    },
    
    admissions: {
        title: "Admissions Questions",
        base: "For the best assistance with this inquiry, please consult our Graduate Admissions team via email at grad-admissions@university.edu.",
        requiresDept: false,
        conditions: {},
        closing: "The admissions team will be able to provide you with the most accurate information."
    },
    
    international: {
        title: "International Student Services",
        base: "For all international student matters, including I-20 requests and visa questions, please contact the International Students and Scholars Office (ISSO).",
        requiresDept: false,
        conditions: {},
        contact: {
            office: "International Students and Scholars Office (ISSO)",
            email: "isso@university.edu"
        },
        closing: "ISSO will be able to provide you with comprehensive guidance on your matter."
    },
    
    calendar: {
        title: "Academic Calendar",
        base: "The academic calendar can be found here: https://registrar.university.edu/content/academic-calendar.",
        requiresDept: false,
        conditions: {},
        closing: "Please refer to this resource for important dates and deadlines."
    },
    
    concentration: {
        title: "Change Degree Concentration",
        base: "To change your degree concentration, there is a form available on our website.",
        requiresDept: false,
        conditions: {},
        link: "https://www.engineering.university.edu/academics/academic-resources/graduate-enrollment-services/engineering-graduate-student-change-status",
        closing: "Please complete this form and submit it for processing."
    },
    
    incoming: {
        title: "Incoming Student Registration",
        base: "As a new incoming student, you will not yet receive registration appointments.",
        requiresDept: false,
        conditions: {
            notStarted: {
                label: "Registration has not started yet",
                text: "Please continue to monitor your email for updates over the next few weeks, and continue to check your account."
            },
            springStart: {
                label: "Spring semester incoming student",
                text: "Please note that students beginning their studies this Spring will be able to register starting in January. We kindly request that you continue to monitor your email for correspondence regarding this matter, as updates will follow."
            },
            deferred: {
                label: "Deferred admission student",
                text: "Please note that, as you deferred, you are not considered a continuing student; rather, you are considered an incoming student for the upcoming term. Further information on registration for incoming students will be communicated over the next few weeks. At this time, no further update is available."
            },
            appointmentCoding: {
                label: "Appointments being coded soon",
                text: "Please note that registration appointments for incoming students will be coded within the next couple of weeks. We advise you to continue to check your account for registration appointments. If you do not see any registration appointments on your account by the specified date, please feel free to reach back out to us so we can review your record."
            }
        },
        closing: "If you have not yet connected with your departmental staff for advising, we suggest you contact them."
    },
    
    course: {
        title: "Course Registration Issues",
        base: "Thank you for your inquiry about course registration.",
        requiresDept: true,
        conditions: {
            restrictedCourse: {
                label: "Restricted course - needs instructor approval",
                text: "In order to register for restricted courses, you will need to connect with the course instructors to have them sign a registration adjustment form, if they are willing: https://registrar.university.edu/content/registration-adjustment-form-add-drop-classes. Please note that if you haven't done so already, we strongly recommend that you consult your departmental staff about this matter."
            },
            nonEngineeringCourse: {
                label: "Course not provided by Engineering",
                text: "For courses outside of the School of Engineering, please refer to the appropriate registration procedures for that school or department."
            },
            undergraduateStudent: {
                label: "Undergraduate student inquiry",
                text: "As this is related to an undergraduate student, we suggest you and/or the student work with the appropriate undergraduate advising office on this matter."
            },
            creditLimit: {
                label: "Credit limit restriction",
                text: "Please note that your credit cap is accurate. Students in your program year are restricted to the specified number of credits per semester. If you need to register for more credits, you can work with your departmental staff on a registration adjustment form (RAF), or have them request a credit cap increase on your behalf."
            },
            financialResponsibility: {
                label: "Financial Responsibility Statement needed",
                text: "The student has now signed the Financial Responsibility Statement. Please proceed with the course add.",
                specialRecipient: "registration-system@university.edu"
            }
        },
        closing: "Please reach out if you need further assistance with this matter."
    },
    
    leave: {
        title: "Leave of Absence",
        base: "Thank you for your inquiry about leave of absence policies.",
        requiresDept: true,
        conditions: {
            gapYear: {
                label: "Gap year inquiry",
                text: "Please note that your departmental staff will be able to help guide you in understanding leave policies and implications."
            }
        },
        closing: "We recommend consulting with your departmental staff for detailed guidance on your specific situation."
    }
};

// ===========================
// STATE MANAGEMENT
// ===========================
let currentCategory = 'raf';
let selectedConditions = {};
let selectedDepartment = null;
let recentQueries = [];

// ===========================
// DOM ELEMENTS
// ===========================
const categoryBtns = document.querySelectorAll('.category-btn');
const workspaceTitle = document.getElementById('workspaceTitle');
const conditionsContainer = document.getElementById('conditionsContainer');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const copyBtn = document.getElementById('copyBtn');
const previewContent = document.getElementById('previewContent');
const studentNameInput = document.getElementById('studentName');
const studentUNIInput = document.getElementById('studentUNI');
const deptCodeInput = document.getElementById('deptCode');
const deptInfoBox = document.getElementById('deptInfo');
const deptSuggestions = document.getElementById('deptSuggestions');
const additionalNotesInput = document.getElementById('additionalNotes');
const categorySearch = document.getElementById('categorySearch');
const recentList = document.getElementById('recentList');
const deptSection = document.getElementById('deptSection');

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initializeCategory(currentCategory);
    setupEventListeners();
    loadRecentQueries();
    setupKeyboardShortcuts();
});

// ===========================
// CATEGORY MANAGEMENT
// ===========================
function initializeCategory(category) {
    currentCategory = category;
    const template = policyTemplates[category];
    
    // Update workspace title
    workspaceTitle.textContent = template.title;
    
    // Show/hide department section based on requirement
    if (template.requiresDept) {
        deptSection.style.display = 'block';
    } else {
        deptSection.style.display = 'none';
    }
    
    // Clear and populate conditions
    conditionsContainer.innerHTML = '';
    selectedConditions = {};
    
    const conditionKeys = Object.keys(template.conditions);
    
    if (conditionKeys.length > 0) {
        // Check if this is a status-based category (like return/readmission)
        const hasStatusType = conditionKeys.some(key => 
            template.conditions[key].type === 'status'
        );
        
        if (hasStatusType) {
            // Create dropdown for status selection
            const selectEl = createStatusDropdown(category, template.conditions);
            conditionsContainer.appendChild(selectEl);
        } else {
            // Create toggles for regular conditions
            conditionKeys.forEach(key => {
                const condition = template.conditions[key];
                const conditionEl = createConditionToggle(key, condition.label);
                conditionsContainer.appendChild(conditionEl);
            });
        }
    } else {
        conditionsContainer.innerHTML = '<p class="empty-state">No additional options for this category</p>';
    }
    
    // Update active button
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Reset preview
    showPlaceholder();
}

function createConditionToggle(key, label) {
    const div = document.createElement('div');
    div.className = 'condition-toggle';
    div.dataset.condition = key;
    
    div.innerHTML = `
        <span class="condition-label">${label}</span>
        <div class="toggle-switch"></div>
    `;
    
    div.addEventListener('click', () => {
        div.classList.toggle('active');
        selectedConditions[key] = div.classList.contains('active');
    });
    
    return div;
}

function createStatusDropdown(category, conditions) {
    const div = document.createElement('div');
    div.className = 'condition-select';
    
    const statusOptions = Object.keys(conditions).filter(key => 
        conditions[key].type === 'status'
    );
    
    div.innerHTML = `
        <label for="statusSelect">Request Status</label>
        <select id="statusSelect" data-category="${category}">
            <option value="">Select status...</option>
            ${statusOptions.map(key => `
                <option value="${key}">${conditions[key].label}</option>
            `).join('')}
        </select>
    `;
    
    const select = div.querySelector('select');
    select.addEventListener('change', (e) => {
        selectedConditions = {};
        if (e.target.value) {
            selectedConditions[e.target.value] = true;
        }
    });
    
    return div;
}

// ===========================
// DEPARTMENT LOOKUP
// ===========================
function handleDeptLookup() {
    const code = deptCodeInput.value.trim().toUpperCase();
    
    if (code.length === 0) {
        deptInfoBox.classList.remove('active');
        deptSuggestions.classList.remove('active');
        selectedDepartment = null;
        return;
    }
    
    // Show suggestions
    const matches = Object.keys(deptDirectory).filter(key => 
        key.startsWith(code) || deptDirectory[key].fullName.toLowerCase().includes(code.toLowerCase())
    );
    
    if (matches.length > 0 && code.length >= 2) {
        showDeptSuggestions(matches);
    } else {
        deptSuggestions.classList.remove('active');
    }
    
    // Exact match
    const dept = deptDirectory[code];
    if (dept) {
        selectedDepartment = { code, ...dept };
        showDeptInfo(dept);
    } else {
        deptInfoBox.classList.remove('active');
        selectedDepartment = null;
    }
}

function showDeptSuggestions(matches) {
    deptSuggestions.innerHTML = matches.map(code => {
        const dept = deptDirectory[code];
        return `
            <div class="dept-suggestion-item" data-code="${code}">
                <div class="dept-code">${code}</div>
                <div class="dept-name-text">${dept.fullName}</div>
            </div>
        `;
    }).join('');
    
    deptSuggestions.classList.add('active');
    
    // Add click handlers
    deptSuggestions.querySelectorAll('.dept-suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const code = item.dataset.code;
            deptCodeInput.value = code;
            handleDeptLookup();
            deptSuggestions.classList.remove('active');
        });
    });
}

function showDeptInfo(dept) {
    deptInfoBox.innerHTML = `
        <div class="dept-contact-name">Contact: ${dept.name}</div>
        <a href="mailto:${dept.email}" class="dept-contact-email">${dept.email}</a>
    `;
    deptInfoBox.classList.add('active');
}

// ===========================
// EMAIL GENERATION
// ===========================
function generateEmail() {
    const template = policyTemplates[currentCategory];
    const studentName = studentNameInput.value.trim();
    const additionalNotes = additionalNotesInput.value.trim();
    
    if (!studentName) {
        showToast('Please enter a student name');
        studentNameInput.focus();
        return;
    }
    
    // Check if department is required
    if (template.requiresDept && !selectedDepartment) {
        showToast('Please select a department code');
        deptCodeInput.focus();
        return;
    }
    
    let emailBody = `<div class="email-preview">`;
    
    // Standard greeting
    emailBody += `<p>Greetings,</p>`;
    emailBody += `<p>Thank you for your message.</p>`;
    
    // Base message
    emailBody += `<p>${template.base}</p>`;
    
    // Add link if present
    if (template.link) {
        emailBody += `<p>Form link: <a href="${template.link}" target="_blank">${template.link}</a></p>`;
    }
    
    // Add selected conditions
    const activeConditions = Object.keys(selectedConditions).filter(key => selectedConditions[key]);
    if (activeConditions.length > 0) {
        activeConditions.forEach(key => {
            const condition = template.conditions[key];
            if (condition) {
                emailBody += `<p>${condition.text}</p>`;
                
                // Special handling for financial responsibility statement
                if (condition.specialRecipient) {
                    emailBody += `<p><em>Note: Send to ${condition.specialRecipient}</em></p>`;
                }
            }
        });
    }
    
    // Add department contact if applicable
    if (selectedDepartment && template.requiresDept) {
        emailBody += `<p>Please consult your departmental staff: <a href="mailto:${selectedDepartment.email}">${selectedDepartment.email}</a>.</p>`;
    }
    
    // Add contact info for international category
    if (currentCategory === 'international' && template.contact) {
        emailBody += `<p><strong>${template.contact.office}</strong><br>`;
        emailBody += `Email: <a href="mailto:${template.contact.email}">${template.contact.email}</a></p>`;
    }
    
    // Add additional notes
    if (additionalNotes) {
        emailBody += `<p>${additionalNotes}</p>`;
    }
    
    // Closing
    emailBody += `<p>${template.closing}</p>`;
    
    // Signature
    emailBody += `<p>Thank you,<br><strong>Academic Advising Team</strong><br>Engineering Student Affairs</p>`;
    
    emailBody += `</div>`;
    
    // Display
    previewContent.innerHTML = emailBody;
    
    // Update status
    updateStatus('success', 'Email generated successfully');
    
    // Save to recent queries
    saveToRecent();
    
    showToast('Email generated successfully');
}

// ===========================
// UI HELPERS
// ===========================
function showPlaceholder() {
    previewContent.innerHTML = `
        <div class="preview-placeholder">
            <div class="placeholder-icon">Preview</div>
            <p>Your email will appear here</p>
            <p class="placeholder-hint">Complete the form and click Generate Email</p>
        </div>
    `;
    updateStatus('ready', 'Ready to generate');
}

function updateStatus(type, message) {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    
    statusText.textContent = message;
    
    // Update dot color
    if (type === 'success') {
        statusDot.style.background = 'var(--success)';
    } else if (type === 'warning') {
        statusDot.style.background = 'var(--warning)';
    } else if (type === 'error') {
        statusDot.style.background = 'var(--error)';
    } else {
        statusDot.style.background = 'var(--success)';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function resetForm() {
    studentNameInput.value = '';
    studentUNIInput.value = '';
    deptCodeInput.value = '';
    additionalNotesInput.value = '';
    deptInfoBox.classList.remove('active');
    selectedDepartment = null;
    selectedConditions = {};
    
    // Reset conditions
    document.querySelectorAll('.condition-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
    
    // Reset status dropdowns
    document.querySelectorAll('select[id="statusSelect"]').forEach(select => {
        select.value = '';
    });
    
    showPlaceholder();
    showToast('Form reset');
}

function copyToClipboard() {
    const emailContent = previewContent.querySelector('.email-preview');
    
    if (!emailContent) {
        showToast('Generate an email first');
        return;
    }
    
    // Get text content
    const text = emailContent.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard');
    }).catch(() => {
        showToast('Failed to copy');
    });
}

// ===========================
// RECENT QUERIES
// ===========================
function saveToRecent() {
    const query = {
        category: currentCategory,
        studentName: studentNameInput.value.trim(),
        timestamp: new Date().toISOString(),
        title: policyTemplates[currentCategory].title
    };
    
    recentQueries.unshift(query);
    recentQueries = recentQueries.slice(0, 5);
    
    localStorage.setItem('recentQueries', JSON.stringify(recentQueries));
    displayRecentQueries();
}

function loadRecentQueries() {
    const stored = localStorage.getItem('recentQueries');
    if (stored) {
        recentQueries = JSON.parse(stored);
        displayRecentQueries();
    }
}

function displayRecentQueries() {
    if (recentQueries.length === 0) {
        recentList.innerHTML = '<p class="empty-state">No recent queries yet</p>';
        return;
    }
    
    recentList.innerHTML = recentQueries.map((query, index) => {
        const date = new Date(query.timestamp);
        const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="recent-item" data-index="${index}">
                <div style="font-weight: 600;">${query.title}</div>
                <div style="font-size: 0.8rem; opacity: 0.7;">${query.studentName} - ${timeStr}</div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    recentList.querySelectorAll('.recent-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            const query = recentQueries[index];
            initializeCategory(query.category);
            studentNameInput.value = query.studentName;
        });
    });
}

// ===========================
// EVENT LISTENERS
// ===========================
function setupEventListeners() {
    // Category selection
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            initializeCategory(btn.dataset.category);
        });
    });
    
    // Department input
    deptCodeInput.addEventListener('input', handleDeptLookup);
    deptCodeInput.addEventListener('blur', () => {
        setTimeout(() => deptSuggestions.classList.remove('active'), 200);
    });
    
    // Buttons
    generateBtn.addEventListener('click', generateEmail);
    resetBtn.addEventListener('click', resetForm);
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Category search
    categorySearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        categoryBtns.forEach(btn => {
            const name = btn.querySelector('.category-name').textContent.toLowerCase();
            const desc = btn.querySelector('.category-desc').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || desc.includes(searchTerm)) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
            }
        });
    });
}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl+R: RAF
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            initializeCategory('raf');
        }
        
        // Ctrl+O: OPT
        if (e.ctrlKey && e.key === 'o') {
            e.preventDefault();
            initializeCategory('opt');
        }
        
        // Ctrl+Enter: Generate
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            generateEmail();
        }
        
        // Ctrl+K: Copy
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            copyToClipboard();
        }
    });
}

// ===========================
// AUTO-SAVE
// ===========================
function enableAutoSave() {
    const inputs = [studentNameInput, studentUNIInput, deptCodeInput, additionalNotesInput];
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formData = {
                studentName: studentNameInput.value,
                studentUNI: studentUNIInput.value,
                deptCode: deptCodeInput.value,
                additionalNotes: additionalNotesInput.value,
                category: currentCategory
            };
            localStorage.setItem('formDraft', JSON.stringify(formData));
        });
    });
}

function loadDraft() {
    const draft = localStorage.getItem('formDraft');
    if (draft) {
        const data = JSON.parse(draft);
        
        if (data.category) {
            initializeCategory(data.category);
        }
        
        studentNameInput.value = data.studentName || '';
        studentUNIInput.value = data.studentUNI || '';
        deptCodeInput.value = data.deptCode || '';
        additionalNotesInput.value = data.additionalNotes || '';
        
        if (data.deptCode) {
            handleDeptLookup();
        }
    }
}

// Enable features
enableAutoSave();
loadDraft();
