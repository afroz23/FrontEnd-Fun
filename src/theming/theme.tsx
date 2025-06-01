import type { ReactNode } from 'react';
import { theme } from 'antd';
import ConfigProvider from 'antd/es/config-provider';

import { TTheme } from '@/utils/types';
import { getTokens } from '@/theming/token';
import { getComponentConfig } from '@/theming/components';

type TThemeProvider = {
	children: ReactNode;
	themeType: TTheme;
	dark: boolean;
};

const ThemeProvider: React.FC<TThemeProvider> = ({
	children,
	themeType,
	dark
}) => {
	const token = getTokens(themeType, dark);
	const components = getComponentConfig(token);

	return (
		<ConfigProvider
			theme={{
				algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token,
				components
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default ThemeProvider;
