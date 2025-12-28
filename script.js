// ===========================
// DATA: Department Directory
// ===========================
const deptDirectory = {
    "MECE": { 
        name: "Mel Francis", 
        email: "mef2@columbia.edu",
        fullName: "Mechanical Engineering"
    },
    "APAM": { 
        name: "Montse Fernandez-Pinkley", 
        email: "mf2157@columbia.edu",
        fullName: "Applied Physics and Applied Mathematics"
    },
    "ELEN": { 
        name: "Elsa Sanchez", 
        email: "es240@columbia.edu",
        fullName: "Electrical Engineering"
    },
    "IEOR": { 
        name: "Academic Coordinator", 
        email: "ieor-academics@columbia.edu",
        fullName: "Industrial Engineering and Operations Research"
    },
    "COMS": { 
        name: "CS Advising", 
        email: "csadvising@cs.columbia.edu",
        fullName: "Computer Science"
    },
    "CHEM": { 
        name: "Chemistry Office", 
        email: "chemoffice@columbia.edu",
        fullName: "Chemistry"
    },
    "SEAS": { 
        name: "SEAS Advising", 
        email: "seasadvising@columbia.edu",
        fullName: "School of Engineering and Applied Science"
    }
};

// ===========================
// DATA: Policy Templates
// ===========================
const policyTemplates = {
    raf: {
        title: "RAF Processing",
        base: "Thank you for your inquiry about the Registration Adjustment Form (RAF).",
        conditions: {
            waitlist: {
                label: "Student is on waitlist",
                text: "Please note that RAF submissions do not guarantee enrollment from a waitlist. Waitlist movement is managed by the department, and students are notified directly if a seat becomes available. We recommend monitoring your waitlist status in SSOL."
            },
            financialHold: {
                label: "Financial hold present",
                text: "⚠️ IMPORTANT: You must clear all holds with the Registrar's Office before any registration changes can be processed. Please visit the Registrar's website or contact them at registrar@columbia.edu to resolve outstanding holds."
            },
            callNumberMissing: {
                label: "Call number not provided",
                text: "To process your RAF, please obtain the 5-digit call number for the course from the Directory of Classes. This unique identifier is required for all registration adjustments."
            },
            departmentApproval: {
                label: "Department approval required",
                text: "This request requires approval from your academic department. Please consult with your departmental advisor before submitting the RAF, as they will need to provide authorization for this adjustment."
            },
            deadline: {
                label: "Near deadline",
                text: "Please note that we are approaching the registration adjustment deadline. Late submissions may not be processed in time for the current semester. We recommend submitting your completed RAF as soon as possible."
            }
        },
        closing: "If you have any questions about the RAF process, please feel free to reach out."
    },
    opt: {
        title: "OPT Referral",
        base: "Thank you for your inquiry regarding Optional Practical Training (OPT).",
        conditions: {
            isso: {
                label: "Refer to ISSO",
                text: "For all OPT-related questions, including application procedures, eligibility requirements, and timeline guidance, please contact the International Students and Scholars Office (ISSO). They are the authoritative resource for F-1 employment authorization.",
                required: true
            },
            timing: {
                label: "Application timing concern",
                text: "ISSO recommends applying for OPT at least 90 days before your program end date, but no more than 90 days in advance. Please schedule a consultation with an ISSO advisor to ensure you meet all deadlines."
            }
        },
        contact: {
            office: "International Students and Scholars Office (ISSO)",
            email: "isso@columbia.edu",
            location: "524 Riverside Drive",
            hours: "Monday-Friday, 9:00 AM - 5:00 PM"
        },
        closing: "ISSO advisors are best equipped to guide you through the OPT process."
    },
    hold: {
        title: "Registration Hold",
        base: "Thank you for bringing the registration hold to our attention.",
        conditions: {
            financial: {
                label: "Financial hold",
                text: "Your account has a financial hold that must be cleared through the Registrar's Office and/or Student Financial Services. Until this hold is removed, you will be unable to register for courses or make schedule adjustments."
            },
            academic: {
                label: "Academic hold",
                text: "You have an academic hold on your account. This typically requires a meeting with your academic advisor to review your progress and discuss next steps. Please schedule an appointment with your departmental advisor."
            },
            health: {
                label: "Health services hold",
                text: "Columbia Health Services has placed a hold on your account. This often relates to missing immunization records or incomplete health requirements. Please contact Columbia Health at health.columbia.edu or call (212) 854-2284."
            },
            disciplinary: {
                label: "Disciplinary hold",
                text: "There is a disciplinary hold on your account. Please contact the Office of Student Conduct and Community Standards for more information and to resolve this matter."
            }
        },
        closing: "Please address the hold promptly to restore full registration access. Let me know if you need assistance identifying the correct office to contact."
    },
    deferral: {
        title: "Inbound Deferral",
        base: "Thank you for your inquiry about deferring your admission to Columbia.",
        conditions: {
            deadlineApproaching: {
                label: "Deferral deadline approaching",
                text: "Please note that deferral requests must typically be submitted within the first few weeks after receiving your admission offer. We recommend submitting your request as soon as possible to ensure it can be reviewed before the deadline."
            },
            oneYearOnly: {
                label: "One-year deferral policy",
                text: "Columbia generally allows deferrals for one academic year only. If you are requesting a multi-year deferral, please provide detailed justification in your request."
            },
            depositRequired: {
                label: "Deposit required for deferral",
                text: "To secure your deferral, you must submit your enrollment deposit by the stated deadline. The deposit confirms your intent to enroll in the deferred term and is non-refundable."
            }
        },
        closing: "For specific questions about your deferral eligibility or the application process, please contact the Office of Graduate Admissions."
    },
    loa: {
        title: "Leave of Absence",
        base: "Thank you for your inquiry about taking a Leave of Absence (LOA).",
        conditions: {
            visaImpact: {
                label: "F-1 visa holder",
                text: "⚠️ IMPORTANT: If you are an international student on an F-1 visa, taking a leave of absence will affect your immigration status. You must consult with ISSO before submitting your LOA request to understand the implications for your visa and re-entry to the United States."
            },
            financialAid: {
                label: "Financial aid recipient",
                text: "Students receiving financial aid should be aware that taking a leave of absence may impact aid eligibility, loan repayment schedules, and future funding. Please consult with Student Financial Services before finalizing your decision."
            },
            timeLimit: {
                label: "Maximum LOA duration",
                text: "Columbia typically permits leaves of absence for up to one academic year. Extensions beyond this period require special approval and detailed justification. Your total time-to-degree will include any LOA periods."
            },
            returnProcess: {
                label: "Return from LOA",
                text: "To return from a leave of absence, you must submit a formal return request at least 30 days before the start of the semester. Your return is subject to approval and may require documentation depending on the reason for your leave."
            }
        },
        closing: "Please reach out to your academic advisor and the appropriate offices to ensure you understand all implications before proceeding with an LOA request."
    },
    transfer: {
        title: "Transfer Credit",
        base: "Thank you for your inquiry about transfer credit evaluation.",
        conditions: {
            priorApproval: {
                label: "Prior approval required",
                text: "⚠️ IMPORTANT: Courses taken elsewhere must be approved in advance to guarantee transfer credit. Please submit a Transfer Credit Petition to your department before enrolling in external coursework."
            },
            gradeRequirement: {
                label: "Minimum grade required",
                text: "Only courses completed with a grade of B or better are eligible for transfer credit. Pass/Fail courses are generally not accepted unless the 'Pass' grade explicitly represents B-level work or higher."
            },
            accreditation: {
                label: "Accreditation requirement",
                text: "Transfer credit is only granted for coursework completed at regionally accredited institutions. Please verify the accreditation status of the institution before enrolling."
            },
            creditLimit: {
                label: "Maximum transfer credits",
                text: "Columbia limits the number of transfer credits that can be applied toward your degree. Please consult your program's handbook or your academic advisor to understand the specific limits for your degree."
            }
        },
        closing: "For detailed transfer credit policies and petition procedures, please contact your departmental advisor."
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
    
    // Clear and populate conditions
    conditionsContainer.innerHTML = '';
    selectedConditions = {};
    
    Object.keys(template.conditions).forEach(key => {
        const condition = template.conditions[key];
        const conditionEl = createConditionToggle(key, condition.label, condition.required);
        conditionsContainer.appendChild(conditionEl);
    });
    
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

function createConditionToggle(key, label, required = false) {
    const div = document.createElement('div');
    div.className = 'condition-toggle';
    div.dataset.condition = key;
    if (required) {
        div.classList.add('active');
        selectedConditions[key] = true;
    }
    
    div.innerHTML = `
        <span class="condition-label">${label}${required ? ' (Required)' : ''}</span>
        <div class="toggle-switch"></div>
    `;
    
    div.addEventListener('click', () => {
        if (!required) {
            div.classList.toggle('active');
            selectedConditions[key] = div.classList.contains('active');
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
        <div class="dept-contact-name">📧 ${dept.name}</div>
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
        showToast('⚠️ Please enter a student name');
        studentNameInput.focus();
        return;
    }
    
    let emailBody = `<div class="email-preview">`;
    
    // Greeting
    emailBody += `<p>Greetings,</p>`;
    
    // Base message
    emailBody += `<p>${template.base}</p>`;
    
    // Add selected conditions
    const activeConditions = Object.keys(selectedConditions).filter(key => selectedConditions[key]);
    if (activeConditions.length > 0) {
        activeConditions.forEach(key => {
            const condition = template.conditions[key];
            if (condition) {
                emailBody += `<p>${condition.text}</p>`;
            }
        });
    }
    
    // Add department contact if applicable
    if (selectedDepartment) {
        emailBody += `<p>For assistance with your specific program requirements, please contact your departmental advisor: <strong>${selectedDepartment.name}</strong> at <a href="mailto:${selectedDepartment.email}">${selectedDepartment.email}</a>.</p>`;
    }
    
    // Add OPT contact info if OPT category
    if (currentCategory === 'opt' && template.contact) {
        emailBody += `<p><strong>${template.contact.office}</strong><br>`;
        emailBody += `Email: <a href="mailto:${template.contact.email}">${template.contact.email}</a><br>`;
        emailBody += `Location: ${template.contact.location}<br>`;
        emailBody += `Hours: ${template.contact.hours}</p>`;
    }
    
    // Add additional notes
    if (additionalNotes) {
        emailBody += `<p>${additionalNotes}</p>`;
    }
    
    // Closing
    emailBody += `<p>${template.closing}</p>`;
    
    // Signature
    emailBody += `<p>Best regards,<br><strong>Academic Advising Team</strong></p>`;
    
    emailBody += `</div>`;
    
    // Display
    previewContent.innerHTML = emailBody;
    
    // Update status
    updateStatus('success', '✓ Email generated successfully');
    
    // Save to recent queries
    saveToRecent();
    
    showToast('✨ Email generated successfully!');
}

// ===========================
// UI HELPERS
// ===========================
function showPlaceholder() {
    previewContent.innerHTML = `
        <div class="preview-placeholder">
            <div class="placeholder-icon">✨</div>
            <p>Your email will appear here</p>
            <p class="placeholder-hint">Fill in the fields and click Generate Email</p>
        </div>
    `;
    updateStatus('ready', 'Ready to generate');
}

function updateStatus(type, message) {
    const statusIndicator = document.querySelector('.status-indicator');
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
    
    // Reset conditions
    document.querySelectorAll('.condition-toggle').forEach(toggle => {
        const required = toggle.querySelector('.condition-label').textContent.includes('Required');
        if (!required) {
            toggle.classList.remove('active');
        }
    });
    
    showPlaceholder();
    showToast('🔄 Form reset');
}

function copyToClipboard() {
    const emailContent = previewContent.querySelector('.email-preview');
    
    if (!emailContent) {
        showToast('⚠️ Generate an email first');
        return;
    }
    
    // Get text content
    const text = emailContent.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('📋 Copied to clipboard!');
    }).catch(() => {
        showToast('❌ Failed to copy');
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
    recentQueries = recentQueries.slice(0, 5); // Keep last 5
    
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
                <div style="font-size: 0.8rem; opacity: 0.7;">${query.studentName} • ${timeStr}</div>
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
// AUTO-SAVE (Optional)
// ===========================
function enableAutoSave() {
    const inputs = [studentNameInput, studentUNIInput, deptCodeInput, additionalNotesInput];
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formData = {
                studentName: studentNameInput.value,
                studentUNI: studentUNIInput.value,
                deptCode: deptCodeInput.value,
                additionalNotes: additionalNotesInput.value
            };
            localStorage.setItem('formDraft', JSON.stringify(formData));
        });
    });
}

// Load draft on page load
function loadDraft() {
    const draft = localStorage.getItem('formDraft');
    if (draft) {
        const data = JSON.parse(draft);
        studentNameInput.value = data.studentName || '';
        studentUNIInput.value = data.studentUNI || '';
        deptCodeInput.value = data.deptCode || '';
        additionalNotesInput.value = data.additionalNotes || '';
        
        if (data.deptCode) {
            handleDeptLookup();
        }
    }
}

// Enable auto-save
enableAutoSave();
loadDraft();
