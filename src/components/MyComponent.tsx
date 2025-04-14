import { useIsMobile } from "../hook/use-mobile"

function MyComponent() {
  const isMobile = useIsMobile()

  return (
    <div>
      {isMobile ? (
        <p>This is a mobile view 🧱</p>
      ) : (
        <p>This is a desktop view 🖥️</p>
      )}
    </div>
  )
}

export default MyComponent