import './style.css';
import { projectLoad } from './projectload';
import { format } from 'date-fns'
import { projects } from './lists';
import { retriveData, saveProjects } from './localStorage';


if (!localStorage.getItem('projectStorage')) {
    saveProjects()
} else {
    retriveData()
}


