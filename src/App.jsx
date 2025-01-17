import Header from "./components/Header"
import Entry from "./components/Entry"
export default function App () {
    return (
        <>
        <Header />
        <Entry 
         img={{
            src:"./mount-fuji.webp",
            alt: "mount fuji"}}
         name= "JAPAN"
         link= "https://maps.app.goo.gl/9sHrxQ5sUTW8yi3S7"
         header= "Mount Fuji"
         date= "20 jan 2024 - 30 jan 2024"
         description= "Climbing Mount Fuji at dawn was a surreal experience—the crisp mountain air filling my lungs as I ascended through the mist.The summit offered a breathtaking view of the vast landscape7 below, bathed in the golden light of sunrise."/>
        <Entry 
         img={{
            src:"./great-wall.webp",
             alt:"great wall of china"}}
         name= " CHINA"
         link="https://maps.app.goo.gl/KF1coPb1yyednBRv5"
         header= "Great wall of China"
         date= "12 August 2024 - 20 August 2024"
         description= " Walking along the Great Wall of China was like stepping intohistory, the ancient stone path winding through mist-covered mountains. Each step felt like a connection to the past."/>
        <Entry 
         img={{
            src:"Colosseum.png",
             alt:"great wall"}}
         name= "ITALY"
         link="https://maps.app.goo.gl/99P8hUCuPeT4AswNA"
         header= "Colosseum"
         date= "5 January 2025 - 12 2025"
         description= "Exploring the Colosseum was like walking through the heart of ancient Rome, where every stone seemed to whisper stories of gladiators and emperors."/>
        </>
    )
}