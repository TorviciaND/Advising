// Courses and their prerequisites
const coursePrerequisites = {
    'chemistry1': [], // No prerequisite
    'chemistry2': ['chemistry1'],
    'physics1': [], // No prerequisite
    'physics2': ['physics1'],
    'calc1': [], // No prerequisite
    'calc2': ['calc1'],
    'linear-algebra': ['calc1'],
    'math-methods1': ['calc2'],
    'math-methods2': ['math-methods1'],
    'probability': ['math-methods1'],
    'stat-methods': ['probability'],
    'numerical-analysis': ['math-methods2', 'sci-comp'],
    'modeling': [],
    'elective1': [],
    'elective2': [],
    'science-elective': [],
    'math-elective': [],
	'bio1': [],
	'bio2': ['bio1'],
	'orgo': ['chemistry2'],
	'genetics': ['bio2'],
	'cellbio': ['bio2', 'chemistry2'],
	'bio-elective': ['bio2'],
	'bcp-elective': [],
	'sci-comp': [],
	'sci-comp2': ['sci-comp'],
	'mathematical-statistics': ['stat-methods'],
};

const courseInfo = {
    'chemistry1': ['CHEM 10171<br><hr>No prerequisites'], 
    'chemistry2': ['CHEM 10172 or CHEM 10122<br><hr>Chemistry I prerequisite'],
    'physics1': ['PHYS 10310<br><hr>No prerequisites'], 
    'physics2': ['PHYS 10320<br><hr>Physics I prerequisite'],
    'calc1': ['ACMS 10550 Preferred<br><hr>MATH 10350, MATH 10550 or MATH 10850 can be substituted<br><hr>No prerequisites'], 
    'calc2': ['ACMS 10560 Preferred<br><hr>MATH 10360, MATH 10560 or MATH 10860 can be substituted<br><hr>Calculus I prerequisite'],
    'linear-algebra': ['ACMS 20620<br><hr>MATH 20610 or MATH 20580 will be accepted for students switching into the ACMS major<br><hr>Calculus I prerequisite'],
    'math-methods1': ['ACMS 20550<br><hr>MATH 20550 will be accepted for students switching into the ACMS major<br><hr>Calculus II prerequisite'],
    'math-methods2': ['ACMS 20750<br><hr>Mathematical Methods I prerequisite'],
    'probability': ['ACMS 30530<br><hr>MATH 30530 will be accepted for students switching into the ACMS major<br><hr>Mathematical Methods I prerequisite'],
    'stat-methods': ['ACMS 30600<br><hr>Probability prerequisite'],
    'numerical-analysis': ['ACMS 40390 Preferred<br><hr>MATH 40390 will also be accepted<br><hr>Mathematical Methods II and Scientific Computing prerequisites'],
    'modeling': ['ACMS 40630 or 40730 or 40740 or 40760 or 40770<br><hr>See Notre Dame PATH class search for specific prerequisites of each course'],
    'acms-elective1': ['See GPS for specific options on electives'],
    'acms-elective2': ['See GPS for specific options on electives'],
    'science-elective': ['See GPS for specific options on electives'],
    'acms-math-elective': ['See GPS for specific options on electives'],
	'bio1': ['BIOS 10171 and BIOS 11173<br><hr>No prerequisites'],
	'bio2': ['BIOS 10172 and BIOS 11174<br><hr>Biology I prerequisite'],
	'orgo': ['CHEM 20273 and CHEM 21273<br><hr>Chemistry II prerequisite'],
	'genetics': ['BIOS 20303<br><hr>Biology II prerequisite'],
	'cellbio': ['BIOS 30341 or BIOS 30312<br><hr>Chemistry II and Biology II prerequisites'],
	'bio-elective': ['This course is fulfilled by taking 3 credits in BIOS which has BIOS 10172 or BIOS 20202 as a prerequisite'],
	'bcp-elective': ['See GPS for specific options on electives'],
	'sci-comp': ['ACMS 20220 Preferred<br><hr>CBE 20258, CSE 20311 or PHYS 20420 will also be accepted<br><hr>No prerequisite'],
	'sci-comp2': ['ACMS 40210 or 40212<br><hr>First course in Scientific computing prerequisite'],
	'sc-elective1': ['See GPS for specific options on electives'],
    'sc-elective2': ['See GPS for specific options on electives'],
	'math-stat': ['ACMS 30550 or 30540<br><hr>Statistical Methods and Probability prerequisites'],
	'stat-elective1': ['See GPS for specific options on electives'],
	'stat-elective2': ['See GPS for specific options on electives'],
	'stat-elective3': ['See GPS for specific options on electives'],

};

