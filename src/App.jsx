import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./pages/JobsPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import NotFound from "./pages/NotFound"
import PostJobPage from "./pages/PostJobPage"
import EditJobPage from "./pages/EditJobPage"

function App() {
  // add new job
  async function postJob(newJob) {
    await fetch('https://react-jobbin-backend.onrender.com/jobs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })

    return
  }

  // update job
  async function updateJob(job) {
    await fetch(`https://react-jobbin-backend.onrender.com/jobs/${job.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    }
    )
    return
  }

  // delete job
  async function deleteJob(id) {

    await fetch(`https://react-jobbin-backend.onrender.com/jobs/${id}`,
      {
        method: 'delete',
      }
    )
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJob={updateJob} />} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/post-job" element={<PostJobPage postJob={postJob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
