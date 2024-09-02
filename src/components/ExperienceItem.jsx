const ExperienceItem = ({ title, company, description, date }) => {
    return (
        <div className="experience-item">
            <h3 className="text-xl font-bold text-yellow-500 dark:text-yellow-400">
                {title}
            </h3>
            <h4 className="font-semibold text-xl text-gray-900 dark:text-gray-200">
                {company}
            </h4>
            <time className="text-sm text-gray-700 dark:text-gray-400">
                {date}
            </time>
            <p className="text-gray-600 dark:text-gray-300">
                {description}
            </p>
        </div>
    );
};

export default ExperienceItem;