const transferCourses = {
	alcoy: ['acms-elective1'],
	beijing:['math-stat', 'acms-elective1', 'acms-math-elective', 'acms-elective2'],
	budapest:['acms-elective1'],
	galway:['numerical-analysis', 'acms-elective1','acms-elective2'],
	dublin_city:['acms-elective1'],
	dublin:['acms-elective1', 'acms-elective2', 'math-stat', 'modeling', 'stat-elective1', 'stat-elective2', 'acms-math-elective'],
	heidelberg:['acms-elective1'],
	hong_kong:['math-stat'],
	kyoto:['linear-algebra', 'acms-elective1'],
	singapore:['acms-elective1', 'acms-elective2', 'stat-elective1', 'stat-elective2'],
	perth:['math-methods2', 'probability', 'acms-elective1', 'modeling', 'acms-elective2', 'stat-elective1', 'stat-elective2'],
	saint_andrews:['acms-elective1', 'stat-elective1', 'acms-elective2'],
	sydney:['acms-elective1', 'stat-elective1'],
	trinity:['sci-comp', 'acms-elective1', 'acms-elective2', 'acms-math-elective', 'math-stat', 'stat-elective1', 'stat-elective2', 'modeling', 'stat-elective3']
};

const transferCourseList = {
	alcoy: ["11662 Estadisitica: ACMS elective"],
	beijing:["00135460 Mathematical Statistics: Mathematical Statistics elective<br><br>02838160 Data Analytics and Statistical Software:ACMS elective<br><br>02804020 Regression Analysis in Management Research:ACMS Elective<br><br>02831540 Financial Modeling: ACMS elective<br><br>02532420 Introduction to Financial Engineering: ACMS/Math elective"],
	budapest:["MATH 373 Statistical Methods - Mathematical Theory with Data Science Applications: ACMS elective"],
	galway:["MA 378 Numerical Analysis II: Numerical Analysis Requirement<br><br>CS 319 Scientific Computing: ACMS elective<br><br>MP 237 Mechanics: ACMS elective"],
	dublin_city:["CA 266 Probability and Statistics: ACMS elective<br><br>MS Probabilities and Statistics: ACMS elective"],
	dublin:["ACM 30070 Computational Finance: ACMS elective<br>STAT 20060 Probability Statstics: ACMS elective<br>STAT 20100 Inferential Statistics: ACMS elective<br>ACM 30190 Dynaical Systems: ACMS elective<br>STAT 30090 Stochstics Models:  Modeling requirement<br>MST 30070 Geometry: ACMS elective<br>ACM 30100 Maths of Machine Learning: ACMS elective<br>STAT 30270 Statistical Data Mining: ACMS or STAT elective<br>STAT 30080 Models- Survival Models: ACMS or STAT elective"],
	heidelberg:["MATHMA8 Einfuhrung in die Wahrsheinlichkeitstheorie und Statistik: ACMS elective"],
	hong_kong:["STAT 2602 Probability and Statistics II: Mathematical Statistics"],
	kyoto:["Natural Sciences (MATH)N 106001 Advanced Linear Algebra: Linear Algebra<br>Informatics T057002 Fundamentals of Artifical Intelligence: ACMS elective"],
	singapore:["ST 3240 Multivariate Statistical Analysis: ACMS or STAT elective<br>ST 3243 Statistical Methods in Epidemiology: ACMS or STAT elective"],
	perth:["MATH 2021 Introduction to Applied Mathematics: Mathematical Methods I<br>STAT 30602 Statistical Science: ACMS elective<br>STAT2063 Probabilistic Methods and Their Applications: ACMS elective<br>STAT 2062 Fundamentals of Probability with Applications: Probability<br>STAT3061 Random Processes and their Applications: Modeling<br>STAT 3405 Introduction to Bayesian Computing and Statistics: ACMS or STAT elective<br>STAT 3406 Applied Statistics and Data Visualization: ACMS or STAT elective"],
	saint_andrews:["MT 4537 Spatial Statistics: ACMS or STAT elective<br>MT 4539 Qunantitative Risk Management: ACMS elective"],
	sydney:["STAT 3925 Time Series (Advanced): ACMS or STAT elective"],
	trinity:["MA 1264 Introduction to Programming in C/C++: Scientific Computing<br>MATH 22S6 Numerical and Data Analysis Techniques: ACMS elective<br>EEU33E03 Probability and Statistics: ACMS elective<br>ST 3009 Statistical Methods for Computer Science: ACMS elective<br>STAT 3458 Statistical Inference II: Mathematical Statistics<br>ST 1252 Introduction to Statistics II: ACMS or STAT elective<br>STU 34503 Stochastic Models in Space and Time I: Modeling<br>STU 33010 Forecasting: ACMS or STAT elective<br>ST 3455 Modern Statistical Methods 1: ACMS or STAT elective<br>ST 3456 Modern Statistical Methods 2: ACMS or STAT elective<br>STU 33011 Multivariate Linear Analysis: ACMS or STAT elective<br>STU 33002 Statistical Analysis 3: ACMS or STAT elective"]
};

