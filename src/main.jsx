import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Library from './chapter_03/Library'
import Clock from './chapter_04/Clock'
import CommentList from './chapter_05/CommentList'
import NotificationList from './chapter_06/NotificationList'
import Accommodate from './chapter_07/Accommodate'
import ConfirmButton from './chapter_08/ConfirmButton'
import LandingPage from './chapter_09/LandingPage'
import AttendanceBook from './chapter_10/AttendanceBook'
import SignUp from './chapter_11/SignUp'

// Chapter 03
// createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <Library />
  // </StrictMode>,
// )

// Chapter 04
// const root = createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>
//   );
// }, 1000);

// Chapter 05
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <CommentList />
//   </StrictMode>
// )

// Chapter 06
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <NotificationList />
// )

// Chapter 07
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <Accommodate />
// )

// Chapter 08
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <ConfirmButton />
//   </StrictMode>
// )

// Chapter 09
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <LandingPage />
//   </StrictMode>
// )

// Chapter 10
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <AttendanceBook />
//   </StrictMode>
// )

// Chapter 11
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <SignUp />
  </StrictMode>
)