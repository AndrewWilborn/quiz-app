const fullYear = new Date().getFullYear();

const gitHubLink = "https://github.com/AndrewWilborn/quiz-app"

export default function Footer() {

    return (
        <footer>
            <p>&copy; {fullYear}</p>
            <p><a href={gitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
        </footer>
    )
}