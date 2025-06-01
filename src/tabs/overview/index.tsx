import React, { useState } from 'react';
import { Button } from 'antd';

const Overview: React.FC = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Button onClick={() => setCount(prev => prev + 1)}>
				Incremnet {count}
			</Button>
		</div>
	);
};

export default Overview;