var numCourseTransfer = 0;


const bulkContainer = document.getElementById("bulkContainer");
  
// Initialize drag-and-drop for all cards
function initializeDragAndDrop() {
    const draggableCards = document.querySelectorAll('.card');

    draggableCards.forEach(card => {
        card.draggable = true;

        card.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', card.id);
            event.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', () => {
            checkPrerequisites(); // Check prerequisites after moving
        });
    });

    const dropzones = document.querySelectorAll('.dropzone');

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', event => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        dropzone.addEventListener('drop', event => {
            event.preventDefault();
            const cardId = event.dataTransfer.getData('text/plain');
            const card = document.getElementById(cardId);

            if (card) {
                dropzone.appendChild(card);
                checkPrerequisites(); // Check prerequisites after dropping
            }
        });
    });
}

function clearAllDropzones() {
    // Select all dropzones
    const dropzones = document.querySelectorAll('.dropzone');

    // Loop through each dropzone and remove all child elements (cards)
    dropzones.forEach(dropzone => {
        while (dropzone.firstChild) {
            dropzone.removeChild(dropzone.firstChild);
        }
    });
}

function populateFullMajorCourses(program = 'none') {
    let courses = [];  // Declare the courses array outside the condition

    // Define course lists for different concentrations/majors
    if (program === 'none') {
		clearAllDropzones();
        courses = [
            { id: 'chemistry1', name: 'Chemistry I', semester: 1 },
            { id: 'chemistry2', name: 'Chemistry II', semester: 2 },
            { id: 'physics1', name: 'Physics I', semester: 1 },
            { id: 'physics2', name: 'Physics II', semester: 2 },
            { id: 'calc1', name: 'Applied Calculus I', semester: 1 },
            { id: 'calc2', name: 'Applied Calculus II', semester: 2 },
            { id: 'math-methods1', name: 'Mathematical Methods I', semester: 3 },
            { id: 'math-methods2', name: 'Mathematical Methods II', semester: 4 },
            { id: 'sci-comp', name: 'Scientific Computing', semester: 3 },
            { id: 'linear-algebra', name: 'Linear Algebra', semester: 4 },
            { id: 'probability', name: 'Probability', semester: 4 },
            { id: 'stat-methods', name: 'Statistical Methods', semester: 5 },
            { id: 'modeling', name: 'Modeling', semester: 6 },
            { id: 'numerical-analysis', name: 'Numerical Analysis', semester: 5 },
            { id: 'acms-elective1', name: 'ACMS Elective 1', semester: 6 },
            { id: 'acms-elective2', name: 'ACMS Elective 2', semester: 7 },
            { id: 'acms-math-elective', name: 'ACMS/Math Elective', semester: 7 },
            { id: 'science-elective', name: 'Science Elective', semester: 8 },
        ];
    } else if (program === 'bio') {
		clearAllDropzones();
        courses = [
            { id: 'chemistry1', name: 'Chemistry I', semester: 1 },
            { id: 'chemistry2', name: 'Chemistry II', semester: 2 },
			{ id: 'orgo', name: 'Organic Chemistry', semester: 3 },
            { id: 'physics1', name: 'Physics I', semester: 5 },
            { id: 'physics2', name: 'Physics II', semester: 6 },
            { id: 'calc1', name: 'Applied Calculus I', semester: 1 },
            { id: 'calc2', name: 'Applied Calculus II', semester: 2 },
            { id: 'math-methods1', name: 'Mathematical Methods I', semester: 3 },
            { id: 'math-methods2', name: 'Mathematical Methods II', semester: 4 },
            { id: 'sci-comp', name: 'Scientific Computing', semester: 3 },
            { id: 'linear-algebra', name: 'Linear Algebra', semester: 4 },
            { id: 'probability', name: 'Probability', semester: 4 },
            { id: 'stat-methods', name: 'Statistical Methods', semester: 5 },
            { id: 'modeling', name: 'Modeling', semester: 8 },
            { id: 'numerical-analysis', name: 'Numerical Analysis', semester: 8 },
            { id: 'acms-elective1', name: 'ACMS Elective 1', semester: 6 },
            { id: 'acms-elective2', name: 'ACMS Elective 2', semester: 7 },
            { id: 'bio1', name: 'Biological Sciences I', semester: 1 },
            { id: 'bio2', name: 'Biological Sciences II', semester: 2 },
            { id: 'genetics', name: 'Genetics', semester: 7 },
            { id: 'cellbio', name: 'Cellular Biology or Ecology', semester: 5 },
            { id: 'bio-elective', name: 'Biology Elective', semester: 7 },
            { id: 'bcp-elective', name: 'Biology/Chemistry/Physics Elective', semester: 6 },
        ];
	
	    } else if (program === 'scientific-computing') {
		clearAllDropzones();
        courses = [
            { id: 'chemistry1', name: 'Chemistry I', semester: 1 },
            { id: 'chemistry2', name: 'Chemistry II', semester: 2 },
            { id: 'physics1', name: 'Physics I', semester: 1 },
            { id: 'physics2', name: 'Physics II', semester: 2 },
            { id: 'calc1', name: 'Applied Calculus I', semester: 1 },
            { id: 'calc2', name: 'Applied Calculus II', semester: 2 },
            { id: 'math-methods1', name: 'Mathematical Methods I', semester: 3 },
            { id: 'math-methods2', name: 'Mathematical Methods II', semester: 4 },
            { id: 'sci-comp', name: 'Scientific Computing', semester: 3 },
            { id: 'linear-algebra', name: 'Linear Algebra', semester: 4 },
            { id: 'probability', name: 'Probability', semester: 4 },
            { id: 'stat-methods', name: 'Statistical Methods', semester: 5 },
            { id: 'modeling', name: 'Modeling', semester: 5 },
            { id: 'numerical-analysis', name: 'Numerical Analysis', semester: 5 },
            { id: 'acms-elective1', name: 'ACMS Elective 1', semester: 6 },
            { id: 'acms-elective2', name: 'ACMS Elective 2', semester: 7 },
            { id: 'acms-math-elective', name: 'ACMS/Math Elective', semester: 8 },
            { id: 'science-elective', name: 'Science Elective', semester: 8 },
			{ id: 'sci-comp2', name: 'Second Course in Scientific Computing', semester: 6 },
            { id: 'sc-elective1', name: 'Scientific Computing Elective 1', semester: 6 },
            { id: 'sc-elective2', name: 'Scientific Computing Elective 2', semester: 7 },
        ];
    } else if (program === 'acms-supplemental') {
		clearAllDropzones();
        courses = [
            { id: 'calc1', name: 'Applied Calculus I', semester: 1 },
            { id: 'calc2', name: 'Applied Calculus II', semester: 2 },
            { id: 'math-methods1', name: 'Mathematical Methods I', semester: 3 },
            { id: 'math-methods2', name: 'Mathematical Methods II', semester: 4 },
            { id: 'sci-comp', name: 'Scientific Computing', semester: 3 },
            { id: 'linear-algebra', name: 'Linear Algebra', semester: 3 },
            { id: 'probability', name: 'Probability', semester: 4 },
            { id: 'stat-methods', name: 'Statistical Methods', semester: 5 },
            { id: 'modeling', name: 'Modeling', semester: 6 },
            { id: 'numerical-analysis', name: 'Numerical Analysis', semester: 5 },
            { id: 'acms-elective1', name: 'ACMS Elective 1', semester: 7 },
        ];
    } else if (program === 'statistics') {
		clearAllDropzones();
        courses = [
            { id: 'chemistry1', name: 'Chemistry I', semester: 1 },
            { id: 'chemistry2', name: 'Chemistry II', semester: 2 },
            { id: 'physics1', name: 'Physics I', semester: 1 },
            { id: 'physics2', name: 'Physics II', semester: 2 },
            { id: 'calc1', name: 'Applied Calculus I', semester: 1 },
            { id: 'calc2', name: 'Applied Calculus II', semester: 2 },
            { id: 'math-methods1', name: 'Mathematical Methods I', semester: 3 },
            { id: 'math-methods2', name: 'Mathematical Methods II', semester: 4 },
            { id: 'sci-comp', name: 'Scientific Computing', semester: 3 },
            { id: 'linear-algebra', name: 'Linear Algebra', semester: 4 },
            { id: 'probability', name: 'Probability', semester: 4 },
            { id: 'stat-methods', name: 'Statistical Methods', semester: 5 },
            { id: 'acms-math-elective', name: 'ACMS/Math Elective', semester: 5 }, // Numerical analysis is suggested as the elective
            { id: 'science-elective', name: 'Science Elective', semester: 8 },
			{ id: 'math-stat', name: 'Mathematical Statistics', semester: 7 },
            { id: 'stat-elective1', name: 'Statistics Elective 1', semester: 6 },
            { id: 'stat-elective2', name: 'Statistics Elective 2', semester: 6 },
            { id: 'stat-elective3', name: 'Statistics Elective 3', semester: 7 },

        ];
    } else if (program === 'statistics-supplemental') {
		clearAllDropzones();
        courses = [
            { id: 'calc1', name: 'Applied Calculus I', semester: 1 },
            { id: 'calc2', name: 'Applied Calculus II', semester: 2 },
            { id: 'math-methods1', name: 'Mathematical Methods I', semester: 3 },
            { id: 'math-methods2', name: 'Mathematical Methods II', semester: 4 },
            { id: 'sci-comp', name: 'Scientific Computing', semester: 3 },
            { id: 'linear-algebra', name: 'Linear Algebra', semester: 4 },
            { id: 'probability', name: 'Probability', semester: 5 },
            { id: 'stat-methods', name: 'Statistical Methods', semester: 6 },
			{ id: 'math-stat', name: 'Mathematical Statistics', semester: 7 },
            { id: 'stat-elective1', name: 'Statistics Elective', semester: 8 },
        ];
    }

    // Populate the dropzones with courses
courses.forEach(course => {
    const dropzone = document.querySelector(`.dropzone[data-semester="${course.semester}"]`);
    if (dropzone) {
        // Create the card element
        const card = document.createElement('div');
        card.className = 'card';
        card.id = course.id;
        card.textContent = course.name;

        // Append the card to the dropzone
        dropzone.appendChild(card);
    }

    });

    initializeDragAndDrop(); // Reinitialize drag-and-drop after populating courses
}

