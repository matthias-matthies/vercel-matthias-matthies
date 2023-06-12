import AnimatedHeading from '@/app/components/AnimatedHeading'
import React from 'react'



const getProjectDetails = async (repository: string) => {
    const res = await fetch(`https://raw.githubusercontent.com/matthias-matthies/${repository}/main/.matthias-matthies/Blog.json`);
    const json = await res.json()
    return json
}

export default async function ProjectPage({params}: {params: {repository: string;}}) {
    const projectDetails = await getProjectDetails(params.repository)

    return (
        <main>
            <AnimatedHeading text={projectDetails.h1} className="text-left"/>
            {JSON.stringify(projectDetails)}
        </main>
    )
}

// Für Name: Name
// Für Link: html_url
// Für Beschreibung: description
// Für Blogpost Markdown oder JSON oder whatnot = https://raw.githubusercontent.com/matthias-matthies/vercel-matthias-matthies/main/.matthias-matthies/BLOG.md or .json // Muss ich mir noch überlegen, wie ich meine Repos nutzen will.
// https://raw.githubusercontent.com/[user]/[repo]/main/[path]
// Für Tags: fetch(tags_url)
// Für GitTags: fetch(tags_url)
// Für Repo direkt fetchen fetch(url) url