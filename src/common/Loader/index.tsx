import React from 'react';
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

type TSpinLoader = {
	className?: string;
};
const SpinLoaderComp: React.FC<TSpinLoader> = ({ className }) => {
	return (
		<Space className={className}>
			<Spin indicator={<LoadingOutlined spin />} />
		</Space>
	);
};

export default SpinLoaderComp;
