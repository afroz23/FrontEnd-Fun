// import CodeEditor from '@/components/CodeEditor';
import { Outlet } from 'react-router-dom';
import { App as AntdApp } from 'antd';
import { useSelector } from 'react-redux';
import ThemeProvider from '@/theming/theme';
import AppLayout from '@/components/AppLayout';
import { RootState } from '@/store/rootStore';
import '@/App.css';

const App: React.FC = () => {
	const { darkTheme, themeType } = useSelector(
		(store: RootState) => store.global
	);

	return (
		<ThemeProvider themeType={themeType} dark={darkTheme}>
			<AntdApp message={{ maxCount: 1 }} notification={{ placement: 'bottom' }}>
				<AppLayout>
					<Outlet />
				</AppLayout>
			</AntdApp>
		</ThemeProvider>
	);
};

export default App;
