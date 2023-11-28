import Header from "./components/page-header"
import styled from "styled-components"

function App() {

  return (
    <Page>
         <Header />
    </Page>
  )
}

export default App


const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column
`