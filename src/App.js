import { useState, useEffect, useCallback } from 'react'

function App() {
    const [count, setCount] = useState(0)

    // const handleEvent = useCallback(e => {
    //     setCount(e.detail.count)
    //     console.log("Inside handleEvent function")
    // })
    const handleEvent = e => {
        setCount(e.detail.count)
        console.log("Inside handleEvent function")
    }

    useEffect(() => {
        document.addEventListener(
            "external-btn-custom-event", handleEvent)

        // Remove event listener to avoid memory leaks
        return () => {
            document.removeEventListener(
                "external-btn-custom-event", handleEvent)
        }
    }, [handleEvent])

    console.log("React page render")
    return <h3>React external button clicks count: {count}</h3>

}

export default App;