// Function to check prerequisites for dropped courses
function checkPrerequisites() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        const courseId = card.id;
        const prerequisites = coursePrerequisites[courseId] || [];
        const isPrerequisiteMet = prerequisites.every(prerequisite => {
            const prerequisiteCard = document.getElementById(prerequisite);
            return prerequisiteCard && getCardSemester(prerequisiteCard) < getCardSemester(card);
        });

        if (isPrerequisiteMet) {
            card.classList.remove('red');
        } else {
            card.classList.add('red');
        }
    });
}

// Helper function to get the semester number of a card
function getCardSemester(card) {
    const dropzone = card.closest('.dropzone');
    return parseInt(dropzone.dataset.semester, 10);
}

// Set the card's semester and handle visibility
function setCardSemester(cardId, semester) {
    const card = document.getElementById(cardId);
    
    // Set the semester for the card
    card.dataset.semester = semester;

    // If it's semester 0 (hidden), don't display the card
    if (semester === 0) {
        card.style.display = 'none';
    } else {
        card.style.display = 'block'; // Show the card in visible semesters
    }

    // Find the corresponding dropzone for the given semester
    const dropzone = document.querySelector(`.dropzone[data-semester="${semester}"]`);

    setTimeout(() => {
		dropzone.appendChild(card);
    }, 250); // Adding a delay here for smoother animation
    
}

