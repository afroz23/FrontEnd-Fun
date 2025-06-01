import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { TField } from '@/utils/types';
import '@/tabs/auth/Login.scss';

const Login: React.FC = () => {
	// const { t } = useTranslation();
	// const dispatch = useDispatch<AppDispatch>();
	// const { notification, message } = SSApp.useApp();

	const onFinish = (values: TField) => {
		console.log(values);
		// try {
		// 	const { data } = await axiosInstance.post(LOGIN_ENDPOINT, values);
		// 	if (data.success) {
		// 		message.success(data.message);
		// 		dispatch(setUserAuthenticated(true));
		// 	} else {
		// 		notification.open({
		// 			message: data.message
		// 		});
		// 	}
		// } catch (error: unknown) {
		// 	console.error('An error occurred while submitting the login form', error);
		// 	notification.open({
		// 		message: t('login.errorText')
		// 	});
		// }
	};

	return (
		<Row>
			<Col span={24}>
				<Form
					layout='vertical'
					labelCol={{ span: 16 }}
					onFinish={onFinish}
					autoComplete='off'
					className='form-container'
				>
					<Form.Item
						label={'Email'}
						name='email'
						rules={[
							{
								type: 'email',
								message: 'Invalid email'
							},
							{
								required: true,
								message: 'Email is required'
							}
						]}
					>
						<Input placeholder={'Please enter email'} size='large' />
					</Form.Item>
					<Form.Item
						label={'Password'}
						name='password'
						rules={[{ required: true, message: 'Password is required' }]}
					>
						<Input.Password
							placeholder={'Please enter password'}
							size='large'
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type='primary'
							className='w-100 login-btn'
							htmlType='submit'
						>
							{'Log in'}
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export default Login;
