import { IoIosArrowUp } from "react-icons/io";


const BackToTop = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  
    // Show/hide button based on scroll position 
    window.addEventListener('scroll', () => {
        const button = document.querySelector('.back-to-top');

        // Leave the button hidden if the user at the top of the page
        if (window.scrollY > window.innerHeight - 100) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    });
    
    return (
        <>
            <button type="button" onClick={scrollToTop}
                className="fixed z-20 p-4 text-base font-bold text-white transition duration-300 bg-sky-600 rounded-full shadow-lg bottom-12 right-4 hover:bg-blue-600 hover:cursor-pointer sm:mx-12 back-to-top hover:scale-110"
            >
                <IoIosArrowUp className="text-sm font-light sm:text-base" />
            </button>
        </>
    )
}

export default BackToTop;