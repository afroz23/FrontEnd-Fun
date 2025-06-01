import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, type MenuProps } from 'antd';
import { useDispatch } from 'react-redux';
import { changeTheme } from '@/store/slices/globalSlice';
import { TTheme } from '@/utils/types';
import { Link } from 'react-router-dom';

const ThemeSelector: React.FC = () => {
	const dispatch = useDispatch();

	const handleMenuClick: MenuProps['onClick'] = e => {
		dispatch(changeTheme(e.key as TTheme));
	};

	const items: MenuProps['items'] = [
		{
			label: 'Modern',
			key: 'modern'
		},
		{
			label: 'Elegant',
			key: 'elegant'
		},
		{
			label: 'Fresh',
			key: 'fresh'
		}
	];

	return (
		<>
			<Link to='/signup'>
				<Button type='link'>Signup</Button>
			</Link>
			<Link to='/login'>
				<Button type='link'>Login</Button>
			</Link>
			
			<Dropdown
				menu={{
					items,
					onClick: handleMenuClick
				}}
			>
				<Space style={{ height: '2rem' }}>
					Choose theme
					<DownOutlined />
				</Space>
			</Dropdown>
		</>
	);
};

export default ThemeSelector;
