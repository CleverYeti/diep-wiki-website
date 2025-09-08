import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/Home/HomePage'
import { Layout } from './Layout'
import { TanksPage } from './Pages/Tanks/TanksPage'
import { TankPage } from './Pages/Tanks/TankPage'
import { Page404 } from './Pages/Page404'
import { BossesPage } from './Pages/Bosses/BossesPage'
import { BossPage } from './Pages/Bosses/BossPage'
import { PageXMLBody } from './Components/XML/PageXMLBody'
import { XMLPage } from './Pages/Templates/XMLPage/XMLPage'
import { useEffect, useState } from 'react'
import { RecordData } from './Data/recordData'
import { ShapesPage } from './Pages/Shapes/ShapesPage'
import { RecordsPage } from './Pages/Records/RecordsPage'
import { SubmitApplicationPage } from './Pages/StaffApplications/SubmitStaffApplicationPage'
import { eventTeamApplicationFormFields, staffApplicationFormFields, worldRecordTeamApplicationFormFields } from './Pages/StaffApplications/Forms'
import { ApplicationListPage } from './Pages/StaffApplications/StaffApplicationListPage'
import { ViewApplicationPage } from './Pages/StaffApplications/ViewStaffApplicationPage'

export const basePath = import.meta.env.BASE_URL || '/';

function App() {
  const [recordData, setRecordData] = useState<RecordData|null>(null)
  useEffect(() => {
    ;(async () => {
      // in the real fetch, include filters
      const response = await fetch("https://raw.githubusercontent.com/Tinjy0/diepRecords/refs/heads/main/recordsData.json")
      if (!response.ok) {
        return
      }
      const json = await response.json()
      setRecordData(json)
    })();
  }, [])
  const [mobileRecordData, setMobileRecordData] = useState<RecordData|null>(null)
  useEffect(() => {
    ;(async () => {
      // in the real fetch, include filters
      const response = await fetch("https://raw.githubusercontent.com/Tinjy0/diepRecords/refs/heads/main/mobileRecordsData.json")
      if (!response.ok) {
        return
      }
      const json = await response.json()
      setMobileRecordData(json)
    })();
  }, [])
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tanks/" element={<TanksPage/>}/>
          <Route path="/records/" element={<RecordsPage pcRecordData={recordData} mobileRecordData={mobileRecordData}/>}/>
          <Route path="/tanks/:tankId" element={<TankPage recordData={recordData} mobileRecordData={mobileRecordData}/>}/>
          <Route path="/shapes/" element={<ShapesPage/>}/>
          <Route path="/bosses/" element={<BossesPage/>}/>
          <Route path="/bosses/:bossId" element={<BossPage/>}/>
          <Route path="/formulas/" element={<XMLPage path={"pages/formulas.xml"}/>}/>
          <Route path="/diepverse/submit-staff-application/" element={
            <SubmitApplicationPage
              key={"staff-submit"}
              title="Diepverse Staff Application Submission"
              fields={staffApplicationFormFields}
              formKey="staff-applications"
            />
          }/>
          <Route path="/diepverse/submit-wr-application/" element={
            <SubmitApplicationPage
              key={"wr-submit"}
              title="World Record Manager Application Submission"
              fields={worldRecordTeamApplicationFormFields}
              formKey="wr-applications"
            />
          }/>
          <Route path="/diepverse/submit-event-application/" element={
            <SubmitApplicationPage
              key={"event-submit"}
              title="Diepverse Event Team Application Submission"
              fields={eventTeamApplicationFormFields}
              formKey="event-applications"
            />
          }/>
          <Route path="/diepverse/staff-applications/" element={
            <ApplicationListPage
              key={"staff-list"}
              formKey="staff-applications"
              title="Dieverse Staff Applications"
            />
          }/>
          <Route path="/diepverse/wr-applications/" element={
            <ApplicationListPage
              key={"wr-list"}
              formKey="wr-applications"
              title="World Record Manager Applications"
            />
          }/>
          <Route path="/diepverse/event-applications/" element={
            <ApplicationListPage
              key={"event-list"}
              formKey="event-applications"
              title="Dieverse Event Team Applications"
            />
          }/>
          <Route path="/diepverse/staff-applications/:applicationID" element={
            <ViewApplicationPage
              key={"staff-view"}
              formKey="staff-applications"
              title="Staff Application"
              fields={staffApplicationFormFields}
            />
          }/>
          <Route path="/diepverse/wr-applications/:applicationID" element={
            <ViewApplicationPage
              key={"wr-view"}
              formKey="wr-applications"
              title="World Record Team Application"
              fields={worldRecordTeamApplicationFormFields}
            />
          }/>
          <Route path="/diepverse/event-applications/:applicationID" element={
            <ViewApplicationPage
              key={"event-view"}
              formKey="event-applications"
              title="Event Team Application"
              fields={eventTeamApplicationFormFields}
            />
          }/>
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
