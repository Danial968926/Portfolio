export default function Card({ title, description, tags, image, liveLink, githubLink }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col">
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{description}</p>

                {tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex gap-4 mt-auto">
                    {liveLink && <a href={liveLink} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm">Live Demo →</a>}
                    {githubLink && <a href={githubLink} className="text-gray-500 dark:text-gray-400 font-medium hover:underline text-sm">GitHub</a>}
                </div>
            </div>
        </div>
    );
}