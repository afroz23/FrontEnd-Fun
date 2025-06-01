import {
	darkColorsModern,
	lightColorsModern,
	darkColorsElegant,
	lightColorsElegant,
	darkColorsFresh,
	lightColorsFresh
} from '@/theming/colors';
import { TTheme } from '@/utils/types';

const getTokens = (theme: TTheme, dark: boolean) => {
	switch (theme) {
		case 'modern':
			return dark ? darkColorsModern : lightColorsModern;
		case 'elegant':
			return dark ? darkColorsElegant : lightColorsElegant;
		case 'fresh':
			return dark ? darkColorsFresh : lightColorsFresh;
		default:
			return dark ? darkColorsModern : lightColorsModern;
	}
};

export { getTokens };
