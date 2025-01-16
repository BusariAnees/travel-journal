import {createRoot} from "react-dom/client"
import App from "./App"
const root = createRoot(document.getElementById("root"))


// function App() {
//    const hours = new Date().getHours()
//    let timeOfDay

//    if (hours < 12) {
//     timeOfDay = "morning"
//    } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//    }
//    else if (hours < 21){
//     timeOfDay = "Night"
//    }
//     return (
//         <h1> Good {timeOfDay}</h1>
//     )
// }


root.render(
<div>
<App/> 

</div>
)