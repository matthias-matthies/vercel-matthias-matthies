import AnimatedHeading from "@/app/components/AnimatedHeading";
import AnimatedImage from "@/app/components/AnimatedImage";
import heroImage from "@/public/developer.png"
import Link from "next/link";

export default function Home() {
    const currentSemester = (startDate: Date): Number => {
        const today = new Date()

        const yearsPassed = (today.getFullYear() - startDate.getFullYear())
        const monthsPassed = (today.getMonth() - startDate.getMonth() + 1)

        const totalMonthsPassed = (yearsPassed * 12) + monthsPassed

        return Math.ceil(totalMonthsPassed / 6)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className='px-16 flex items-center justify-between h-screen'>
                <div className='w-1/2'>
                    <AnimatedImage src={heroImage} alt="Digital Art - Developer created by Midjourney" />
                </div>
                <div className='w-1/2'>
                    <AnimatedHeading
                        className='text-left'
                        text='Matthias Matthies, Informatik Student, Fullstack-Entwickler, Sport-Enthusiast'
                    />
                    <p>
                        Moin! Mein Name ist Matthias und ich befinde mich aktuell im <b>{currentSemester(new Date(2022, 10)).toString()}</b>.
                        Semester meines Informatikstudiums an der <Link target="_blank" className="text-blue-500" href="https://www.uni-bremen.de">Universität Bremen</Link>. Zusätzlich arbeite ich als Entwickler bei der <Link className="text-blue-500" href="https://www.k-evolution.de" target="_blank">K-Evolution GmbH</Link> in Sittensen.
                        In meiner Freizeit widme ich mich gerne sportlichen Aktivitäten und arbeite nebenbei an einigen privaten <Link className="text-blue-500" href="/projects">Programmierprojekten</Link>.
                    </p>
                </div>
            </div>
        </main>
    )

}
