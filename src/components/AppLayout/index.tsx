import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, theme as antdTheme } from 'antd';
import ThemeSwitcher from '@/common/ThemeSwitcher';
import { RootState } from '@/store/rootStore';
import { toggleTheme } from '@/store/slices/globalSlice';
import ThemeSelector from '@/components/AppLayout/ThemeSelector';
import '@/components/AppLayout/index.scss';

const { Header, Footer, Content } = Layout;

type Props = {
	children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
	const { darkTheme } = useSelector((store: RootState) => store.global);
	const { useToken } = antdTheme;
	const { token: theme } = useToken();

	const dispatch = useDispatch();
	const changeTheme = () => {
		dispatch(toggleTheme());
	};

	useEffect(() => {
		document.body.style.backgroundColor = theme.colorBgBase;
	}, [theme.colorBgBase]);

	return (
		<Layout className='layout'>
			<Header className='header'>
				<ThemeSelector />
				<ThemeSwitcher toggleTheme={changeTheme} dark={darkTheme} />
			</Header>
			<Content className='content'>{children}</Content>
			<Footer className='footer'>Hello footer</Footer>
		</Layout>
	);
};

export default AppLayout;
