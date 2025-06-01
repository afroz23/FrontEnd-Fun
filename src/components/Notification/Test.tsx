import { Card, App, Button } from 'antd';
import './Style.scss';

const Test = () => {
	const { notification } = App.useApp();

	return (
		<div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
			<Card
				title='Default size card'
				extra={<a href='#'>More</a>}
				style={{ width: 300 }}
			>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>

			<Button
				onClick={() => {
					notification.open({
						type: 'info',
						message: 'alerts notificationSave',
						placement: 'bottom'
					});
				}}
			>
				open notification
			</Button>
		</div>
	);
};

export default Test;
