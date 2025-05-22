import { MutableRefObject, useEffect } from 'react';

const useScrollOnHighlight = (
    highlightedIndex: number,
    optionRefs: MutableRefObject<(HTMLLIElement | null)[]>,
) => {
    useEffect(() => {
        if (optionRefs.current[highlightedIndex]) {
            optionRefs.current[highlightedIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [highlightedIndex, optionRefs]);
};

export default useScrollOnHighlight;
