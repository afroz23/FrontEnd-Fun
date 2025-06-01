type TLanguage = 'javascript' | 'typescript' | 'python' | 'java';

type TTheme = 'modern' | 'elegant' | 'fresh';

type TSvgProps = {
	colorprimary?: string;
	colorsecondary?: string;
	height?: string;
	width?: string;
};

type TField = Record<string, string>;

export type { TLanguage, TTheme, TSvgProps, TField };