// Function to handle prerequisites when AP Calculus I checkbox is changed
function handleAPCalculusIChange(event) {
    const calc1 = document.getElementById('calc1');
    if (event.target.checked) {
        calc1.style.display = 'none'; // Hide Calculus I
        setCardSemester('calc1', 0); // Move Calculus I to a hidden semester 0
        setCardSemester('calc2', 1); // Move Calculus II to semester 1
		setCardSemester('math-methods1', 2);
		setCardSemester('math-methods2', 3);
    } else {
        calc1.style.display = 'block'; // Show Calculus I
        setCardSemester('calc1', 1); // Move Calculus I to semester 1
        setCardSemester('calc2', 2); // Move Calculus II to semester 2
		setCardSemester('math-methods1', 3);
		setCardSemester('math-methods2', 4);
    }
    checkPrerequisites(); // Recheck prerequisites after updating
}

// Function to handle prerequisites when AP Calculus II checkbox is changed
function handleAPCalculusIIChange(event) {
    const calc2 = document.getElementById('calc2');
    if (event.target.checked) {
        calc2.style.display = 'none'; // Hide Calculus II
        setCardSemester('calc2', 0);
        setCardSemester('math-methods1', 1)
		setCardSemester('math-methods2', 2)

        document.getElementById('math-methods1').classList.remove('red');
    } else {
        calc2.style.display = 'block'; // Show Calculus II
        setCardSemester('calc2', 2);
        setCardSemester('math-methods1', 3)
		setCardSemester('math-methods2', 4)
    }
}

