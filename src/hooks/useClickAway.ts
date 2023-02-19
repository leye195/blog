import { RefObject, useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = (ref: RefObject<HTMLElement | null>, onClickAway: (e: Event) => void) => {
	const savedCallback = useRef(onClickAway);

	useEffect(() => {
		savedCallback.current = onClickAway;
	}, [onClickAway]);

	useEffect(() => {
		const handler = (event: any) => {
			const { current: el } = ref;
			el && !el.contains(event.target) && savedCallback.current(event);
		};

		for (const eventName of defaultEvents) {
			document.addEventListener(eventName, handler);
		}

		return () => {
			for (const eventName of defaultEvents) {
				document.removeEventListener(eventName, handler);
			}
		};
	}, [ref]);
};

export default useClickAway;
