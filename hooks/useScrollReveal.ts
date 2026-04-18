import { useState, useEffect, useRef, RefObject } from "react";

export function useScrollReveal<T extends HTMLElement>(
	threshold = 0.1,
): [RefObject<T | null>, boolean] {
	const ref = useRef<T | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return [ref, visible];
}
