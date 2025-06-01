import { ColorsType } from '@/theming/colors';
import { OverrideToken, MappingAlgorithm } from 'antd/es/theme/interface';

type ComponentsConfig = {
	[key in keyof OverrideToken]?: OverrideToken[key] & {
		algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
	};
};

const getComponentConfig = (colors: ColorsType): ComponentsConfig => ({
	Layout: {
		headerBg: colors.colorSecondary,
		siderBg: colors.colorSecondary,
		borderRadius: 0
	},
	Dropdown: {},
	Menu: {
		itemColor: colors.colorPrimary,
		itemSelectedColor: colors.bgWhite,
		itemHoverBg: colors.colorTertiary,
		itemSelectedBg: colors.colorTertiary,
		colorBgContainer: colors.colorSecondary,
		itemBorderRadius: 20,
		colorIconHover: colors.bgWhite,
		itemHoverColor: colors.colorPrimary,
		lineWidth: 0,
		collapsedIconSize: 40,
		motionDurationMid: '0s',
		motionDurationSlow: '0s'
	},
	Radio: {
		buttonBg: 'none',
		buttonCheckedBg: colors.colorSecondary,
		colorPrimary: colors.bgWhite,
		colorPrimaryBorder: colors.colorSecondary,
		colorBorder: colors.colorSecondary,
		colorPrimaryHover: 'none',
		buttonColor: colors.bgWhite,
		colorPrimaryActive: 'none',
		controlHeight: 42
	},
	Typography: {
		colorLink: colors.bgWhite,
		linkDecoration: 'underline',
		colorLinkHover: colors.colorPrimary,
		colorLinkActive: colors.colorPrimary,
		linkHoverDecoration: 'underline'
	},
	Select: {
		colorPrimaryHover: colors.colorTertiary,
		colorPrimary: colors.colorTertiary,
		colorTextQuaternary: colors.colorPrimary
	},
	Spin: {
		dotSize: 35
	},
	Alert: {
		borderRadius: 0,
		colorText: colors.colorPrimary,
		colorWarningBorder: colors.colorPrimary
	}
});

export { getComponentConfig };