// Function to handle prerequisites when AP Chemistry checkbox is changed
function handleAPChemistryChange(event) {
    const chemistry1 = document.getElementById('chemistry1');
    if (event.target.checked) {
        chemistry1.style.display = 'none'; // Hide Chemistry I
		setCardSemester('chemistry1', 0);
		setCardSemester('chemistry2', 1);
        document.getElementById('chemistry2').classList.remove('red');
    } else {
        chemistry1.style.display = 'block'; // Show Chemistry I
		setCardSemester('chemistry1', 1);
		setCardSemester('chemistry2', 2);
    }
}

// Function to handle prerequisites when AP Physics checkbox is changed
function handleAPPhysicsChange(event) {
    const physics1 = document.getElementById('physics1');
    if (event.target.checked) {
        physics1.style.display = 'none'; // Hide Physics I
		setCardSemester('physics1', 0);
		setCardSemester('physics2', 1);
        document.getElementById('physics2').classList.remove('red');
    } else {
        physics1.style.display = 'block'; // Show Physics I
		setCardSemester('physics1', 1);
		setCardSemester('physics2', 2);
    }
}

// Function to handle prerequisites when AP Physics checkbox is changed
function handleAPPhysics2Change(event) {
    const physics1 = document.getElementById('physics2');
    if (event.target.checked) {
        physics2.style.display = 'none'; // Hide Physics I
		setCardSemester('physics2', 0);
    } else {
        physics2.style.display = 'block'; // Show Physics I
		setCardSemester('physics2', 2);
    }
}

