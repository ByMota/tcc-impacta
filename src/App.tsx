import { UserInfo } from "./components/userInfo"
import { FontSizeProvider } from "./context/fontContext"

function App() {

  return (
    <FontSizeProvider>
      <UserInfo />
    </FontSizeProvider>
  )
}

export default App
