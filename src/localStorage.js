
import { projectLoad } from "./projectload";


let projects = [ 
    {
        name: 'Shopping list',
        todos: [
            {
                title: 'Buy eggs',
                done: true,
                dueDate: new Date('2024-12-07'),
                priority: false,
            },
            {
                title: 'Buy ham',
                done: false,
                dueDate: new Date('2024-12-05'),
                priority: true,
            },
            {
                title: 'Buy bread',
                done: false,
                dueDate: new Date('2024-12-09'),
                priority: false,
            },
        ],
    },
    {
        name: 'Homework',
        todos: [
            {
                title: 'Math',
                done: false,
                dueDate: new Date('2027-12-09'),
                priority: false,
            },
            {
                title: 'English',
                done: true,
                dueDate: new Date('2019-12-09'),
                priority: false,
            }
        ]
    
    }
];



function saveProjects() {
    localStorage.setItem('projectStorage', JSON.stringify(projects));
    
}

function retriveData() {
    let projectStorage_obj = JSON.parse(localStorage.getItem('projectStorage'))
    projects = projectStorage_obj
    projectLoad()
    
}

export {saveProjects, retriveData, projects}


// {
//     name: 'Shopping list',
//     todos: [
//         {
//             title: 'Buy eggs',
//             done: true,
//             dueDate: new Date('2024-12-07'),
//             priority: false,
//         },
//         {
//             title: 'Buy ham',
//             done: false,
//             dueDate: new Date('2024-12-05'),
//             priority: true,
//         },
//         {
//             title: 'Buy bread',
//             done: false,
//             dueDate: new Date('2024-12-09'),
//             priority: false,
//         },
//     ],
// },
// {
//     name: 'Homework',
//     todos: [
//         {
//             title: 'Math',
//             done: false,
//             dueDate: new Date('2027-12-09'),
//             priority: false,
//         },
//         {
//             title: 'English',
//             done: true,
//             dueDate: new Date('2019-12-09'),
//             priority: false,
//         }
//     ]

// },