function handleAPBioChange(event) {
    const bio1 = document.getElementById('bio1');
    if (event.target.checked) {
        bio1.style.display = 'none'; // Hide Bio I
		setCardSemester('bio1', 0);
		setCardSemester('bio2', 1);
        document.getElementById('bio2').classList.remove('red');
    } else {
        bio1.style.display = 'block'; // Show Bio I
		setCardSemester('bio1', 1);
		setCardSemester('bio2', 2);
    }
}

function toggleCheckboxes(selector, action) {
    const checkboxes = document.querySelectorAll(selector);
    checkboxes.forEach(checkbox => {
        if (action === 'show') {
            checkbox.style.display = 'block'; // Make checkboxes visible
        } else if (action === 'hide') {
            checkbox.style.display = 'none'; // Hide checkboxes
        }
    });
}

function highlightTransferableCourses(location) {
	numCourseTransfer = 0;
	
    // Get all the cards
    const allCards = document.querySelectorAll('.card');

    // Get the courses for the selected location
    const locationCourses = transferCourses[location] || [];

    // Loop through each card
    allCards.forEach(card => {
        const courseId = card.id; // Assuming card's ID corresponds to the course ID

        if (locationCourses.includes(courseId)) {
            // Highlight transferable courses
            card.classList.add('highlight');
			numCourseTransfer = numCourseTransfer + 1;
        } else {
            // Remove highlight for non-transferable courses
            card.classList.remove('highlight');
        }
    });
}

function showTransferableCourses(locationId) {
    const courses = transferCourseList[locationId] || [];
    const sidePanel = document.getElementById("side-panel");
    const contentDiv = document.getElementById("side-panel-content");

    // Clear existing content
    contentDiv.innerHTML = "";

    if (courses.length > 0 & numCourseTransfer > 0) {
        // Populate the side panel with the courses
        courses.forEach(course => {
            const courseItem = document.createElement("p");
            courseItem.innerHTML = course;
            contentDiv.appendChild(courseItem);
        });
    } else {
        // Show a message if no courses are available
        const noCoursesMessage = document.createElement("p");
        noCoursesMessage.textContent = "No transferable courses available.";
        contentDiv.appendChild(noCoursesMessage);
    }

    // Make the side panel visible
    sidePanel.classList.remove("hidden");
	
	//change style of the bulkContainer
	bulkContainer.style.width = "70%"; // Set the width
	bulkContainer.style.float = "left"; // Set the float
}

// Event listeners for checkbox changes
document.getElementById('ap-calc1').addEventListener('change', handleAPCalculusIChange);
document.getElementById('ap-calc2').addEventListener('change', handleAPCalculusIIChange);
document.getElementById('ap-chem').addEventListener('change', handleAPChemistryChange);
document.getElementById('ap-phys').addEventListener('change', handleAPPhysicsChange);
document.getElementById('ap-phys2').addEventListener('change', handleAPPhysics2Change);
document.getElementById('ap-bio').addEventListener('change', handleAPBioChange);

