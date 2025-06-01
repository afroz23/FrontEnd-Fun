import { TTheme } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type MenuItemsType = {
// 	key: MenuType;
// };

export type GlobalState = {
	// currentSideNav: MenuItemsType;
	openMenu: boolean;
	render: boolean;
	darkTheme: boolean;
	themeType: TTheme;
};

const initialState: GlobalState = {
	// currentSideNav: { key: 'overview' },
	darkTheme: true,
	openMenu: true,
	render: false,
	themeType: 'fresh'
};

const global = createSlice({
	name: 'globalState',
	initialState,
	reducers: {
		// setCurrentSideNav: (
		// 	state: GlobalState,
		// 	action: PayloadAction<MenuItemsType>
		// ) => {
		// 	return { ...state, currentSideNav: action.payload };
		// },
		toggleSidebar: (state: GlobalState) => {
			return { ...state, openMenu: !state.openMenu };
		},
		toggleTheme: (state: GlobalState) => {
			return { ...state, darkTheme: !state.darkTheme };
		},
		rerender: (state: GlobalState, action: PayloadAction<boolean>) => {
			state.render = action.payload;
		},
		changeTheme: (state: GlobalState, action: PayloadAction<TTheme>) => {
			state.themeType = action.payload;
		}
	}
});

export const { toggleSidebar, rerender, toggleTheme, changeTheme } =
	global.actions;
export default global.reducer;
