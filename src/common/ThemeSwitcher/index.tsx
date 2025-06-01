import React from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

type ThemeSwitcherProps = {
	dark: boolean;
	toggleTheme: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ dark, toggleTheme }) => {
	return (
		<>
			<AnimatePresence mode='wait'>
				{dark ? (
					<motion.div
						key='sun'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<SunOutlined onClick={toggleTheme} />
					</motion.div>
				) : (
					<motion.div
						key='moon'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<MoonOutlined onClick={toggleTheme} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ThemeSwitcher;