// Initialize the app
// Event listener for Major Type selection (Full or Supplemental)
document.getElementById('program-selection').addEventListener('change', (event) => {
    const selectedProgram = event.target.value;

    console.log(`Selected Program: ${selectedProgram}`);

    // Update courses based on the selected program
    switch (selectedProgram) {
        case 'acms-no-concentration':
            populateFullMajorCourses('none');
            toggleCheckboxes('.ap-bio-checkbox', 'hide');
			toggleCheckboxes('.ap-phys-checkbox', 'show');
			toggleCheckboxes('.ap-phys2-checkbox', 'show');
			toggleCheckboxes('.ap-chem-checkbox', 'show');			// Hide AP Bio checkboxes
            break;
        case 'acms-bio-concentration':
            populateFullMajorCourses('bio');
			toggleCheckboxes('.ap-phys-checkbox', 'show');
			toggleCheckboxes('.ap-phys2-checkbox', 'show');
			toggleCheckboxes('.ap-chem-checkbox', 'show');
            toggleCheckboxes('.ap-bio-checkbox', 'show'); // Show AP Bio checkboxes
            break;
        case 'acms-sci-comp-concentration':
            populateFullMajorCourses('scientific-computing');
			toggleCheckboxes('.ap-phys-checkbox', 'show');
			toggleCheckboxes('.ap-phys2-checkbox', 'show');
			toggleCheckboxes('.ap-chem-checkbox', 'show');
            toggleCheckboxes('.ap-bio-checkbox', 'hide'); // Hide AP Bio checkboxes
            break;
        case 'acms-supplemental':
            populateFullMajorCourses('acms-supplemental');
            toggleCheckboxes('.ap-bio-checkbox', 'hide'); // Hide AP Bio checkboxes
			toggleCheckboxes('.ap-phys-checkbox', 'hide');
			toggleCheckboxes('.ap-phys2-checkbox', 'hide');
			toggleCheckboxes('.ap-chem-checkbox', 'hide');
            break;
        case 'statistics':
            populateFullMajorCourses('statistics');
			toggleCheckboxes('.ap-phys-checkbox', 'show');
			toggleCheckboxes('.ap-phys2-checkbox', 'show');
			toggleCheckboxes('.ap-chem-checkbox', 'show');
            toggleCheckboxes('.ap-bio-checkbox', 'hide'); // Hide AP Bio checkboxes
            break;
        case 'statistics-supplemental':
            populateFullMajorCourses('statistics-supplemental');
            toggleCheckboxes('.ap-bio-checkbox', 'hide'); // Hide AP Bio checkboxes
			toggleCheckboxes('.ap-phys-checkbox', 'hide');
			toggleCheckboxes('.ap-phys2-checkbox', 'hide');
			toggleCheckboxes('.ap-chem-checkbox', 'hide');
            break;
        default:
            console.error('Unknown program selected!');
            toggleCheckboxes('.ap-bio-checkbox', 'hide'); // Hide AP Bio checkboxes for invalid selection
    }
	
	highlightTransferableCourses(document.getElementById("abroad-selection").value);
	showTransferableCourses(document.getElementById("abroad-selection").value);
	
	
});

//initialize popup
document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.getElementById('info-box');

    let hoverTimeout; // Timeout ID to control delay

    // Event delegation to handle dynamically created and moved cards
    document.body.addEventListener('mouseover', event => {
        const card = event.target.closest('.card');
        if (card) {
            const courseId = card.id; // Match card ID
            if (courseInfo[courseId]) {
                // Delay showing the info-box
                hoverTimeout = setTimeout(() => {
                    // Set the content of the info-box
                    infoBox.innerHTML = courseInfo[courseId];

                    // Recalculate the card's position and size
                    const cardRect = card.getBoundingClientRect();
                    
                    // Position the info-box relative to the card's current position
                    const offset = 10; // Optional: adds some space from the card
                    infoBox.style.left = `${cardRect.left + window.scrollX + offset}px`;
                    infoBox.style.top = `${cardRect.bottom + window.scrollY + offset}px`; // Display below the card

                    // Ensure the info-box is displayed
                    infoBox.style.display = 'block';
                }, 500); // 500ms delay
            }
        }
    });

    document.body.addEventListener('mouseout', event => {
        const card = event.target.closest('.card');
        if (card) {
            clearTimeout(hoverTimeout); // Clear the timeout
            infoBox.style.display = 'none'; // Hide the info-box
            infoBox.innerHTML = ''; // Clear the content
        }
    }); 
});

document.getElementById("abroad-selection").addEventListener("change", function() {
  // Define the transfer classes for each study abroad option

  // Get the selected option
  const selectedOption = this.value;
  highlightTransferableCourses(selectedOption);
  showTransferableCourses(selectedOption);
  
});

document.getElementById("close-panel").addEventListener("click", () => {
    document.getElementById("side-panel").classList.add("hidden");
	bulkContainer.style.width = "100%"; // Set the width
	bulkContainer.style.float = "center"; // Set the float
});

