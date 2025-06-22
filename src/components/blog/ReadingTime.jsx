import { FiClock } from 'react-icons/fi';


const ReadingTime = ({ text }) => {
    /**
     * 
     * @param {*} text Post content text
     * @description Calculate the reading time based on the number of words in the text.
     * @returns integer representing the estimated reading time in minutes.
     */
    function getReadingTime(text) {
        const wordsPerMinute = 200
        const noOfWords = text.split(/\s/g).length
        const minutes = noOfWords / wordsPerMinute
        const readTime = Math.ceil(minutes) // Round up to the nearest minute
        if (readTime < 1) {
            return 1; // Ensure at least 1 minute is displayed
        }

        return readTime;
    }

    const displayMinutes = Math.max(1, Math.ceil(getReadingTime(text)));

    return (
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <FiClock className="mr-1" />
            <span>{displayMinutes} min read</span>
        </div>
    );
};


export default ReadingTime;
