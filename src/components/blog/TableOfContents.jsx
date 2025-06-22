import { FiList } from "react-icons/fi";
import { useState } from "react";

const TableOfContents = ({ toc, className, isDesktop = false, scrollToHeading }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!toc || toc.length === 0) return null;

    // For desktop, always show the TOC content
    const contentClass = isDesktop
        ? "block"
        : `overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`;

    return (
        <div className={`${className} ${isDesktop ? 'blog-toc-container' : 'p-4 mb-8 bg-gray-900 border border-gray-800 rounded-md'}`}>
            <div
                className={`flex items-center ${isDesktop ? 'mb-4' : 'mb-3'} ${!isDesktop ? 'cursor-pointer select-none' : ''}`}
                onClick={() => !isDesktop && setIsOpen(prev => !prev)}
            >
                <FiList className="mr-2 text-sky-400" />
                <h3 className="text-lg font-medium text-white">Table of Contents</h3>
            </div>
            <div className={contentClass}>
                <ul className="pl-0 list-none">
                    {toc.map(item => (
                        <li
                            key={item.id}
                            style={{
                                marginLeft: `${(item.level - 1) * 1.5}rem`,
                                marginTop: item.level === 1 ? '0.75rem' : '0.5rem'
                            }}
                        >
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToHeading(e, item.id)}
                                className={`
                  text-sm hover:text-sky-400 transition-colors text-wrap flex-wrap flex
                  ${item.level === 1 ? 'text-white font-medium' : 'text-gray-400 font-light'}
                `}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default TableOfContents;